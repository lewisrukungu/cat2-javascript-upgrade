const products = [
    {
        name: "Perfumes",
        description: "Long-lasting fragrances for men and women, perfect for daily wear and special occasions."
    },
    {
        name: "Hair Extensions",
        description: "Stylish and affordable hair extensions designed to help you look your best with confidence."
    },
    {
        name: "Jewellery",
        description: "Elegant and fashionable jewellery pieces that add the perfect finishing touch to your look."
    },
    {
        name: "Shower Items",
        description: "Quality shower gels, soaps, body sprays, and personal care essentials for everyday freshness."
    }
];
products.forEach(function(product) {
    let card = document.createElement("article");
    card.classList.add("card");
    card.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
    `;
    document.querySelector(".menu-container").appendChild(card);
});  

//Wishlist functionality
let wishlistInput = document.querySelector("#wishlist-input");
let wishlistButton = document.querySelector("#wishlist-button");
let wishlistItems = document.querySelector("#wishlist-items");

wishlistButton.addEventListener("click", function() {
    event.preventDefault();

    let wishlistInputValue = wishlistInput.value();

    if (wishlistInputValue.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = wishlistInputValue;
        let button = document.createElement("button");
        button.textContent = "Remove";
        button.addEventListener("click", function() {
            li.remove();
        });
        li.appendChild(button);
        wishlistItems.appendChild(li);
        wishlistInput.value = "";
    }
});

//Contact form functionality
let feedbackForm = document.querySelector("#feedback-form");
let feedbackOutput = document.querySelector("#feedbackOutput");

feedbackForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let message = document.querySelector("#message");

    if (name.value() === "" || email.value() === "" || message.value() === "") {
        feedbackOutput.textContent = "Please fill in all fields.";
        feedbackOutput.style.color = "red";
    } else {
        feedbackOutput.textContent = "Thank you for your feedback!";
        feedbackOutput.style.color = "green";
        feedbackForm.reset();
    }
});

