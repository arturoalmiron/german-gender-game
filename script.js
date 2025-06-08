// German nouns database with categories
const germanNouns = {
    food: [
        { german: 'Apfel', english: 'apple', gender: 'der', emoji: '🍎' },
        { german: 'Banane', english: 'banana', gender: 'die', emoji: '🍌' },
        { german: 'Brot', english: 'bread', gender: 'das', emoji: '🍞' },
        { german: 'Käse', english: 'cheese', gender: 'der', emoji: '🧀' },
        { german: 'Pizza', english: 'pizza', gender: 'die', emoji: '🍕' },
        { german: 'Wasser', english: 'water', gender: 'das', emoji: '💧' },
        { german: 'Kaffee', english: 'coffee', gender: 'der', emoji: '☕' },
        { german: 'Kuchen', english: 'cake', gender: 'der', emoji: '🍰' },
        { german: 'Milch', english: 'milk', gender: 'die', emoji: '🥛' },
        { german: 'Ei', english: 'egg', gender: 'das', emoji: '🥚' },
        { german: 'Fleisch', english: 'meat', gender: 'das', emoji: '🥩' },
        { german: 'Fisch', english: 'fish', gender: 'der', emoji: '🐟' },
        { german: 'Suppe', english: 'soup', gender: 'die', emoji: '🍲' },
        { german: 'Salat', english: 'salad', gender: 'der', emoji: '🥗' },
        { german: 'Reis', english: 'rice', gender: 'der', emoji: '🍚' }
    ],
    technology: [
        { german: 'Computer', english: 'computer', gender: 'der', emoji: '💻' },
        { german: 'Handy', english: 'phone', gender: 'das', emoji: '📱' },
        { german: 'Kamera', english: 'camera', gender: 'die', emoji: '📷' },
        { german: 'Internet', english: 'internet', gender: 'das', emoji: '🌐' },
        { german: 'Laptop', english: 'laptop', gender: 'der', emoji: '💻' },
        { german: 'Tastatur', english: 'keyboard', gender: 'die', emoji: '⌨️' },
        { german: 'Maus', english: 'mouse', gender: 'die', emoji: '🖱️' },
        { german: 'Bildschirm', english: 'screen', gender: 'der', emoji: '🖥️' },
        { german: 'Software', english: 'software', gender: 'die', emoji: '💿' },
        { german: 'Spiel', english: 'game', gender: 'das', emoji: '🎮' },
        { german: 'App', english: 'app', gender: 'die', emoji: '📲' },
        { german: 'Website', english: 'website', gender: 'die', emoji: '🌍' },
        { german: 'Email', english: 'email', gender: 'die', emoji: '📧' },
        { german: 'Drucker', english: 'printer', gender: 'der', emoji: '🖨️' },
        { german: 'Router', english: 'router', gender: 'der', emoji: '📡' }
    ],
    animals: [
        { german: 'Hund', english: 'dog', gender: 'der', emoji: '🐕' },
        { german: 'Katze', english: 'cat', gender: 'die', emoji: '🐱' },
        { german: 'Pferd', english: 'horse', gender: 'das', emoji: '🐴' },
        { german: 'Vogel', english: 'bird', gender: 'der', emoji: '🐦' },
        { german: 'Kuh', english: 'cow', gender: 'die', emoji: '🐄' },
        { german: 'Schwein', english: 'pig', gender: 'das', emoji: '🐷' },
        { german: 'Maus', english: 'mouse', gender: 'die', emoji: '🐭' },
        { german: 'Elefant', english: 'elephant', gender: 'der', emoji: '🐘' },
        { german: 'Löwe', english: 'lion', gender: 'der', emoji: '🦁' },
        { german: 'Tiger', english: 'tiger', gender: 'der', emoji: '🐅' },
        { german: 'Bär', english: 'bear', gender: 'der', emoji: '🐻' },
        { german: 'Schaf', english: 'sheep', gender: 'das', emoji: '🐑' },
        { german: 'Ziege', english: 'goat', gender: 'die', emoji: '🐐' },
        { german: 'Kaninchen', english: 'rabbit', gender: 'das', emoji: '🐰' },
        { german: 'Fisch', english: 'fish', gender: 'der', emoji: '🐠' }
    ],
    transport: [
        { german: 'Auto', english: 'car', gender: 'das', emoji: '🚗' },
        { german: 'Bus', english: 'bus', gender: 'der', emoji: '🚌' },
        { german: 'Zug', english: 'train', gender: 'der', emoji: '🚂' },
        { german: 'Flugzeug', english: 'airplane', gender: 'das', emoji: '✈️' },
        { german: 'Fahrrad', english: 'bicycle', gender: 'das', emoji: '🚲' },
        { german: 'Motorrad', english: 'motorcycle', gender: 'das', emoji: '🏍️' },
        { german: 'Schiff', english: 'ship', gender: 'das', emoji: '🚢' },
        { german: 'Taxi', english: 'taxi', gender: 'das', emoji: '🚕' },
        { german: 'U-Bahn', english: 'subway', gender: 'die', emoji: '🚇' },
        { german: 'Straßenbahn', english: 'tram', gender: 'die', emoji: '🚋' },
        { german: 'Hubschrauber', english: 'helicopter', gender: 'der', emoji: '🚁' },
        { german: 'Rakete', english: 'rocket', gender: 'die', emoji: '🚀' },
        { german: 'Boot', english: 'boat', gender: 'das', emoji: '⛵' },
        { german: 'LKW', english: 'truck', gender: 'der', emoji: '🚛' },
        { german: 'Roller', english: 'scooter', gender: 'der', emoji: '🛴' }
    ],
    home: [
        { german: 'Haus', english: 'house', gender: 'das', emoji: '🏠' },
        { german: 'Tür', english: 'door', gender: 'die', emoji: '🚪' },
        { german: 'Fenster', english: 'window', gender: 'das', emoji: '🪟' },
        { german: 'Stuhl', english: 'chair', gender: 'der', emoji: '🪑' },
        { german: 'Tisch', english: 'table', gender: 'der', emoji: '🪑' },
        { german: 'Bett', english: 'bed', gender: 'das', emoji: '🛏️' },
        { german: 'Küche', english: 'kitchen', gender: 'die', emoji: '🍳' },
        { german: 'Badezimmer', english: 'bathroom', gender: 'das', emoji: '🛁' },
        { german: 'Wohnzimmer', english: 'living room', gender: 'das', emoji: '🛋️' },
        { german: 'Schlafzimmer', english: 'bedroom', gender: 'das', emoji: '🛏️' },
        { german: 'Lampe', english: 'lamp', gender: 'die', emoji: '💡' },
        { german: 'Spiegel', english: 'mirror', gender: 'der', emoji: '🪞' },
        { german: 'Kühlschrank', english: 'refrigerator', gender: 'der', emoji: '❄️' },
        { german: 'Ofen', english: 'oven', gender: 'der', emoji: '🔥' },
        { german: 'Sofa', english: 'sofa', gender: 'das', emoji: '🛋️' }
    ],
    nature: [
        { german: 'Baum', english: 'tree', gender: 'der', emoji: '🌳' },
        { german: 'Blume', english: 'flower', gender: 'die', emoji: '🌸' },
        { german: 'Berg', english: 'mountain', gender: 'der', emoji: '⛰️' },
        { german: 'See', english: 'lake', gender: 'der', emoji: '🏞️' },
        { german: 'Meer', english: 'sea', gender: 'das', emoji: '🌊' },
        { german: 'Sonne', english: 'sun', gender: 'die', emoji: '☀️' },
        { german: 'Mond', english: 'moon', gender: 'der', emoji: '🌙' },
        { german: 'Stern', english: 'star', gender: 'der', emoji: '⭐' },
        { german: 'Regen', english: 'rain', gender: 'der', emoji: '🌧️' },
        { german: 'Schnee', english: 'snow', gender: 'der', emoji: '❄️' },
        { german: 'Wind', english: 'wind', gender: 'der', emoji: '💨' },
        { german: 'Wolke', english: 'cloud', gender: 'die', emoji: '☁️' },
        { german: 'Gras', english: 'grass', gender: 'das', emoji: '🌱' },
        { german: 'Blatt', english: 'leaf', gender: 'das', emoji: '🍃' },
        { german: 'Stein', english: 'stone', gender: 'der', emoji: '🪨' }
    ],
    clothing: [
        { german: 'Hemd', english: 'shirt', gender: 'das', emoji: '👔' },
        { german: 'Hose', english: 'pants', gender: 'die', emoji: '👖' },
        { german: 'Kleid', english: 'dress', gender: 'das', emoji: '👗' },
        { german: 'Jacke', english: 'jacket', gender: 'die', emoji: '🧥' },
        { german: 'Schuhe', english: 'shoes', gender: 'die', emoji: '👞' },
        { german: 'Hut', english: 'hat', gender: 'der', emoji: '👒' },
        { german: 'Socken', english: 'socks', gender: 'die', emoji: '🧦' },
        { german: 'Mantel', english: 'coat', gender: 'der', emoji: '🧥' },
        { german: 'T-Shirt', english: 't-shirt', gender: 'das', emoji: '👕' },
        { german: 'Rock', english: 'skirt', gender: 'der', emoji: '👗' },
        { german: 'Pullover', english: 'sweater', gender: 'der', emoji: '👚' },
        { german: 'Handschuhe', english: 'gloves', gender: 'die', emoji: '🧤' },
        { german: 'Schal', english: 'scarf', gender: 'der', emoji: '🧣' },
        { german: 'Gürtel', english: 'belt', gender: 'der', emoji: '👔' },
        { german: 'Unterwäsche', english: 'underwear', gender: 'die', emoji: '👙' }
    ]
};

// Game state
let currentCategory = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 10;

// DOM elements
const screens = {
    mainMenu: document.getElementById('main-menu'),
    game: document.getElementById('game-screen'),
    results: document.getElementById('results-screen')
};

const elements = {
    categoryButtons: document.querySelectorAll('.category-btn'),
    progressFill: document.querySelector('.progress-fill'),
    currentQuestion: document.getElementById('current-question'),
    currentScore: document.getElementById('current-score'),
    wordEmoji: document.getElementById('word-emoji'),
    wordName: document.getElementById('word-name'),
    wordTranslation: document.getElementById('word-translation'),
    genderButtons: document.querySelectorAll('.gender-btn'),
    feedback: document.getElementById('feedback'),
    feedbackIcon: document.getElementById('feedback-icon'),
    feedbackText: document.getElementById('feedback-text'),
    correctAnswer: document.getElementById('correct-answer'),
    finalScore: document.getElementById('final-score'),
    scoreMessage: document.getElementById('score-message'),
    playAgainBtn: document.getElementById('play-again-btn'),
    mainMenuBtn: document.getElementById('main-menu-btn')
};

// Initialize the game
function init() {
    // Add event listeners for category buttons
    elements.categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            startGame(category);
        });
    });

    // Add event listeners for gender buttons
    elements.genderButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedGender = btn.dataset.gender;
            handleAnswer(selectedGender);
        });
    });

    // Add event listeners for result buttons
    elements.playAgainBtn.addEventListener('click', () => {
        startGame(currentCategory);
    });

    elements.mainMenuBtn.addEventListener('click', () => {
        showScreen('mainMenu');
    });

    // Add click-away functionality for feedback popup
    elements.feedback.addEventListener('click', (e) => {
        if (e.target === elements.feedback) {
            elements.feedback.classList.add('hidden');
        }
    });
}

// Screen management
function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    screens[screenName].classList.add('active');
}

// Start a new game
function startGame(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;

    // Get questions for the category
    if (category === 'all') {
        currentQuestions = getAllNouns();
    } else {
        currentQuestions = [...germanNouns[category]];
    }

    // Shuffle and take 10 questions
    shuffleArray(currentQuestions);
    currentQuestions = currentQuestions.slice(0, totalQuestions);

    showScreen('game');
    displayQuestion();
}

// Get all nouns from all categories
function getAllNouns() {
    let allNouns = [];
    Object.values(germanNouns).forEach(category => {
        allNouns = allNouns.concat(category);
    });
    return allNouns;
}

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Display current question
function displayQuestion() {
    const currentWord = currentQuestions[currentQuestionIndex];

    // Update progress
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    elements.progressFill.style.width = `${progress}%`;

    // Update question info
    elements.currentQuestion.textContent = currentQuestionIndex + 1;
    elements.currentScore.textContent = score;

    // Update word display
    elements.wordEmoji.textContent = currentWord.emoji;
    elements.wordName.textContent = currentWord.german;
    elements.wordTranslation.textContent = currentWord.english;

    // Reset gender buttons
    elements.genderButtons.forEach(btn => {
        btn.classList.remove('correct', 'incorrect', 'disabled');
    });

    // Hide feedback
    elements.feedback.classList.add('hidden');
}

// Handle answer selection
function handleAnswer(selectedGender) {
    const currentWord = currentQuestions[currentQuestionIndex];
    const correctGender = currentWord.gender;
    const isCorrect = selectedGender === correctGender;

    // Disable all buttons
    elements.genderButtons.forEach(btn => {
        btn.classList.add('disabled');
    });

    // Show visual feedback on buttons
    elements.genderButtons.forEach(btn => {
        const btnGender = btn.dataset.gender;
        if (btnGender === correctGender) {
            btn.classList.add('correct');
        } else if (btnGender === selectedGender && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Update score
    if (isCorrect) {
        score++;
    }

    // Show feedback modal
    showFeedback(isCorrect, correctGender, currentWord.german);

    // Move to next question or end game after delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuestions) {
            displayQuestion();
        } else {
            endGame();
        }
    }, 2000);
}

// Show feedback modal
function showFeedback(isCorrect, correctGender, germanWord) {
    elements.feedbackIcon.textContent = isCorrect ? '✅' : '❌';
    elements.feedbackText.textContent = isCorrect ? 'Richtig!' : 'Falsch!';
    elements.correctAnswer.textContent = `${correctGender} ${germanWord}`;

    elements.feedback.classList.remove('hidden');
}

// End the game and show results
function endGame() {
    // Hide feedback popup before showing results
    elements.feedback.classList.add('hidden');

    elements.finalScore.textContent = `${score} / ${totalQuestions}`;

    // Set score message based on performance
    const percentage = (score / totalQuestions) * 100;
    let message = '';

    if (percentage === 100) {
        message = '🏆 Perfekt! Du bist ein Deutscher Experte!';
    } else if (percentage >= 80) {
        message = '🎉 Sehr gut! Du kennst dich aus!';
    } else if (percentage >= 60) {
        message = '👍 Gut gemacht! Weiter so!';
    } else if (percentage >= 40) {
        message = '📚 Nicht schlecht, aber da geht noch mehr!';
    } else {
        message = '💪 Übung macht den Meister! Versuche es nochmal!';
    }

    elements.scoreMessage.textContent = message;
    showScreen('results');
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', init); 