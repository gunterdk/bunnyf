// Function to type text with delay and handle line breaks correctly
function typeText(elementId, text, speed, callback) {
    let i = 0;
    let element = document.getElementById(elementId);
    
    function typeCharacter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeCharacter, speed);
        } else {
            // Callback to trigger the next typing phase
            if (callback) callback();
        }
    }

    typeCharacter();
}

// Text to type
const headingText = "Welcome, Operator!";
const firstParagraphText = "Accessing mainframe...";
const secondParagraphText = "System ready. Enter a command above to proceed.";

// Typing speed (milliseconds) - faster typing speed
const typingSpeed = 10; // Adjust the speed for typing effect

// Initialize typing effect for home page
window.onload = () => {
    const typedTextElement = document.getElementById("typed-text");

    // Type the heading text first
    typeText("typed-text", headingText, typingSpeed, () => {
        // Add a line break after the first text (without disturbing the glow)
        typedTextElement.innerHTML += "<br>";  // This ensures the line break works

        // After heading text, type the first paragraph (Accessing mainframe...)
        setTimeout(() => {
            typeText("typed-text", firstParagraphText, typingSpeed, () => {
                // Add a line break after the first paragraph
                typedTextElement.innerHTML += "<br>";

                // After first paragraph is done, type the second paragraph
                setTimeout(() => {
                    typeText("typed-text", secondParagraphText, typingSpeed);
                }, 300); // Delay before starting the second paragraph
            });
        }, 300); // Delay before starting the first paragraph
    });
};

function copyDiscordTag() {
    const discordTag = "gunter_dk"; // Replace with your actual Discord tag
    navigator.clipboard.writeText(discordTag).then(() => {
        alert("Discord tag copied to clipboard!");
    });
}

