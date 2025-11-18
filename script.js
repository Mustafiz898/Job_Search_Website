document.addEventListener('DOMContentLoaded', function() {
    const jobs = [
        { title: "Frontend Developer", company: "TechCorp", location: "New York", type: "Full-Time", experience: "Mid", category: "Tech", salary: 7500, posted: "2 days ago", status: "Open" },
        { title: "Graphic Designer", company: "Designify", location: "Remote", type: "Part-Time", experience: "Entry", category: "Design", salary: 4000, posted: "1 week ago", status: "Closed" },
        { title: "Marketing Manager", company: "MarketPro", location: "London", type: "Full-Time", experience: "Senior", category: "Marketing", salary: 12000, posted: "3 days ago", status: "Open" },
        { title: "Backend Developer", company: "CodeBase", location: "Remote", type: "Contract", experience: "Mid", category: "Tech", salary: 9000, posted: "5 days ago", status: "Open" },
        { title: "UI/UX Designer", company: "CreativeLabs", location: "New York", type: "Full-Time", experience: "Mid", category: "Design", salary: 7000, posted: "4 days ago", status: "Closed" },
        { title: "Data Analyst", company: "DataWorks", location: "London", type: "Full-Time", experience: "Mid", category: "Tech", salary: 8000, posted: "6 days ago", status: "Open" },
        { title: "Content Writer", company: "WriteWell", location: "Remote", type: "Part-Time", experience: "Entry", category: "Marketing", salary: 4500, posted: "2 days ago", status: "Open" },
        { title: "Product Manager", company: "InnovateCo", location: "New York", type: "Full-Time", experience: "Senior", category: "Tech", salary: 13000, posted: "1 week ago", status: "Closed" },
        { title: "Web Developer", company: "Webify", location: "Remote", type: "Contract", experience: "Mid", category: "Tech", salary: 8500, posted: "3 days ago", status: "Open" },
        { title: "Illustrator", company: "Artistry", location: "London", type: "Part-Time", experience: "Entry", category: "Design", salary: 5000, posted: "5 days ago", status: "Open" },
    ];

    const jobList = document.getElementById('job-list');
    const noResults = document.getElementById('no-results');
    const searchBar = document.getElementById('search-bar');
    const locationFilter = document.getElementById('location');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuContent = document.getElementById('mobile-menu-content');
    const mobileLoginLink = document.getElementById('mobile-login-link');
    const mobileRegisterLink = document.getElementById('mobile-register-link');
    const notificationBtn = document.getElementById('notification-btn');
    const notificationPopup = document.getElementById('notification-popup');
    const closeNotification = document.getElementById('close-notification');
    const loginPromptModal = document.getElementById('login-prompt-modal');
    const closeLoginPrompt = document.getElementById('close-login-prompt');
    const goToLogin = document.getElementById('go-to-login');
    const contactModal = document.getElementById('contact-modal');
    const closeContact = document.getElementById('close-contact');
    const contactForm = document.getElementById('contact-form');
    const aboutModal = document.getElementById('about-modal');
    const closeAbout = document.getElementById('close-about');
    const footerContact = document.getElementById('footer-contact');
    const footerAbout = document.getElementById('footer-about');
    const navbarAbout = document.getElementById('navbar-about');
    const mobileAbout = document.getElementById('mobile-about');

    function debounce(func, delay) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    function displayJobs(filteredJobs) {
        jobList.innerHTML = '';
        if (filteredJobs.length === 0) {
            noResults.classList.remove('hidden');
            return;
        }
        noResults.classList.add('hidden');
        filteredJobs.forEach(job => {
            const jobUrl = `https://jobquest.com/jobs/${job.title.toLowerCase().replace(/\s+/g, '-')}`;
            const jobCard = document.createElement('div');
            jobCard.className = 'job-card p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow relative';
            jobCard.innerHTML = `
                <button class="share-btn absolute top-2 right-2 text-white hover:text-gray-300" data-title="${job.title}" data-url="${jobUrl}" aria-label="Share Job">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                </button>
                <div id="share-options" class="top-8 right-2">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(jobUrl)}" target="_blank" class="share-link facebook block px-2 py-1"><i class="fab fa-facebook"></i> Facebook</a>
                    <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}" target="_blank" class="share-link linkedin block px-2 py-1"><i class="fab fa-linkedin"></i> LinkedIn</a>
                    <a href="https://t.me/share/url?url=${encodeURIComponent(jobUrl)}&text=${encodeURIComponent(`Check out this job: ${job.title}`)}" target="_blank" class="share-link telegram block px-2 py-1"><i class="fab fa-telegram"></i> Telegram</a>
                    <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out this job: ${job.title} - ${jobUrl}`)}" target="_blank" class="share-link whatsapp block px-2 py-1"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this job: ${job.title}`)}&url=${encodeURIComponent(jobUrl)}" target="_blank" class="share-link twitter block px-2 py-1"><i class="fab fa-twitter"></i> Twitter</a>
                    <button class="share-link copy block w-full text-left px-2 py-1" data-url="${jobUrl}"><i class="fas fa-copy"></i> Copy URL</button>
                </div>
                <h3 class="text-lg font-semibold">${job.title}</h3>
                <p class="text-sm">${job.company}</p>
                <p class="small-text flex items-center mt-1">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    ${job.location}
                </p>
                <p class="small-text mt-1">${job.posted}</p>
                <div class="mt-3 flex justify-between items-center">
                    <div>
                        <span class="salary text-sm">$${job.salary.toLocaleString()}/mo</span>
                        <p class="job-status-${job.status.toLowerCase()} text-sm mt-1">${job.status}</p>
                    </div>
                    <div class="text-right">
                        ${job.status === "Open" ? `<button class="job-apply-btn px-3 py-1 rounded-full bg-[#F9CE4E] hover:bg-[#e6b93d] text-[#333] text-sm" data-job="${job.title}">Apply Now</button>` : ""}
                    </div>
                </div>
            `;
            jobList.appendChild(jobCard);
        });

        document.querySelectorAll('.job-card .job-apply-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Apply Now clicked for:', btn.getAttribute('data-job'));
                loginPromptModal.classList.add('active');
            });
        });

        document.querySelectorAll('.share-btn').forEach(btn => {
            const options = btn.nextElementSibling;
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                // Close other open share menus
                document.querySelectorAll('#share-options.active').forEach(openOption => {
                    if (openOption !== options) {
                        openOption.classList.remove('active');
                    }
                });
                options.classList.toggle('active');
            });
            document.addEventListener('click', (e) => {
                if (!btn.contains(e.target) && !options.contains(e.target)) {
                    options.classList.remove('active');
                }
            });
        });

        document.querySelectorAll('.share-link.copy').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const url = btn.getAttribute('data-url');
                navigator.clipboard.writeText(url).then(() => {
                    alert('URL copied to clipboard!');
                    // Close the share options popup after copying
                    e.target.closest('#share-options').classList.remove('active');
                }).catch(err => {
                    console.error('Failed to copy URL: ', err);
                });
            });
        });
    }

    function filterJobs() {
        // Use a hidden input for mobile search. Assuming one of the mobile search inputs is used for filtering.
        const mobileSearchInput = mobileMenuContent.querySelector('.search-input');
        const searchInputToUse = searchBar.value ? searchBar : (mobileSearchInput.value ? mobileSearchInput : searchBar);
        
        const searchQuery = searchInputToUse.value.toLowerCase();
        const location = locationFilter.value;
        const jobTypes = Array.from(document.querySelectorAll('input[name="job-type"]:checked')).map(cb => cb.value);
        const experiences = Array.from(document.querySelectorAll('input[name="experience"]:checked')).map(cb => cb.value);
        const categories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
        const checkedSalary = document.querySelector('input[name="salary"]:checked');
        const salary = checkedSalary ? parseInt(checkedSalary.value) : 999999; // Default to Any

        const filteredJobs = jobs.filter(job => {
            const matchesSearch = job.title.toLowerCase().includes(searchQuery) || job.company.toLowerCase().includes(searchQuery);
            const matchesType = jobTypes.length === 0 || jobTypes.includes(job.type);
            const matchesLocation = !location || job.location === location;
            const matchesExperience = experiences.length === 0 || experiences.includes(job.experience);
            const matchesCategory = categories.length === 0 || categories.includes(job.category);
            const matchesSalary = job.salary <= salary;

            return matchesSearch && matchesType && matchesLocation && matchesExperience && matchesCategory && matchesSalary;
        });

        displayJobs(filteredJobs);
    }

    const debouncedFilter = debounce(filterJobs, 300);

    // Initial load and filter event listeners
    filterJobs();
    searchBar.addEventListener('input', debouncedFilter);
    mobileMenuContent.querySelector('.search-input').addEventListener('input', debouncedFilter); // For mobile search
    locationFilter.addEventListener('change', filterJobs);
    document.querySelectorAll('input[name="job-type"]').forEach(cb => cb.addEventListener('change', filterJobs));
    document.querySelectorAll('input[name="experience"]').forEach(cb => cb.addEventListener('change', filterJobs));
    document.querySelectorAll('input[name="category"]').forEach(cb => cb.addEventListener('change', filterJobs));
    document.querySelectorAll('input[name="salary"]').forEach(radio => radio.addEventListener('change', filterJobs));

    clearFiltersBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        searchBar.value = '';
        mobileMenuContent.querySelector('.search-input').value = '';
        locationFilter.value = '';
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        document.querySelector('input[name="salary"][value="999999"]').checked = true;
        filterJobs();
    });

    // --- Modal and Navigation Logic ---

    // Toggle Mobile Menu
    mobileMenuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenuContent.classList.toggle('active');
        if (mobileMenuContent.classList.contains('active')) {
            mobileMenuToggle.innerHTML = '<i class="fas fa-times text-2xl"></i>'; // Change icon to close (X)
        } else {
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars text-2xl"></i>'; // Change icon to menu (bars)
        }
    });

    // Login/Register Links
    loginLink.addEventListener('click', (e) => { 
        e.preventDefault(); 
        e.stopPropagation();
        loginModal.classList.remove('hidden'); 
        loginPromptModal.classList.remove('active');
    });
    registerLink.addEventListener('click', (e) => { 
        e.preventDefault(); 
        e.stopPropagation();
        registerModal.classList.remove('hidden'); 
    });
    mobileLoginLink.addEventListener('click', (e) => { 
        e.preventDefault(); 
        e.stopPropagation();
        loginModal.classList.remove('hidden'); 
        mobileMenuContent.classList.remove('active'); 
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars text-2xl"></i>'; 
    });
    mobileRegisterLink.addEventListener('click', (e) => { 
        e.preventDefault(); 
        e.stopPropagation();
        registerModal.classList.remove('hidden'); 
        mobileMenuContent.classList.remove('active'); 
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars text-2xl"></i>'; 
    });

    // Close Login/Register Modals
    document.querySelectorAll('.close').forEach(close => {
        close.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            loginModal.classList.add('hidden');
            registerModal.classList.add('hidden');
        });
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) loginModal.classList.add('hidden');
        if (e.target === registerModal) registerModal.classList.add('hidden');
    });

    // Notification Popup
    notificationBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        notificationPopup.classList.toggle('active');
        // Close other modal popups for better UX
        loginPromptModal.classList.remove('active');
        contactModal.classList.remove('active');
        aboutModal.classList.remove('active');
    });
    closeNotification.addEventListener('click', () => notificationPopup.classList.remove('active'));

    // Login Prompt Modal (for Apply Now)
    closeLoginPrompt.addEventListener('click', () => loginPromptModal.classList.remove('active'));
    goToLogin.addEventListener('click', () => {
        loginPromptModal.classList.remove('active');
        loginModal.classList.remove('hidden');
    });

    // Contact Modal (from footer)
    footerContact.addEventListener('click', (e) => {
        e.preventDefault();
        contactModal.classList.add('active');
        // Close other modal popups
        loginPromptModal.classList.remove('active');
        notificationPopup.classList.remove('active');
        aboutModal.classList.remove('active');
        mobileMenuContent.classList.remove('active'); 
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars text-2xl"></i>'; 
    });
    closeContact.addEventListener('click', () => contactModal.classList.remove('active'));
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message Sent! Thank you for contacting JobQuest.');
        contactModal.classList.remove('active');
        contactForm.reset();
    });

    // About Us Modal (from navbar/footer/mobile)
    const aboutLinks = [navbarAbout, mobileAbout, footerAbout];
    aboutLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            aboutModal.classList.add('active');
            // Close other modal popups
            loginPromptModal.classList.remove('active');
            notificationPopup.classList.remove('active');
            contactModal.classList.remove('active');
            mobileMenuContent.classList.remove('active'); 
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
        });
    });
    closeAbout.addEventListener('click', () => aboutModal.classList.remove('active'));
});
