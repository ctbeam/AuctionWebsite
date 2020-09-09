import { jquery } from 'jquery';
import { jqueryUI } from 'jqueryUI';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';
import { UserRegisterModel } from 'UserRegisterModel';

export function register() {

    getTemplate('register')
        .then((templateFunc) => {
            let html = templateFunc();

            $('#dinamic-container').html(html);

            $("#btn-register").on("click", (ev) => {

                let registrationModel;

                try {
                    registrationModel = new UserRegisterModel($('#email').val(), $('#password').val(), $('#firstname').val(), $('#lastname').val(), $('#image-url').val(), +$('#mobileNumber').val(), $('#address').val());
                } catch (Error) {
                    return;
                }

                let registrationModelWithoutUnderscoreProperties = {
                    email: registrationModel._email,
                    password: registrationModel._password,
                    firstname: registrationModel._firstname,
                    lastname: registrationModel._lastname,
                    imageUrl: registrationModel._imageUrl,
                    mobileNumber: registrationModel._mobileNumber,
                    address: registrationModel._address

                };

                data.register(registrationModelWithoutUnderscoreProperties)
                    .then((resp) => {
                        alertify.success('Successfully Registered!');
                        return data.login(registrationModelWithoutUnderscoreProperties);
                    })
                    .then((resp) => {
                        alertify.success('Hello' + resp.user.email);
                        localStorage.setItem("email", resp.user.email);
                        localStorage.setItem("authKey", resp.token);
                        $(document.body).addClass("logged-in");
                        document.location = '#/';
                        $('#login-link').addClass('hidden');
                        $('#logout-link').removeClass('hidden');
                        $('#profile-link').removeClass('hidden');
                    });
                ev.preventDefault();
                return false;
            });

        });

}