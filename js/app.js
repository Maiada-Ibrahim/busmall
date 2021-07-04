'use strict';
let divEL = document.getElementById('divimg')
let index1EL = document.getElementById('index1')
let index2EL = document.getElementById('index2')
let index3EL = document.getElementById('index3')


let objectarray = [];
function Product(imgp) {
    this.namepro = imgp.split('.')
    this.image = 'img/' + namepicarray
    this.viwe = 0
    this.votes = 0
    objectarray.push(this)
}
let namepicarray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg']



function createobject() {
    for (let i = 0; i < namepicarray.length; i++)
        new Product(namepicarray[i])
}
createobject();
function creatrandom() {
    return Math.floor(Math.random() * objectarray.length);
}
console.log(createobject());


let indexarray = [];
let index1;
let index2;
let index3;
function indexfun() {
    index1 = creatrandom()
    index2 = creatrandom()
    index3 = creatrandom()
    while ((index1 === index2) || (index1 === index3) || (index2 === index3)) {
        if (index1 === index2) {
            index2 = creatrandom()
        } else if (index1 === index3) {
            index3 = creatrandom()
        } else {
            index2 = creatrandom()
        }

    }
    // indexarray.push(index1)
    // indexarray.push(index2)
    // indexarray.push(index3)
 index1El.setAttribute('src', objectarray[index1].image);
 index2El.setAttribute('src', objectarray[index2].image);
 index3El.setAttribute('src', objectarray[index3].image);
}
indexfun();


// function render() {
//   for (let i = 0; i < indexarray.length; i++) {
 //         let index1EL = document.getElementById(`index` + i)
//         let index1EL = document.getElementById(`index` + i)
//         index1EL.setAttribute('src', objectarray[indexarray[i]].image);
//         divEL.appendChild(index1EL)



//     }
// }

//render();

index1EL.addEventListener('click', handelClicks);
index2EL.addEventListener('click', handelClicks);
index3EL.addEventListener('click', handelClicks);

