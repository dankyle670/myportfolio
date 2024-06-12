async function registerUser(email, password, first_name, last_name) {
    const response = await fetch('/.netlify/functions/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'register',
        email,
        password,
        first_name,
        last_name,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      alert('Verification email sent! Please check your inbox and verify your email before logging in.');
      window.location.assign('../pages/login');
    } else {
      alert('Error registering user: ' + data.error);
    }
  }

  async function loginUser(email, password) {
    const response = await fetch('/.netlify/functions/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'login',
        email,
        password,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      window.location.assign('../pages/servicesPrice');
    } else {
      alert('Error logging in: ' + data.error);
    }
  }

  function validateRegisterForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;

    if (!email || !password || !first_name || !last_name) {
      alert("Please fill in all fields to register.");
      return false;
    }
    return true;
  }

  function validateLoginForm() {
    const email = document.getElementById("login_email").value;
    const password = document.getElementById("login_password").value;
  
    if (!email || !password) {
      alert("Please fill in both email and password to log in.");
      return false;
    }
    return true;
  }

  export function attachEventListeners() {
    const registerButton = document.getElementById("register");
    if (registerButton) {
      registerButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (validateRegisterForm()) {
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
          const first_name = document.getElementById("first_name").value;
          const last_name = document.getElementById("last_name").value;
          registerUser(email, password, first_name, last_name);
        }
      });
    }
    const loginButton = document.getElementById("loginn");
    if (loginButton) {
      loginButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (validateLoginForm()) {
          const email = document.getElementById("login_email").value;
          const password = document.getElementById("login_password").value;
          loginUser(email, password);
        }
      });
    }
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', attachEventListeners);
  }
