

let contacts=[
    {
    firstName:"Bob",
    lastName:"Jones",
    phoneNum:"(417-777-7777)",
    email:"bobjones@bobjones.com",
    img:'<img src="defaul.jpg" alt="">'
},
    {
        firstName:"Mary",
        lastName:"lamb",
        phoneNum:"(417-777-7776)",
        email:"maryLamb@example.com",
        img:'<img src="defaul.jpg" alt="">'
    },
    {
        firstName:"John",
        lastName:"Doe",
        phoneNum:"(417-777-7775)",
        email:"johndoe@example.com",
        img:'<img src="defaul.jpg" alt="">'
    },
    {
        firstName:"Jane",
        lastName:"Doe",
        phoneNum:"(417-777-7755)",
        email:"janedoe@example.com",
        img:'<img src="defaul.jpg" alt="">'
    },
    {
        firstName:"Skylar",
        lastName:"Bissonnette",
        phoneNum:"(417-867-5309)",
        email:"skylarb@example.com",
        img:'<img src="defaul.jpg" alt="">'
    }
];
function showContacts(){
    console.log(contacts.firstName);

}

function  listContacts(cons){
    let contactNames=[];
    for (let i=0;i<cons.length;i=+1){
        contactNames.push(cons[i].name);
    }
    return contactNames;
}

function Contact(firstName, lastName, phoneNumber, email) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
  this.email=email
}
