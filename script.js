// put all names into an array X
// forEach loop through the names array and place them inside <li> X
// give each <li> a number ordered data-index attribute X
// add a <span> element to each <li> with its number X
// add drag attribute to each <div> inside <li> to make them draggable X
// randomize list of names onload X
// two seperate loops for the <li> tags then another to randomize the names and insert them into the created <li> X
// possible fixes for randomized names
    // add .filter to randomize to filter out repeat name
// fix randomized names so as not to repeat
// create event listeners for drag
// data-index must match richestPeople index when placed in order
// name must turn green when in correct order after check order button is clicked


const list = document.getElementById('draggable-list');
const checkBtn = document.getElementById('check');

const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page'
  ];

// push ranomized richestPeople in this array
const listOfPeople = [];


// function to create DOM elements with listItem and index as parameters to be passed into listOfPeople.forEach
function createDOM(listItem, index) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="number">${index + 1}</span>
        <div id="drag" class="drag" draggable="true">
          <p class="person-name">${listItem}</p>
          <i class="fas fa-grip-lines" aria-hidden="true"></i>
        </div>
    
    `;
    li.setAttribute('data-index', index);
    list.appendChild(li);
}

//push random person into listOfPeople array
    // need to fix randomizer from choosing the same name twice
    // possible fix is .filter
    // loops only enough times as the length of richestPeople and ends after that number of times
    // needs to loop enough times to gather all names
richestPeople.forEach(listItem => {
    
        const person = richestPeople[Math.floor(Math.random() * richestPeople.length)]

        
         if (listOfPeople.includes(listItem)) {
            listOfPeople.slice(0, -1)
         } else {
             listOfPeople.push(person)
         }
         
    console.log(person)
})

// loop through listOfPeople and create DOM elements
listOfPeople.forEach( (listItem, index) => {
    createDOM(listItem,index)
})

