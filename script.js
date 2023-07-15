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

function heroRender(){
    let heroHtml=""
    heroHtml =`<div>I'm Hero</div>`
    document.getElementById('hero').innerHTML = heroHtml
}
heroRender()