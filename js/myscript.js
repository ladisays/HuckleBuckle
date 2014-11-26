var appStart =  {

  // initialize some properties of the appStart object...
  // so they can be easily accessible...
  // by other keys in the object
  init: function() {
    this.hidden = Math.floor(Math.random() * 100);
    console.log(this.hidden);
    this.txtInput = document.getElementById('userGuess');
    this.btnGuess = document.getElementById('guess');
    this.btnNewGame = document.getElementById('newGame');
    this.previousGuess = null;
    this.resetTxtInput();
    this.setListeners();
  },

  setListeners: function(){
    var self = this;
    self.btnNewGame.onclick = function(){
      self.init();
    };
    self.btnGuess.onclick = function(){
      self.validateGuess();
      console.log(appStart.previousGuess);
    };
  },

  //reset the textfield for accepting user input and set it to autofocus
  resetTxtInput: function() {
    this.txtInput.value = "";
    this.txtInput.focus();
  },

  //validate the guess input and return the appropriate instruction
  validateGuess: function() {
    var userGuess = appStart.txtInput.value;

    //validate user input if guess input is null
    if(userGuess === "") {
      alert("Please enter a number from 0 - 100!");
      return false;
    }

    //validate user input if guess is has anything other than a number
    else if(isNaN(userGuess)) {
      alert("Please enter a valid input");
      appStart.resetTxtInput();
      return false;
    }

    // if guess is a number, validate user input
    else if(isNaN(userGuess) === false) {

      //if guess is lesser than 0 or greater than 100
      if(parseInt(userGuess) < 0 || parseInt(userGuess) > 100) {
        alert("Your guess is out of range!");
        appStart.resetTxtInput();
        return false;
      }

      //if guess has a decimal value
      // else if(parseFloat(userGuess)) {
      //   alert("Please enter a whole number\nNo decimal values allowed!");
      //   this.resetTxtInput();
      //   return false;
      // }

      //if guess is an integer, return the value
      else {
        appStart.userGuess = parseInt(userGuess);
        appStart.compareGuess();
        return;
      }
    }
  },

  //Function to compare the guess with the hidden number
  compareGuess: function() {
    //if user guess equals the hidden number, return a positive feedback!
    if(appStart.userGuess === appStart.hidden) {
      return alert("Yaaaaaaay!\nYou have guessed the hidden number!");
    }

    //check if user has guessed more than once
    else if(appStart.previousGuess !== null) {

      //if the user guess equals the previous user guess,
      //alert the user to try again
      if(appStart.userGuess === appStart.previousGuess) {
        alert("Don't be so dumb!");
        return appStart.resetTxtInput();
      }

      //if the difference in the new guess and the hidden number is lesser than...
      //the difference between the hidden number and the previous user guess,
      //that means the user is closer to the hidden number
      else if(Math.abs(appStart.hidden - appStart.userGuess) < Math.abs(appStart.hidden - appStart.previousGuess)) {
        alert("You are hotter");
        return appStart.resetTxtInput();
      }

      //if the difference in the new guess and the hidden number is greater than...
      //the difference between the hidden number and the previous user guess,
      //that means the user is farther to the hidden number
      else if(Math.abs(appStart.hidden - appStart.userGuess) > Math.abs(appStart.hidden - appStart.previousGuess)) {
        alert("You are colder");
        return appStart.resetTxtInput();
      }

      //if half the sum of the previous guess and the new guess equals the hidden number...
      //that means the user is as close as he was far from the previous guess to the hidden number
      else if((appStart.userGuess + appStart.previousGuess)/2 === appStart.hidden) {
        alert("You are neither getting hotter or colder!");
        return appStart.resetTxtInput();
      }
    }

    //else, ask the user to try again
    else {
      alert("Nice try...\nPlease try again!");
      appStart.previousGuess = appStart.userGuess;
      console.log(appStart.previousGuess);
      return appStart.resetTxtInput();
    }
  }
};

//Initialize the game's object and its required properties once the window loads!
window.onload = appStart.init();




