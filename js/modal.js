window.addEventListener('DOMContentLoaded', () => {

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');



    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            // modal.classList.add('hade');
            // modal.classList.remove('show');
            modal.classList.toggle('show');
            document.body.style.overflow = '';
        })
    });
    
    function closeModal() {
        // modal.classList.add('hade');
        // modal.classList.remove('show');
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }
   
    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

});