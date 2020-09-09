import { jquery } from 'jquery';
import { jqueryUI } from 'jqueryUI';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function faq() {

    if(data.isLoggedIn()){
            getTemplate('faq')
            .then((templateFunc) => {
                //Render template
                let html = templateFunc();
                $('#dinamic-container').html(html);

                //Load Jquery UI Accordion  
                $('#accordion').accordion({
                    collapsible: true,
                    heightStyle: "content"
                });
            });
    }else{
        document.location = "#/login";
    }

}