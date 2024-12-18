const automate = () => {
    // using ES5 strict mode, to prevent variable misuse
    'use strict'

    // Multiple options for survey responses
    const multiOptions = ['Sangat puas', 'Sangat setuju', 'Ya'];
    let option = 'Ya';

    // Select all options that contains any of the multiOptions and 'Ya'
    multiOptions.forEach(multi => {
        $('.answerlist1:contains('+multi+'), .answerlist2:contains('+option+')').each(function(){
            $(this).parent().each(function(){
                $(this).find('.answerlist2').children().click();
            });
        });
    });

    // If theres a textarea, fill it with 'Tidak ada komentar'
    $(document).ready(function(){
        let val = $.trim($('textarea').val());
        if(val == ''){
            $('textarea').val('Tidak ada komentar');
        }
    });

    // scroll to bottom of page to show submit button
    if(multiOptions.some(multi => $('.answerlist1:contains('+multi+')').length > 0)){
        window.scrollTo(0,document.body.scrollHeight);
    }
}
automate();
