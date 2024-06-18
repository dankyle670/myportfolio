
const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set } = require("firebase/database");
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } = require("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyDtSecAqE0ki-Lxd0zeInE2s4e8-rQLTYo",
    authDomain: "daniel-website-c083c.firebaseapp.com",
    projectId: "daniel-website-c083c",
    storageBucket: "daniel-website-c083c.appspot.com",
    messagingSenderId: "547083447531",
    appId: "1:547083447531:web:7d3f709ef555cdf06fa2ae"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

exports.handler = async (event, context) => {
    const body = JSON.parse(event.body);

    switch (body.action) {
        case 'register':
            return registerUser(body.email, body.password, body.first_name, body.last_name);
        case 'login':
            return loginUser(body.email, body.password);
        default:
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid action' })
            };
    }
};

const sendVerificationEmail = (user) => {
    return sendEmailVerification(user)
        .then(() => ({
            statusCode: 200,
            body: JSON.stringify({ message: 'Verification Email Sent Successfully!' })
        }))
        .catch((error) => ({
            statusCode: 500,
            body: JSON.stringify({ error: 'Error sending verification email: ' + error.message })
        }));
}

const registerUser = (email, password, first_name, last_name) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return set(ref(db, 'users/' + first_name + ' ' + last_name), {
                email: email,
                first_name: first_name,
                last_name: last_name,
                registered_at: new Date().toISOString()
            }).then(() => sendVerificationEmail(user));
        })
        .catch((error) => ({
            statusCode: 500,
            body: JSON.stringify({ error: 'Error registering user: ' + error.message })
        }));
}

const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (user.emailVerified) {
                return {
                    statusCode: 200,
                    body: JSON.stringify({ message: 'Login successful' })
                };
            } else {
                return auth.signOut().then(() => ({
                    statusCode: 401,
                    body: JSON.stringify({ error: 'Please verify your email.' })
                }));
            }
        })
        .catch((error) => ({
            statusCode: 500,
            body: JSON.stringify({ error: 'Error logging in: ' + error.message })
        }));
}

//import { initializeApp } from "firebase/app";
//import { getDatabase, ref, set } from "firebase/database";
//import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
//
//// Your web app's Firebase configuration
//const firebaseConfig = {
//    apiKey: "AIzaSyDtSecAqE0ki-Lxd0zeInE2s4e8-rQLTYo",
//    authDomain: "daniel-website-c083c.firebaseapp.com",
//    projectId: "daniel-website-c083c",
//    storageBucket: "daniel-website-c083c.appspot.com",
//    messagingSenderId: "547083447531",
//    appId: "1:547083447531:web:7d3f709ef555cdf06fa2ae"
//  };
//
//// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const db = getDatabase(app);
//const auth = getAuth();
//
//// Function to send authentication email
//const sendVerificationEmail = (user) =>
//{
//  sendEmailVerification(user)
//    .then(() => {
//      console.log('Verification Email Sent Successfully!');
//      alert('Verification email sent! Please check your inbox and verify your email before logging in.');
//    })
//    .catch((error) => {
//      console.error('Error sending verification email:', error);
//    });
//}
//
//// Function to register a new user
//function registerUser(email, password, first_name, last_name)
//{
//  createUserWithEmailAndPassword(auth, email, password)
//    .then((userCredential) => {
//      // Add user data to the database
//      const user = userCredential.user;
//      set(ref(db, 'users/' + first_name + ' ' + last_name), {
//        email: email,
//        first_name: first_name,
//        last_name: last_name,
//        password: password, // Storing plain passwords is not secure so i need to find another way!
//        registered_at: new Date().toISOString()
//      }).then(() => {
//        sendVerificationEmail(user);
//        window.location.assign('../login');
//      }).catch((error) => {
//        alert('Error registering user: ' + error.message);
//      });
//    })
//    .catch((error) => {
//      alert('Error registering user: ' + error.message);
//    });
//}
//
//// Function to log in an existing user
//function loginUser(email, password)
//{
//  signInWithEmailAndPassword(auth, email, password)
//    .then((userCredential) => {
//      const user = userCredential.user;
//      if (user.emailVerified) {
//          // Redirect or perform other actions for logged-in users
//        window.location.assign('../servicesPrice');
//      } else {
//        alert('Please verify your email i send you a link.');
//        auth.signOut();
//      }
//    })
//    .catch((error) => {
//      alert('Error logging in: ' + error.message);
//    });
//}
//
//function validateRegisterForm()
//{
//    const email = document.getElementById("email").value;
//    const password = document.getElementById("password").value;
//    const first_name = document.getElementById("first_name").value;
//    const last_name = document.getElementById("last_name").value;
//
//    if (!email || !password || !first_name || !last_name) {
//      alert("Please fill in all fields to register.");
//      return false;
//    }
//    return true;
//}
//
//function validateLoginForm()
//{
//    const email = document.getElementById("login_email").value;
//    const password = document.getElementById("login_password").value;
//
//    if (!email || !password) {
//      alert("Please fill in both email and password to log in.");
//      return false;
//    }
//    return true;
//}
//
//function attachEventListeners()
//{
//    // Check for the existence of the register button and attach the event listener
//    const registerButton = document.getElementById("register");
//
//    if (registerButton) {
//      registerButton.addEventListener('click', function(e) {
//        e.preventDefault();
//        if (validateRegisterForm()) {
//          const email = document.getElementById("email").value;
//          const password = document.getElementById("password").value;
//          const first_name = document.getElementById("first_name").value;
//          const last_name = document.getElementById("last_name").value;
//          registerUser(email, password, first_name, last_name);
//        }
//      });
//    }
//    // Check for the existence of the login button and attach the event listener
//    const loginButton = document.getElementById("loginn");
//    if (loginButton) {
//      loginButton.addEventListener('click', function(e) {
//        e.preventDefault();
//        if (validateLoginForm()) {
//          const email = document.getElementById("login_email").value;
//          const password = document.getElementById("login_password").value;
//          loginUser(email, password);
//        }
//      });
//    }
//  }
//
//// Call the attachEventListeners function when the DOM content is loaded
//if (typeof document !== 'undefined') {
//  document.addEventListener('DOMContentLoaded', attachEventListeners);
//}
////document.addEventListener('DOMContentLoaded', attachEventListeners);
