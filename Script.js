
// let body = document.querySelector('body')
// body.setAttribute('style','color:teal')

// let newButton = document.createElement("button")
// body.appendChild(newButton);
// newButton.innerHTML = 'ADD';

// let i = 0;

// function addbuttonclick() {
//     // console.log('hit');
//     // alert("Good job clocking the button")
//     let newHeader = document.createElement('h2');
//     newHeader.innerHTML = 'Big Blue Balloon';
//     newHeader.setAttribute('id', i);
//     body.appendChild(newHeader);
//     i++
//     console.log(newHeader);
// }
// newButton.addEventListener('click',addbuttonclick)

// let newButton2 = document.createElement('button')
// body.appendChild(newButton2);
// newButton2.innerHTML = 'REMOVE';

// function removebuttonclick() {
//     toDelete = document.getElementById(i-1);
//     console.log(toDelete);
//     body.removeChild(toDelete);

//     i--;
// }

// newButton2.addEventListener('click',removebuttonclick);

// console.log(body);








let body = document.querySelector('body')
let newButton = document.createElement("button")
let newButton2 = document.createElement('button')
let i = 0;

body.setAttribute('style','color:teal')
body.appendChild(newButton);
body.appendChild(newButton2);
newButton.innerHTML = 'ADD';
newButton2.innerHTML = 'REMOVE';


newButton.addEventListener('click',addbuttonclick)
newButton2.addEventListener('click',removebuttonclick);

function addbuttonclick() {
    let newHeader = document.createElement('h2');
    
    newHeader.innerHTML = 'Big Blue Balloon';
    newHeader.setAttribute('id', i);
    body.appendChild(newHeader);
    
    i++;
}

function removebuttonclick() {
toDelete = document.getElementById(i-1);
   
    if (toDelete !== null) {
          
    console.log(toDelete);
    body.removeChild(toDelete);

    i--;
   } else {
       window.alert('Nothing to delete');
   }
}
