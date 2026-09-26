const email = document.getElementById('email');
const password = document.getElementById('password');
const eye = document.getElementById('eye');
const button = document.getElementById('button');
const input = document.querySelectorAll('input');
const eyeicon = document.querySelector('.eye-icon');
const themeToggle = document.getElementById('theme-toggle');

const setTheme = (isDark) => {
    document.body.classList.toggle('dark-theme', isDark);
    themeToggle.textContent = isDark ? 'Light theme' : 'Dark theme';
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
};

setTheme(localStorage.getItem('theme') === 'dark');

themeToggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-theme');
    setTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

eye.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
        eyeicon.src = 'images/closed-eye.svg';
    } else {
        password.type = 'password';
        eyeicon.src = 'images/open-eye.svg';
    }
});

button.addEventListener('click', () => {
    if (email.value === '' && password.value === '') {
        document.getElementById('message').textContent = 'Please fill in all fields';
        input.forEach((input) => {
        input.classList.add('error');
        })
    } else if (email.value === '') {
        document.getElementById('message').textContent = 'Please enter your email';
        email.classList.add('error');
        password.classList.remove('error');
    } else if (password.value === '') {
        document.getElementById('message').textContent = 'Please enter your password';
        password.classList.add('error');
        email.classList.remove('error');
    } else {
        document.getElementById('message').textContent = 'Login successful';
        input.forEach((input) => {
            input.classList.remove('error');
        });
}});
