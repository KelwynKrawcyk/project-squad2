const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}


const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

// CRUD - create read update delete
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push (client)
    setLocalStorage(dbClient)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

//Interação com o layout

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('Paciente').dataset.index = 'new'
}

const saveClient = () => {
   
    if (isValidFields()) {
        const client = {
            Paciente: document.getElementById('Paciente').value,
            Nascimento: document.getElementById('Nascimento').value,
            Consulta: document.getElementById('Consulta').value,
            Horarios: document.getElementById('Horarios').value
        }
        const index = document.getElementById('Paciente').dataset.index
        if (index == 'new') {
            createClient(client)
            updateTable()
            closeModal()
        } else {
            updateClient(index, client)
            updateTable()
            closeModal()
        }
    }
}

const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.Paciente}</td>
        <td>${client.Nascimento}</td>
        <td>${client.Consulta}</td>
        <td>${client.Horarios}</td>
        <td>
            <button type="button" class="button-green" id="edit-${index}">Editar</button>
            <button  type="button" class="button-red" id="delete-${index}" >Excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

function novoPacienteFormulario() {
    const client = {
      Paciente: document.getElementById("username").value,
      Nascimento: document.getElementById("dob").value, 
      Consulta: document.getElementById("tdpd").value,
      Horarios: document.getElementById("appt").value 
      
    }
    createClientForm(client);
  }

const createClientForm = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push (client)
    setLocalStorage(dbClient)}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)
}

const fillFields = (client) => {
    document.getElementById('Paciente').value = client.Paciente
    document.getElementById('Nascimento').value = client.Nascimento
    document.getElementById('Consulta').value = client.Consulta
    document.getElementById('Horarios').value = client.Horarios
    document.getElementById('Paciente').dataset.index = client.index
}

const editClient = (index) => {
    const client = readClient()[index]
    client.index = index
    fillFields(client)
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {
       
        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editClient(index)
        } else {
            const client = readClient()[index]
            const response = confirm(`Deseja realmente excluir o cliente ${client.Paciente}`)
            if (response) {
                deleteClient(index)
                updateTable()
            }
        }
    }
}
updateTable()

// Eventos


document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)

