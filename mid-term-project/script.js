const story = {
    start: {
        text: "You are a young shinobi aiming to leave a legacy. Do you choose the path of a warrior or a strategist?",
        choices: ["Warrior", "Strategist"],
        consequence: { "Warrior": "warriorPath", "Strategist": "strategistPath" },
        image: "1.jpeg"
    },
    warriorPath: {
        text: "You face your first mission alone. Do you confront the enemy head-on or try to outsmart them?",
        choices: ["Confront", "Outsmart"],
        consequence: { "Confront": "pathPeace", "Outsmart": "pathPower" },
        image: "2.jpeg"
    },
    strategistPath: {
        text: "You excel in strategy and gain allies. Do you lead an army or work as an undercover agent?",
        choices: ["Lead Army", "Undercover Agent"],
        consequence: { "Lead Army": "endLegacy", "Undercover Agent": "endRedemption" },
        image: "3.jpeg"
    },
    endHokage: {
        text: "Through sheer strength and determination, you become the Hokage, bringing peace to the village.",
        choices: [],
        image: "4.jpeg"
    },
    endSacrifice: {
        text: "You sacrifice yourself to save your comrades, becoming a legend for your bravery.",
        choices: [],
        image: "5.jpeg"
    },
    endLegacy: {
        text: "As a renowned leader, you leave behind a strong legacy that inspires future generations.",
        choices: [],
        image: "6.jpeg"
    },
    endRedemption: {
        text: "Working in the shadows, you redeem yourself from past mistakes, secretly protecting the village.",
        choices: [],
        image: "7.jpeg"
    },
    pathPeace: {
        text: "You strive for peace and diplomacy. Do you negotiate with other villages or focus on rebuilding your own?",
        choices: ["Negotiate", "Rebuild"],
        consequence: { "Negotiate": "endAlliance", "Rebuild": "endRebuild" },
        image: "8.jpeg"
    },
    pathPower: {
        text: "Power becomes your focus. Do you master forbidden jutsu or become a rogue ninja?",
        choices: ["Forbidden Jutsu", "Rogue Ninja"],
        consequence: { "Forbidden Jutsu": "endForbidden", "Rogue Ninja": "endRogue" },
        image: "9.jpeg"
    },
    endAlliance: {
        text: "Through diplomacy, you create an alliance among villages, achieving lasting peace.",
        choices: [],
        image: "10.jpeg"
    },
    endRebuild: {
        text: "Focusing on your own village, you restore it to greatness, making it a symbol of resilience.",
        choices: [],
        image: "11.jpeg"
    },
    endForbidden: {
        text: "You gain immense power but lose your humanity, becoming feared as a legend of the forbidden arts.",
        choices: [],
        image: "12.jpeg"
    },
    endRogue: {
        text: "Living as a rogue ninja, you carve out your path, known as the one who stood against all odds.",
        choices: [],
        image: "13.jpeg"
    }
};

let currentStage = 'start';

function startGame() {
    currentStage = 'start';
    updatePage();
}

function updatePage() {
    const stage = story[currentStage];
    document.getElementById('story').textContent = stage.text;

    const choicesSection = document.getElementById('choices');
    choicesSection.innerHTML = ''; // Clear previous choices

    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => {
            currentStage = stage.consequence[choice];
            if (currentStage.startsWith("end")) endGame();
            else updatePage();
        });
        choicesSection.appendChild(button);
    });

    document.getElementById('image-container').innerHTML = `<img src="${stage.image}" alt="Stage image">`;
}

function endGame() {
    const stage = story[currentStage];
    document.getElementById('story').textContent = stage.text;
    document.getElementById('choices').innerHTML = ''; // Remove choice buttons
    document.getElementById('image-container').innerHTML = `<img src="${stage.image}" alt="Ending image">`;
}

// Initialize game
startGame();
