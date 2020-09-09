import { UserRegisterValidator } from 'UserRegisterValidator';

class UserRegisterModel {
    constructor(email, password, firstname, lastname, imageUrl, mobileNumber, address) {
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.imageUrl = imageUrl;
        this.mobileNumber = mobileNumber;
        this.address = address;
    }

    get email() {
        return this._email;
    }

    set email(filteredEmail) {

        UserRegisterValidator.validateEmail(filteredEmail);
        this._email = filteredEmail;
    }



    get password() {
        return this._password;
    }

    set password(filteredPassword) {

        UserRegisterValidator.validatePassword(filteredPassword);
        this._password = filteredPassword;
    }


    get firstname() {
        return this._firstname;
    }

    set firstname(filteredFirstName) {

        UserRegisterValidator.validateFirstName(filteredFirstName);
        this._firstname = filteredFirstName;
    }


    get lastname() {
        return this._lastname;
    }

    set lastname(filteredLastName) {

        UserRegisterValidator.validateLastName(filteredLastName);
        this._lastname = filteredLastName;
    }


    get imageUrl() {
        return this._imageUrl;
    }

    set imageUrl(filteredImageUrl) {

        UserRegisterValidator.validateImageUrl(filteredImageUrl);
        this._imageUrl = filteredImageUrl;
    }




    get mobileNumber() {
        return this._mobileNumber;
    }

    set mobileNumber(filteredMobileNumber) {

        UserRegisterValidator.validateMobileNumber(filteredMobileNumber);
        this._mobileNumber = filteredMobileNumber;
    }



    get address() {
        return this._address;
    }

    set address(filteredAddress) {

        UserRegisterValidator.validateAddress(filteredAddress);
        this._address = filteredAddress;
    }
}

export { UserRegisterModel };