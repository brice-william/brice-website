// Project card interaction
document.addEventListener('DOMContentLoaded', function() {
    console.log("Projects.js loaded");
    
    const projectCards = document.querySelectorAll('.project-card');
    console.log("Found " + projectCards.length + " project cards");
    
    // Function to close all project cards
    function closeAllCards() {
        projectCards.forEach(card => {
            card.classList.remove('active');
        });
    }
    
    // Add click event to each project card
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            console.log("Card clicked");
            
            // Prevent click on links from triggering card toggle
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                console.log("Link clicked, not toggling card");
                return;
            }
            
            // Check if the card is already active
            const isActive = this.classList.contains('active');
            
            // Close all cards first
            closeAllCards();
            
            // If the card wasn't active, make it active
            if (!isActive) {
                this.classList.add('active');
                console.log("Card activated");
            } else {
                console.log("Card deactivated");
            }
        });
    });
    
    // Add click event to document to close cards when clicking outside
    document.addEventListener('click', function(e) {
        // Check if click is outside any project card
        if (!e.target.closest('.project-card')) {
            closeAllCards();
            console.log("Clicked outside cards, all closed");
        }
    });
}); 