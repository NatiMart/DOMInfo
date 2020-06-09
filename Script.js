
let body = document.querySelector('body')
body.setAttribute('style','color:teal')

let newButton = document.createElement('button')
body.appendChild(newButton);
newButton.innerHTML = 'ADD';

let i = 0;

function addbuttonclick() {
    // console.log('hit');
    // alert("Good job clocking the button")
    let newHeader = document.createElement('h2');
    newHeader.innerHTML = 'Big Blue Balloon';
    newHeader.setAttribute('id', i);
    body.appendChild(newHeader);
    console.log(newHeader);
}
newButton.addEventListener('click',addbuttonclick)

let newButton2 = document.createElement('button')
body.appendChild(newButton2);
newButton2.innerHTML = 'REMOVE';

function removebuttonclick() {
    // console.log('hit');
    // alert("Good job clocking the button")
let newHeader = document.createElement('h2');
newHeader.innerHTML = 'Big Blue Balloon';
body.appendChild(newHeader);


}
newButton2.addEventListener('click',removebuttonclick);

console.log(body);


