// TO MAKE IT APPEAR ON CARD DATA-BINDING
document.querySelector('.card-num').oninput = () =>{
    document.querySelector('.place').innerText = document.querySelector('.card-num').value;
}

document.querySelector('.card-name').oninput = () =>{
    document.querySelector('.cardName').innerText = document.querySelector('.card-name').value;
}

document.querySelector('.month-year').oninput = () =>{
    document.querySelector('.cardMonth').innerText = document.querySelector('.month-year').value;
}

document.querySelector('.year-month').oninput = () =>{
    document.querySelector('.cardYear').innerText = document.querySelector('.year-month').value;
}

document.querySelector('.CVC').oninput = () =>{
    document.querySelector('.cardCVC').innerText = document.querySelector('.CVC').value;
}


const submitButton = document.getElementById('submit');
const secondButton = document.getElementById('continue');
const formDiv = document.getElementById('formDiv');
const ThanksCard = document.getElementById('ThanksCard');
const cardName = document.getElementById('card-name');
const cardNum = document.getElementById('card-num');
const month = document.getElementById('month');
const year = document.getElementById('year');
const CVC = document.getElementById('CVC')


formDiv.addEventListener('submit', submitForm)
function submitForm(e){
    e.preventDefault()
    if (!cardName.value){
        console.log('no value')
        cardName.parentElement.classList.add('error')
        return
    }else{
        cardName.parentElement.classList.remove('error')
    }
    if (!cardNum.value){
        console.log('card number')
        cardNum.parentElement.classList.add('error')
        return
    }else{
        cardNum.parentElement.classList.remove('error')
    }
    if (month.value === 'month' || year.value === 'year'){
        console.log('month')
        month.parentElement.classList.add('error')
        return
    }else{
        month.parentElement.classList.remove('error')
    }
    if (!CVC.value){
        console.log('card number')
        CVC.parentElement.classList.add('error')
        return
    }else{
        CVC.parentElement.classList.remove('error')
    }
    formDiv.style.display="none";
    ThanksCard.style.display="block"
}
// TO MAKE THE SECOND DIV DISPLAY
secondButton.addEventListener('click', continueButton)
function continueButton(){
    formDiv.style.display="block"
    ThanksCard.style.display="none"
}


// PERMITS ONLY INTEGERS
function onlyNumbers(a){
    var x = a.which || a.keycode;
    if((x >= 48 && x <= 57))
        return true;
    else
        return false;
}

//FOR THE ALERT WHEN DETAIL IS WRONG
// const CardName = document.getElementById('card-name');
// const CardNum = document.getElementsByClassName('card-num');
// const CardCvc = document.getElementsByClassName('CVC');

// form.addEventListener('Submit', e =>{
//     e.preventDefault();

//     validateInputs();
// });


// TO SHOW AND HIDE A DIV
// function show(){
//     document.getElementById("rightDiv").style.height="400px"
    // document.getElementById('rightDiv').style.display="block"
//     document.getElementById('rightDiv').style.display="none"
//     document.getElementById('ThanksCard').style.display="flex"
// }

// function hide(){
//     document.getElementById('ThanksCard').style.height="400px"
//     document.getElementById('rightDiv').style.display="flex"
//     document.getElementById('ThanksCard').style.display="none"
// }

// TO MAKE SURE ITS STRING
// function beString(){

// }
// var userName = document.getElementById('card-name');
// var loginForm = document.getElementById('formDiv');

// loginForm.addEventListener('submit', function(){
//     console.log('Submit Button Clicked')
// }
// )