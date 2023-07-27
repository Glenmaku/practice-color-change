// //destructuring array
// const cat1 = {
//     name : 'mingming',
//     age : 2,
//     birthday : 'July',
//     ethnicity : 'puspin',
//     address : 'calamba',
// }

// const {name: pangalan, age: edad, birthday : kaarawan, address = 'VDC'} = cat1;

const h1 = document.querySelector('.h1'); 
const button = document.querySelector('button');
const body = document.querySelector('body');
button.addEventListener('click', () => {
    color = randomcolor()
    body.style.backgroundColor = color;
    h1.innerText = color;

})

const randomcolor = () => {

    const one = Math.floor(Math.random() * 256);
    const two = Math.floor(Math.random() * 256);
    const three = Math.floor(Math.random() * 256);
    const color = `rgb(${one},${two},${three})`;
    return color;
}













