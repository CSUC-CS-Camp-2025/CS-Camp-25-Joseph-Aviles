var games = ["Dead By daylight", "Dying Light", "Roblox",
    "Terraria", "Marvel Rivals","Sudoku"];

const PRESSME = document.createElement('button');
PRESSME.textContent = 'Click to see a list of my favorite games!';
 
//creates button with text (not clickable yet)

document.body.appendChild(PRESSME);
//attaches
const list = document.createElement('ul');
//creates unordered list
document.body.appendChild(list);
//attaches

PRESSME.addEventListener("click", () => {
   // adds click event to button (makes clickable)
    list.innerHTML = '';
    // inside list it will insert text
    games.forEach(game => {
        const entry = document.createElement('li');
        // for each text inside games it will create a list
        entry.textContent = game;
// text content of game
        entry.style.color = 'white';
        // changes the color of whatever is in entry
        list.appendChild(entry);
        //attaches entry inside list
    });
});