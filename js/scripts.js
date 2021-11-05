$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const seasonInput = $("input#faveSeason").val();
    const animalInput = $("input#faveAnimal").val();
    const beverageInput= $("input#faveBeverage").val();
    const ambitionInput = $("input#ambition").val();
    const transportInput = $("input#transport").val();
      if(seasonInput==='Spring' && animalInput==='Dog' && beverageInput==='Coffee' && ambitionInput==='Front-end Programming' && transportInput==='Motorcycle') {
        $('#react').show();
      }
  });
});