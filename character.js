
function Character(data){
    Object.assign(this,data)

    this.generateRandomNumbers = function(num){
        const numbers = new Array(num).fill(0).map(()=>{
            return Math.floor(Math.random() * 6) + 1
        })
        return numbers
      }

    this.takeDamage = function(numArray){
        let totalAttackScore = numArray.reduce((total,curr)=>total+curr)
        this.health -= totalAttackScore
        if(this.health<=0){
            this.health=0
        }
    }

      this.renderCharacter = function(){     
        const {elementId, name, avatar, health, diceCount, currentDiceScore} = this
        this.currentDiceScore = this.generateRandomNumbers(diceCount);
        console.log(this.currentDiceScore);

        const dicevalue = this.currentDiceScore.map((ele)=>{
            return `<div class="dice">${ele}</div>`
        }).join('')
        // this.takeDamage()
        return `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">${dicevalue}</div> `
        
    }
}
export {Character}