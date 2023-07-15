const characterData = {

     hero: {
        elementId: "hero",
        name: "Wizard",
        avatar: "images/wizard.png",
        health: 60,
        diceCount:3
    },   
     monster: {
        elementId: "monster",
        name: "Orc",
        avatar: "images/orc.png",
        health: 10,
        diceCount:1
    }
}

function Character(data){
    Object.assign(this,data)
    this.generateRandomNumbers = function(num){
        const numbers = new Array(num).fill(0).map(()=>{
            return Math.floor(Math.random() * 6) + 1
        })
        return numbers
      }

      this.renderCharacter = function(){     
        const {elementId, name, avatar, health, diceCount} = this
    
        const dicevalue = this.generateRandomNumbers(diceCount).map((ele)=>{
            return `<div class="dice">${ele}</div>`
        }).join('')
    
        return `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">${dicevalue}</div> `
    
    }
}
const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
console.log(wizard)
document.getElementById(wizard.elementId).innerHTML = wizard.renderCharacter()
document.getElementById(orc.elementId).innerHTML = orc.renderCharacter()