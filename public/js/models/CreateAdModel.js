import { CreateAdValidator } from 'CreateAdValidator';

class CreateAdModel{
    constructor(title, state, description, imageUrl, startPrice) {
        this.title = title;
        this.state = state;
        this.description = description;
        this.startPrice = startPrice;
        this.imageUrl = imageUrl;        
    }

    //adTitle
    get title() {
        return this._title;
    }

    set title(filteredTitle) {

        CreateAdValidator.validateTitle(filteredTitle);
        this._title = filteredTitle;
    }

    //adCategory
    get state() {
        return this._state;
    }

    set state(filteredCategory) {

        CreateAdValidator.validateCategory(filteredCategory);
        this._state = filteredCategory;
    }

    //adDescription
    get description() {
        return this._description;
    }

    set description(filteredDesc) {

        CreateAdValidator.validateDesc(filteredDesc);
        this._description = filteredDesc;
    }

    //adUrl
    get imageUrl() {
        return this._imageUrl;
    }

    set imageUrl(filteredImgUrl) {

        CreateAdValidator.validateUrl(filteredImgUrl);
        this._imageUrl = filteredImgUrl;
    }

    //adPrice

    get startPrice() {
        return this._startPrice;
    }

    set startPrice(filteredPrice) {

        CreateAdValidator.validatePrice(filteredPrice);
        this._startPrice = filteredPrice;
    }
}

export { CreateAdModel };