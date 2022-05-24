//táblázat

let users = [
    {
        "_id": 0,
        "name": 'Halász Linda',
        "email": 'linda.halasz@hotmail.com',
        "address": '8096 Budapest, Hajdu dűlőút 94'
    },
    {
        "_id": 1,
        "name": 'Szabó Mihály',
        "email": 'misike32@gmail.com',
        "address": '3153 Székesfehérvár, Klaudia utca 10.'
    },
    {
        "_id": 2,
        "name": 'Pataki Hunor',
        "email": 'taki@ingyenmail.hu',
        "address": '7787 Budapest, Balázs rakpart 400.'
    },
    {
        "_id": 3,
        "name": 'Németh Szonja',
        "email": 'sz.nemeth@gmail.com',
        "address": '8822 Békéscsaba, Richárd orom 78.'
    },
    {
        "_id": 4,
        "name": 'Dudás Vilmos',
        "email": 'vil.das@hgmail.hu',
        "address": '1300 Salgótarján, Alexa útja 58.'
    },
    
];

let tbody = document.querySelector('#tbody');
function getDatas() {
    for(let user of users) {

        tbody.innerHTML +=
        `
        <tr id="${user._id}">
            <td>
            
            </td>
            <td class="nameCell">
                ${user.name}
            </td>
            <td class="emailCell">
                ${user.email}
            </td>
            <td class="addressCell">
                ${user.address}
            </td>
            <td class="text-center" style="">
                    <button class="btn btn-info" onclick="modifyUser('${user._id}')">Edit</button>
                    <button class="btn btn-danger" onclick="deleteUser('${user._id}')">Delet</button>
            </td>

        </tr>
        `;
        
    }
}
getDatas()

function modifyUser(id) {
    let form = document.createElement('div')
    form.setAttribute("id", 'editForm')
    form.innerHTML = `

    <form id="form">
        <fieldset class="scheduler-border">
        <legend class="scheduler-border">Felhasználó adatainak módosítása</legend>
            <div class="form-group">
                <input class="form-control" type="text" name="name" placeholder="Név" value="${users[id].name}">
            </div>
            <div class="form-group">
                <input class="form-control" type="email" name="email" placeholder="Email" value="${users[id].email}">
            </div>
            <div class="form-group">
                <input class="form-control" type="text" name="address" placeholder="Cím" value="${users[id].address}">
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Mentés</button>
                <button type="button" class="btn btn-primary" onclick="closeForm()">Mégsem</button>
            </div>
        </fieldset>
    </form>
    `
    document.querySelector('body').appendChild(form);
    form.addEventListener('submit', function(ev) {
        ev.preventDefault();
        let inputs = this.querySelectorAll('input')
        let values = {};
        for(let i = 0; i< inputs.length; i++) {
            values[inputs[i].name] = inputs[i].value;
        }
        users[id]=values
        document.querySelector(`tr[id='${id}'] .nameCell`).textContent = `${values.name}`;
        document.querySelector(`tr[id='${id}'] .emailCell`).textContent = `${values.email}`;
        document.querySelector(`tr[id='${id}'] .addressCell`).textContent = `${values.address}`;
        document.querySelector('#editForm').remove()
    })
}



function deleteUser(id) {
    if(confirm(`Valóban törölni akarja ${users[id].name} adatait?`)) {
        document.querySelector(`tr[id='${id}']`).remove()
    }
}


function closeForm() {
    document.querySelector('#editForm').remove()
}

function newUser() {
    let form = document.createElement('div')
    form.setAttribute("id", 'editForm')
    form.innerHTML = `
    <form id="form">
        <fieldset class="scheduler-border">
        <legend class="scheduler-border">Felhasználó adatainak módosítása</legend>
            <div class="form-group">
                <input class="form-control" type="text" name="name" placeholder="Név">
            </div>
            <div class="form-group">
                <input class="form-control" type="email" name="email" placeholder="Email">
            </div>
            <div class="form-group">
                <input class="form-control" type="text" name="address" placeholder="Cím">
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Mentés</button>
                <button type="button" class="btn btn-primary" onclick="closeForm()">Mégsem</button>
            </div>
        </fieldset>
    </form>
    `;
    document.querySelector('body').appendChild(form);

    form.addEventListener('submit', function(ev) {
        ev.preventDefault();
        let inputs = this.querySelectorAll('input')
        let values = {};
        for(let i = 0; i< inputs.length; i++) {
            values._id = users.length
            values[inputs[i].name] = inputs[i].value;
        }
        users.push(values);
        tbody.innerHTML='';
        getDatas()
        document.querySelector('#editForm').remove()
    })
}
