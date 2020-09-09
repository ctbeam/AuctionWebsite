class CreateAdValidator {

    static validateTitle(title) {

        let errorMessage = 'You can write A-Z, a-z, 0-9, min symbols 10, max symbols 80';

        if (title.length < 10 ||
            title.length >= 80) {

            $('#adTitle').addClass('red-border-error').val('').attr('placeholder', errorMessage);
            throw new Error();
        }
    }

    static validateCategory(category) {

        if (category === 'Select Category') {
            $('#adCategory').addClass('red-border-error');
            throw new Error();
            
        }
    }

    static validateDesc(desc) {

        let errorMessage = 'Description must be between 10 and 200 symbols';

        if (desc.length <= 10 ||
            desc.length >= 200) {

            $('#adDescription').addClass('red-border-error').val('').attr('placeholder', errorMessage);
            throw new Error();

        }
    }

    static validateUrl(url) {
        let errorMessage = 'Image url must be a string';

        if (typeof url !== 'string') {
            $('#adURL').addClass('red-border-error').val('').attr('placeholder', errorMessage);
            throw new Error();
            
        }

    }

    static validatePrice(price) {
        let errorMessage = 'Price must be between 1 and 10 000';

        if (typeof price !== 'number' ||
            price <= 0 || price >= 10000) {

            $('#adStartPrice').addClass('red-border-error').val('').attr('placeholder', errorMessage);
            throw new Error();
            
        }
    }
}

export { CreateAdValidator };