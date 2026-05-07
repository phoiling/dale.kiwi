const toggle = document.getElementById('day-night-toggle');
toggle.addEventListener('click',() => {
    toggle.src = toggle.src.includes('sun') ? 'Images/moon.png' : 'Images/sun.png';
});