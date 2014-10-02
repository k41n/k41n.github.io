$(function(){
  $('form').submit(function(e){
    e.preventDefault()
    turnover = $('#turnover').val()
    if (turnover == 1)
    {
      // Get off dirty hobo!
      $('#option1').show()
    }
    else
    {
      var optFound = false;
      if ($('#promo').is(':checked'))
      {
        $('#option3').show();
        optFound = true;
      }
      if ($('#sochub').is(':checked'))
      {
        $('#option4').show()
        $('#option3').hide();
        optFound = true;
      }
      if ($('#soccom').is(':checked'))
      {
        $('#option5').show();
        $('#option3').hide();
        $('#option4').hide();
        optFound = true;
      }
      if (!optFound)
      {
        $('#option2').show()
      }
    }
    return false;
  })
})