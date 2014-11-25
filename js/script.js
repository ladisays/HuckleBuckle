function appStart() {
  // var arrayNum = [0,1,2,3,4,5,6,7,8,9,
  //                   10,11,12,13,14,15,16,17,18,19,
  //                   20,21,22,23,24,25,26,27,28,29,
  //                   30,31,32,33,34,35,36,37,38,39,
  //                   40,41,42,43,44,45,46,47,48,49,
  //                   50,51,52,53,54,55,56,57,58,59,
  //                   60,61,62,63,64,65,66,67,68,69,
  //                   70,71,72,73,74,75,76,77,78,79,
  //                   80,81,82,83,84,85,86,87,88,89,
  //                   90,91,92,93,94,95,96,97,98,99,
  //                   100];

  var hidden = Math.floor(Math.random() * 100);
  var previous;
  console.log(hidden);

  function getGuess() {
    guess = prompt('Guess the number!');
    return guess;
  }

  function guessIsHidden() {
    if(guess == hidden) {
      return true;
    }
  }

  function compareGuesses(previous, guess) {
    if(guessIsHidden()) {
      return alert("You are right");
    }

    else if(guess == previous) {
      alert("Don't be so dumb!");
      return checkGuess();
    }

    else if(Math.abs(hidden - guess) < Math.abs(hidden - previous)) {
      alert("You are hotter");
      return checkGuess();
    }

    else if(Math.abs(hidden - guess) > Math.abs(hidden - previous)) {
      alert("You are colder");
      return checkGuess();
    }

    else {
      alert("You are lukewarm!");
      return checkGuess();
    }
  }

  function guesser() {
    getGuess();
    if (!guessIsHidden()) {
      compareGuesses(previous, guess);
    }
    previous = guess;
  }

  function checkGuess() {
    getGuess();
    if(guessIsHidden()) {
      return alert("Your guess is right!");
    }
    else {
      alert("Guess again");
      previous = guess;
      console.log(previous);
      // getGuess();
      guesser();
      // console.log(previous);
      console.log(guess);
      // compareGuesses(previous, guess);
    }
  }

  checkGuess();
}





