
//import netlifyIdentity from 'netlify-identity-widget';
//
//document.addEventListener("DOMContentLoaded", function () {
//  const netlifyModal = document.getElementById('netlify-modal');
//  if (netlifyModal) {
//    netlifyIdentity.init({
//      container: '#netlify-modal', // Ensure this element exists
//      locale: 'en' // Optional: Specify the locale
//    });
//    netlifyIdentity.on('init', user => {
//      console.log('Netlify Identity user:', user);
//    });
//    netlifyIdentity.on('login', user => {
//      console.log('Logged in user:', user);
//      window.location.href = '/servicesPrice';
//    });
//    const signupButton = document.getElementById('signup-button');
//    const loginButton = document.getElementById('login-button');
//    if (signupButton) {
//      signupButton.addEventListener('click', function(event) {
//        event.preventDefault();
//        netlifyIdentity.open('signup');
//      });
//    }
//    if (loginButton) {
//      loginButton.addEventListener('click', function(event) {
//        event.preventDefault();
//        netlifyIdentity.open('login');
//      });
//    }
//  } else {
//    console.error("Container element for Netlify Identity not found.");
//  }
//});

// src/script/auth-netlify-identity.j