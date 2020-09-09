class UserRegisterValidator {

    static validateEmail(e_mail) {

        let errorMessage = 'Enter a valid e-mail address';

        if (e_mail.indexOf('@') === -1 ||
            e_mail.length <= 0) {

            $("#email").addClass('red-border-error').val('').attr('placeholder', errorMessage);
            throw new Error();
        }
    }

    static validatePassword(pass) {

        let errorMessage = 'Password must be above 3 symbols';

        if (pass.length <= 3) {

            $("#password").addClass('red-border-error').val('').attr('placeholder', errorMessage);
            throw new Error();
        }
    }

    static validateFirstName(fname) {

        let errorMessage = 'First name has to be a string';

        if (typeof fname !== 'string' ||
            fname.length <= 0) {

            $("#firstname").addClass('red-border-error').val('').attr('placeholder', errorMessage);
            throw new Error();
        }
    }

    static validateLastName(lname) {

        let errorMessage = 'Last name can contain only A-Z, a-z';

        if (typeof lname !== 'string' ||
            lname.length <= 0) {

            $("#lastname").addClass('red-border-error').val('').attr('placeholder', errorMessage);
            throw new Error();
        }
    }

    static validateImageUrl(link) {

        let errorMessage = 'Image url should be a string';

        if (isNaN(link) === false) {

            $("#image-url").addClass('red-border-error').val('').attr('placeholder', errorMessage);
            throw new Error();
        }
    }

    static validateMobileNumber(phoneNumber) {

        let errorMessage = 'Invalid phone number';

        if (isNaN(phoneNumber) === true) {

            $("#mobileNumber").addClass('red-border-error').val('').attr('placeholder', errorMessage);
            throw new Error();
        }
    }

    static validateAddress(location) {

        let errorMessage = 'Address should be between 10 and 70 symbols';

        if (typeof location !== 'string' ||      
            location.length <= 10 ||
            location.length >= 70) {

            $("#address").addClass('red-border-error').val('').attr('placeholder', errorMessage);
            throw new Error();
        }
    }
}

export { UserRegisterValidator };