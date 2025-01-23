// Modal functionality
const contactModal = document.getElementById('contactModal');
const joinModal = document.getElementById('joinModal');
const contactBtn = document.getElementById('contactBtn');
const joinBtn = document.getElementById('joinBtn');
const closeBtns = document.getElementsByClassName('close');
const logoutBtn = document.getElementById('logoutBtn');

// Open contact modal
contactBtn.onclick = function() {
    contactModal.style.display = 'block';
};

// Open join modal
joinBtn.onclick = function() {
    joinModal.style.display = 'block';
};

// Close modals when clicking (x)
Array.from(closeBtns).forEach(btn => {
    btn.onclick = function() {
        contactModal.style.display = 'none';
        joinModal.style.display = 'none';
    };
});

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = 'none';
    }
    if (event.target == joinModal) {
        joinModal.style.display = 'none';
    }
};

// Login form submission
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    if (email === 'freelancer@test.com' && password === '12345') {
        window.location.href = 'freelancer-profile.html';
    } else if (email === 'client@test.com' && password === '123456') {
        window.location.href = 'client-dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

// Logout functionality
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}