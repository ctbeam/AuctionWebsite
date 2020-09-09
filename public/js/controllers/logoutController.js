import { jquery } from 'jquery';
import * as data from 'data';

export function logout() {
    data.logout()
        .then(function() {
            $(document.body).removeClass("logged-in");
            $('#login-link').removeClass('hidden');
            $('#logout-link').addClass('hidden');
            $('#profile-link').addClass('hidden');
            document.location = '#/';
        });
}