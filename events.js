// Script for Events page
console.log("Events page loaded successfully.");

// Example: Add a simple animation or interaction if needed later
// For now, it just confirms the script is running.
const cards = document.querySelectorAll('.event-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        console.log('Hovering over event: ' + card.querySelector('h3').innerText);
    });
});
