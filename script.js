// script.js

// Event Listener for Search Button
document.getElementById('search').addEventListener('click', function() {
    let searchQuery = document.querySelector('.search-bar input').value;
    if (searchQuery.trim() !== "") {
        alert("Searching for: " + searchQuery);
    } else {
        alert("Please enter a search query!");
    }
});

// Event Button Interactivity
const eventButtons = document.querySelectorAll('.event-buttons button');

eventButtons.forEach(button => {
    button.addEventListener('click', function() {
        eventButtons.forEach(b => b.classList.remove('active')); // Remove 'active' class from all buttons
        this.classList.add('active'); // Add 'active' class to the clicked button
        
        // You can add additional functionality here based on the button clicked
        if (this.textContent === "LIVE EVENTS") {
            alert("Viewing live events");
        } else if (this.textContent === "UPCOMING EVENTS") {
            alert("Viewing upcoming events");
        } else if (this.textContent === "PAST EVENTS") {
            alert("Viewing past events");
        }
    });
});

// Sign-in form validation
document.querySelector('#sign-in form').addEventListener('submit', function(event) {
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    
    if (!email || !password) {
        event.preventDefault(); // Prevent form submission if fields are empty
        alert("Please fill out both fields.");
    }
});
