 var leapYear = function(yearInput) {
  if ((yearInput % 4 === 0) && (yearInput % 100 !== 0) || (yearInput % 400 === 0))
   {
    return "This is a leap year!"
    } else {
    return "This is not a leap year."
    }
  }


$(document).ready(function(){
  $("#answer").hide();

  $(".container form").submit(function(event){
    var yearInput = parseInt($("input#year").val());
    var textDisplay = leapYear(yearInput)
    event.preventDefault();
    $("#result").text(textDisplay);
    $("#answer").show();
  });
});
