import { jquery } from 'jquery';
import { jqueryUI } from 'jqueryUI';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function buy() {

    getTemplate('buy')
        .then((templateFunc) => {
            data.getAds()
                .then(function (adsData) {
                    let html = templateFunc(adsData);
                    let source = jqueryAutocomplete(adsData);

                    $('#dinamic-container').html(html);

                    $("#tags").autocomplete({
                        source: source,
                        select: function(inputFieldAccess, selectedValue){
                            if(source.indexOf(selectedValue) !== -1){
                                $('#selectedValue').hide();
                            }
                        }
                    });

                }, function (error) {

                });
        });

}

function jqueryAutocomplete(data) {
    let autocompleteSource = [];

    $.each(data, function (index, value) {
        
        if (autocompleteSource.indexOf(value.title) === -1) {
            autocompleteSource.push(value.title);
        }
        
    });

    return autocompleteSource;
}