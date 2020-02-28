// Getting Names
var lineBreak = "\r\n";
var firstLoverName = prompt("Enter Your Name");
firstLoverName = firstLoverName.toUpperCase();
var secondLoverName = prompt(
  "Hello, " + firstLoverName + lineBreak + "Enter Your Lover Name"
);
secondLoverName = secondLoverName.toUpperCase();

//Setup Percentage
var randomNumber = Math.random() * 99;
var roundNumber = Math.round(randomNumber);
if (roundNumber < 40) {
  roundNumber = roundNumber + 30;
  if (roundNumber < 50) {
    alert(
      "Hello, " +
        firstLoverName +
        " + " +
        secondLoverName +
        lineBreak +
        "Your Love Percentage is " +
        roundNumber +
        " %" +
        " Your Love Is Not That Much Stronger"
    );
  }
} else if (roundNumber < 79 && roundNumber > 50) {
  alert(
    "Hello, " +
      firstLoverName +
      " + " +
      secondLoverName +
      lineBreak +
      "Your Love Percentage is " +
      roundNumber +
      " %" +
      " Your Love Is Strong, Keep It Up"
  );
} else {
  alert(
    "Hello, " +
      firstLoverName +
      " + " +
      secondLoverName +
      lineBreak +
      "Your Love Percentage is " +
      roundNumber +
      " %" +
      " Your Love Is Very Much Strong, Wish You Very Best Of Luck"
  );
}
