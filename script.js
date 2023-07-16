import {characterData} from './data.js'
import {Character} from './character.js'

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

function render(){
    document.getElementById(wizard.elementId).innerHTML = wizard.renderCharacter()
    document.getElementById(orc.elementId).innerHTML = orc.renderCharacter()
}
render()

document.getElementById('attack-button').addEventListener('click',()=>{
    wizard.takeDamage(wizard.currentDiceScore)
    orc.takeDamage(orc.currentDiceScore)
    render()
})