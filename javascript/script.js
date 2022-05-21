

let showAmount = document.getElementById('show-amount');
let emailError = document.getElementById('emailError');

function datas() {
    let email = document.querySelector("input[name='email']").value.trim();
    let sajt = document.querySelector("input[name='sajt']").checked ? 300 : 0;
    let bacon = document.querySelector("input[name='bacon']").checked ? 400 : 0;
    let doubleMeal = document.querySelector("input[name='double-meal']").checked ? 1000 : 0;
    let sajtNbacon = document.querySelector("input[name='sajt&bacon']").checked ? 700 : 0;
    let sajtNdoubleMeal = document.querySelector("input[name='sajt&double-meal']").checked ? 1300 : 0;
    let souce = document.getElementById('souces').value


    if(email.length==0 || (email.indexOf('@')<0) || (email.indexOf('.')<0)) {
        this.emailError.style.visibility = 'visible'
    }
    else {
        this.emailError.style.visibility = 'hidden'
    };

    let allOrder = parseInt(sajt)+parseInt(bacon)+parseInt(doubleMeal)+parseInt(sajtNbacon)+parseInt(sajtNdoubleMeal)+parseInt(souce);
showAmount.innerText = allOrder
}