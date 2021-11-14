$(document).ready(function() {
  $('form#languageTest').submit(function(event) {
    event.preventDefault();
    const seasonInput = parseInt($("select#faveSeason").val());
    const animalInput = parseInt($("select#faveAnimal").val());
    const beverageInput= parseInt($("select#faveBeverage").val());
    const ambitionInput = parseInt($("select#ambition").val());
    const transportInput = parseInt($("select#transport").val());
    const totalInput = seasonInput+animalInput+beverageInput+ambitionInput+transportInput;
    if(totalInput <= 5) {
      $('#results').show();
      $("#languageName").text('REACT');
    }
      else if (totalInput < 12) {
        $('#results').show();
        $("#languageName").text('PYTHON');
      }
      else {
        $('#results').show();
        $("#languageName").text('JAVASCRIPT');
      }
  });
});