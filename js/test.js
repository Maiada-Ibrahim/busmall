'use strict';

// let index1EL = document.getElementById('index1')
// let index2EL = document.getElementById('index2')
// let index3EL = document.getElementById('index3')
let ulEl = document.getElementById('results');
let divEL = document.getElementById('divimg');

let imgarry=[]
let attempts=1;
let maxclick=25;
let objectarray = [];
let nameproarray=[];
let votes = [];
let views = [];

function Product(imgp) {
    this.namepro = imgp.split('.')[0]
    this.img = 'img/'+imgp
    this.views = 0
    this.votes = 0
    objectarray.push(this)
    nameproarray.push(this.namepro)
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


// let indexarray = [];
// let index0;
// let index1;
// let index2;
// function indexfun(){
//     indexarray = [];
//     index0 = creatrandom();
//     index1 = creatrandom();
//     index2 = creatrandom();
//     while ((index0 === index1) || (index0 === index2) || (index1 === index2)) {
//         if (index0 === index1) {
//             index1 = creatrandom()
//         } else if (index0 === index2) {
//             index2 = creatrandom()
//         } else {
//             index2 = creatrandom()
//         }

//     }
//     indexarray.push(index0)
//     indexarray.push(index1)
//     indexarray.push(index2)
 
// }
// indexfun();

let indexarrayfirsttime=[]
let indexarray = [];
let index0;
let index1;
let index2;
function indexfun(){
     indexarrayfirsttime= indexarray
    indexarray = [];
    index0 = creatrandom();
    index1 = creatrandom();
    index2 = creatrandom();
    while (    ( (index0 === index1)   ||   (indexarrayfirsttime.indexOf(index0) != -1  ) ||    (index0 === index2)      )   ||   ( (index1 === index2)   ||   (indexarrayfirsttime.indexOf(index1) != -1  ) ) ||      (indexarrayfirsttime.indexOf(index2) != -1  )        ) {
        if (  ( (index0 === index1)   ||   (indexarrayfirsttime.indexOf(index0) != -1  ) ||    (index0 === index2)      )) {
            index0 = creatrandom()
        } else if (( (index1 === index2)   ||   (indexarrayfirsttime.indexOf(index1) != -1  ) )) {
            index1 = creatrandom()
        } else {
            index2 = creatrandom()
        }

    }
    indexarray.push(index0)
    indexarray.push(index1)
    indexarray.push(index2)
    
    // console.log('first',indexarrayfirsttime)
    // console.log(indexarray)
}
indexfun();


// index1EL.setAttribute('src', objectarray[index1].img);
//  index2EL.setAttribute('src', objectarray[index2].img);
//  index3EL.setAttribute('src', objectarray[index3].img);
// console.log(indexarray.length)
let indexELarray=[]
 function render() {
   
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
divEL.addEventListener('click', handelClicks);

// indexELarray[0].addEventListener('click', handelClicks);
// indexELarray[1].addEventListener('click', handelClicks);
// indexELarray[2].addEventListener('click', handelClicks);
// index1EL.addEventListener('click', handelClicks);
// index2EL.addEventListener('click', handelClicks);
// index3EL.addEventListener('click', handelClicks);
function result(event) {
    for (let i = 0; i < objectarray.length; i++) {
        let liEl = document.createElement('li');
        liEl.textContent = `${objectarray[i].namepro} had ${objectarray[i].votes} votes and was seen ${objectarray[i].views} times .`
        ulEl.appendChild(liEl);
        views.push(objectarray[i].views);
        votes.push(objectarray[i].votes);
    }

    chartRender();
    saveToLocalStorage()
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
    // indexELarray[0].removeEventListener('click', handelClicks);
    // indexELarray[1].removeEventListener('click', handelClicks);
    // indexELarray[2].removeEventListener('click', handelClicks);}
 divEL.removeEventListener('click', handelClicks);

 
}
attempts++;
}
 



function saveToLocalStorage() {
    let data = JSON.stringify(objectarray);
    localStorage.setItem('busmall', data);
}
function readFromLocalStorage() {
    let stringObj = localStorage.getItem('busmall');
    // console.log(stringObj);
    let normalObj = JSON.parse(stringObj);
    // console.log(normalObj);
    if (normalObj !== null) {
        objectarray = normalObj;
        
    }
    // console.log(Coffee.drinks);
}
readFromLocalStorage();

function chartRender() {
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nameproarray,
            datasets: [{
                label: '# of Votes',
                data: votes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 2
            },
            {
                label: '# of views',
                data: views,
                backgroundColor: [
                    'rgba(0, 0, 255, 0.8)',
                ],
                borderColor: [
                    'rgba(155, 199, 120, 0.2)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}












