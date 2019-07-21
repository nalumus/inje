
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyACsmK-b6D3_NwmbHnSlogiehhplZYmsvg",
    authDomain: "inje-project.firebaseapp.com",
    databaseURL: "https://inje-project.firebaseio.com",
    projectId: "inje-project",
    storageBucket: "inje-project.appspot.com",
    messagingSenderId: "381286280620",
    appId: "1:381286280620:web:fb8b67fc2a6c38ec"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  //Bilgilerimizi Fire base'a gönderiyoruz
  var messageRef = firebase.database().ref("messages");

document.getElementById("contactForm").addEventListener("submit", submitForm);


//Bilgilerin gönderilmesi
function submitForm(e) {
    e.preventDefault();


//Kendi fonksüyonumuza göre ıd yi ayarlıyoruz
var name = getInputValue("name");
var reason = getInputValue("reason");


//Bu kod bizim bilgilerimizi kaydediyor
saveMessage(name, reason)


//Kendi fonksüyonumuzu yaratıyoruz
function getInputValue(id) {
    return document.getElementById(id).value;
}


//Başarılı bir şekilde gönderildiği hakkında bir bilgilendırme gönder
document.querySelector('.alert').style.display = "block";


//3 saniye sonra bigilendirmeyi kapat
setTimeout(function() {
    document.querySelector('.alert').style.display = "none"
}, 3000);


//Bu doldurulmuş ınputu siliyor
document.getElementById("contactForm").reset();


//Bilgileri Firebase'a gönderiyor
function saveMessage(name, reason) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name:name,
        reason:reason
    });
}
}