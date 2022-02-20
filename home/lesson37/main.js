// let user = {
//     name: 'Dmytro'
// }
// user[6] = 36
// console.log('user: ',user)

// for (let key in user) {
//     console.log(key, user[key])
// }

let users = []
let changeColor = () => {
    let usersColor = document.querySelectorAll('.user')
    for (const iterator of usersColor) {
        let red = Math.round(Math.random()*255)
        iterator.style.background = rgb($`{red}`,200,200)
    } 
}
let addUser = () => {
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let surname = document.getElementById('surname').value
    let user = {
        name,
        age,
        surname,
    }
    users.push(user)
    localStorage.setItem('new_users',JSON.stringify(users))
    console.log(users)
    let usersBlock = document.querySelector('.users')
    usersBlock.insertAdjacentHTML('beforeend',`
        <div class="user">
            <div class="name">${user.name}</div>
            <div class="age">${user['age']}</div>
            <div class="surname">${user['surname']}</div>
            <button onclick="changeColor()">color</button>
        </div>    
    `)
    }
let loadUsesr = () => {
    let loadedUsers = JSON.parse(localStorage.getItem('new_users'))
    console.log(loadedUsers)
    let usersBlock = document.querySelector('.users')
    for (const loadedUser of loadedUsers) {
        usersBlock.insertAdjacentHTML('beforeend', `
            <div class="user">
                <div class="name">${loadedUser.name}</div>
                <div class="age">${loadedUser['age']}</div>
                <div class="surname">${loadedUser['surname']}</div>
                <button onclick="changeColor()">Color</button>
            </div>
        `)
        users.push(loadedUser)
    }
}
async function fetchPlanet() {
    let number = document.getElementById("number").value
    let url = `https://swapi.dev/api/planets/${number}/`
    let response = await fetch(url);
    let planet
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
        planet = await response.json();
        console.log(planet)
    } else {
        console.log("Ошибка HTTP: " + response.status);
    }

    let fetchBlock = document.querySelector('.fetch')
    fetchBlock.insertAdjacentHTML('beforeend', `
        <div class="planet">
            <div class="name">${planet.name}</div>
            <div class="period">${planet.rotation_period}</div>
        </div>

    `)
}
async function fetchHero() {
    let number = document.getElementById("number").value
    let url = `https://swapi.dev/api/people/${number}/`
    let response = await fetch(url);
    let hero
    if (response.ok) { 
        hero = await response.json();
        console.log(hero)
    } else {
        console.log("Ошибка HTTP: " + response.status);
    }

    let fetchBlock1 = document.querySelector('.fetch')
    fetchBlock1.insertAdjacentHTML('beforeend', `
        <div class="hero">  
            <div class="name">${hero.name}</div>
            <div class="period">${hero.height}</div>
            <div class="period">${hero.skin_color}</div>
            
        </div>

    `)
}


