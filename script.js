const button=document.createElement('button');
button.textContent='Click to see a list of my favorite games!';
document.body.appendChild(button);

//Creates button with text and attatches to my body

const list= document.createElement('ul');
document.body.appendChild(list);

//creates an unordered list and attaches to my body

button.addEventListener('click',() => {
    const entry = document.createElement('li');
    entry.textContent ='Hi','yes';
    list.appendChild(entry);

//adds an event that can tell when the button has been click
//attached list to entry
//Once button is pressed text will Appear

    button.style.color='blue';
    list.style.color='Red';

// Color of button and items inside list
    

});
