/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2016 France Télévisions
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and 
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of 
 * the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
 * SOFTWARE.
 */

(function(window) {

    // Inits the lazyloader with an offset of 100px. It's a good compromise between perf and UX.
    var lzld = window.lazyload({
        offset: 100
    });

    window.angular.module('ftv.components.lazyload', [])

        // Use this directive to lazyload an image.
        // Just use the "lzld-src" attribute instead of "src" or "ng-src"
        .directive('lzldSrc', ['$rootScope', function ($rootScope) {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {

                    // When there is no image url, don't lazyload
                    if (attr.lzldSrc === '') {
                        return;
                    }

                    element.attr('data-src', attr.lzldSrc);

                    // No need to use an angular $timeout, there's no need for a digest cycle in the callback
                    window.setTimeout(function() {
                        lzld(element[0]);
                    }, 0);

                    // If you changed the layout on the page and you want to call again the lazyloading library on all images,
                    // you can call the following event on the $rootscope:
                    //      $rootScope.$emit('updateLazyload');
                    // You're welcome.
                    var updateLazyloadListenerOff = $rootScope.$on('ftv.updateLazyload', function() {
                        window.setTimeout(function() {
                            lzld(element[0]);
                        }, 0);
                    });

                    scope.$on('$destroy',function() {
                        updateLazyloadListenerOff();
                    });
                }
            };
        }])

        // Use this directive to add an SVG as a placeholder while the real image is not loaded.
        // The "lzld-svg-placeholder" should be the path of an SVG template from the svg module
        // Example : lzld-svg-placeholder="svg/VignettePlaceHolder.svg.html"
        // The template file needs to exist in templatescache templates
        .directive('lzldSvgPlaceholder', ['$templateCache', function ($templateCache) {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    var link = attr.lzldSvgPlaceholder;
                    var escaptedSvg = encodeURIComponent($templateCache.get(link));

                    var placeholder;

                    if (escaptedSvg !== 'undefined') {
                        placeholder = 'data:image/svg+xml;charset=utf-8,' + escaptedSvg;
                    } else {
                        placeholder = link;
                    }
                    element.attr('src', placeholder);

                    // If the image doesn't load correctly (404 error), put the placeholder back in place
                    element.on('error', function() {
                        element.attr('src', placeholder);
                    });
                }
            };
        }]);
})(window);