const filterButtons = document.querySelectorAll('.filter-bar button');
const galleryItems = document.querySelectorAll('.gallery-item'); 

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn=>btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.textContent;
    
        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'All' || itemCategory === category) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});

const lightbox=document.querySelector('.lightbox');
const lightboxImg=document.querySelector('.lightbox-img');
const closebtn=document.querySelector('.close-lightbox');

galleryItems.forEach(item=>{
    item.addEventListener('click',()=>{
        const img=item.querySelector('img');
        const src=img.getAttribute('src');
        lightboxImg.setAttribute('src',src);
        lightbox.classList.remove('hide');
    });
});
closebtn.addEventListener('click',()=>{
    lightbox.classList.add('hide');
});
const viewBtn = document.querySelector('.view-btn');

viewBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        viewBtn.textContent = "Light Mode";
    } else {
        viewBtn.textContent = "Dark Mode";
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        lightbox.classList.add('hide');
    }
});

