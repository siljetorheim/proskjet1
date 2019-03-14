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

  if (player_1 != undefined) {
    this.player_1 = {
      name: player_1,
      human: true
    }
  }


}
function writeToPage(id, param){
  var data = document.getElementById(id);
  data.innerHTML = param
}


function program(){
  var spill = new Nimm("Ola")
  writeToPage("total2", spill.total);
}

function k(spiller, nummer){
  console.log(spiller, nummer);
  while true {
    new total = total - nummer;
  }

}

console.log("hei")
