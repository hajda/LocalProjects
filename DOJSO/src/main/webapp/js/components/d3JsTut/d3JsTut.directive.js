(function d3JsTutDirectiveDefinition() {
    'use strict';
    angular.module('doJSo')
        .directive('djsD3JsTut', d3JsTutDirective);

    d3JsTutDirective.$inject = ['DjsD3JsTut', '$interval'];

    function d3JsTutDirective(D3JsTut, $interval) {
        return {
            restrict: 'AE',
            templateUrl: 'js/components/d3JsTut/d3JsTut.template.html',
            controller: 'DjsD3JsTutController',
            controllerAs: 'D3JsTutCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {
                var d3JsTutElement = d3.select('#d3js-tut');

                // TODO wrap each task into IIFE

                /*******************************************************************************************************
                 * Adding an SVG Element
                 * https://www.dashingd3js.com/adding-an-svg-element
                 ******************************************************************************************************/
                var addingAnSvgElementSection = D3JsTut.appendSection(d3JsTutElement, 'Adding an SVG Element', 'https://www.dashingd3js.com/adding-an-svg-element');

                addingAnSvgElementSection
                    .append('svg').attr('width', 50).attr('height', 50)
                    .append('circle').attr('cx', 25).attr('cy', 25).attr('r', 25).style('fill', 'purple')
                ;

                var bindingDataToDomElementsTitle = 'Binding Data to DOM Elements';
                /*******************************************************************************************************
                 * Binding Data to DOM Elements
                 * https://www.dashingd3js.com/binding-data-to-dom-elements
                 ******************************************************************************************************/
                var bindingDataToDomElementsSection = D3JsTut.appendSection(d3JsTutElement, bindingDataToDomElementsTitle, 'https://www.dashingd3js.com/binding-data-to-dom-elements');

                var theData = ['First data', 'Second data', 'Third data'];

                var p = bindingDataToDomElementsSection.selectAll('p.data-binding-eg-1')
                    .data(theData)
                    .enter()

                    .append('p')

                    .attr('class', 'd3js-tut-data-binding-eg d3js-tut-data-binding-eg-1')
                    .text('hello ')
                ;

                console.log('The DOM element on which the initial SELECT_ALL was carried out:', d3.select('#d3js-tut-section-' + D3JsTut.convertStringToElementId(bindingDataToDomElementsTitle)).data([1]));

                /* breakdown of the above with >>literally<< empty selection */
                var emptySelection = bindingDataToDomElementsSection.selectAll(); /* make an empty selection */ console.log('%cempty selection =', 'color: #0088FF', 'rootElement.selectall(anything_or_noyhing)', emptySelection);
                var virtualSelections = emptySelection.data(theData); /* bind the array to the empty selection */ console.log('%cvirtual selections =', 'color: #0088FF', 'selection.data(data)', virtualSelections);
                var placeholdersForNonExistingParagraphs = virtualSelections.enter(); /* create a placeholder specified in the argument of invocation of "selectAll()" */ console.log('%cplaceholders =', 'color: #0088FF', 'virtualSelection.enter() // enter the data', placeholdersForNonExistingParagraphs);
                var realizedElements = placeholdersForNonExistingParagraphs.append('any'); /* append will take effect on each element of the placeholder array it is called on and realize an element from it */ console.log('%crealized elements =', 'color: #0088FF', 'placeholders.append("anything") // enter the data', realizedElements);
                realizedElements.attr('class', 'd3js-tut-non-existing').text('Non-existing'); /* append(...) realized all placeholders to actual DOM elements, they can now be interacted with */

                console.log('placeholders:', placeholdersForNonExistingParagraphs);
                console.log('realized elements:', d3.selectAll('any.non-existing'));

                /**
                 * So: selectAll('div').data('array')
                 *                  \__________/
                 *                        |
                 *                     .enter()
                 *                        |
                 *                        V
                 *  <div> placeholders for all elements of the "array"
                 *
                 *  When calling the append(...) on a placeholder array,
                 *  it realizes all the placeholders
                 *      to elements such that are specified in tits parameter
                 *
                 */


                /*******************************************************************************************************
                 * Using Data Bound to DOM Elements
                 * https://www.dashingd3js.com/using-data-bound-to-dom-elements
                 ******************************************************************************************************/
                var usingDataBoundToDomElementsSection = D3JsTut.appendSection(d3JsTutElement, 'Using Data Bound to DOM Elements', 'https://www.dashingd3js.com/using-data-bound-to-dom-elements');

                var classValue = 'd3js-tut-data-binding-eg d3js-tut-data-binding-eg-2';

                var p = usingDataBoundToDomElementsSection.selectAll()
                    .data(theData)
                    .enter()

                    .append('span')

                    .attr('class', classValue)
                    .text(function retrieveData(data, index, selection) {
                        // console.log(selection);
                        // console.log();
                        // selection[index].append('span').attr('class', 'd3js-data-element').text(data).style('color: red;'); // doesn't work
                        return 'data[' + index + ']: ' + data + ' | ' + p[selection];
                    })
                ;



                /*******************************************************************************************************
                 * Creating SVG Elements Based on Data
                 * https://www.dashingd3js.com/creating-svg-elements-based-on-data
                 ******************************************************************************************************/
                (function creatingSvgElementsBasedOnData() {
                    var creatingSvgElementsBasedOnDataSection = D3JsTut.appendSection(d3JsTutElement, 'Creating SVG Elements Based on Data', 'https://www.dashingd3js.com/creating-svg-elements-based-on-data');

                    creatingSvgElementsBasedOnDataSection.append('h6').text('Basic SVG example');
                    var color = 'purple';

                    var svgSelection = creatingSvgElementsBasedOnDataSection.append('svg')
                        .attr('width', 50)
                        .attr('height', 50)

                        .append('circle')
                        .attr('cx', 25)
                        .attr('cy', 25)
                        .attr('r', 25)
                        .style('fill', color)
                    ;

                    function getColor() {
                        if (getColor.color == 'purple') {
                            getColor.color = 'black';
                            return getColor.color;
                        }
                        if (getColor.color == 'black') {
                            getColor.color = 'purple';
                            return getColor.color;
                        }
                    }
                    getColor.color = color;

                    $interval(function switchColor() {
                        svgSelection.style('fill', getColor);
                    }, 1000);

                    creatingSvgElementsBasedOnDataSection.append('h6').text('Main example:');

                    var circleRadii = [{r: 40, color: 'green'}, {r: 20, color: 'purple'}, {
                        r: 10,
                        color: 'red'
                    }];

                    var svgContainer = creatingSvgElementsBasedOnDataSection.append('svg')
                        .attr('width', 200)
                        .attr('height', 100)
                    ;

                    var circles = D3JsTut.displayData(svgContainer, circleRadii, 'circle');

                    var circleAttributes = circles
                        .attr('cx', 50)
                        .attr('cy', 50)
                        .attr('r', function retrieveData(data) {
                            return data.r;
                        })
                        .style('fill', function retrieveData(data) {
                            return data.color;
                        })
                    ;
                })();

                /*******************************************************************************************************
                 * Using the SVG Coordinate Space
                 * https://www.dashingd3js.com/using-the-svg-coordinate-space
                 ******************************************************************************************************/
                (function usingTheSvgCoordinateSpace() {
                    var usingTheSvgCoordinateSpaceSection = D3JsTut.appendSection(d3JsTutElement, 'Using the SVG Coordinate Space', 'https://www.dashingd3js.com/using-the-svg-coordinate-space');

                    /* Chart */

                    var chartData = [{height: 30, color: 'yellow'}, {height: 70, color: '#FF00CC'}, {height: 110, color: '#AA55FF'}];
                    var chartHeight = 200;
                    var r = 25;

                    var svgChart = usingTheSvgCoordinateSpaceSection.append('svg')
                        .attr('width', 400)
                        .attr('height', chartHeight)
                        .style('background', '#EFEFFF')
                        .style("border", "1px solid #CCC")
                    ;

                    /* Basic e.g.: put a r25 circle in the bottom left */

                    var gBase = svgChart.append('g');
                    gBase.append('circle')
                        .attr('cx', x(r))
                        .attr('cy', y(r))
                        .attr('r', r)
                        .style('fill', 'purple')
                    ;
                    gBase.append('text').text('Basic e.g.')
                        .attr('x', x(0))
                        .attr('y', y(21))
                        .attr('font-family', '\'Cairo\', sans-serif')
                        .style('fill', '#FF00CC')
                    ;

                    /* Main e.g. */

                    var g = svgChart.append('g');
                    g.selectAll()
                        .data(chartData).enter()
                        .append('circle')
                        .attr('cx', function acquireData(data, index, selection) {
                            console.log(selection[index]);
                            return 55 + (index + 1 )*55;
                        })
                        .attr('cy', function acquireData(data, index, selection) {
                           return y(data.height);
                        })
                        .attr('r', r)
                        .style('fill', function acquireData(data, index, selection) {
                            return data.color;
                        })
                    ;

                    /* impl details */

                    function x(x) {
                        return x;
                    }

                    function y(y) {
                        return chartHeight - y;
                    }
                })(); // end Using the SVG Coordinate Space

                /*******************************************************************************************************
                 * Data Structures D3.js Accepts
                 * https://www.dashingd3js.com/data-structures-d3js-accepts
                 ******************************************************************************************************/
                (function dataStructuresD3JsAccepts() {
                    var dataStructuresD3JsAcceptsSection = D3JsTut.appendSection(d3JsTutElement, 'Data Structures D3.js Accepts', 'https://www.dashingd3js.com/data-structures-d3js-accepts');

                    var rage = 'No practice, just blsht about JS arrays and JSON, no word of JS objects...';
                    dataStructuresD3JsAcceptsSection.append('span').text(rage);
                    console.log(rage);

                })(); // end Data Structures D3.js Accepts

                /*******************************************************************************************************
                 * Using JSON to Simplify Code
                 * https://www.dashingd3js.com/using-json-to-simplify-code
                 ******************************************************************************************************/
                (function usingJsonToSimplifyCode() {
                    var usingJsonToSimplifyCodeSection = D3JsTut.appendSection(d3JsTutElement, 'Using JSON to Simplify Code', 'https://www.dashingd3js.com/using-json-to-simplify-code');

                    var rage = 'All right, all right... They mean JS Objects under "JSON" and "JSON objects. Other than that the task is code cleanup which is already done in the previous examples."';
                    usingJsonToSimplifyCodeSection.append('span').text(rage);
                    console.log(rage);

                })(); // end Using JSON to Simplify Code

                /*******************************************************************************************************
                 * SVG Basic Shapes and D3.js
                 * https://www.dashingd3js.com/svg-basic-shapes-and-d3js
                 ******************************************************************************************************/
                (function svgBasicShapesAndD3Js() {
                    var svgBasicShapesAndD3JsSection = D3JsTut.appendSection(d3JsTutElement, 'SVG Basic Shapes and D3.js', 'https://www.dashingd3js.com/svg-basic-shapes-and-d3js');

                    /* Chart */

                    var data = [{x: 10, y: 20, w: 10, h: 10,  color: '#FFCC00'}, {x: 30, y: 10, w: 10, h: 10, color: '#FF00CC'}, {x: 20, y: 30, w: 10, h: 10, color: '#AA55FF'}];
                    var canvasHeight = 200;
                    var r = 25;

                    var canvas = svgBasicShapesAndD3JsSection.append('svg')
                        .attr('width', 400)
                        .attr('height', canvasHeight)
                        .style('background', '#EFEFFF')
                        .style("border", "1px solid #CCC")
                    ;

                    var placeholders = canvas.selectAll().data(data).enter();
                    placeholders.append('rect')
                        .attr('x', function acquireData(data, index, selection) {
                            return data.x;
                        })
                        .attr('y', function acquireData(data, index, selection) {
                            return y(data.y);
                        })
                        .attr('width', function acquireData(data, index, selection) {
                            return data.w;
                        })
                        .attr('height', function acquireData(data, index, selection) {
                            return data.h;
                        })
                        .style('fill', function acquireData(data, index, selection) {
                            return data.color;
                        })
                    ;

                    placeholders.append('line')
                        .attr('x1', function acquireData(data, index, selection) {
                            return 100 + data.x;
                        })
                        .attr('y1', function acquireData(data, index, selection) {
                            return y(data.y);
                        })
                        .attr('x2', function acquireData(data, index, selection) {
                            return 100 + data.w;
                        })
                        .attr('y2', function acquireData(data, index, selection) {
                            return y(data.h);
                        })
                        .attr('stroke', function acquireData(data, index, selection) {
                            return data.color;
                        })
                        .attr('stroke-width', 5)
                    ;

                    svgBasicShapesAndD3JsSection.append('p').text('D3.js has generators for making lines polyLines and polygons with pretty code:');
                    svgBasicShapesAndD3JsSection.append('p').text(' - d3.lines() - to create lines');
                    svgBasicShapesAndD3JsSection.append('p').text(' - d3.paths() - to create polyLines and polygons');

                    function y(y) {
                        return canvasHeight - y;
                    }

                })(); // end SVG Basic Shapes and D3.js

                /*******************************************************************************************************
                 * SVG Paths and D3.js
                 * https://www.dashingd3js.com/svg-paths-and-d3js
                 ******************************************************************************************************/
                (function svgPathsAndD3Js() {
                    var svgPathsAndD3JsSection = D3JsTut.appendSection(d3JsTutElement, 'SVG Paths and D3.js', 'https://www.dashingd3js.com/svg-paths-and-d3js');

                    //The data for our line
                    var lineData = [
                        { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
                        { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                        { "x": 80,  "y": 5},  { "x": 100, "y": 60}
                    ];

                    //This is the accessor function we talked about above
                    // var linearFunction = d3.line() // V4
                    var lineFunctionDescriptors = [
                        {name: 'linear', color: 'blue'},
                        {name: 'step-before', color: 'yellow'},
                        {name: 'step-after', color: 'purple'},
                        {name: 'basis', color: 'pink'},
                        {name: 'basis-open', color: 'white'},
                        {name: 'basis-closed', color: 'red'},
                        {name: 'bundle', color: 'black'},
                        {name: 'cardinal', color: 'orange'},
                        {name: 'cardinal-open', color: 'magenta'},
                        {name: 'cardinal-closed', color: 'green'},
                        {name: 'monotone', color: 'grey'}
                    ];

                    function getCurveFunction(interpolation) {
                        return d3.svg.line() // V3
                            .x(function x(d) {
                                return d.x;
                            })
                            .y(function y(d) {
                                return d.y;
                            })
                            .interpolate(interpolation) // V3
                            // .curve(d3.linear) // V4
                        ;
                    }

                    lineFunctionDescriptors.forEach(function transform(lineFunctionDescriptor) {
                        //The SVG Container
                        var svgContainer = svgPathsAndD3JsSection.append("svg")
                            .attr("id", 'd3js-canvas-for-' + lineFunctionDescriptor.name)
                            .attr("width", 200)
                            .attr("height", 200)
                            .style('background', '#EFEFFF')
                            .style("border", "1px solid #CCC")
                        ;

                        //The line SVG Path we draw
                        var lineGraph = svgContainer.append("path")
                            .attr("id", 'd3js-' + lineFunctionDescriptor.name)
                            .attr("d", getCurveFunction(lineFunctionDescriptor.name)(lineData))
                            .attr("stroke", lineFunctionDescriptor.color)
                            .attr("stroke-width", 2)
                            .attr("fill", "none")
                        ;
                    });
                })(); // end SVG Paths and D3.js

                /*******************************************************************************************************
                 * Dynamic SVG Coordinate Space
                 * https://www.dashingd3js.com/dynamic-svg-coordinate-space
                 ******************************************************************************************************/
                (function dynamicSvgCoordinateSpace() {
                    var dynamicSvgCoordinateSpaceSection = D3JsTut.appendSection(d3JsTutElement, 'Dynamic SVG Coordinate Space', 'https://www.dashingd3js.com/dynamic-svg-coordinate-space');
                    dynamicSvgCoordinateSpaceSection.append('span').text('You\'re not shitting me?!?');
                })(); // end Dynamic SVG Coordinate Space

                /*******************************************************************************************************
                 * D3.js Scales
                 * https://www.dashingd3js.com/d3js-scales
                 ******************************************************************************************************/
                (function d3JsScales() {
                    var d3JsScalesSection = D3JsTut.appendSection(d3JsTutElement, 'D3.js Scales', 'https://www.dashingd3js.com/d3js-scales');
                    d3JsScalesSection.append('span').text('No practice');
                })(); // end D3.js Scales

                /*******************************************************************************************************
                 * <g>
                 * SVG Group Element and D3.js
                 * https://www.dashingd3js.com/d3js-scales
                 ******************************************************************************************************/
                (function svgGroupElementandD3Js() {
                    var svgGroupElementandD3JsSection = D3JsTut.appendSection(d3JsTutElement, 'SVG Group Element and D3.js', 'https://www.dashingd3js.com/d3js-scales');
                    svgGroupElementandD3JsSection.append('span').text('No practice');
                })(); // end SVG Group Element and D3.js
            } // end function link() * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        };
    }
})();

