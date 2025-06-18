const button = document.getElementById("rollbutton")
const output = document.getElementById("output")
const output2 = document.getElementById("comoutput")
const resultsigma = document.getElementById("result")
let numberofwins = 0
let numberoflosses = 0
const output3 = document.getElementById("winprecentage")
const output4 = document.getElementById("numberoftries")
function rolldice(){
    const userroll = Math.floor(Math.random() * 6+(1))
    const computerroll = Math.floor(Math.random() * 6+(1))
    output.innerHTML = "Your roll: " + userroll
    output2.innerHTML = "Computer's roll: " + computerroll
    if (userroll > computerroll){
        resultsigma.innerHTML = "You win!!"
        numberofwins += 1
        console.log(numberofwins)

    } else if (userroll < computerroll){
        resultsigma.innerHTML = "You lose:("
        numberoflosses += 1
    } else{
        resultsigma.innerHTML = ("It's a tie u dumb nigga")

    }
    try{
        output3.innerHTML = "Win rate: " + Math.trunc((numberofwins / (numberoflosses + numberofwins)) * 100) + "%"
    } catch(error){
        output3.innerHTML = "0% error"
    }
    let numberoftries = numberofwins + numberoflosses
    output4.innerHTML = ("Number of tries: " + numberoftries)
    
    




}







