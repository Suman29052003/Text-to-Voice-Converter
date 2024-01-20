let speechText = document.querySelector('#mainText');
let speakButton = document.querySelector('#speakButton')
let speech = new SpeechSynthesisUtterance();

speakButton.addEventListener('click',function(){
    console.log("hello")
    speech.text = speechText.value;
    window.speechSynthesis.speak(speech);

})
