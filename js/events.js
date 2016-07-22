//define functions here
function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  //bind the load event that adds the class tasty to the image
  $('img').on("load", function(img) {
    $('img').addClass('tasty');
  })
}

function pressIt() {
//bind a keydown event to the input field of the form
  $("form").on('keydown', function(key) {
    if (key.which == 71) {
      // alerts a user when they have pressed the g key

      alert(`You pressed the ${key} key`);
    }
  })
}

function submitIt() {
  //bind a submit event to form
  $("form").on("submit", function(){
    alert ("Your form is going to be submitted now.");
  })
  //alerts "your form is going to be submitted now"
}
$(document).ready(function(){

// call functions here

});
