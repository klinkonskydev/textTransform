let lowerc = document.querySelector('#low')
let upperc = document.querySelector('#up')
let camelc = document.querySelector('#camel')

var text = document.getElementById('text-area');

const saveData = () => {
    localStorage.setItem('text', text.value)
}

if(localStorage.text){
    window.onload = () => {
        text.value = localStorage.text
    }
} else {
    localStorage.text = `Type Here!`
}


window.onload = () => {
    text.value = localStorage.text

    let body = document.querySelector('body')

    body.style.background = 'url(./svg/background-pexels.jpg) no-repeat center'
}

const DOM = {
    defaultCase(){
        saveData(); 
        return text.style.textTransform = 'none';
    },

    lowerCase(){
        saveData()
        return text.style.textTransform = 'lowercase';
    },

    upperCase(){
        saveData()
        return text.style.textTransform = 'uppercase';
    },

    camelCase(){
        saveData()
        return text.style.textTransform = 'capitalize';
    }
}