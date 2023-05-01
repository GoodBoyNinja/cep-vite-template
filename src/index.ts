import happy from '/hpy.svg'; // <-- items in /public are served from the root

let happyImage = document.createElement('img');
happyImage.src = happy;
happyImage.className = 'happy';
document.body.appendChild(happyImage);

console.log('Hello universe!')