(function d3JsTutServiceDefinition() {
    'use strict';

    angular.module('doJSo')
        .factory('DjsD3JsTut', d3JsTutService);

    d3JsTutService.$inject = [];

    function d3JsTutService() {

        /* public */

        /*      API */

        var api = {
            appendSection: appendSectionTitle,
            convertStringToElementId: convertStringToElementId,
            displayData: displayData
        };

        /*      API functions */

        function appendSectionTitle(element, title, lessonLink) {
            var tutPrefix = 'd3js-tut-section';
            var elementId = tutPrefix + '-' + api.convertStringToElementId(title);

            /* section */

            var section = element.append('div')
                .attr('id', elementId)
                .attr('class', tutPrefix)
            ;

            /* --- section header */

            var sectionHeader = section.append('div')
                .attr('id', elementId + '-section-header')
                .attr('class', tutPrefix + '-header')
            ;

            /* --- --- header title */

            // --- --- --- bookmark title
            var a = sectionHeader.append('a')
                .attr('href', '#' + elementId)
                .attr('class', tutPrefix + '-bookmark')
            ;

            // --- --- --- title
            a.append("h3").text(title); // title

            /* --- --- Link to lesson */

            sectionHeader.append('a')
                .attr('href', lessonLink)
                .attr('class', tutPrefix + '-lesson-link')
                .attr('target', '_blank')
                .text('--->')
            ;

            log(title);
            return section;
        }

        function convertStringToElementId(string) {
            return string.toLowerCase().split(' ').join('-');
        }

        function displayData(rootElement, data, elementType) {
            if (!rootElement) {
                rootElement = d3.select("body");
            }

            return rootElement.selectAll()
                .data(data) // appoint data --> decide num of elements to create
                .enter() // aquire placeholders --> can now append...
                .append(elementType) // realize elements on placeholders
            ;
        }


        function log(title) {
            console.log('------------------------------------' + title + '------------------------------------');
        }

        return api;
    }
})();

