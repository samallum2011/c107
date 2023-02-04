
 function start_classification()
 {
 navigator.mediaDevices.getUserMedia({ audio: true});
 classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/VMoFgTex2/model.json",modelReady);
 }
 function modelReady(){
 classifier.classify(gotresult);
 
 }