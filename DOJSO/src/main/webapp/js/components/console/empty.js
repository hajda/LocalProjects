function Emptyness() {
    var emptyMap = {
        undefined: undefined,
        // null: null;
        string: '',
        boolean: false
    };

    Object.defineProperty(emptyMap, 'number', {
        get: function getArray() {
            return Number.isNaN(this.value) ? NaN : 0;
        }
    });
    Object.defineProperty(emptyMap, 'Array', {
        get: function getArray() {
            return [];
        }
    });
    Object.defineProperty(emptyMap, 'Function', {
        get: function getFunction() {
            return function () {};
        }
    });
    Object.defineProperty(emptyMap, 'Object', {
        get: function getObject() {
            return {};
        }
    });
    Object.defineProperty(emptyMap, 'object', {
        get: function getObject() {
            if (this.value === null) {
                return null;
            } else if (Array.isArray(this.value)) {
                return this.Array;
            } else if (isFunction(this.value)) {
                return this.Function;
            } else {
                return this.Object;
            }
        }
    });

    this.isEmpty = definitionOfEmpty;
    this.getEmpty = getEmpty;

    /* API functions */

    /**
     * This function is a custom definition of empty JS value.
     * @returns {boolean} the truth value of the emptiness of the value:
     * true if
     * - the value is 0 number, empty string '', false boolean value, an empty array [], an empty object {},
     * or a function that returns false without parameters
     * - false otherwise
     */
    function definitionOfEmpty(value) {
        if (value === null || value === undefined || Number.isNaN(value)) {
            return true;
        }

        var typeOfWhat = typeof value;
        switch (typeOfWhat) {
            case 'number':
                return value === 0;
            case 'string':
                return value === '';
            case 'boolean':
                return value === false;
        }

        if (Array.isArray(value)) {
            return value.length === 0;
        } else if (isFunction(value)) {
            return definitionOfEmpty(value());
        }

        if (typeOfWhat === 'object') {
            return Object.getOwnPropertyNames(value).length === 0;
        }
    }

    function getEmpty(value) {
        emptyMap.value = value;
        var type = typeof value;
        return emptyMap[type];
    }

    /* implementation */

    function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }
}

var emptyness = new Emptyness();

console.log(
    emptyness.getEmpty(null),
    emptyness.getEmpty(undefined),

    emptyness.getEmpty(NaN),
    emptyness.getEmpty(15),

    'in case of function: ' + typeof emptyness.getEmpty(function () {
        return 'ahoy';
    }),

    emptyness.getEmpty([]),
    emptyness.getEmpty([1, 2, 3]),

    emptyness.getEmpty({}),

    emptyness.getEmpty('asdfsdfsdfd'),

    emptyness.getEmpty(true)
);