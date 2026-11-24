// Function to display toast notification
function showToast(message) {
    let toast = document.getElementById("toast");

    toast.innerText = message;
    toast.style.display = "block";

    setTimeout(function() {
        toast.style.display = "none";
    }, 3000);
}

// Select all Book buttons
let bookButtons = document.querySelectorAll(".book-btn");

// Add click event to each Book button
bookButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        // Find the booking form
        let bookingForm = document.getElementById("booking");

        // Smoothly scroll to the booking form
        bookingForm.scrollIntoView({
            behavior: "smooth"
        });

        // Display notification
        showToast("Booking form opened!");
    });
});
