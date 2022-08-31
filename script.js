console.log("script running");

// Access all the figures using the class
const pictures = document.querySelectorAll(".card-image");
// Fill in the object
let quizValues = {
  "color": ["logical", "creative", "logical", "creative"],
  "vacation": ["extrovert", "introvert", "extrovert", "introvert"],
  "pizza": ["creative", "logical", "creative", "logical"],
  "house": ["introvert", "extrovert", "introvert", "extrovert"],
  "fruit": ["logical", "creative", "logical", "creative"],
  "activity": ["extrovert", "introvert", "extrovert", "introvert"],
  "game": ["logical","creative","logical","creative"]
};

// 'quizTaker' object here

const quizTaker = {
  logical: 0,
  creative: 0,
  extrovert: 0,
  introvert: 0
}
const questionAnswered = {
  "color": false,
  "vacation": false,
  "pizza": false,
  "house": false,
  "fruit": false,
  "activity": false,
  "game": false,
}

// Make every image clickable!

pictures.forEach((picture) => {
  picture.addEventListener("click", (e) => {
    // Save the user's choice in a variable.
    let choice = picture.id.split("-");
    const questionName = choice[0];
    const answers = quizValues[questionName];

    // Change the background yellow

    const answer =  answers[choice[1]];
    console.log(answer);
    questionAnswered[questionName] = true;
    if(questionAnswered[questionName]){
      return;
    }
    // Increment the right personality trait
    quizTaker[answer]++;
    picture.classList.toggle("has-background-light");
    picture.classList.toggle("has-background-warning");
    // If its the last question, unhide the result.
    if (true && questionName == "game") {
      let resultID;

      if (quizTaker.logical > quizTaker.creative) {
        resultID = "#logical-";
      } else {
        resultID = "#creative-";
      }

      if (quizTaker.introvert > quizTaker.extrovert) {
        resultID += "introvert";
      } else {
        resultID += "extrovert";
      }

      let result = document.querySelector(resultID);
      console.log(result);
      result.classList.remove("hidden");
    }
  });
});
