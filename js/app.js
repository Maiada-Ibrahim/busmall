'use strict';

// let index1EL = document.getElementById('index1')
// let index2EL = document.getElementById('index2')
// let index3EL = document.getElementById('index3')
let ulEl = document.getElementById('results');

let imgarry=[]
let attempts=1;
let maxclick=25;
let objectarray = [];
function Product(imgp) {
    this.namepro = imgp.split('.')[0]
    this.img = 'img/'+imgp
    this.views = 0
    this.votes = 0
    objectarray.push(this)
}
let namepicarray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg']



function createobject() {
    for (let i = 0; i < namepicarray.length; i++)
        new Product(namepicarray[i])
}
createobject();

// console.log(namepicarray);
// console.log(objectarray.length);



function creatrandom() {
    return Math.floor(Math.random() * objectarray.length);
}
creatrandom();
//console.log(creatrandom());

//console.log(objectarray.length);


let indexarray = [];
let index0;
let index1;
let index2;
function indexfun(){
    indexarray = [];
    index0 = creatrandom();
    index1 = creatrandom();
    index2 = creatrandom();
    while ((index0 === index1) || (index0 === index2) || (index1 === index2)) {
        if (index0 === index1) {
            index1 = creatrandom()
        } else if (index0 === index2) {
            index2 = creatrandom()
        } else {
            index2 = creatrandom()
        }

    }
    indexarray.push(index0)
    indexarray.push(index1)
    indexarray.push(index2)
 
}
indexfun();

// index1EL.setAttribute('src', objectarray[index1].img);
//  index2EL.setAttribute('src', objectarray[index2].img);
//  index3EL.setAttribute('src', objectarray[index3].img);
// console.log(indexarray.length)
let indexELarray=[]
 function render() {
    let divEL = document.getElementById('divimg')
    let indexEL;
  for (let i = 0; i < indexarray.length; i++) {
     
          indexEL = document.getElementById(`index` + (i));
         indexEL.setAttribute('src', objectarray[indexarray[i]].img);
         indexEL.setAttribute( 'alt',objectarray[indexarray[i]].namepro     );
         indexEL.setAttribute( 'title',objectarray[indexarray[i]].namepro)
         objectarray[indexarray[i]].views++;
         indexELarray.push(indexEL);


    }
} 
render();
indexELarray[0].addEventListener('click', handelClicks);
indexELarray[1].addEventListener('click', handelClicks);
indexELarray[2].addEventListener('click', handelClicks);
// index1EL.addEventListener('click', handelClicks);
// index2EL.addEventListener('click', handelClicks);
// index3EL.addEventListener('click', handelClicks);
function result(event) {
    for (let i = 0; i < objectarray.length; i++) {
        let liEl = document.createElement('li');
        liEl.textContent = `${objectarray[i].namepro} had ${objectarray[i].votes} votes and was seen ${objectarray[i].views} times .`
        ulEl.appendChild(liEl);
    }

}






function handelClicks(event)
{ if (attempts<=maxclick)
   { let clickedImg = event.target.id
   if (clickedImg === 'index0') {
    objectarray[index0].votes++;
}else if(clickedImg === 'index1')
{ objectarray[index1].votes++;
}else if (clickedImg === 'index2')
{ objectarray[index1].votes++;}
 indexfun();
 render();
 
}else{
    let btnEL=document.getElementById('btnid')
    btnEL.addEventListener('click', result);
    indexELarray[0].removeEventListener('click', handelClicks);
    indexELarray[1].removeEventListener('click', handelClicks);
    indexELarray[2].removeEventListener('click', handelClicks);}


 attempts++;
}


   















