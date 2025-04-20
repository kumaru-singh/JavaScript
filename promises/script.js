// Check if the browser supports the Web Speech API
if (!('webkitSpeechRecognition' in window)) {
    alert("Your browser does not support speech recognition. Please use Chrome or Edge.");
}

// Initialize Speech Recognition API
const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;

const startBtn = document.getElementById("start-btn");
const transcriptDisplay = document.getElementById("transcript");
const responseDisplay = document.getElementById("response");

// Start listening on button click
startBtn.addEventListener("click", () => {
    recognition.start();
    document.getElementById("status").innerText = "Listening...";
});

// Process speech input
recognition.onresult = function (event) {
    let speech = event.results[0][0].transcript.toLowerCase();
    transcriptDisplay.innerText = speech;
    processCommand(speech);
};

// Handle speech recognition errors
recognition.onerror = function (event) {
    console.error("Speech Recognition Error:", event.error);
    document.getElementById("status").innerText = "Error! Try again.";
};

// Process user commands
function processCommand(input) {
    let response = "";

    if (input.includes("hello") || input.includes("hi")) {
        response = "Hello! How can I assist you?";
    } 
    else if (input.includes("what's your name")) {
        response = "I am your AI Voice Assistant!";
    } 
    else if (input.includes("search for")) {
        let query = input.replace("search for", "").trim();
        response = `Searching Google for "${query}"`;
        window.open(`https://www.google.com/search?q=${query}`);
    } 
    else if (input.includes("wikipedia")) {
        let query = input.replace("wikipedia", "").trim();
        response = `Searching Wikipedia for "${query}"`;
        window.open(`https://en.wikipedia.org/wiki/${query}`);
    } 
    else if (input.includes("weather")) {
        response = "Checking the weather...";
        window.open("https://www.weather.com/");
    } 
    else if (input.includes("time")) {
        response = `The current time is ${new Date().toLocaleTimeString()}`;
    } 
    else {
        response = "I didn't understand that. mada shitekudasai!";
    }

    responseDisplay.innerText = response;
    speak(response);
}

// Speak the response using Text-to-Speech
function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en";
    utterance.rate = 1; // Speed of speech
    utterance.pitch = 1; // Pitch of voice
    synth.speak(utterance);
}
