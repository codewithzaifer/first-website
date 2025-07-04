   // Terms and Conditions Modal
        const termsModal = document.getElementById('termsModal');
        const agreeCheckbox = document.getElementById('agreeCheckbox');
        const termsContinueBtn = document.getElementById('termsContinueBtn');
        const termsLinkContact = document.getElementById('termsLinkContact');
        
        // Gender selection variables
        const genderModal = document.getElementById('genderModal');
        const maleBtn = document.getElementById('maleBtn');
        const femaleBtn = document.getElementById('femaleBtn');
        const genderConfirmBtn = document.getElementById('genderConfirmBtn');
        const genderCloseBtn = document.getElementById('genderCloseBtn');
        let selectedGender = null;
        const whatsappNumber = "918597904730";
        
        // Mobile menu variables
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');
        const closeMobileMenu = document.getElementById('closeMobileMenu');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        
        // Show terms modal on page load
        document.addEventListener('DOMContentLoaded', function () {
            termsModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        // Enable/disable continue button based on checkbox
        agreeCheckbox.addEventListener('change', function () {
            termsContinueBtn.disabled = !this.checked;
        });

        // Close terms modal and allow access to website
        termsContinueBtn.addEventListener('click', function () {
            termsModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        // Reopen terms modal from contact section
        if (termsLinkContact) {
            termsLinkContact.addEventListener('click', function (e) {
                e.preventDefault();
                termsModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        }

        // Close modal when clicking outside
        termsModal.addEventListener('click', function (e) {
            if (e.target === termsModal) {
                termsModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Create floating hearts
        function createHearts() {
            const heartsContainer = document.getElementById('heartsContainer');
            const heartCount = 30;

            for (let i = 0; i < heartCount; i++) {
                const heart = document.createElement('div');
                heart.innerHTML = '❤';
                heart.classList.add('heart');

                // Random properties
                const left = Math.random() * 100;
                const size = Math.random() * 1 + 0.5;
                const duration = Math.random() * 5 + 5;
                const delay = Math.random() * 5;

                heart.style.left = `${left}%`;
                heart.style.fontSize = `${size}rem`;
                heart.style.animationDuration = `${duration}s`;
                heart.style.animationDelay = `${delay}s`;

                heartsContainer.appendChild(heart);
            }
        }

        // Show heart animation overlay
        function showHeartAnimation() {
            const heartOverlay = document.getElementById('heartOverlay');
            heartOverlay.classList.add('active');

            setTimeout(() => {
                heartOverlay.classList.remove('active');
            }, 1500);
        }

        // Gender selection functions
        maleBtn.addEventListener('click', function() {
            selectedGender = 'male';
            maleBtn.classList.add('selected');
            femaleBtn.classList.remove('selected');
            genderConfirmBtn.disabled = false;
        });
        
        femaleBtn.addEventListener('click', function() {
            selectedGender = 'female';
            femaleBtn.classList.add('selected');
            maleBtn.classList.remove('selected');
            genderConfirmBtn.disabled = false;
        });
        
        genderConfirmBtn.addEventListener('click', function() {
            genderModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello! I'm interested in finding a match. My gender is ${selectedGender}.`;
            window.open(whatsappUrl, '_blank');
        });
        
        // Close gender modal
        genderCloseBtn.addEventListener('click', function() {
            genderModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Function to open gender modal
        function openGenderModal() {
            genderModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Handle all WhatsApp redirect buttons
        function setupWhatsAppButtons() {
            const whatsappButtons = [
                document.getElementById('whatsappBtn'),
                document.getElementById('findMatchBtn'),
                document.getElementById('contactMatchBtn'),
                document.getElementById('footerChatBtn')
            ];
            
            whatsappButtons.forEach(button => {
                if (button) {
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        openGenderModal();
                    });
                }
            });
        }

        // Mobile menu functions
        function toggleMobileMenu() {
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
        }

        // Close mobile menu when clicking links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function () {
            createHearts();
            setupWhatsAppButtons();

            // Mobile menu event listeners
            mobileMenuBtn.addEventListener('click', toggleMobileMenu);
            closeMobileMenu.addEventListener('click', toggleMobileMenu);

            // Header scroll effect
            const header = document.getElementById('mainHeader');
            window.addEventListener('scroll', function () {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;

                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });

        // Add to script.js
// Prevent form jacking
document.querySelectorAll('a[href^="https://wa.me"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    // Add user verification step before redirect
    showVerificationModal(); 
  });
});