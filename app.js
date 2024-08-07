import { app } from "./firebase.mjs";
import { auth } from "./firebase.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


let email = document.getElementById('email');
let password = document.getElementById('pass');
let btnSubmit = document.getElementById('btn');


btnSubmit.addEventListener('click', () => {
  if(email.value != '' || password.value != '') {
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    
    alert('user created')
    email.value = ''
    password.value = ''
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorCode)
    // ..
  });
  }

  else {
    alert('Please enter email and password')
  }
  
})
