const content = document.getElementById('content');
const navLinks = document.querySelectorAll('nav a');
async function loadPage(page){
    try {
        const response = await fetch(`${page}.html`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data=await response.text();
        content.innerHTML = data;
    }    catch (error) {
        content.innerHTML = '<h2>Error loading page</h2>';
    }
}
const defaultPage = 'home';
loadPage(defaultPage);

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page =  link.getAttribute('href').substring(1);
        loadPage(page);
    });
});