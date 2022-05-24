//táblázat

let users = [
    {
        "_id": 0,
        "name": 'Linda Halász',
        "email": 'linda.halasz@hotmail.com',
        "address": '8096 Budapest, Hajdu dűlőút 94'
    },
    {
        "_id": 1,
        "name": 'Mihály Szabó',
        "email": 'misike32z@gmail.com',
        "address": '3153 Székesfehérvár, Klaudia utca 10.'
    },
    {
        "_id": 2,
        "name": 'Hunor Pataki',
        "email": 'misike32z@ingyenmail.hu',
        "address": '7787 Budapest, Balázs rakpart 400.'
    },
    {
        "_id": 3,
        "name": 'Szonja Németh',
        "email": 'sz.nemeth@gmail.com',
        "address": '8822 Békéscsaba, Richárd orom 78.'
    },
    {
        "_id": 4,
        "name": 'Vilmos Dudás',
        "email": 'vil.das@hgmail.hu',
        "address": '1300 Salgótarján, Alexa útja 58.'
    },
    
];

let tbody = document.querySelector('#tbody');

for(let user of users) {

    tbody.innerHTML +=
    `
    <tr id="${user._id}">
        <td>
        
        </td>
        <td>
            ${user.name}
        </td>
        <td>
            ${user.email}
        </td>
        <td>
            ${user.address}
        </td>
        <td class="text-center" style="">
                <button class="btn btn-info" onclick="modifyUser('${user._id}')">Edit</button>
                <button class="btn btn-danger" onclick="deleteUser('${user._id}')">Delet</button>
        </td>

    </tr>
    `;
    
}

function modifyUser(id) {
    let form = document.createElement('div')
    form.setAttribute("id", 'editForm')
    form.innerHTML = `

    <form id="form">
        <fieldset class="scheduler-border">
        <legend class="scheduler-border">Felhasználó adatainak módosítása</legend>
            <div class="form-group">
                <input class="form-control" type="text" id="name" placeholder="Név" value="${users[id].name}">
            </div>
            <div class="form-group">
                <input class="form-control" type="email" id="name" placeholder="Email" value="${users[id].email}">
            </div>
            <div class="form-group">
                <input class="form-control" type="text" id="name" placeholder="Cím" value="${users[id].address}">
            </div>
            <div class="text-center">
                <button type="button" class="btn btn-primary">Mentés</button>
                <button type="button" class="btn btn-primary" onclick="closeForm()">Mégsem</button>
            </div>
        </fieldset>
    </form>
    `
    document.querySelector('body').appendChild(form);
}

function closeForm() {
    document.querySelector(`#editForm`).remove()
}

function deleteUser(id) {
    document.querySelector(`tr[id='${id}']`).remove()
}

