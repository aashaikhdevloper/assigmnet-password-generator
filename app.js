let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let Lowercase = document.getElementById("Lowercase");
let Uppercase = document.getElementById("Uppercase");
let Numbers = document.getElementById("Numbers");
let Symbols = document.getElementById("Symbols");
let genBtn = document.getElementById("genBtn");


sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ( ) => {
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "!@#$%^&*";

// Function to generte password
function generatePassword() {
    let genpassword = "";
    let allChars = "";

    allChars += Lowercase.checked ? lowerChars : "";
    allChars += Uppercase.checked ? upperChars : "";
    allChars += Numbers.checked ? allNumbers : "";
    allChars += Symbols.checked ? allSymbols : "";


    if (allChars == "" || allChars.length == 0) {
        return genpassword;
    }

    let i = 1;
    while (i <= inputSlider.value){
        genpassword += allChars.charAt(Math.floor(Math.random() *
            allChars.length));
            i++;
        }
    return genpassword



}