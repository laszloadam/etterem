

let showAmount = document.getElementById('show-amount');
let emailError = document.getElementById('emailError');

function orders() {
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


// 0 °C alatt: forró csoki
// 0 °C –15 °C: meleg tea
// 15 °C – 20 °C: finom süti
// 20 °C – 25 °C: fagyi
// 25 °C-tól: jéghideg limonádé

let temperatureBox = document.getElementById('temperatureBox');
let days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];

let temperatures = [0, 15, 20, 25, 100 ];
let offers = ["forró csoki", "meleg tea", "finom süti", "fagyi", "jéghideg limonádé"]


let nowDay = new Date().getDay()-1;
actualOffer='Nincs ajánlat';
function getDay() {
    nowDay = document.getElementById('temp').value;
    document.querySelector(`#temp option[value="${nowDay}"]`).setAttribute('selected', '')
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=46.253010&lon=20.141425&units=metric&&exclude=daily&cnt=7&appid=4aa5aa9a37ad4a4ce47b753c2c688389')
    .then(response => response.json())
    .then(data => {
        for(let temp = 0; temp<=temperatures.length; temp++) {
                if(data.list[nowDay].main.temp<temperatures[temp]) {
                    actualOffer = offers[temp]
                    break
                }
            }
        temperatureBox.innerHTML =`${days[nowDay]}: ${data.list[nowDay].main.temp}°C | Napi ajánlat: ${actualOffer}`
    });
}
getDay()
