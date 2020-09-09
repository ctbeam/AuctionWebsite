/*globals System */
'use strict';

System.config({
    'transpiler': 'plugin-babel',
    map: {
        'plugin-babel': 'libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'libs/systemjs-plugin-babel/systemjs-babel-browser.js',

        // External Libraries
        'jquery': 'libs/jquery/dist/jquery.min.js',
        'bootstrap-js': 'libs/bootstrap/dist/js/bootstrap.min.js',
        'jqueryUI': 'public/libs/jquery-ui.min.js', // Could not load it from node_modules
        'flexSlider': 'public/libs/flexSlider/jquery.flexslider-min.js',
        'toastr': 'libs/toastr/toastr.js',

        // App files
        'main': 'public/js/main.js',
        'requester': 'public/js/requester.js',
        'templateGenerator': 'public/js/templates.js',
        'data': 'public/js/data.js',
        //App Controllers
        'homeController': 'public/js/controllers/homeController.js',
        'sellController': 'public/js/controllers/sellController.js',
        'loginController': 'public/js/controllers/loginController.js',
        'logoutController': 'public/js/controllers/logoutController.js',
        'registerController': 'public/js/controllers/registerController.js',
        'buyController': 'public/js/controllers/buyController.js',
        'aboutController': 'public/js/controllers/aboutController.js',
        'contactController': 'public/js/controllers/contactController.js',
        'faqController': 'public/js/controllers/faqController.js',
        'profileController': 'public/js/controllers/profileController.js',
        'adViewController': 'public/js/controllers/adViewController.js',

        //App models
        'CreateAdModel': 'public/js/models/CreateAdModel.js',
        'UserRegisterModel': 'public/js/models/UserRegisterModel.js',

        //App validators
        'CreateAdValidator': 'public/js/validations/CreateAdValidator.js',
        'UserRegisterValidator': 'public/js/validations/UserRegisterValidator.js'
    }
});