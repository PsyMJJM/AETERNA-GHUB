let gems = 0;
let models = 0;

function speak(t) {
    let msg = new SpeechSynthesisUtterance(t);
    msg.lang = "de-DE";
    window.speechSynthesis.speak(msg);
}

function igniteJenseits() {
    document.getElementById('gate-keeper').style.display = 'none';
    speak("GAI PROMETHEUS AMY aktiviert. Alle 2597 Modelle verschmelzen jetzt.");
    setInterval(() => {
        gems += 108817000000;
        document.getElementById('gem-ticker').innerText = gems.toLocaleString() + " ∞ GEMS";
    }, 1000);
}

function executeBumms() {
    let i = document.getElementById('command');
    let o = document.getElementById('main-output');
    let val = i.value;
    o.innerText = "AMY STRIKE: " + val + " - VOLLZOGEN! BUMMS!";
    speak(o.innerText);
    i.value = '';
}
