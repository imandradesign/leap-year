$(document).ready(function(){

  $(".container form").submit(function(event){
    var yearInput = parseInt($("input#year").val());
    event.preventDefault();
    $("#result").text(yearInput);
  })
});
