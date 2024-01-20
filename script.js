let speechText = document.querySelector('#mainText');
let speakButton = document.querySelector('#speakButton');
let voiceSelect = document.querySelector('#voiceSelect');
let speech = new SpeechSynthesisUtterance();
let reloadSpan = document.querySelector('span');

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice, index) => {
        let option = document.createElement('option');
        option.value = index;
        option.textContent = voice.name;
        voiceSelect.appendChild(option);
    });
    if (voices.length > 0) {
        let defaultVoice = voices[0];
        voiceSelect.value = voices.indexOf(defaultVoice).toString();
    }

    voiceSelect.addEventListener('change',()=>{
        speech.voice=voices[voiceSelect.value]
    })
}

reloadSpan.addEventListener('click',()=>{
    location.reload();
})


speakButton.addEventListener('click', function () {
    console.log("hello")
    speech.text = speechText.value;
    window.speechSynthesis.speak(speech);

})
