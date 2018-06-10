/* exported UnitMocker */
/**
 * Created by edavhaj on 2017-07-21.
 */
var UnitMocker = (function bookerUIMocksDefinition() {
    'use strict';

    /* private */

    var resources = {};

    /* API */

    var unitMocker = {
        registerResourceMockApi: registerResourceMockApi,
        getResourceMock: getResourceMock,
        mockResource: mockResource
    };
    Object.seal(unitMocker);

    /* API functions */

    /**
     * Put the mock {@param api} to the {@link resources} object under {@param resourceName} propertyName.
     * Subsequently, this API can be used to mock the related resource in AngularJS unit tests.
     *
     * Note that this function is typically invoked from the mock lib of your project which must be completely independent
     * from the AngularJS framework
     *
     * @param resourceName the name of the AngularJS $resource to mock
     * @param api the mock business logic. An object with properties, each of which is a function that corresponds to one
     * of the METHODS of the $resource.
     */
    function registerResourceMockApi(resourceName, api) {
        resources[resourceName] = {api: Object.seal(api)};
    }

    /**
     * Mock an AngularJS $resource that had been previously registered.
     *
     * Use this function in the first "beforeEach" section of your spec as following:
     *
     * beforeEach(module('myApp', function ($provide) {
     *    UnitMocker.mockResource($provide, 'myResource');
     * });
     *
     * @param $provide the $provide service of AngularJS
     * @param resourceName the registered name of the resource to mock
     */
    function mockResource($provide, resourceName) {
        var resource = resources[resourceName];
        if (resource === undefined) {
            throw Error('[UnitMocker] > mockResource() > no mock was found for resource "' + resourceName + '"!');
        }

        $provide.factory(resourceName, function makeServiceMock() {
            return ResourceMocker.mockApi(resource.api);
        });
    }

    /**
     * Obtain the original resource mock api.
     * @param resourceName
     * @returns {*} the original resource mock api
     */
    function getResourceMock(resourceName) {
        return resources[resourceName].api;
    }

    /* implementation details */

    /* modules */

    /**
     * MOCKER private module
     *
     */
    var ResourceMocker = (function resourceMockerModule() { // jshint ignore:line

        /* API */

        var resourceMocker = {
            mockApi: mockApi
        };

        /* API functions */

        /**
         * Wrap each of the API functions into an adapter that imitates an async behaviour.
         * Each function in the parameter {@param api} is wrapped into a function that invokes the original function, and
         * returns a fake promise object with callback parameters.
         * The wrapper functions are extended with 2 property functions each: {@link pleaseFail} and {@link pleaseSucceed}, which are
         * used to decide the outcome and/or result of the service calls.
         *
         * @param api the API object of the resource (service mock)
         * @returns mock api object with the wrapped functions
         */
        function mockApi(api) {
            var mock = {};

            Object.getOwnPropertyNames(api).forEach(function mockApiFunction(functionName) {
                mock[functionName] = makeUnitMock(api[functionName]);
            });

            return mock;
        }

        /**
         * Wrap thea {@param functionToMock} into a fake function that imitates callback behavior.
         * Extended the {@param functionToMock} function with the {@link pleaseFail} and {@link pleaseSucceed}
         * property functions, which are used to decide the outcome of the callback.
         *
         * @param functionToMock the function to decorate with fake callback behavior
         * @returns {mockedFunction} function that invokes the original function wrapped into a fake callback behavior
         */
        function makeUnitMock(functionToMock) {
            var monitor = {};

            /**
             * Wrapper to imitate the callback behavior.
             * 1. Depending on the state of the monitor object, invoke the {@link functionToMock} function
             * (that means, it is not invoked when the {@link monitor.pleaseFail} property is set i.e. the
             * result is pre-defined)
             * 2. Decide how to invoke one of the callbacks, based on how they are provided:
             * - if the callback provided via parameter, then it is invoked immediately after evaluating
             * the {@link functionToMock}
             * - if the callbacks are not in the parameters, then a promise-imitating object is returned
             * and that will be used to define the callback fuctions.
             * 3. Decide which callback to invoke:
             * - if the monitor is set (i.e. the outcome and the result are predetermined), then invoke
             * the relevant callback
             * - if the monitor is reset but a successCondition function is registered, then let that
             * function decide and invoke the proper callback
             * - call the {@param onSuccess} function otherwise
             * 4. Return the result of the {@link functionToMock} in the form of a fake promise object
             *
             * @param params delegates the parameters of the original function
             * @param onSuccess the success function parameter of the promise object
             * @param onFailure the failure function parameter of the promise object
             * @returns {*}
             *            the fake promise object when invoked with one parameter ({@param params})
             *            the result when invoked with two or more parameters, at least the second one being a function
             */
            function mockedFunction(params, onSuccess, onFailure) {
                /* perform the requested action */
                var result;
                if (!monitor.failureReason) {
                    result = functionToMock(params);
                }

                /* create the callback */
                if (typeof onSuccess === 'function') {
                    if (typeof mockedFunction.successCondition == 'function') {
                        callBackOnCondition(result, mockedFunction.successCondition, onSuccess, onFailure);
                    } else {
                        callBackOnMonitor(result, onSuccess, onFailure);
                    }
                    return result;
                } else {
                    return {
                        then: function then(onSuccess, onFailure) {
                            if (typeof mockedFunction.successCondition == 'function' && !monitor.failureReason) {
                                callBackOnCondition(result, mockedFunction.successCondition, onSuccess, onFailure);
                            } else {
                                callBackOnMonitor(result, onSuccess, onFailure);
                            }
                            return result;
                        }
                    };
                }
            }

            /**
             * Register a function that can determine if the {@link result} of the {@link functionToMock}
             * is a success or a failure.
             * When the {@link functionToMock} finished and returned its {@link result}, the function
             * registered here can be invoked with the result as parameter, and that will return true if
             * the result is a success and false if the result is a failure. Then the relevant callback
             * can be invoked based on the decision of the function registered here.
             *
             * @param successCondition - a function that takes the result as parameter then returns true
             * if the result is a success and false if the result is a failure
             */
            mockedFunction.defineSuccessCondition = function defineSuccessCondition(successCondition) {
                this.successCondition = successCondition;
            };
            mockedFunction.pleaseFail = pleaseFail;
            mockedFunction.pleaseSucceed = pleaseSucceed;

            return mockedFunction;

            /**
             * Set the {@link monitor.failureReason} property of the {@link monitor} object (and delete the
             * {@link monitor.successResult} property).
             * When the {@link monitor.failureReason} property is set
             * - then the {@link mockedFunction} function will not invoke the {@link functionToMock} (the request is NOT
             *   satisfied)
             * - and the callback method will invoke the {@param onFailure} instead of {@link onSuccess}, and pass the
             * {@link monitor.failureReason} object to it.
             *
             * @param withReason the parameter which the {@link onFailure} function is invoked with. When undefined, a
             * handcrafted fake reason object is passed to the {@link onFailure} function
             */
            function pleaseFail(withReason) {
                monitor.failureReason = withReason ? withReason : {status: 666, statusText: 'TESTING case of failure'};
                delete monitor.successResult;
            }

            /**
             * Set the {@link monitor.successResult} property of the {@link monitor} object. (and delete the
             * {@link monitor.failureReason} property).
             * When the {@link monitor.successResult} property is set
             * - the callback method will invoke the {@param onSuccess} function, and pass the {@link monitor.successResult}
             *   to it (the request IS satisfied)
             * When called with "falsy" parameter, only the {@link monitor.failureReason} property is disabled, so that the
             * request will be satisfied and the  callback falls back to the original behavior i.e. invoke {@link onSuccess}
             * with the {@link result} of the {@link functionToMock}
             *
             * @param withResult the result to call the {@link onSuccess} function with.
             */
            function pleaseSucceed(withResult) {
                monitor.successResult = withResult; // if undefined, the default success behavior will be performed
                delete monitor.failureReason;
            }

            /**
             * Invoke the callback function corresponding to the state of the monitor.
             * If the {@link pleaseFail} invoked prior to the invocation of this function then this function will invoke the
             * {@param onFailure} callback with the {@link monitor.failureReason} as parameter.
             * Otherwise it will call the {@param onSuccess} callback with the {@link monitor.successResult} if set, otherwise
             * with the {@list result} of the {@link functionToMock}.
             *
             * @param result the return value of the {@link functionToMock}
             * @param onSuccess the success callback
             * @param onFailure the failure callback
             */
            function callBackOnMonitor(result, onSuccess, onFailure) {
                if (monitor.failureReason) {
                    onFailure(monitor.failureReason);
                } else if (monitor.successResult) {
                    onSuccess(monitor.successResult || result);
                } else {
                    onSuccess(result);
                }
            }

            /**
             * Decide whether the mockedFunction ran successfully or failed, based on the result and
             * invoke the proper callback function corresponding this decision.
             * After the mockedFunction evaluated and returned its result, this function is invoked
             * with the result as the {@param result} and the function {@param condition} which determines
             * whether the result is a success or a failure. The {@param condition} is defined and
             * registered by the user before invoking the mock function (using function
             * {@link defineSuccessCondition} hoked on each mocked function).
             * When decided, the {@param onSuccess} or the {@param onFailure} callback is invoked
             *
             * @param result - the result returned by the mock function
             * @param condition - a function defined by the user before using the mock
             * @param onSuccess - the success callback
             * @param onFailure - the failure callback
             */
            function callBackOnCondition(result, condition, onSuccess, onFailure) {
                if (condition(result)) {
                    onSuccess(result);
                } else {
                    onFailure(result);
                }
            }
        }

        return resourceMocker;
    })();

   return unitMocker;
}());
