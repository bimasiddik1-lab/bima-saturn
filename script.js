const quoteEl = document.getElementById('quote');
const memeEl = document.getElementById('meme');
const nextBtn = document.getElementById('nextBtn');
const themeBtn = document.getElementById('themeBtn');

let quotes = [
    "Jangan lupa makan, nanti codingan error 😆",
    "Code dulu, tidur belakangan 😴",
    "Debugging itu seni, bukan siksaan 😎",
    "Hidup itu seperti Git: commit dulu, push nanti"
];

let memes = ["memes/meme1.png", "memes/meme2.png", "memes/meme3.png"];

function getRandom(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function showRandomContent(){
    quoteEl.textContent = getRandom(quotes);
    memeEl.src = getRandom(memes);
}

// Next surprise button
nextBtn.addEventListener('click', showRandomContent);

// Theme toggle
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Load first content
showRandomContent();