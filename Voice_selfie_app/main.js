 var SpeechRecognition = window.webkitSpeechRecognition;

 var recognition = new SpeechRecognition();

 function click()
 {
    document.getElementById("textbox").innerHTML="";
    recognition.click();

 }
 recognition.onresult = function(event)
 {
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="take my selfie")
    {
        console.log("taking selfie ---");
        speak();
    }
   

}

function speak()
{
   var Synth = window.speechSynthesis;
    
   speak_data = "taking your selfie in 5 seconds";

   var utterThis = new SpeechSynthesisUtterance(speak_data);

   Synth.speak(utterThis);

   Webcam.attach(camera);
   setTimeout(function()
{
    take_snapshot();
    Save();
},4000);
   
}

Webcam.set({
    width:360,
    height:25,
    image_format : 'jpeg',
    jpeg_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri+'"/>';
    });
}

function Save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}































































































































































































































































































































































