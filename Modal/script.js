const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('.modal__image');
const modalCaption = modal.querySelector('.modal__caption');
const gallery = document.querySelector('.gallery');

[...gallery.children].forEach((preview) => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        modalImage.classList.add('open');
        
        const targetSrc = preview.children[0].getAttribute("data-description");
        modalImage.src = `./images/${targetSrc}`;
        const targetCaption = preview.children[0].alt;
        modalCaption.textContent = targetCaption;
    });
}); 

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
        modalImage.classList.remove('open');
    }
});
