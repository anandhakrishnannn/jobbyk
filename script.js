// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const contactModal = document.getElementById('contactModal');
    const joinModal = document.getElementById('joinModal');
    const contactBtn = document.getElementById('contactBtn');
    const joinBtn = document.getElementById('joinBtn');
    const closeBtns = document.getElementsByClassName('close');
    const logoutBtn = document.getElementById('logoutBtn');

    // Modal functionality - only add listeners if elements exist
    if (contactBtn && contactModal) {
        contactBtn.onclick = function() {
            contactModal.style.display = 'block';
        };
    }

    if (joinBtn && joinModal) {
        joinBtn.onclick = function() {
            joinModal.style.display = 'block';
        };
    }

    // Close modals when clicking (x)
    Array.from(closeBtns).forEach(btn => {
        btn.onclick = function() {
            if (contactModal) contactModal.style.display = 'none';
            if (joinModal) joinModal.style.display = 'none';
        };
    });

    // Close modals when clicking outside
    window.onclick = function(event) {
        if (contactModal && event.target == contactModal) {
            contactModal.style.display = 'none';
        }
        if (joinModal && event.target == joinModal) {
            joinModal.style.display = 'none';
        }
    };

    // Login form functionality
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
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
    }

    // Logout functionality
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    // Sorting functionality for client dashboard
    const sortNameCheckbox = document.getElementById('sortName');
    const sortPopularCheckbox = document.getElementById('sortPopular');
    const servicesGrid = document.querySelector('.services-grid');

    if (servicesGrid && sortNameCheckbox && sortPopularCheckbox) {
        function sortServices() {
            const services = Array.from(servicesGrid.getElementsByClassName('service-card'));
            
            if (sortNameCheckbox.checked) {
                services.sort((a, b) => {
                    const nameA = a.querySelector('h3').textContent.toLowerCase();
                    const nameB = b.querySelector('h3').textContent.toLowerCase();
                    return nameA.localeCompare(nameB);
                });
                sortPopularCheckbox.checked = false;
            } else if (sortPopularCheckbox.checked) {
                services.sort((a, b) => {
                    const popularityA = parseInt(a.getAttribute('data-popularity'));
                    const popularityB = parseInt(b.getAttribute('data-popularity'));
                    return popularityB - popularityA;
                });
                sortNameCheckbox.checked = false;
            }

            // Remove existing cards
            services.forEach(service => service.remove());
            
            // Add sorted cards back
            services.forEach(service => servicesGrid.appendChild(service));
        }

        // Event listeners for checkboxes
        sortNameCheckbox.addEventListener('change', sortServices);
        sortPopularCheckbox.addEventListener('change', sortServices);
    }
});
