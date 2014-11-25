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

  compareGuess: function() {
    if(appStart.userGuess === appStart.hidden) {
      return alert("Yaaaaaaay!\nYou have guessed the hidden number!");
    }
    else if(appStart.previousGuess !== null) {

      if(appStart.hidden === appStart.previousGuess) {
        alert("Don't be so dumb!");
        return appStart.resetTxtInput();
      }

      else if(Math.abs(appStart.hidden - appStart.userGuess) < Math.abs(appStart.hidden - appStart.previousGuess)) {
        alert("You are hotter");
        return appStart.resetTxtInput();
      }

      else if(Math.abs(appStart.hidden - appStart.userGuess) > Math.abs(appStart.hidden - appStart.previousGuess)) {
        alert("You are colder");
        return appStart.resetTxtInput();
      }

      else if((appStart.userGuess + appStart.previousGuess)/2 === appStart.hidden) {
        alert("You are neither getting hotter or colder!");
        return appStart.resetTxtInput();
      }
    }

    else {
      alert("Please try again...");
      appStart.previousGuess = appStart.userGuess;
      console.log(appStart.previousGuess);
      return appStart.resetTxtInput();
    }
  }
};


window.onload = appStart.init();