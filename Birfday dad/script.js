

const balloonContainer = document.getElementById("balloon-container");
const confettiContainer = document.getElementById("confetti-container");

const colors = [
    "#ff6b6b",
    "#4dabf7",
    "#ffd43b",
    "#cc5de8",
    "#69db7c",
    "#ffa94d"
];

// Create a floating balloon
function createBalloon() {
    const balloon = document.createElement("div");
    balloon.className = "party-balloon";

    balloon.style.left = Math.random() * 90 + "%";
    balloon.style.background = colors[
        Math.floor(Math.random() * colors.length)
    ];

    balloon.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    // Click a balloon to pop it!
    balloon.addEventListener("click", function() {
        createConfetti(15);
        balloon.remove();
    });

    balloonContainer.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 11000);
}

// Create falling confetti
function createConfetti(amount) {
    for (let i = 0; i < amount; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "%";
        piece.style.top = "-20px";

        piece.style.background = colors[
            Math.floor(Math.random() * colors.length)
        ];

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        confettiContainer.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6000);
    }
}

// Initial birthday celebration
if (balloonContainer && confettiContainer) {
    createConfetti(120);

    for (let i = 0; i < 8; i++) {
        setTimeout(createBalloon, i * 500);
    }

    // Keep releasing balloons
    setInterval(createBalloon, 1400);
}

// Personal birthday letter
const letterElement = document.getElementById("typed-letter");

if (letterElement) {

    const letterText =
        "Papa, you have been so amazing to me my entire life. " +
        "Everything you do for me, I adore and appreciate. " +
        "The love and effort you put in for me, I cherish every day. " +
        "With all my heart, thank you for always being there and supporting me. " +
        "I promise I'll make you proud.";

    let letterIndex = 0;

   
function typeLetter() {
    if (letterIndex < letterText.length) {
        letterElement.textContent += letterText.charAt(letterIndex);
        letterIndex++;

        setTimeout(typeLetter, 45);
    } else {
        document.querySelector(".letter-ending").classList.add("show");
    }
}


    // Start typing after the paper appears
    setTimeout(typeLetter, 1200);
}
