const yearElement = document.getElementById('year');
if(yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const viewProjectsBtn = document.getElementById('ViewProjectsBtn');
if(viewProjectsBtn) {
    viewProjectsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'projects.html';
    });
}
