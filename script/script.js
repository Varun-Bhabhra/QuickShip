const bars = document.querySelector('.fa-bars');
const nav_links = document.querySelector('#nav_links');
const learn_more = document.querySelector('#learn_more');
const services_section = document.querySelector('#services_section');

bars.addEventListener('click', () => {
    nav_links.classList.toggle('hidden');
});

learn_more.addEventListener('click', () => services_section.scrollIntoView({ behavior: "smooth" }));