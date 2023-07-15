
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
export {Character}