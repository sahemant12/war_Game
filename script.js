const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceRoll: [6,1,2],
    diceCount:3
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceRoll: [4],
    diceCount:1
}

//random num generator b/w 1 & 6
function generateRandomNumbers(num) {
    // let numbers = []; 
    // for (let i = 0; i < num; i++) {
    //   const randomNum = Math.floor(Math.random() * 6) + 1;
    //   numbers.push(randomNum);
    // } 
    // return numbers;
    
    //better way
    const numbers = new Array(num).fill(0).map(()=>{
        return Math.floor(Math.random() * 6) + 1
    })
    return numbers
  }
  function renderCharacter(char){     

    const {elementId, name, avatar, health, diceCount} = char

    const dicevalue = generateRandomNumbers(diceCount).map((ele)=>{
        return `<div class="dice">${ele}</div>`
    }).join('')

    let htmlCharacter = `<div class="character-card">
    <h4 class="name"> ${name} </h4>
    <img class="avatar" src="${avatar}"/>
    <p class="health">health: <b> ${health} </b></p>
    <div class="dice-container">${dicevalue}</div> `
    document.getElementById(elementId).innerHTML = htmlCharacter;

}
renderCharacter(hero)
renderCharacter(monster)