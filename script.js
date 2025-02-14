
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button1');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function handle1Click() {
    window.location.href = "firstValentine.html";
}

function handle2Click() {
    window.location.href = "secondValentine.html";
}

function handle3Click() {
    window.location.href = "thirdValentine.html";
}

// Function to redirect to yes_page.html when 'Yes' button is clicked
function nextPage() {
    window.location.href = 'yes_page.html';
}
function nextPage1() {
    window.location.href = 'yes.html';
}

// Function to make the 'No' button move to random positions with animations
function moveButton() {
    const button = document.getElementById('noButton');
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.transition = 'all 0.3s ease';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
    button.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.8 + Math.random() * 0.4})`;
}