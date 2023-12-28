//Styling elements as inline styling
const test = document.querySelector('h1');


test.style.color = "red";

console.log(test);

const newItems = document.querySelectorAll(".nav-link");


for (let i = 0; i < newItems.length; i++) {

    newItems[i].style.color = "blue";
}

//Creating Elements

const navie = document.querySelector('.nav-list');
const navieItem = document.createElement("li");
const anchor = document.createElement('a');

//Adding Elements

navie.append(navieItem)
navieItem.append(anchor)


anchor.innerText = "test nav"
anchor.href = 'about.html'

//Modify Attributes & Classes

navieItem.classList.add('nav-item')
anchor.classList.add('nav-link')

anchor.classList.remove('nav-link')

console.log(anchor.classList.contains('nav-link')) // should return false

//Remove Element

navieItem.remove();