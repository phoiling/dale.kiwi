import { inject } from '@vercel/analytics';

inject();

const toggle = document.getElementById('day-night-toggle');
toggle.addEventListener('click',() => {
    toggle.src = toggle.src.includes('sun') ? 'Images/moon_icon.png' : 'Images/sun_icon.png';
});
