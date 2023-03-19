// https://pokeapi.co/api/v2/pokemon/

// fetch('https://pokeapi.co/api/v2/pokemon/1')
// .then((res) => {
//     console.log('resolved', res);
//     res.json()
//         .then((data) => console.log('done', data));
// })
// .catch((e) => {
//     console.log('error', e);
// })

//refactor and add second request
// fetch('https://pokeapi.co/api/v2/pokemon/1')
// .then((res) => {
//     console.log('first request');
//     return res.json();
// })
// .then((data) => { 
//     console.log(data)
//     return fetch('https://pokeapi.co/api/v2/pokemon/2')
//     .then((res) => {
//         console.log('second request')
//         return res.json();
//     })
// .then((data) => {
//     console.log(data)
// })
// })
// .catch((e) => {
//     console.log('error', e);
// })

//refactor into an async function with 2 requests and a try/catch 
// const getPokemon = async () => {
//     try {
//         const res = await fetch('https://pokeapi.co/api/v2/pokemon/3');
//         const data = await res.json()
//         console.log(data);
//         const res2 = await fetch('https://pokeapi.co/api/v2/pokemon/4');
//         const data2 = await res2.json()
//         console.log(data);
//     } catch (e) {
//         console.log(e)
//     }
// }

// getPokemon();

// refactor into a function to load any pokemon data
// const getPokemon2 = async (num) => {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
//     const data = await res.json();
//     console.log(data)
// }


// catch a pokemon game! *simple version*
// let catchButton = document.querySelector('#catch');
// let container = document.querySelector('#container')

// let randNum = () => {
//     return Math.floor(Math.random() * 100);
// }
// let num = randNum();

// const getPokeData = async () => {
//     let num = randNum();
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
//     const data = await res.json();
//     return data;
//     }

// const getPokeGame = async () => {
//     let pokeData = await getPokeData();
//     let num = pokeData.id
  
//     let newDiv = document.createElement('div');
//     let newImage = document.createElement('img');
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;
//     newDiv.append(newImage)
//     container.append(newDiv);

//     let imgName = document.createElement('span');
//     imgName.innerHTML = `${pokeData.name}`
//     container.append(imgName);
// }

// catchButton.addEventListener('click', getPokeGame)

// ** complicated version ** 

let pokeball = document.querySelector('#pokeball');
let container = document.querySelector('#container')

let randNum = () => {
    return Math.floor(Math.random() * 100);
}
let num = randNum();

const getPokeData = async () => {
    let num = randNum();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await res.json();
    return data;
    }

const getPokeGame = async () => {
    let pokeData = await getPokeData();
    let num = pokeData.id
  
    let newDiv = document.createElement('div');
    let newImage = document.createElement('img');
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;
    newDiv.append(newImage)
    container.append(newDiv);

    let imgName = document.createElement('span');
    imgName.innerHTML = `You caught a ${pokeData.name}`
    container.append(imgName);
}

const pokeFail = () => {
    let newDiv = document.createElement('div');
    let newImage = document.createElement('img');
    newImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEgMP1QV_sutwm_2CrQpnAdHAODtWzEfTtQ&usqp=CAU';
    newImage.style.width = '100px';
    newDiv.append(newImage);
    container.append(newDiv);

    let imgName = document.createElement('span');
    imgName.innerHTML = 'Oh no, your Pokemon got away!'
    container.append(imgName);

    let button = document.createElement('button');
    button.innerHTML= 'delete';
    newDiv.append(button);
} 

let randNum2 = () => {
    return Math.floor(Math.random() * 100);
}
let num2 = randNum();

const pokeTimer = () => {
    console.log('A wild pokemon appeared!');
    let num = randNum2();
    if (num <= 50){
    setTimeout(getPokeGame, 3000);
    } else {
        setTimeout(pokeFail, 3000);
    }
}

pokeball.addEventListener('click', pokeTimer);

