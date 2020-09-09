/*globals Navigo */
import * as data from 'data';
import { home } from 'homeController';
import { login } from 'loginController';
import { logout } from 'logoutController';
import { register } from 'registerController';
import { createSell } from 'sellController';
import { buy } from 'buyController';
import { about } from 'aboutController';
import { contact } from 'contactController';
import { faq } from 'faqController';
import { profile } from 'profileController';
import { viewSell } from 'adViewController';

(function routing() {

    let router = new Navigo(null, true);
    router.on(function() {
            home();
        })
        .on('/sell', createSell)
        .on('/sells/:sellId', viewSell)
        .on('/buy', buy)
        .on('/about', about)
        .on('/contact', contact)
        .on('/FAQ', faq)
        .on('/login', login)
        .on('/register', register)
        .on('logout', logout)
        .on('/profile', profile)
        .resolve();

    if (data.isLoggedIn()) {
        $('#login-link').addClass('hidden');
        $('#logout-link').removeClass('hidden');
        $('#profile-link').removeClass('hidden');
    }

    //Not found
    router.notFound(function(query) {
        // ...
    });
}());