const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordField = document.getElementById('password-field')
const clipboardButton = document.getElementById('clipboard-btn')
const passwordSlider = document.getElementById('password-slider')

console.log(passwordSlider.value);

const clearPassword = () => {
    passwordField.innerHTML = ''
}

const passwordSet = () => {
    for (let i = 0; i < passwordSlider.value; i++) {
        let randomChar = (Math.floor(Math.random() * characters.length))
        passwordField.innerHTML += characters[randomChar]
    }
}

function password() {
    if (passwordField.value = '') {
        passwordSet()
    } else {
        clearPassword()
        passwordSet()
    }
}

function clipboard() {
    navigator.clipboard.writeText(passwordField.innerHTML).then(() => {
        console.log('Content copied to clipboard');
      },() => {
        console.error('Failed to copy');
      });

}