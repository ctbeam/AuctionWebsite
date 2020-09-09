import { jquery } from 'jquery';
import { jqueryUI } from 'jqueryUI';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';
import { CreateAdModel } from 'CreateAdModel';

export function createSell() {
    if (data.isLoggedIn()) {
        getTemplate('createSell')
            .then((templateFunc) => {
                //Render template
                let html = templateFunc();

                $('#dinamic-container').html(html);

                $('#createAd').on('click', function(ev) {

                    let adModel;

                    try {
                        adModel = new CreateAdModel($('#adTitle').val(), $('#adCategory option:selected').text(), $('#adDescription').val(), getDefaultImageIfNotProvided('#adURL'), +$('#adStartPrice').val());
                    } catch (Error) {
                        return;
                    }

                    let adModelWithoutUnderscoreProperties = {
                        title: adModel._title,
                        state: adModel._state,
                        description: adModel._description,
                        imageUrl: adModel._imageUrl,
                        startPrice: adModel._startPrice
                    };

                    data.createSell(adModelWithoutUnderscoreProperties)

                    .then(function(success) {
                        $("#dialog-message").dialog({
                            modal: true,
                            buttons: {
                                'Auction has been created': function() {
                                    document.location = '#/buy';
                                    $(this).dialog("close");
                                }
                            }
                        });
                    }, function(fail) {
                        console.log(adModel);
                    });

                    ev.preventDefault();
                    return false;
                });
            });
    } else {
        document.location = "#/login";
    }
}

function getDefaultImageIfNotProvided(img) {

    if ($(img).val().length <= 0) {
        var imageUrl = $(img + ':text').val('http://wonkville.net/wp-content/uploads/2016/04/No-image-available.jpg');
        return imageUrl;
    } else {
        var imageUrl = ($(img).val());
        return imageUrl;
    }
}