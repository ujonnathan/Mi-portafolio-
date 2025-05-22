const screens = {
    start: document.getElementById('screen-start'),
    roblox: document.getElementById('screen-roblox'),
    minecraft: document.getElementById('screen-minecraft'),
    anime: document.getElementById('screen-anime'),
    final: document.getElementById('screen-final')
};

const correctAnswers = {
    roblox: '/e dance',
    minecraft: 'Antorchas',
    anime: 'Shonen'
};

let currentScreen = 'start';

function showScreen(screenName) {
    // Ocultar todas las pantallas
    for (const key in screens) {
        screens[key].classList.remove('active');
    }
    // Mostrar la pantalla deseada
    screens[screenName].classList.add('active');
    currentScreen = screenName;
}

function startGame() {
    showScreen('roblox');
}

function checkAnswer(level, selectedAnswer) {
    const feedbackEl = document.getElementById(`feedback-${level}`);
    if (selectedAnswer === correctAnswers[level]) {
        feedbackEl.textContent = "¡Correcto! Avanzando...";
        feedbackEl.className = 'feedback correct'; // Clase para color verde
        // Esperar un poco antes de pasar a la siguiente pantalla
        setTimeout(() => {
            if (level === 'roblox') {
                showScreen('minecraft');
            } else if (level === 'minecraft') {
                showScreen('anime');
            } else if (level === 'anime') {
                showScreen('final');
            }
        }, 1500); // 1.5 segundos
    } else {
        feedbackEl.textContent = "¡Oh no! Intenta de nuevo.";
        feedbackEl.className = 'feedback incorrect'; // Clase para color rojo
    }
}

// Inicializar: Mostrar solo la pantalla de inicio
showScreen('start');

// --- Personalización ---
// Reemplaza [NOMBRE DE TU HIJA] en index.html
// Reemplaza los códigos de regalo en index.html en #screen-final
// Si quieres usar imágenes, descomenta las líneas <img> en index.html
// y el bloque /* img { ... } */ en style.css, y pon tus propios links.
// Puedes cambiar las preguntas y respuestas en index.html y en `correctAnswers` en este archivo.