document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.lightbox-img');

    // Create modal elements
    const modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    const modalImg = document.createElement('img');
    modalImg.style.maxWidth = '90%';
    modalImg.style.maxHeight = '90%';
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    // Show modal on image click
    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.getAttribute('data-large');
        });
    });

    // Hide modal on click
    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});

