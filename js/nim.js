//Her skal dere definere en konstruktør som oppretter et objekt som representerer et nim-spill.

/*class Player {
  constructor(name, human) {
    this.name = name;
    this.human = human;
 }
}

var player_1 = new Player("Kari", true)
console.log(player_1);

var player_2 = new Player("ET", false)
console.log(player_2);
*/

function Nimm(player_1, player_2, victory, total, maxGrab) {
  this.player_1 = player_1;
  this.player_2 = player_2;
  this.victory = victory;
  this.total = total;
  this.maxGrab = maxGrab;

  if (total === undefined) {
    this.total= 14
  }

  if (player_2 === undefined) {
    this.player_2 = {
      name: "Robot",
      human: false
    }
  }
  if (maxGrab === undefined) {
    this.maxGrab = 3
  }
  if (player_1 === undefined) {
    this.player_1 = {
      name: "Kari",
      human: true
    }
  }

  if (player_1 != undefined) { //oppretter en spiller om player_1 parameteret ikke er tomt. player_1 parameteret blir brukt til å navngi spilleren.
    this.player_1 = {
      name: player_1,
      human: true
    }
  }


}
function writeToPage(id, param){ //funksjon som tar to parametre: id og param. id er en id til et element fra html siden, param er det du ønsker å skrive til HTML siden.
  var data = document.getElementById(id);
  data.innerHTML = param
}


function program(){
  var spill = new Nimm("Ola") // oppretter et spill objekt.
  writeToPage("total2", spill.total); // kjører funksjonen som henter et HTML element og skriver noe til det.
  //henter ut <p> taggen med id = "total". Setter inn spill.total (som er total til spill objektet vi definerte to linjer opp), som vi vet = 14.

}

function k(spiller, nummer){
  console.log(spiller, nummer);
  
}


/*
//Knappene

function k(spiller, nummer){
  console.log(spiller, nummer);
  count = total - number
}

for (var count in k) {
  if ()
}*/
