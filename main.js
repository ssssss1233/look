prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:"jpeg",
    jpeg_quality:100
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log("ml5 version:",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oDRncs11x/model.json",modelLoaded);

function modelLoaded(){
    console.log("model loaded");
    
}

function speak(){
    var synth=window.speechSynthesis;
    speakdata1="The first prediction is going to be"+prediction1;
    speakdata2="and the second prediction is going to be"+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}