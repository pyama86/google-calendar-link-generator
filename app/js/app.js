;(function(){
    'use strict';

    // Attach datepickers
    var options = {
        format: 'DD/MM/YYYY HH:mm'
    };
    $('.date').datetimepicker(options);

    var dpStart = $('#dateStartContainer');
    var dpEnd   = $('#dateEndContainer');

    dpStart.datetimepicker(options);
    dpStart.on('dp.change', function(e){
        dpEnd.data('DateTimePicker').setMinDate(e.date);
    });

    dpEnd.datetimepicker(options);
    dpEnd.on('dp.change', function(e){
        dpStart.data('DateTimePicker').setMaxDate(e.date);
    });

})();


// https://www.google.com/calendar/render?action=TEMPLATE&text=Summary+of+the+event&dates=20140510T093846Z/20140511T093846Z&details=Description+of+the+event&location=Location+of+the+event&pli=1&uid=&sf=true&output=xml

