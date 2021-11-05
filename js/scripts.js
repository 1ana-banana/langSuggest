$(document).ready(function() {
  $('form#languageTest').submit(function(event) {
    event.preventDefault();
    const seasonInput = parseInt($("select#faveSeason").val());
    const animalInput = parseInt($("select#faveAnimal").val());
    const beverageInput= parseInt($("select#faveBeverage").val());
    const ambitionInput = parseInt($("select#ambition").val());
    const transportInput = parseInt($("select#transport").val());
    console.log(seasonInput);
    console.log(animalInput);
    console.log(beverageInput);
    console.log(ambitionInput);
    console.log(transportInput);
    const totalInput = seasonInput+animalInput+beverageInput+ambitionInput+transportInput;
    console.log('This is the total input value:' + totalInput)
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