import { jquery } from 'jquery';
import { flexSlider } from 'flexSlider';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function home() {

    Promise.all([getTemplate('home'), data.getAds()])
        .then(([templateFunc, adsData]) => {


            let getOnlyFourAds = adsData.slice(0, 4);

            let adsInfoObject = templateFunc(getOnlyFourAds);

            $('#dinamic-container').html(adsInfoObject);
                $('.flexslider').flexslider({
                    animation: "slide"
                });
        });

}