

let contacts = [
    {
        firstName: "Bob",
        lastName: "Jones",
        phoneNum: "(417-777-7777)",
        email: "bobjones@bobjones.com",
        img: '<img src="defaul.jpg" alt="">'
    },
    {
        firstName: "Mary",
        lastName: "lamb",
        phoneNum: "(417-777-7776)",
        email: "maryLamb@example.com",
        img: '<img src="defaul.jpg" alt="">'
    },
    {
        firstName: "John",
        lastName: "Doe",
        phoneNum: "(417-777-7775)",
        email: "johndoe@example.com",
        img: '<img src="defaul.jpg" alt="">'
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        phoneNum: "(417-777-7755)",
        email: "janedoe@example.com",
        img: '<img src="defaul.jpg" alt="">'
    },
    {
        firstName: "Skylar",
        lastName: "Bissonnette",
        phoneNum: "(417-867-5309)",
        email: "skylarb@example.com",
        img: '<img src="defaul.jpg" alt="">'
    }
];

function showContacts() {
    let list = document.getElementById('list')
    list.innerHTML = ''
    for (i in contacts) {
        let li = document.createElement("li")
        li.innerText = contacts[i].lastName
        li.onclick = function() {
            showDetails(contacts[i])
        }

        list.appendChild(li)
    }
}

function addContact() {
    let form = document.getElementById('contact').elements

    contacts.push({
        firstName: form['firstName'].value,
        lastName: form['lastName'].value,
        phoneNum: form['phoneNum'].value,
        email: form['email'].value,
        img: '<img src="defaul.jpg" alt="">'
    })

    showContacts()
}

function showDetails(contact) {
    document.getElementById('details').innerText = JSON.stringify(contact)
}