const cityNames = [
  "Mumbai",
  "Delhi",
  "Jaipur",
  "Hyderabad",
  "Indore",
  "Bhopal",
  "Mathura",
  "Vrindavan",
];

let lives = 10;
let gameimg = 0;
let gameOn = true;
let emptySpace = [];
let gameLevel = 1
let letterIndex = 0
let dimonds = 100


function startGame() {
$("#placeholder").html("")
emptySpace = []
  randomCity = cityNames[Math.round(Math.random() * (cityNames.length - 1))].toLowerCase();
  console.log(randomCity);
  $("#level").html("Level -"+gameLevel)
  $("#dimond").text(dimonds)
  

  for (var x = 0; x <= randomCity.length - 1; x++) {
    if (x === 0) {
      emptySpace[0] = randomCity[0];
      $("#placeholder").append(randomCity[0] + " ");
    } else {
      emptySpace.push("_");
      $("#placeholder").append("_" + " ");
    }
  }
}
startGame()
console.log(emptySpace);


function display(){

    $("#placeholder").html("");
    $("#placeholder").append(randomCity[0] + " ");
    for (var x = 1; x <= emptySpace.length - 1; x++) {
        $("#placeholder").append(emptySpace[x] + "  ");
    }
}

function showHint(){
    if(dimonds!=0 & randomCity.length > letterIndex){

        dimonds-=20
        $("#dimond").text(dimonds)
        letterIndex++
        let nextWord = randomCity[letterIndex]
        emptySpace[letterIndex] = nextWord
        display()
        if (emptySpace.indexOf("_") === -1){
            startGame()
        }
    }
    else{
        alert("no enogh dimonds")
    }
    
}

$("button").click((e) => {
  console.log(e.target.id);
  const keyPress = e.target.id;
  console.log(emptySpace);

  if (gameOn) {
    if (randomCity.indexOf(keyPress) != -1) {
      for (i = 1; i <= randomCity.length + 1; i++) {
        if (keyPress === randomCity[i]) {
          emptySpace[i] = keyPress;
          letterIndex++
        }
      }
    } else {
      gameimg += 1;
      $("#gameimg").attr("src", "images/img" + gameimg + ".png");
      lives -= 1;
      if (lives === 0) {
        gameOn = false;
        alert("game over");
      }
      console.log(lives);
    }
    console.log(emptySpace);
    
    display()

    if (emptySpace.indexOf("_") === -1) {
      const wantContinue = window.confirm("Do you want to continue playing?");
      if (wantContinue) {
        $("#placeholder").html("")
        lives = 9;
        gameimg = 1;
        gameLevel+=1
        gameOn = true;
        letterIndex = 0;
        emptySpace = [];
        console.log(emptySpace)
        startGame()
      }
      else if(wantContinue){
        gameOn = false
        alert("closing window")
        window.close()
      }
      
    }
  }
});
