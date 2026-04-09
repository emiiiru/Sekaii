// Sidebar Toggle
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
    document.getElementById("overlay").classList.toggle("show");
}

// Page Navigation Logic
function navigate(id, el) {
    // Remove active class from sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active-section'));
    // Show target section
    document.getElementById(id).classList.add('active-section');
    
    // Update active class in desktop nav
    document.querySelectorAll('.top-nav a').forEach(a => a.classList.remove('active'));
    if(el) el.classList.add('active');
    
    // Close sidebar (mobile view)
    document.getElementById("sidebar").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Typing Animation
const words = ["University Student", "Creative Writer", "Multimedia Creator"];
let i = 0, j = 0, isDeleting = false;

function type() {
    const target = document.getElementById("type");
    if(!target) return; // Guard clause

    let current = words[i];
    if (isDeleting) {
        target.textContent = current.substring(0, j--);
        if (j < 0) { 
            isDeleting = false; 
            i = (i + 1) % words.length; 
        }
    } else {
        target.textContent = current.substring(0, j++);
        if (j > current.length) { 
            isDeleting = true; 
            setTimeout(type, 2000); 
            return; 
        }
    }
    setTimeout(type, isDeleting ? 60 : 120);
}

// Initialize on Load
window.onload = type;

// Hire Me Email Logic
function hire() { 
    window.location.href = "mailto:emiljohnrey143@gmail.com"; 
}

//download cv
function downloadCV(){
    window.location.href='emil_resume.pdf';
}
