import { jquery } from 'jquery';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function login() {

    getTemplate('login')
        .then((templateFunc) => {
            //Render template
            let html = templateFunc();

            $('#dinamic-container').html(html);

            //Login functionality
            $("#btn-login").on("click", (ev) => {

                let user = {
                    email: $("#email").val(),
                    password: $("#password").val(),
                };

                data.login(user)

                .then((resp) => {
                    alertify.success('Hello' + resp.user.email);
                    localStorage.setItem("email", resp.user.email);
                    localStorage.setItem("authKey", resp.token);
                    $(document.body).addClass("logged-in");
                    $('#login-link').addClass('hidden');
                    $('#logout-link').removeClass('hidden');
                    $('#profile-link').removeClass('hidden');

                    // var date = new Date();

                    // date.setTime(date.getTime() + (5 * 60 * 1000));

                    // document.cookie = "email=" + resp.user.email;
                    // document.cookie = "authKey=" + resp.token;
                    // document.cookie = "expires=" + date;                                     

                    document.location = '/#';
                });

                ev.preventDefault();
                return false;
            });
        });
}