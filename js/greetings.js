const loginForm = document.querySelector('#login-form');
const loginInput= document.querySelector('#login-form input');
const loginButton  = document.querySelector('#login-form button');
const greeting = document.querySelector('#greeing');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem('username', username);
    paintGreetings(username);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ! ${username}`;
}

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}