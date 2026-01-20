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


