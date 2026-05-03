async function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();

    if (message === "") return;

    // Voeg user bubble toe
    addMessage("user", message);
    input.value = "";

    // Verstuur naar backend
    const response = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    });

    const data = await response.json();

    // Voeg bot bubble toe
    addMessage("bot", data.reply);
}

function addMessage(role, text) {
    const messages = document.getElementById("messages");

    const div = document.createElement("div");
    div.classList.add("message", role);
    div.textContent = text;

    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}
