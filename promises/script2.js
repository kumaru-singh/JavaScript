// Check if the browser supports Web Speech API
if (!('webkitSpeechRecognition' in window) || !('speechSynthesis' in window)) {
    alert("Your browser does not support the Web Speech API. Please use Google Chrome.");
}

// Initialize Speech Recognition API
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;

let isListening = false;

const startBtn = document.getElementById("start-btn");
const transcriptDisplay = document.getElementById("transcript");
const responseDisplay = document.getElementById("response");

// Start or stop listening
startBtn.addEventListener("click", () => {
    if (isListening) {
        recognition.stop();
        isListening = false;
        startBtn.innerText = "🎤 Start Listening";
    } else {
        recognition.start();
        isListening = true;
        startBtn.innerText = "🛑 Stop Listening";
    }
});

// Process speech input
recognition.onresult = function (event) {
    let speech = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
    transcriptDisplay.innerText = speech;

    if (speech.includes("hey assistant")) {
        speak("Yes, how can I help you?", "en-US");
    } else {
        processCommand(speech);
    }
};

// Handle recognition errors
recognition.onerror = function (event) {
    console.error("Speech Recognition Error:", event.error);
};

// Process user commands
function processCommand(input) {
    let response = "";
    let lang = "en-US"; // default language

    if (input.includes("hello") || input.includes("hi")) {
        response = "Hello! How can I assist you?";
    } else if (input.includes("what's your name")) {
        response = "I am your AI Voice Assistant!";
    } else if (input.includes("search for")) {
        let query = input.replace("search for", "").trim();
        response = `Searching Google for ${query}`;
        window.open(`https://www.google.com/search?q=${query}`);
    } else if (input.includes("wikipedia")) {
        let query = input.replace("wikipedia", "").trim();
        response = `Searching Wikipedia for ${query}`;
        window.open(`https://en.wikipedia.org/wiki/${query}`);
    } else if (input.includes("weather")) {
        response = "Checking the weather...";
        window.open("https://www.weather.com/");
    } else if (input.includes("time")) {
        response = `The current time is ${new Date().toLocaleTimeString()}`;
    } else if (input.includes("open calculator")) {
        response = "Opening calculator...";
        window.open("calculator://");}
     else if (input.includes("open camera")) {
        response = "Opening camera..";
         window.open("camera://");
    } else if (input.includes("こんにちは")) {
        response = "こんにちは！ご用件は何ですか？";
        lang = "ja-JP";
    } else if (input.includes("hola")) {
        response = "¡Hola! ¿En qué puedo ayudarte?";
        lang = "es-ES";
    } else if (input.includes("bonjour")) {
        response = "Bonjour ! Comment puis-je vous aider ?";
        lang = "fr-FR";
    } else {
        response = "Sorry, I didn't understand that.";
    }

    responseDisplay.innerText = response;
    speak(response, lang);
}

// Multilingual Speak Function
function speak(text, lang = 'en-US') {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 1;
    utterance.pitch = 1;

    const voices = synth.getVoices();
    const matchingVoices = voices.filter(voice => voice.lang.startsWith(lang));
    if (matchingVoices.length > 0) {
        utterance.voice = matchingVoices[0];
    } else {
        console.warn(`No voice found for ${lang}. Using default.`);
    }

    synth.speak(utterance);
}

// Load voices properly (Chrome requires this to populate voices list)
window.speechSynthesis.onvoiceschanged = () => {
    // Load voices into cache
    window.speechSynthesis.getVoices();
};
