// additionalFunctionality.js

// Create the panel element
const panel = document.createElement('div');
panel.classList.add('panel');
document.body.appendChild(panel);

// Create the button container
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
panel.appendChild(buttonContainer);

// Create the "About Me" button
const aboutMeButton = document.createElement('button');
aboutMeButton.textContent = 'About Me';
aboutMeButton.classList.add('button', 'left-button');
buttonContainer.appendChild(aboutMeButton);

// Create the "Platforms" button
const platformsButton = document.createElement('button');
platformsButton.textContent = 'Platforms';
platformsButton.classList.add('button', 'right-button');
buttonContainer.appendChild(platformsButton);

// Create the divider
const divider = document.createElement('div');
divider.classList.add('divider');
buttonContainer.insertBefore(divider, platformsButton);

// Function to update the glow effect position
function updateGlowEffect(event) {
    const panelRect = panel.getBoundingClientRect();
    const x = event.clientX - panelRect.left;
    const y = event.clientY - panelRect.top;

    // Update panel glow
    panel.style.setProperty('--glow-x', `${x}px`);
    panel.style.setProperty('--glow-y', `${y}px`);
}

// Function to create the "About Me" section
function createAboutMeSection() {
    // Create the inner panel if it doesn't exist
    if (!document.querySelector('.inner-panel')) {
        const innerPanel = document.createElement('div');
        innerPanel.classList.add('inner-panel');
        panel.appendChild(innerPanel);
    }

    // Create the "About Me" section
    const aboutMeSection = document.createElement('div');
    aboutMeSection.classList.add('about-me-section');
    aboutMeSection.innerHTML = `
        <h2>About Me</h2>
        <img src="profile_picture.jpg" alt="Profile Picture" style="width: 100px; height: auto;">
        <img src="profile_picture_2.jpg" alt="Profile Picture" style="width: 100px; height: auto;">
        <p>Greetings! I'm someone who finds joy in both gaming and conversing with friends. My gaming journey spans across platforms like Minecraft, Roblox, Steam, and Epic Games. While I'm relatively new to achievement hunting, I'm eager to explore and conquer new challenges in the gaming world. Although I may come across as reserved initially, I'm always ready to connect and share experiences with others.</p>
    `;

    // Append the "About Me" section to the inner panel
    const innerPanel = document.querySelector('.inner-panel');
    innerPanel.innerHTML = '';
    innerPanel.appendChild(aboutMeSection);
}

// Function to create the "Platforms" section
function createPlatformsSection() {
    // Create the inner panel if it doesn't exist
    if (!document.querySelector('.inner-panel')) {
        const innerPanel = document.createElement('div');
        innerPanel.classList.add('inner-panel');
        panel.appendChild(innerPanel);
    }

    // Create the "Platforms" section
    const platformsSection = document.createElement('div');
    platformsSection.classList.add('platforms-section');
    platformsSection.innerHTML = `
        <h2>Platforms</h2>
        <p>Here is what Platforms/Games i play on.</p>
        <div class="image-links">
        <a href="https://steamcommunity.com/profiles/76561198105527577/" target="_blank">
            <img src="Steam_icon_logo.png" alt="Steam Picture" style="width: 100px; height: auto;" />
        </a>
        <img src="Epicgames_icon_logo.png" alt="Epic Games Picture" style="width: 90px; height: auto;">
        <a href="https://www.roblox.com/users/60938842/profile" target="_blank">
            <img src="Roblox_icon_logo.png" alt="Roblox Picture" style="width: 120px; height: auto;">
        </a>
        </div>
        
        <!-- Add more images as needed -->
        <h2>Games I Enjoy</h2>
        <h3>(Scroll Down)</h3>
        <div class="games-list">
            <div class="game-item">
                <a href="https://store.steampowered.com/app/440" target="_blank">
                    <img src="TF2.jpg" alt="Team Fortress 2" style="width: 320px; height: auto;">
                </a>
                <p>Team Fortress 2</p>
            </div>
            <div class="game-item">
                <a href="https://store.steampowered.com/app/2073850" target="_blank">
                    <img src="THEFINALS.jpg" alt="The Finals" style="width: 320px; height: auto;">
                </a>
                <p>The Finals</p>
            </div>
            <div class="game-item">
                <a href="https://store.steampowered.com/app/105600" target="_blank">
                    <img src="TERRARIA.jpg" alt="Terraria" style="width: 320px; height: auto;">
                </a>
                <p>Terraria</p>
            </div>
            <div class="game-item">
                <a href="https://store.steampowered.com/app/271590" target="_blank">
                    <img src="GTA5.jpg" alt="Grand Theft Auto V" style="width: 320px; height: auto;">
                </a>
                <p>Grand Theft Auto V</p>
            </div>
            <div class="game-item">
                <a href="https://store.steampowered.com/app/200210" target="_blank">
                    <img src="ROTMG.jpg" alt="Realm Of The Mad God Exalt" style="width: 320px; height: auto;">
                </a>
                <p>Realm Of The Mad God Exalt</p>
            </div>
            <div class="game-item">
                <a href="https://store.steampowered.com/app/367520" target="_blank">
                    <img src="HOLLOWKNIGHT.jpg" alt="Hollow Knight" style="width: 320px; height: auto;">
                </a>
                <p>Hollow Knight</p>
            </div>
            <div class="game-item">
                <a href="https://store.steampowered.com/app/1057090" target="_blank">
                    <img src="ORIANDTHEWILLOFTHEWISPS.jpg" alt="Ori And The Will Of The Wisps" style="width: 320px; height: auto;">
                </a>
                <p>Ori And The Will Of The Wisps</p>
            </div>
            <div class="game-item">
                <a href="https://store.steampowered.com/app/866800" target="_blank">
                    <img src="TWDG.jpg" alt="The Walking Dead Telltale" style="width: 320px; height: auto;">
                </a>
                <p>The Walking Dead Telltale (S 1-4)</p>
            </div>
            <div class="game-item">
                <a href="https://store.steampowered.com/app/990080" target="_blank">
                    <img src="HOGWARTSLEGACY.jpg" alt="Hogwarts Legacy" style="width: 320px; height: auto;">
                </a>
                <p>Hogwarts Legacy</p>
            </div>
            <div class="game-item">
                <a href="https://store.steampowered.com/app/1721470" target="_blank">
                    <img src="POPPYPLAYTIME.jpg" alt="Poppy Playtime" style="width: 320px; height: auto;">
                </a>
                <p>Poppy Playtime</p>
            </div>
            <div class="game-item">
                <a href="https://store.steampowered.com/app/1222680" target="_blank">
                    <img src="NFSHEAT.jpg" alt="Need for Speed™ Heat" style="width: 320px; height: auto;">
                </a>
                <p>Need for Speed™ Heat</p>
            </div>
            <div class="game-item">
                <a href="https://store.steampowered.com/app/1222680" target="_blank">
                    <img src="SACKBOYABIGADVENTURE.jpg" alt="Sackboy A Big Adventure" style="width: 320px; height: auto;">
                </a>
                <p>Sackboy A Big Adventure</p>
            </div>
            <div class="game-item">
                <a href="https://store.steampowered.com/app/1030840" target="_blank">
                    <img src="MAFIA.jpg" alt="Mafia Defenetive Edition" style="width: 320px; height: auto;">
                </a>
                <p>Mafia Defenetive Edition</p>
            </div>
            <div class="game-item">
                <a href="https://store.steampowered.com/app/1030840" target="_blank">
                    <img src="PROJECTZOMBOID.jpg" alt="Project Zomboid" style="width: 320px; height: auto;">
                </a>
                <p>Project Zomboid</p>
            </div>
            <div class="game-item">
                <a href="https://store.steampowered.com/app/1030840" target="_blank">
                    <img src="CSGO2.jpg" alt="Counter Strike 2" style="width: 320px; height: auto;">
                </a>
                <p>Counter Strike 2</p>
            </div>
        </div>
    `;

    // Append the "Platforms" section to the inner panel
    const innerPanel = document.querySelector('.inner-panel');
    innerPanel.innerHTML = '';
    innerPanel.appendChild(platformsSection);
}


// Create and show the "About Me" section when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    createAboutMeSection();
});

// Add mousemove event listener to the panel
panel.addEventListener('mousemove', event => {
    updateGlowEffect(event);
    panel.classList.add('active-glow');
});

panel.addEventListener('mouseleave', () => {
    panel.classList.remove('active-glow');
    document.querySelectorAll('.button').forEach(button => {
        button.classList.remove('active-glow');
    });
});

// Event listener for the "About Me" button
aboutMeButton.addEventListener('click', () => {
    createAboutMeSection();
});

// Event listener for the "Platforms" button
platformsButton.addEventListener('click', () => {
    createPlatformsSection();
});
