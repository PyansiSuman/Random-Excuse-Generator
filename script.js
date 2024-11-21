document.getElementById('generate-btn').addEventListener('click', generateExcuse);

const excuses = [
    "My alarm clock broke and I woke up at 12 PM. Blame the technology!",
    "I got into a deep philosophical conversation with my coffee mug.",
    "I accidentally fell asleep in the library... for 5 hours.",
    "My dog ate my homework... but this time, it was a group project.",
    "I got caught in traffic... on my way to the kitchen.",
    "I was busy saving the world... one nap at a time.",
    "I had to help my pet hamster escape from a tree.",
    "The universe just wasn’t in my favor today. Blame Mercury in retrograde."
];

function generateExcuse() {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    const excuse = excuses[randomIndex];
    
    const excuseDisplay = document.getElementById('excuse-display');
    excuseDisplay.innerHTML = `<p class="shake">${excuse}</p>`;  // Add animation class to shake the excuse
}
