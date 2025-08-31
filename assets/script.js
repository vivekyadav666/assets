document.addEventListener('DOMContentLoaded', () => {
    // Select all pages
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');

    // --- Page 1 Logic ---
    const form = document.getElementById('surpriseForm');
    const passwordInput = document.getElementById('passwordInput');
    const songSelect = document.getElementById('songSelect');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const correctPassword = 'pokie'; // Your unique password

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (passwordInput.value === correctPassword) {
            backgroundMusic.src = songSelect.value;
            backgroundMusic.play();

            page1.classList.remove('active');
            page1.classList.add('hidden');
            page2.classList.remove('hidden');
            page2.classList.add('active');

        } else {
            alert('That is not the correct password. Please try again! 😢');
        }
    });

    // --- Page 2 Logic ---
    const nextPageBtn = document.getElementById('nextPageTwo');
    nextPageBtn.addEventListener('click', () => {
        page2.classList.remove('active');
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
        page3.classList.add('active');
    });

    // Display poetry lines one by one (add this to page 2 logic)
    const poetryLines = page2.querySelectorAll('.poetry-line');
    poetryLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 2}s`;
    });

    // --- Page 3 Logic ---
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const questionContainer = document.querySelector('.question-container');
    const revealContent = document.querySelector('.reveal-content');
    const noMessage = document.querySelector('.no-option-message');
    const finishBtn = document.getElementById('finishBtn');

    yesBtn.addEventListener('click', () => {
        questionContainer.classList.add('hidden');
        revealContent.classList.remove('hidden');
    });

    noBtn.addEventListener('click', () => {
        questionContainer.classList.add('hidden');
        noMessage.classList.remove('hidden');
    });

    finishBtn.addEventListener('click', () => {
        alert('My dear madam ji aab aap pad lijye time ho gya yh program yahi smapt hota hai. ✨');
    });

    // --- General Audio Control ---
    // You may need to trigger the audio to play after a user interaction
    // to bypass browser autoplay restrictions.
    // The initial code in the form submission handles this.
});