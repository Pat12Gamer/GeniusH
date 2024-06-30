const showMoreBtn = document.querySelector('.show');
const hidden = document.querySelectorAll('.hidden');

showMoreBtn.addEventListener('click', function() {
  // Hide the button
  this.style.display = 'none';

  hidden.forEach(square => {
    square.classList.remove('hidden');
  });
});