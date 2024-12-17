const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const backdrop = document.createElement('div');
backdrop.classList.add('backdrop');
document.body.appendChild(backdrop);

function toggleSidebar() {
    sidebar.classList.toggle('active');
    backdrop.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
       
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
     
    }
}

menuBtn.addEventListener('click', toggleSidebar);

// Close sidebar when clicking on the backdrop
backdrop.addEventListener('click', toggleSidebar);

// Close sidebar when the window is resized to a larger screen
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        sidebar.classList.remove('active');
        backdrop.classList.remove('active');
        menuIcon.classList.remove('fa-times');
    
    }
});