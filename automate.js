const automate = () => {
    // using ES5 strict mode, to prevent variable misuse
    'use strict'

    // You can modified these variables, eg: 'Sangat puas' to 'Puas'
    let multi = 'Sangat puas';
    let option = 'Ya';

    // select all options that contains 'Sangat puas' and 'Ya'
    $('.answerlist1:contains('+multi+'), .answerlist2:contains('+option+')').each(function(){
        $(this).parent().each(function(){
            $(this).find('.answerlist2').children().click();
        });
    });

    // If theres a textare, fill it with 'Tidak ada komentar'
    $(document).ready(function(){
        let val = $.trim($('textarea').val());
        if(val == ''){
            $('textarea').val('Tidak ada komentar');
        }
    });

    // scroll to bottom of page to show submit button
    if($('.answerlist1:contains('+multi+')').length > 0){
        window.scrollTo(0,document.body.scrollHeight);
    }
}
automate();
