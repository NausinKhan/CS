document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chat-messages");
    const userMessageInput = document.getElementById("user-message");
    const sendButton = document.getElementById("send-button");

    // Simulated initial message from the seller
    displayMessage("Seller", "Welcome to our e-commerce store! How can I assist you?");

    sendButton.addEventListener("click", function() {
        const userMessage = userMessageInput.value;
        if (userMessage) {
            // Display the user's message in the chat
            displayMessage("Buyer", userMessage);

            // Simulate a response from the seller (you can replace this with actual logic)
            simulateSellerResponse(userMessage);

            // Clear the user input field
            userMessageInput.value = "";
        }
    });

    function displayMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender.toLowerCase());
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function simulateSellerResponse(userMessage) {
        setTimeout(function() {
            const sellerResponse = getResponseForMessage(userMessage);
            displayMessage("Seller", sellerResponse);
        }, 1000);
    }

    function getResponseForMessage(userMessage) {
        const message = userMessage.toLowerCase();
    
        if (message.includes("product")) {
            return "We have a wide range of products available. Can you specify what you're looking for?";
        } else if (message.includes("order")) {
            return "Sure, please provide your order number so I can assist you further.";
        } else if (message.includes("delivery")) {
            return "Our standard delivery time is 2-3 business days. If you need expedited delivery, please let me know.";
        } else if (message.includes("price")) {
            return "Prices for our products vary. Could you specify the product you're interested in?";
        } else if (message.includes("returns") || message.includes("refund")) {
            return "We have a 30-day return policy. Please check our returns page for more information.";
        } else if (message.includes("contact") || message.includes("phone")) {
            return "You can reach our customer support at 1-800-123-4567 for further assistance.";
        } else if (message.includes("discount") || message.includes("coupon")) {
            return "We have ongoing discounts for selected products. Please visit our 'Offers' page for more information.";
        } else if (message.includes("out of stock")) {
            return "I apologize, but the product you're looking for is currently out of stock. Would you like to explore alternatives?";
        } else {
            return "Thank you for your message. How can I assist you?";
        }
    }
    
});
