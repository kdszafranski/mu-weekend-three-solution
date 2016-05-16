$(document).ready(function() {

  $('#calc-form').on('submit', function(event) {
    event.preventDefault();
    var values = {};

    var fields = $(this).serializeArray();
    fields.forEach(function(field, i) {
      values[field.name] = field.value;
    });

    sendCalc(values);
  });

  function sendCalc(val) {
    console.log(val);
    $.ajax({
      type: 'POST',
      url: '/calc/' + val.op,
      data: val,
      success: function(data) {
        updateDOM(data);
      }
    });
  }

  function updateDOM(result) {
    var answer = parseInt(result.answer);
    if(answer < 0) {
      $('#answer').addClass('negative');
    } else {
      $('#answer').removeClass('negative');
    }
    $('#answer').text(result.answer);
  }

});
