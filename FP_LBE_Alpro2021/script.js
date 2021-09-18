function LightDarkMode(){
    var element1 = document.body;
    var element2 = document.getElementById("Switch");
    var element3 = document.getElementById("Text");
    var element4 = document.getElementById("Photo");
    var element5 = document.getElementById("line1");
    var element6 = document.getElementById("line2");
    var element7 = document.getElementById("ITS");
    var element8 = document.getElementById("Smala");
    var element9 = document.getElementById("Email");
    var element10 = document.getElementById("PhoneNumber");
    var img1 = document.getElementById("Logo1");
    var img2 = document.getElementById("Logo2");
    var img3 = document.getElementById("Logo3");
    element1.classList.toggle("DarkMode");
    element1.classList.toggle("DarkText");
    element2.classList.toggle("DarkButton");
    element3.classList.toggle("DarkText");
    element4.classList.toggle("DarkPhoto");
    element5.classList.toggle("hrDark");
    element6.classList.toggle("hrDark");
    element7.classList.toggle("DarkITSLogo");
    element8.classList.toggle("DarkSmalaLogo");
    element9.classList.toggle("DarkLink");
    element10.classList.toggle("DarkButton");
    img1.classList.toggle("DarkLogo");
    img2.classList.toggle("DarkLogo");
    img3.classList.toggle("DarkLogo");
    if(element2.innerHTML === "Light Mode"){
        element2.innerHTML = "Dark Mode";
    }
    else {
        element2.innerHTML = "Light Mode";
    }
}
function CopyPhoneNumber(){
    navigator.clipboard.writeText("+6282245111725");
    alert("Successfully copied my phone number!");
}
function OpenMail(){
    window.open("mailto:faadhilah56@gmail.com");
}