async function l(e,t,n,o){const a=await fetch("/.netlify/functions/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"register",email:e,password:t,first_name:n,last_name:o})}),i=await a.json();a.ok?(alert("Verification email sent! Please check your inbox and verify your email before logging in."),window.location.assign("../pages/login")):alert("Error registering user: "+i.error)}async function r(e,t){const n=await fetch("/.netlify/functions/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"login",email:e,password:t})}),o=await n.json();n.ok?window.location.assign("../pages/servicesPrice"):alert("Error logging in: "+o.error)}function d(){const e=document.getElementById("email").value,t=document.getElementById("password").value,n=document.getElementById("first_name").value,o=document.getElementById("last_name").value;return!e||!t||!n||!o?(alert("Please fill in all fields to register."),!1):!0}function c(){const e=document.getElementById("login_email").value,t=document.getElementById("login_password").value;return!e||!t?(alert("Please fill in both email and password to log in."),!1):!0}function m(){const e=document.getElementById("register");e&&e.addEventListener("click",function(n){if(n.preventDefault(),d()){const o=document.getElementById("email").value,a=document.getElementById("password").value,i=document.getElementById("first_name").value,s=document.getElementById("last_name").value;l(o,a,i,s)}});const t=document.getElementById("loginn");t&&t.addEventListener("click",function(n){if(n.preventDefault(),c()){const o=document.getElementById("login_email").value,a=document.getElementById("login_password").value;r(o,a)}})}typeof document<"u"&&document.addEventListener("DOMContentLoaded",m);export{m as a};
