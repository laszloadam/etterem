//táblázat

let tbody = document.querySelector('#tbody');


function getServerData(url) {
    let fetchOptions = {
        method: "GET",
        mode: "cors",
        cache: "no-cache" 
      }; 
      return fetch(url, fetchOptions).then(
        response => response.json(),
        err => console.log(err))
}

function getDatas() {
    getServerData('http://localhost:3000/users').then(data => {
        for(let user of data) {

            tbody.innerHTML +=
            `
            <tr id="${user.id}">
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
                        <button class="btn btn-info" onclick="modifyUser('${user.id}')">Edit</button>
                        <button class="btn btn-danger" onclick="deleteUser('${user.id}')">Delet</button>
                </td>
    
            </tr>
            `;
            
        }
    });
    
}
getDatas()

function modifyUser(id) {
    let form = document.createElement('div')
    form.setAttribute("id", 'editForm')
    getServerData('http://localhost:3000/users').then(data => {
    form.innerHTML = `

    <form id="form">
        <fieldset class="scheduler-border">
        <legend class="scheduler-border">Felhasználó adatainak módosítása</legend>
            <div class="form-group">
                <input class="form-control" type="text" name="name" placeholder="Név" value="${data[id].name}">
            </div>
            <div class="form-group">
                <input class="form-control" type="email" name="email" placeholder="Email" value="${data[id].email}">
            </div>
            <div class="form-group">
                <input class="form-control" type="text" name="address" placeholder="Cím" value="${data[id].address}">
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Mentés</button>
                <button type="button" class="btn btn-primary" onclick="closeForm()">Mégsem</button>
            </div>
        </fieldset>
    </form>
    `})
    document.querySelector('body').appendChild(form);
    form.addEventListener('submit', function(ev) {
        ev.preventDefault();
        let inputs = this.querySelectorAll('input')
        let values = {};
        for(let i = 0; i< inputs.length; i++) {
            values[inputs[i].name] = inputs[i].value;
        }
        let fetchOptions = {
            method: "PUT",
            mode: "cors",
            cache: "no-cache",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values) 
          }; 
        fetch(`http://localhost:3000/users/${id}`, fetchOptions).then(
            response => response.json(),
            err => console.log(err))
            .then(data => {
                tbody.innerHTML='';
                getDatas()
            });
        document.querySelector('#editForm').remove()
    })
}



function deleteUser(id) {
    if(confirm(`Valóban törölni akarja felhasználó adatait?`)) {
        let fetchOptions = {
            method: "DELETE",
            mode: "cors",
            cache: "no-cache" 
          }; 
        fetch(`http://localhost:3000/users/${id}`, fetchOptions).then(
            response => response.json(),
            err => console.log(err))
            .then(data => {
                console.log(data);
                tbody.innerHTML='';
                getDatas()
            });
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
            values[inputs[i].name] = inputs[i].value;
        }
        let fetchOptions = {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values) 
          }; 
        fetch(`http://localhost:3000/users`, fetchOptions).then(
            response => response.json(),
            err => console.log(err))
            .then(data => {
                tbody.innerHTML='';
                getDatas()
            });
            document.querySelector('#editForm').remove()
        })
}
