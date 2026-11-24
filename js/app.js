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

// Get booking form elements
let matchSelect = document.getElementById("matchSelect");
let standSelect = document.getElementById("standSelect");
let ticketQuantity = document.getElementById("ticketQuantity");

// Get summary elements
let summaryMatch = document.getElementById("summaryMatch");
let summaryStand = document.getElementById("summaryStand");
let summaryPrice = document.getElementById("summaryPrice");
let summaryQuantity = document.getElementById("summaryQuantity");
let summaryTotal = document.getElementById("summaryTotal");

// Function to update booking summary
function updateSummary() {

    let match = matchSelect.value;
    let stand = standSelect.value;
    let quantity = Number(ticketQuantity.value);

    // Set ticket prices
    let price = 0;

    if (match === "CSK vs MI") {
        if (stand === "General") {
            price = 800;
        } else if (stand === "Premium") {
            price = 1500;
        } else {
            price = 3000;
        }
    } 
    else if (match === "RCB vs KKR") {
        if (stand === "General") {
            price = 1000;
        } else if (stand === "Premium") {
            price = 2000;
        } else {
            price = 4000;
        }
    }

    // Calculate total amount
    let total = price * quantity;

    // Update booking summary
    summaryMatch.innerText = match;
    summaryStand.innerText = stand;
    summaryPrice.innerText = price;
    summaryQuantity.innerText = quantity;
    summaryTotal.innerText = total;

    // Show notification
    showToast("Booking summary updated!");
}

// Add change event listeners
matchSelect.addEventListener("change", updateSummary);
standSelect.addEventListener("change", updateSummary);
ticketQuantity.addEventListener("change", updateSummary);

// Update summary when quantity is typed
ticketQuantity.addEventListener("input", updateSummary);
