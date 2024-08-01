document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        
        // Hide all tab content
        document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');

        // Show the content for the clicked button
        const contentId = button.getAttribute('data-content');
        document.getElementById(contentId).style.display = 'block';
        
        // Add active class to the clicked button
        button.classList.add('active');
    });
});

// Modal functionality
const modal = document.getElementById('modal');
const hamburgerBtn = document.getElementById('hamburger-btn');
const closeModal = document.getElementById('close-modal');

hamburgerBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModalBtn");
    var span = document.getElementsByClassName("close")[0];
    var audio = document.getElementById("audio");

    btn.onclick = function() {
        modal.style.display = "block";
        audio.play();
    }

    span.onclick = function() {
        modal.style.display = "none";
        audio.pause();
        audio.currentTime = 0;
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            audio.pause();
            audio.currentTime = 0;
        }
    }
});

function aparecer(fileName) {
    fetch(fileName)
        .then(response => response.text())
        .then(scriptContent => {
            const exerciseDisplay = document.getElementById('exerciseDisplay');
            exerciseDisplay.textContent = scriptContent;
            // Opcional: Executar o script
            // eval(scriptContent);
        })
        .catch(error => {
            console.error('Erro ao carregar o exercício:', error);
        });
}
