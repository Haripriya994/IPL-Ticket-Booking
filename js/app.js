function showToast(message) {
    let toast = document.getElementById("toast");

    toast.innerText = message;
    toast.style.display = "block";

    setTimeout(function() {
        toast.style.display = "none";
    }, 3000);
}
let bookButtons = document.querySelectorAll(".book-btn");


bookButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        let bookingForm = document.getElementById("booking");

        bookingForm.scrollIntoView({
            behavior: "smooth"
        });

        showToast("Booking form opened!");
    });
});

let matchSelect = document.getElementById("matchSelect");
let standSelect = document.getElementById("standSelect");
let ticketQuantity = document.getElementById("ticketQuantity");

let summaryMatch = document.getElementById("summaryMatch");
let summaryStand = document.getElementById("summaryStand");
let summaryPrice = document.getElementById("summaryPrice");
let summaryQuantity = document.getElementById("summaryQuantity");
let summaryTotal = document.getElementById("summaryTotal");

function updateSummary() {

    let match = matchSelect.value;
    let stand = standSelect.value;
    let quantity = Number(ticketQuantity.value);

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

    let total = price * quantity;

    summaryMatch.innerText = match;
    summaryStand.innerText = stand;
    summaryPrice.innerText = price;
    summaryQuantity.innerText = quantity;
    summaryTotal.innerText = total;

    showToast("Booking summary updated!");
}

matchSelect.addEventListener("change", updateSummary);
standSelect.addEventListener("change", updateSummary);
ticketQuantity.addEventListener("change", updateSummary);

ticketQuantity.addEventListener("input", updateSummary);

let matchCards = document.querySelectorAll(".match-card");
let teamFilter = document.getElementById("teamFilter");

let gridBtn = document.getElementById("gridBtn");
let listBtn = document.getElementById("listBtn");

let matchContainer = document.getElementById("matchContainer");


teamFilter.addEventListener("change", function() {

    let selectedTeam = teamFilter.value;

    matchCards.forEach(function(card) {

        let teams = card.getAttribute("data-teams");

        if (selectedTeam === "All" || teams.includes(selectedTeam)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

    showToast("Match filter updated!");

});
gridBtn.addEventListener("click", function() {

    matchContainer.classList.remove("list-view");
    showToast("Grid view selected!");

});
listBtn.addEventListener("click", function() {

    matchContainer.classList.add("list-view");
    showToast("List view selected!");

});
let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    showToast("Navigation menu toggled!");

});
