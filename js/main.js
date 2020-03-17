let buttonRock = document.querySelector('#rock')
let buttonScissors = document.querySelector('#scissors')
let buttonPaper = document.querySelector('#paper')
let buttonSpock = document.querySelector('#spock')
let buttonLizard = document.querySelector('#lizard')
//
//
//
let game = {
  rock: function playerSelectRock(){

  },
  scissors: function playerSelectScissors(),
  paper: function playerSelectPaper(),
  spock: function playerSelectSpock(),
  lizzard: function playerSelectLizzard(),
  bot : function botSelect(){
    botNum = math.random() // 1/5 is .2
    if(botNum >= 0 && botNum < .2){
      botChoice = "Rock"
    }else if(botNum >= .2 && botNum < .4){
        botChoice = "Scissors"
    }else if(botNum >= .4 && botNum < .6){
        botChoice = "Paper"}
    else if(botNum >= .6 && botNum < .8){
          botChoice = "Spock"}
    else if(botNum >= .8 && botNum < 1){
            botChoice = "Lizard"}
      }

  }
let 
