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

angular.module('app', [
    'ftv.components.lazyload',
    'demo.lazyload.templates'
])

    .controller('AppCtrl', function () {
    })

;

angular.module("demo.lazyload.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("vignettePlaceHolder.svg.html","<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 240\">\n    <!--\n    /**\n     * The MIT License (MIT)\n     * \n     * Copyright (c) 2016 France Télévisions\n     * \n     * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated \n     * documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation \n     * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and \n     * to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n     * \n     * The above copyright notice and this permission notice shall be included in all copies or substantial portions of \n     * the Software.\n     * \n     * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO \n     * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE \n     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, \n     * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE \n     * SOFTWARE.\n     */\n     -->\n    <rect x=\"0\" y=\"0\" width=\"300\" height=\"240\" fill=\"transparent\"></rect>\n    <g transform=\"translate(50, 70)\">\n        <path fill=\"#242\" fill-opacity=\"0.25\" x=\"100\" y=\"100\" d=\"M29.4 20V15H25V42h4.5V27c0-8.5 6.2-8.5 8.7-8.5h2v-4.2l-2.5-.2c-2.3 0-6.8 0-8.3 6M64 36.4V23c0-6.6-2.7-9-10.2-9-11.5 0-11.5 5.5-11.5 9.2h4.3c0-4 .8-5.5 6.6-5.5 4.5 0 6.3.7 6.3 4.3 0 .8 0 3-1.6 3.3-14.4 2-16.8 4-16.8 9.3 0 5.4 2.3 8.2 9 8.2 6.4 0 8-2 9.6-4 .6 2.5 1.5 3.3 5 3.3h1.8v-3.3c-1.6 0-2.5 0-2.5-2.4m-4.4-5c0 5.4-3 7.8-8.4 7.8-3 0-5.4-.8-5.4-4 0-3 .2-4.6 7.7-5.6 1.7-.2 3.6-.5 6-1.3v3.3zm24-17.2c-6 0-7.7 3-8.6 5v-4.2h-4.5V42H75V26.3c0-6.7 3.7-8.5 8-8.5 5 0 5.4 3 5.4 7V42H93V23.5c0-4-.4-9.4-9.3-9.4m26.6 25c-6.6 0-8.5-3.5-8.5-10.3 0-7.7 2.4-11 8.6-11 5.6 0 6.5 3 7 5.6h4.4c-.2-3.7-2-9.2-11.3-9.2-8.5 0-13.2 4.3-13.2 14.5 0 12 6.7 14.3 12.8 14.3 10.4 0 12-6.6 12-10.2h-4.4c-.4 3-.7 6.5-7.3 6.5m28.4-25c-8.8 0-13.4 4-13.4 15 0 10.2 5.2 13.8 12.8 13.8 9.7 0 11.7-4.6 12-9H146c-.6 3.6-2 5.3-7.4 5.3-8 0-8.3-5-8.3-9h20.5v-2c0-14-8.6-14-11.8-14M130 26.4c.5-4.4 1.5-8.6 8.2-8.6 6.4 0 7.6 3.5 7.6 8.6H130zm55-11.5L179.5 34 174 15h-10.4V6.2h-7.3v8.6h-3.5v4.8h3.5v15.6c0 1.7 0 4.2 1.5 5.5 1.4 1.3 4 1.3 6 1.3h4.2v-5.5h-2.3c-.6 0-1.3 0-1.7-.4-.4-.4-.4-1-.4-2.3v-14h4.3l8 22.3h7l9.7-27.2H185zm-173.5-2v2H7.8v4.6h3.7V42H16V19.4h5v-4.6h-5V13c0-2 0-3 3.7-3H21V6L18.4 6c-6 0-7 3-7 6.8m37 46.8v-10H11.5v10H33L11 81v10h37.3V81h-22M189 62.8c0-7.8-6.6-14-14.4-14-6.3 0-11.6 2.8-14 7-2.4-4.2-7-7-12.4-7s-10.2 3-12.5 7.5v-6.7H125V91h10.7V66.6c0-4.4 3.6-8 8-8s8 3.7 8 8V91h10.7V66.5c0-4.3 3.6-7.8 8-7.8s8 3.6 8 8v24H189V63zm-87-14h-2.6l-2.3.5-2.2.7c-.8.2-1.5.5-2.2 1-.7.2-1.4.6-2 1l-2 1.4-1.8 1.6-1 1.2-1.2 1.5-1 1.7-1 1.7-.7 2-.7 2-.3 2-.2 2v1c0 .4 0 1-.2 1.6l-.3 1.6-.7 1.5-.8 1.4c-.3.6-.6 1-1 1.4l-1.2 1-1.3 1-1.5.7c-.5.3-1 .5-1.6.6l-1.7.2h-1.7c-.6 0-1.2-.2-1.7-.3-.5 0-1-.3-1.5-.5l-1.5-.8c-.4-.3-1-.6-1.3-1-.4-.3-.8-.6-1-1l-1-1.3-1-1.6c0-.5-.3-1-.5-1.5 0-.7-.3-1.2-.3-1.8-.2-.5-.2-1-.2-1.7 0-.6 0-1 .2-1.7 0-.5.2-1 .4-1.6l.7-1.5 1-1.4c.2-.4.6-1 1-1.2l1.2-1 1.4-1c.5 0 1-.4 1.5-.5l1.7-.5 1.7-.2h2l2 .6c.7.3 1.3.5 2 1 .3 0 .7.4 1 .7 1.5-3 3.7-5.8 6.4-8L81 52c-.4-.4-1-.7-1.6-1l-1.8-1c-.7 0-1.3-.3-2-.5l-2-.5-2-.2h-4c-.4 0-1 0-1.5.2-.5 0-1 .2-1.6.4-.5 0-1 .3-1.6.5l-1.5.5-1.5.7-1.4.8c-.5.3-1 .6-1.3 1L56 54l-1.2 1-1 1.3-1 1.3-1 1.4-.7 1.4c-.4.5-.6 1-.8 1.5l-.6 1.5c0 .5-.3 1-.4 1.6 0 .6-.2 1.2-.3 1.7l-.3 1.7V72l.3 1.6c0 .6.2 1 .4 1.6 0 .6.3 1 .4 1.6s.4 1 .7 1.6l.7 1.5.8 1.3c.3.4.6 1 1 1.3.3.4.6 1 1 1.3l1 1 1.3 1c.4.5.8.8 1.3 1l1.4 1 1.4.8 1.5.7 1.4.5 1.7.5c.6 0 1.2.2 1.7.3h1.7c.7.2 1.3.2 2 .2s1.5 0 2.3-.2c.8 0 1.6-.3 2.4-.5l2.3-.7 2.2-1c.7-.3 1.4-.7 2-1.2l2-1.4 1.7-1.6.7-.8 1-1.6c.5-.5.8-1 1.2-1.7l1-1.7c0-.6.4-1.3.6-2l.6-1.8c0-.7.3-1.4.4-2v-2c.2-.4.2-.7.2-1V68l.5-1.5.6-1.5 1-1.5c.2-.4.6-.8 1-1.2.3-.4.7-.8 1.2-1 .4-.5.8-.8 1.3-1l1.5-.7 1.6-.5c.5 0 1 0 1.7-.2h1.7c.6 0 1 .2 1.7.3l1.6.7 1.4.7c.5.3 1 .6 1.3 1l1.2 1 1 1.4.8 1.4.6 1.6.3 1.6V70c0 .7 0 1.3-.2 1.8 0 .6-.3 1-.4 1.7l-.7 1.5c-.2.4-.5 1-1 1.3-.2.5-.5 1-1 1.3s-.7.7-1 1l-1.5 1-1.5.6-1.6.4-1.6.2h-2l-2-.6-2-.8-1-.8c-1.5 3-3.7 5.8-6.4 8l1.7 1c.5.4 1 .8 1.7 1l1.8 1c.7 0 1.3.4 2 .6.6 0 1.3.3 2 .4l2 .3h4l1.5-.4c.6 0 1-.2 1.7-.3l1.6-.5 1.5-.6 1.5-.7 1.4-.8 1.3-1 1.3-1 1.2-1 1-1.4 1-1.2 1-1.3.7-1.4.6-1.5.6-1.6c0-.5.3-1 .4-1.6 0-.6.2-1 .3-1.7V71l.2-1.7v-1.7l-.4-1.7-.3-1.6-.5-1.6-.6-1.5-.8-1.5-.8-1.4c-.3-.4-.6-1-1-1.3-.2-.4-.6-.8-1-1.2l-1-1.2-1.3-1-1.3-1-1.3-1-1.6-.7c-.5-.4-1-.6-1.5-.8l-1.6-.6c-.6 0-1-.3-1.6-.4-.6 0-1-.2-1.7-.3-.5-.2-1-.3-1.6-.3H102\"/>\n    </g>\n</svg>");}]);