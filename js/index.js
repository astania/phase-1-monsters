document.addEventListener("DOMContentLoaded", () => {
get50Monsters()
})

//fetch requests

function get50Monsters(){
    fetch('http://localhost:3000/monsters/?_limit=50')
    .then(res => res.json())
    .then(monsterData => monsterData.forEach(monster => renderOneMonster(monster)))
}

//renderers

function renderOneMonster(monster){
    let monsterContainer = document.getElementById('monster-container')
    let card = document.createElement('div')
    let monsterName = document.createElement('h2')
    let monsterAge = document.createElement('h4')
    let monsterDescription = document.createElement('p')

    monsterName.innerHTML = monster.name
    monsterAge.innerHTML = `Age: ${monster.age}`
    monsterDescription.innerHTML = monster.description

    card.appendChild(monsterName)
    card.appendChild(monsterAge)
    card.appendChild(monsterDescription)
    monsterContainer.appendChild(card)
}


//event Handlers
const submitFormEvent = e => {
  e.preventDefault()
  fetch('http://localhost:3000/monsters', {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: nameInput.value,
      age: ageInput.value,
      description: descriptionInput.value
    })
  })
  .then(response => response.json())
  .then(monster => renderOneMonster(monster))
}

function load50MoreMonsters(){
  get50Monsters()
}


function removeLast50Monsters(){}

//form builder 
const h2 = document.createElement('h2')
const form = document.createElement('form')
const nameDiv = document.createElement('div')
const nameInput = document.createElement('input')
const nameLabel = document.createElement('label')
const ageDiv = document.createElement('div')
const ageInput = document.createElement('input')
const ageLabel = document.createElement('label')
const descriptionDiv = document.createElement('div')
const descriptionInput = document.createElement('input')
const descriptionLabel = document.createElement('label')
const submitButton = document.createElement('input')

nameInput.setAttribute('id', 'name')
nameInput.setAttribute('type', 'text')
nameLabel.setAttribute('for', 'name')
ageInput.setAttribute('id', 'age')
ageInput.setAttribute('type', 'text')
ageLabel.setAttribute('for', 'age')
descriptionInput.setAttribute('id', 'description')
descriptionInput.setAttribute('type', 'text')
descriptionLabel.setAttribute('for', 'description')
submitButton.setAttribute('type', 'submit')
submitButton.setAttribute('value', 'Create Monster')

h2.innerText = 'Create a Monster'
nameLabel.innerText = 'Monster name'
ageLabel.innerText = 'Monster age'
descriptionLabel.innerText= 'Monster description'

nameDiv.appendChild(nameInput)
nameDiv.appendChild(nameLabel)
ageDiv.appendChild(ageInput)
ageDiv.appendChild(ageLabel)
descriptionDiv.appendChild(descriptionInput)
descriptionDiv.appendChild(descriptionLabel)

form.appendChild(nameDiv)
form.appendChild(ageDiv)
form.appendChild(descriptionDiv)
form.appendChild(submitButton)

form.addEventListener('submit', submitFormEvent)


//Node getters
const createMonster = document.getElementById('create-monster')
const forwardButton = document.getElementById('forward')
const backwardButton = document.getElementById('back')

//doesn't find the create-monster id???
createMonster.appendChild(form)

//event listeners

forwardButton.addEventListener('click', load50MoreMonsters)
backwardButton.addEventListener('click', removeLast50Monsters)
