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
        { german: 'Fenster', english: 'window', gender: 'das', emoji: '🔲' },
        { german: 'Stuhl', english: 'chair', gender: 'der', emoji: '🪑' },
        { german: 'Tisch', english: 'table', gender: 'der', emoji: '🔳' },
        { german: 'Bett', english: 'bed', gender: 'das', emoji: '🛏️' },
        { german: 'Küche', english: 'kitchen', gender: 'die', emoji: '🍳' },
        { german: 'Badezimmer', english: 'bathroom', gender: 'das', emoji: '🛁' },
        { german: 'Wohnzimmer', english: 'living room', gender: 'das', emoji: '🛋️' },
        { german: 'Schlafzimmer', english: 'bedroom', gender: 'das', emoji: '🛏️' },
        { german: 'Lampe', english: 'lamp', gender: 'die', emoji: '💡' },
        { german: 'Spiegel', english: 'mirror', gender: 'der', emoji: '🔍' },
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
let isMainMenuDemo = true;
let demoWord = null;

// DOM elements
const screens = {
    mainMenu: document.getElementById('main-menu'),
    game: document.getElementById('game-screen'),
    results: document.getElementById('results-screen'),
    practice: document.getElementById('practice-screen')
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
    mainMenuBtn: document.getElementById('main-menu-btn'),
    gameMainMenuBtn: document.getElementById('game-main-menu-btn'),
    gamePlayAgainBtn: document.getElementById('game-play-again-btn'),
    practiceWordsBtn: document.getElementById('practice-words-btn'),
    practiceMainMenuBtn: document.getElementById('practice-main-menu-btn'),
    practiceCategories: document.getElementById('practice-categories'),
    gameAudioBtn: document.getElementById('game-audio-btn')
};

// Initialize the game
function init() {
    // Show random demo word on main menu
    showRandomDemoWord();

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
            if (isMainMenuDemo) {
                // Handle demo answer and start game from question 2
                handleDemoAnswer(selectedGender);
            } else {
                handleAnswer(selectedGender);
            }
        });
    });

    // Add event listeners for result buttons
    elements.playAgainBtn.addEventListener('click', () => {
        startGame(currentCategory);
    });

    elements.mainMenuBtn.addEventListener('click', () => {
        showScreen('mainMenu');
        showRandomDemoWord();
    });

    // Add event listeners for game navigation buttons
    elements.gameMainMenuBtn.addEventListener('click', () => {
        showScreen('mainMenu');
        showRandomDemoWord();
    });

    elements.gamePlayAgainBtn.addEventListener('click', () => {
        startGame(currentCategory);
    });

    // Add event listeners for practice screen
    elements.practiceWordsBtn.addEventListener('click', () => {
        showPracticeScreen();
    });

    elements.practiceMainMenuBtn.addEventListener('click', () => {
        showScreen('mainMenu');
        showRandomDemoWord();
    });

    // Add event listener for game audio button
    elements.gameAudioBtn.addEventListener('click', () => {
        if (isMainMenuDemo && demoWord) {
            playGameAudio(demoWord.german);
        } else if (currentQuestions[currentQuestionIndex]) {
            playGameAudio(currentQuestions[currentQuestionIndex].german);
        }
    });

    // Add click-away functionality for feedback popup
    elements.feedback.addEventListener('click', (e) => {
        if (e.target === elements.feedback) {
            elements.feedback.classList.add('hidden');
        }
    });
}

// Function to display word image (emoji or actual image)
function displayWordImage(word) {
    const imageElement = elements.wordEmoji;

    // Words that should use images instead of emojis
    const imageWords = {
        'Fenster': 'images/fenster.png',
        'Tisch': 'images/tisch.png',
        'Spiegel': 'images/spiegel.png',
        'Kühlschrank': 'images/kuehlschrank.png',
        'Ofen': 'images/ofen.png',
        'Lampe': 'images/lampe.png'
    };

    if (imageWords[word.german]) {
        // Use actual image
        imageElement.innerHTML = `<img src="${imageWords[word.german]}" alt="${word.german}" class="word-image-file">`;
    } else {
        // Use emoji
        imageElement.innerHTML = word.emoji;
    }
}

// Show random demo word on main menu
function showRandomDemoWord() {
    isMainMenuDemo = true;
    const allWords = getAllNouns();
    demoWord = allWords[Math.floor(Math.random() * allWords.length)];

    displayWordImage(demoWord);
    elements.wordName.textContent = demoWord.german;
    elements.wordTranslation.textContent = demoWord.english;

    // Reset demo display
    elements.genderButtons.forEach(btn => {
        btn.classList.remove('correct', 'incorrect', 'disabled');
    });
    elements.feedback.classList.add('hidden');

    // Show placeholder progress for demo
    elements.progressFill.style.width = '10%';
    elements.currentQuestion.textContent = '1';
    elements.currentScore.textContent = '0';
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
    isMainMenuDemo = false;
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
    displayWordImage(currentWord);
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

// Show practice screen with all words
function showPracticeScreen() {
    showScreen('practice');
    populatePracticeWords();
}

// Populate practice words by category
function populatePracticeWords() {
    const categoryIcons = {
        food: '🍕',
        technology: '💻',
        animals: '🐕',
        transport: '🚗',
        home: '🏠',
        nature: '🌳',
        clothing: '👕'
    };

    const categoryNames = {
        food: 'Food & Drinks',
        technology: 'Technology',
        animals: 'Animals',
        transport: 'Transportation',
        home: 'Home & Household',
        nature: 'Nature',
        clothing: 'Clothing'
    };

    let html = '';

    Object.keys(germanNouns).forEach(categoryKey => {
        const words = germanNouns[categoryKey];
        const icon = categoryIcons[categoryKey];
        const name = categoryNames[categoryKey];

        html += `
            <div class="practice-category">
                <h3>${icon} ${name}</h3>
                <div class="practice-word-list">
        `;

        words.forEach(word => {
            const imageWords = {
                'Fenster': 'images/fenster.png',
                'Tisch': 'images/tisch.png',
                'Spiegel': 'images/spiegel.png',
                'Kühlschrank': 'images/kuehlschrank.png',
                'Ofen': 'images/ofen.png',
                'Lampe': 'images/lampe.png'
            };

            const imageDisplay = imageWords[word.german]
                ? `<img src="${imageWords[word.german]}" alt="${word.german}" class="word-image-small">`
                : `<span class="word-emoji-small">${word.emoji}</span>`;

            html += `
                <div class="practice-word-item">
                    <div class="word-info">
                        ${imageDisplay}
                        <div class="word-text">
                            <span class="word-article ${word.gender}">${word.gender}</span>
                            <span class="word-german">${word.german}</span>
                        </div>
                        <span class="word-english">${word.english}</span>
                    </div>
                    <button class="audio-btn" onclick="playAudio('${word.german}')" aria-label="Play pronunciation of ${word.german}">
                        🔊
                    </button>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    elements.practiceCategories.innerHTML = html;
}

// Audio functionality (placeholder for now)
function playAudio(germanWord) {
    const audioBtn = event.target;

    // Add playing state
    audioBtn.classList.add('playing');

    // For now, use browser's speech synthesis (Text-to-Speech)
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(germanWord);
        utterance.lang = 'de-DE'; // German language
        utterance.rate = 0.8; // Slightly slower for learning

        utterance.onend = () => {
            audioBtn.classList.remove('playing');
        };

        speechSynthesis.speak(utterance);
    } else {
        // Fallback - just show the word was "played"
        setTimeout(() => {
            audioBtn.classList.remove('playing');
            alert(`Pronunciation: ${germanWord} (Audio not supported in this browser)`);
        }, 1000);
    }
}

// Handle demo answer and transition to real game
function handleDemoAnswer(selectedGender) {
    const correctGender = demoWord.gender;
    const isCorrect = selectedGender === correctGender;

    // Disable all buttons during feedback
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

    // Show feedback modal
    showFeedback(isCorrect, correctGender, demoWord.german);

    // Start real game after feedback, with demo question counting as question 1
    setTimeout(() => {
        startGameFromDemo('all', isCorrect, demoWord);
    }, 2000);
}

// Start game from demo (question 2)
function startGameFromDemo(category, demoWasCorrect, demoWordUsed) {
    isMainMenuDemo = false;
    currentCategory = category;
    currentQuestionIndex = 1; // Start from question 2
    score = demoWasCorrect ? 1 : 0; // Count demo result

    // Get questions for the category
    currentQuestions = getAllNouns();
    shuffleArray(currentQuestions);

    // Remove the demo word from questions to avoid repetition
    currentQuestions = currentQuestions.filter(word => word.german !== demoWordUsed.german);
    currentQuestions = currentQuestions.slice(0, totalQuestions - 1); // Take 9 more words
    currentQuestions.unshift(demoWordUsed); // Put demo word as first question (already answered)

    showScreen('game');
    displayQuestion();
}

// Game audio functionality
function playGameAudio(germanWord) {
    const audioBtn = elements.gameAudioBtn;
    audioBtn.classList.add('playing');

    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(germanWord);
        utterance.lang = 'de-DE';
        utterance.rate = 0.8;

        utterance.onend = () => {
            audioBtn.classList.remove('playing');
        };

        speechSynthesis.speak(utterance);
    } else {
        setTimeout(() => {
            audioBtn.classList.remove('playing');
        }, 1000);
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', init); 