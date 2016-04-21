describe('Modules::Lazyload::Directive', function () {
    var element, $scope, ngCompile;

    beforeEach(module('ftv.components.lazyload'));
    beforeEach(module('demo.templates'));

    beforeEach(inject(function ($compile, $rootScope) {
        $scope = $rootScope;
        ngCompile = $compile;
    }));

    function injectImage(imageUrl, templateUrl) {
        element = ngCompile('<img lzld-src="' + imageUrl + '" lzld-svg-placeholder="' + templateUrl + '" />')($scope);
        element.css('width', 100);

        $('body').css('position', 'relative').empty().append(element);

        $scope.$digest();
    }

    describe('rendering', function () {

        it('has an SVG placeholder and a data-src attribute', function () {

            var imageUrl = 'http://localhost:9876/static/images/pub-block-small.jpg';
            var templateUrl = 'vignettePlaceHolder.svg.html';
            injectImage(imageUrl, templateUrl);

            // Starts like an inline SVG
            expect(element[0].src.indexOf('data:image/svg+xml;charset=utf-8,%3Csvg%20')).toEqual(0);

            // Has set a "data-src" attribute with the right url
            expect(element.attr('data-src')).toEqual(imageUrl);
        });

        it('loads the image immediately if it is already above the fold', function(done) {
            inject(function ($rootScope) {

                var imageUrl = 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20300%20240%22%3E%0A%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%22300%22%20height%3D%22240%22%20fill%3D%22transparent%22%3E%3C%2Frect%3E%0A%20%20%20%20%3Cg%20transform%3D%22translate(50%2C%2070)%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23242%22%20fill-opacity%3D%220.25%22%20x%3D%22100%22%20y%3D%22100%22%20d%3D%22M29.4%2020V15H25V42h4.5V27c0-8.5%206.2-8.5%208.7-8.5h2v-4.2l-2.5-.2c-2.3%200-6.8%200-8.3%206M64%2036.4V23c0-6.6-2.7-9-10.2-9-11.5%200-11.5%205.5-11.5%209.2h4.3c0-4%20.8-5.5%206.6-5.5%204.5%200%206.3.7%206.3%204.3%200%20.8%200%203-1.6%203.3-14.4%202-16.8%204-16.8%209.3%200%205.4%202.3%208.2%209%208.2%206.4%200%208-2%209.6-4%20.6%202.5%201.5%203.3%205%203.3h1.8v-3.3c-1.6%200-2.5%200-2.5-2.4m-4.4-5c0%205.4-3%207.8-8.4%207.8-3%200-5.4-.8-5.4-4%200-3%20.2-4.6%207.7-5.6%201.7-.2%203.6-.5%206-1.3v3.3zm24-17.2c-6%200-7.7%203-8.6%205v-4.2h-4.5V42H75V26.3c0-6.7%203.7-8.5%208-8.5%205%200%205.4%203%205.4%207V42H93V23.5c0-4-.4-9.4-9.3-9.4m26.6%2025c-6.6%200-8.5-3.5-8.5-10.3%200-7.7%202.4-11%208.6-11%205.6%200%206.5%203%207%205.6h4.4c-.2-3.7-2-9.2-11.3-9.2-8.5%200-13.2%204.3-13.2%2014.5%200%2012%206.7%2014.3%2012.8%2014.3%2010.4%200%2012-6.6%2012-10.2h-4.4c-.4%203-.7%206.5-7.3%206.5m28.4-25c-8.8%200-13.4%204-13.4%2015%200%2010.2%205.2%2013.8%2012.8%2013.8%209.7%200%2011.7-4.6%2012-9H146c-.6%203.6-2%205.3-7.4%205.3-8%200-8.3-5-8.3-9h20.5v-2c0-14-8.6-14-11.8-14M130%2026.4c.5-4.4%201.5-8.6%208.2-8.6%206.4%200%207.6%203.5%207.6%208.6H130zm55-11.5L179.5%2034%20174%2015h-10.4V6.2h-7.3v8.6h-3.5v4.8h3.5v15.6c0%201.7%200%204.2%201.5%205.5%201.4%201.3%204%201.3%206%201.3h4.2v-5.5h-2.3c-.6%200-1.3%200-1.7-.4-.4-.4-.4-1-.4-2.3v-14h4.3l8%2022.3h7l9.7-27.2H185zm-173.5-2v2H7.8v4.6h3.7V42H16V19.4h5v-4.6h-5V13c0-2%200-3%203.7-3H21V6L18.4%206c-6%200-7%203-7%206.8m37%2046.8v-10H11.5v10H33L11%2081v10h37.3V81h-22M189%2062.8c0-7.8-6.6-14-14.4-14-6.3%200-11.6%202.8-14%207-2.4-4.2-7-7-12.4-7s-10.2%203-12.5%207.5v-6.7H125V91h10.7V66.6c0-4.4%203.6-8%208-8s8%203.7%208%208V91h10.7V66.5c0-4.3%203.6-7.8%208-7.8s8%203.6%208%208v24H189V63zm-87-14h-2.6l-2.3.5-2.2.7c-.8.2-1.5.5-2.2%201-.7.2-1.4.6-2%201l-2%201.4-1.8%201.6-1%201.2-1.2%201.5-1%201.7-1%201.7-.7%202-.7%202-.3%202-.2%202v1c0%20.4%200%201-.2%201.6l-.3%201.6-.7%201.5-.8%201.4c-.3.6-.6%201-1%201.4l-1.2%201-1.3%201-1.5.7c-.5.3-1%20.5-1.6.6l-1.7.2h-1.7c-.6%200-1.2-.2-1.7-.3-.5%200-1-.3-1.5-.5l-1.5-.8c-.4-.3-1-.6-1.3-1-.4-.3-.8-.6-1-1l-1-1.3-1-1.6c0-.5-.3-1-.5-1.5%200-.7-.3-1.2-.3-1.8-.2-.5-.2-1-.2-1.7%200-.6%200-1%20.2-1.7%200-.5.2-1%20.4-1.6l.7-1.5%201-1.4c.2-.4.6-1%201-1.2l1.2-1%201.4-1c.5%200%201-.4%201.5-.5l1.7-.5%201.7-.2h2l2%20.6c.7.3%201.3.5%202%201%20.3%200%20.7.4%201%20.7%201.5-3%203.7-5.8%206.4-8L81%2052c-.4-.4-1-.7-1.6-1l-1.8-1c-.7%200-1.3-.3-2-.5l-2-.5-2-.2h-4c-.4%200-1%200-1.5.2-.5%200-1%20.2-1.6.4-.5%200-1%20.3-1.6.5l-1.5.5-1.5.7-1.4.8c-.5.3-1%20.6-1.3%201L56%2054l-1.2%201-1%201.3-1%201.3-1%201.4-.7%201.4c-.4.5-.6%201-.8%201.5l-.6%201.5c0%20.5-.3%201-.4%201.6%200%20.6-.2%201.2-.3%201.7l-.3%201.7V72l.3%201.6c0%20.6.2%201%20.4%201.6%200%20.6.3%201%20.4%201.6s.4%201%20.7%201.6l.7%201.5.8%201.3c.3.4.6%201%201%201.3.3.4.6%201%201%201.3l1%201%201.3%201c.4.5.8.8%201.3%201l1.4%201%201.4.8%201.5.7%201.4.5%201.7.5c.6%200%201.2.2%201.7.3h1.7c.7.2%201.3.2%202%20.2s1.5%200%202.3-.2c.8%200%201.6-.3%202.4-.5l2.3-.7%202.2-1c.7-.3%201.4-.7%202-1.2l2-1.4%201.7-1.6.7-.8%201-1.6c.5-.5.8-1%201.2-1.7l1-1.7c0-.6.4-1.3.6-2l.6-1.8c0-.7.3-1.4.4-2v-2c.2-.4.2-.7.2-1V68l.5-1.5.6-1.5%201-1.5c.2-.4.6-.8%201-1.2.3-.4.7-.8%201.2-1%20.4-.5.8-.8%201.3-1l1.5-.7%201.6-.5c.5%200%201%200%201.7-.2h1.7c.6%200%201%20.2%201.7.3l1.6.7%201.4.7c.5.3%201%20.6%201.3%201l1.2%201%201%201.4.8%201.4.6%201.6.3%201.6V70c0%20.7%200%201.3-.2%201.8%200%20.6-.3%201-.4%201.7l-.7%201.5c-.2.4-.5%201-1%201.3-.2.5-.5%201-1%201.3s-.7.7-1%201l-1.5%201-1.5.6-1.6.4-1.6.2h-2l-2-.6-2-.8-1-.8c-1.5%203-3.7%205.8-6.4%208l1.7%201c.5.4%201%20.8%201.7%201l1.8%201c.7%200%201.3.4%202%20.6.6%200%201.3.3%202%20.4l2%20.3h4l1.5-.4c.6%200%201-.2%201.7-.3l1.6-.5%201.5-.6%201.5-.7%201.4-.8%201.3-1%201.3-1%201.2-1%201-1.4%201-1.2%201-1.3.7-1.4.6-1.5.6-1.6c0-.5.3-1%20.4-1.6%200-.6.2-1%20.3-1.7V71l.2-1.7v-1.7l-.4-1.7-.3-1.6-.5-1.6-.6-1.5-.8-1.5-.8-1.4c-.3-.4-.6-1-1-1.3-.2-.4-.6-.8-1-1.2l-1-1.2-1.3-1-1.3-1-1.3-1-1.6-.7c-.5-.4-1-.6-1.5-.8l-1.6-.6c-.6%200-1-.3-1.6-.4-.6%200-1-.2-1.7-.3-.5-.2-1-.3-1.6-.3H102%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E';
                var templateUrl = 'vignettePlaceHolder.svg.html';
                injectImage(imageUrl, templateUrl);

                // Trigger a call to the lazyload library, now that the element is inside the DOM
                $rootScope.$emit('updateLazyload');

                setTimeout(function() {
                    expect(element[0].src).toEqual(imageUrl);
                    done();
                }, 20);
            });
        });

        it('puts back the fallback if the image does not load (404)', function(done) {
            inject(function ($rootScope) {

                var imageUrl = 'http://localhost:9876/static/images/should-be-a-404-error.jpg';
                var templateUrl = 'vignettePlaceHolder.svg.html';
                injectImage(imageUrl, templateUrl);

                // Trigger a call to the lazyload library, now that the element is inside the DOM
                $rootScope.$emit('updateLazyload');

                setTimeout(function() {
                    // Should start like an inline svg
                    expect(element[0].src.indexOf('data:image/svg+xml;charset=utf-8,%3Csvg%20')).toEqual(0);
                    done();
                }, 100);
            });
        });

        it('uses the normal url if not found in templates', function() {

            var imageUrl = 'http://localhost:9876/static/images/pub-block-small.jpg';
            var templateUrl = 'vignettePlaceHolder_notTemplate.svg';
            injectImage(imageUrl, templateUrl);

            // Starts like an inline SVG
            expect(element[0].src).toContain(templateUrl);

            // Has set a "data-src" attribute with the right url
            expect(element.attr('data-src')).toEqual(imageUrl);
        })

        // Could not be tested, PhantomJS doesn't seem to behave correctly with the viewport's height
        xit('lazyloads the image when it arrives inside the viewport', function(done) {
            inject(function ($rootScope) {

                var imageUrl = 'http://localhost:9876/static/images/should-be-a-404-error.jpg';
                element.css('position', 'absolute');
                element.css('top', '3000px');
                element.css('left', '0px');

                $rootScope.$emit('updateLazyload');

                setTimeout(function() {
                    // Test before scroll
                    expect(element[0].src).not.toEqual(imageUrl);

                    window.scrollTo(0, 3000);
                    $rootScope.$emit('updateLazyload');

                    setTimeout(function() {
                        // Test after scroll
                        expect(element[0].src).toEqual(imageUrl);

                        // Reset scroll position, maybe for future tests
                        window.scrollTo(0, 0);

                        done();
                    }, 20);
                }, 20);
            });
        });
    });
});
