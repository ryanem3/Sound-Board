//Create an array of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// for each sound, create a button and, add a class 'btn', update the text, append to DOM
sounds.forEach((sound) => {
    const btn = document.createElement('button');


    // Add a class of 'btn' to the button element
    btn.classList.add('btn');

    // set the button label text to the same as the string in the sounds array
    btn.innerText = sound;

    // add the button to the DOM, inside the div with an id of 'buttons'
    document.getElementById('buttons').appendChild(btn);
});