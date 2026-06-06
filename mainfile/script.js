document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       DATA: LEADERSHIP & ACTIVITIES
       ========================================= */
    const leadershipData = [
        {
            id: 'gfg_lead',
            icon: 'fa-trophy',
            title: 'GeeksforGeeks Campus Mantri',
            badge: 'Leader',
            desc: 'Promoting technical programs and student outreach to build a strong coding community.',
            skills: ['Leadership', 'Community Engagement', 'Public Speaking'],
            color: '#FFD700'
        },
        {
            id: 'iic_lead',
            icon: 'fa-lightbulb',
            title: 'IIC Member',
            badge: 'Innovator',
            desc: 'Driving innovation awareness and fostering the entrepreneurship ecosystem through technical workshops.',
            skills: ['Innovation', 'Entrepreneurship', 'Event Management'],
            color: '#8B5CF6'
        },
        {
            id: 'codecell_lead',
            icon: 'fa-users',
            title: 'CodeCell Member',
            badge: 'Community Builder',
            desc: 'Rizvi College of Engineering - Organizing coding activities and peer learning sessions.',
            skills: ['Coding', 'Community Building', 'Mentoring'],
            color: '#00D4FF'
        },
        {
            id: 'nptel_learn',
            icon: 'fa-certificate',
            title: 'NPTEL Elite Certified',
            badge: 'Elite Learner',
            desc: 'Completed advanced courses in Python, DSA, Data Science, and Quantum Computing from IITs.',
            skills: ['Python', 'DSA', 'Data Science', 'Quantum Computing'],
            color: '#0056D2'
        },
        {
            id: 'cont_learn',
            icon: 'fa-book-reader',
            title: 'Continuous Learning',
            badge: 'Learner',
            desc: 'Actively upskilling in Web Development, Cybersecurity, AI, and emerging technologies.',
            skills: ['Web Dev', 'Cybersecurity', 'AI', 'IoT'],
            color: '#00FF88'
        }
    ];

    /* =========================================
       DATA: TESTIMONIALS
       ========================================= */
    const testimonialsData = [
        {
            name: 'Amit Kothari',
            role: 'Founder & CEO',
            company: 'Zetheta Algorithms Pvt Ltd',
            text: "Soham consistently demonstrated curiosity, professionalism, and a strong willingness to learn during his work exposure. His ability to understand concepts quickly and actively contribute to tasks reflects strong potential for growth in technology and cybersecurity domains.",
            rating: 5,
            img: 'https://picsum.photos/seed/amit/200/200'
        },
        {
            name: 'Team Mentor',
            role: 'Frontend Development Mentor',
            company: 'Codeveda Technologies',
            text: "Soham has shown dedication toward improving his frontend development skills and consistently approaches projects with enthusiasm and attention to detail. His learning mindset and persistence make him a promising developer.",
            rating: 5,
            img: 'https://picsum.photos/seed/mentor/200/200'
        },
        {
            name: 'Technical Community Lead',
            role: 'Student Leadership',
            company: 'GeeksforGeeks',
            text: "Soham actively contributes to student engagement initiatives and demonstrates leadership qualities while promoting learning opportunities among peers.",
            rating: 5,
            img: 'https://picsum.photos/seed/gfg_lead/200/200'
        }
    ];

    /* =========================================
       DATA: HIGHLIGHTS
       ========================================= */
    const highlightsList = [
        "GeeksforGeeks Campus Mantri",
        "GitHub Student Developer Pack Holder",
        "IIC Member",
        "CodeCell Member",
        "Frontend Development Intern",
        "Web Development Intern",
        "Cybersecurity Risk Analyst",
        "NPTEL Elite Certified Learner"
    ];

    /* =========================================
       RENDER FUNCTIONS
       ========================================= */
    
    // Render Journey
    function renderJourney() {
        const container = document.querySelector('.timeline-compact-grid');
        const journeyData = [
            { id: 'edu', date: '2024 – Present', role: 'B.E. Electronics & CS Engineering', org: 'Rizvi College', icon: 'fa-graduation-cap', color: '#FFD700', highlights: ['Engineering', 'Technical Learning', 'Programming'], skills: ['Engineering', 'Electronics', 'C Programming'], desc: 'Pursuing a B.E. degree.', duration: '4 Years' },
            { id: 'intern1', date: 'July 2025', role: 'Frontend Intern', org: 'Prozenix', icon: 'fa-code', color: '#FF8C00', highlights: ['Chat App', 'React', 'JS'], skills: ['React', 'JS', 'Tailwind'], desc: 'Developed real-time chat app.', duration: '1 Month' },
            { id: 'intern2', date: 'Dec 2025', role: 'Web Intern', org: 'Labdox', icon: 'fa-laptop-code', color: '#00D4FF', highlights: ['Landing Pages', 'React'], skills: ['HTML', 'CSS', 'React'], desc: 'High-converting landing pages.', duration: '1 Month' },
            { id: 'cyber', date: 'Jan 2026', role: 'Cybersecurity Analyst', org: 'Zetheta', icon: 'fa-shield-alt', color: '#00FF88', highlights: ['Risk Assessment'], skills: ['Risk Mgmt', 'Security'], desc: 'Analyzed security threats.', duration: '3 Months' },
            { id: 'codecell', date: 'Feb 2026', role: 'CodeCell Member', org: 'Rizvi College', icon: 'fa-users', color: '#8B5CF6', highlights: ['Community', 'Events'], skills: ['Mgmt', 'Mentoring'], desc: 'Organizing hackathons.', duration: 'Ongoing' },
            { id: 'iic2', date: 'Mar 2026', role: 'IIC Member', org: 'IIC', icon: 'fa-lightbulb', color: '#FFD700', highlights: ['Innovation', 'Startups'], skills: ['Innovation', 'Leadership'], desc: 'Connecting students with mentors.', duration: 'Ongoing' },
            { id: 'intern3', date: 'June 2026 – Present', role: 'Web Intern', org: 'Codeveda', icon: 'fa-rocket', color: '#FF4D4D', highlights: ['Full Stack', 'Real-World'], skills: ['React', 'Node', 'MongoDB'], desc: 'Scalable web applications.', duration: 'Current' }
        ];

        journeyData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'journey-card glass-panel';
            card.onclick = () => openJourneyModal(item);
            let tagsHtml = item.skills.slice(0, 3).map(s => `<span class="tag-pill">${s}</span>`).join('');
            card.innerHTML = `
                <div class="jc-header"><span>${item.date}</span><i class="fas ${item.icon}" style="color: ${item.color}"></i></div>
                <div class="jc-role">${item.role}</div>
                <div class="jc-org"><i class="fas fa-building" style="font-size: 0.7rem;"></i> ${item.org}</div>
                <div class="jc-tags">${tagsHtml}</div>
            `;
            container.appendChild(card);
        });
    }

    // Render Leadership & Activities
    function renderActivities() {
        const container = document.getElementById('activitiesContainer');
        leadershipData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'activity-card glass-panel';
            card.onclick = () => openLeadershipModal(item);
            card.innerHTML = `
                <div class="activity-icon-box" style="color: ${item.color}">
                    <i class="fas ${item.icon}"></i>
                </div>
                <div class="activity-role">${item.title}</div>
                <div class="activity-desc">${item.desc}</div>
                <div class="activity-badge">${item.badge}</div>
            `;
            container.appendChild(card);
        });
    }

    // Render Testimonials
    function renderTestimonials() {
        const container = document.getElementById('testimonialSlider');
        testimonialsData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'glass-panel testimonial-card';
            let stars = '';
            for(let i=0; i<item.rating; i++) stars += '<i class="fas fa-star"></i>';
            card.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="t-profile-img">
                <div class="t-quote"><i class="fas fa-quote-left"></i> ${item.text}</div>
                <div class="t-name">${item.name}</div>
                <div class="t-role">${item.role}</div>
                <div class="t-company">${item.company}</div>
                <div class="t-stars">${stars}</div>
            `;
            container.appendChild(card);
        });
    }

    // Render Highlights
    function renderHighlights() {
        const container = document.getElementById('highlightsContainer');
        highlightsList.forEach((text, index) => {
            const badge = document.createElement('div');
            badge.className = 'highlight-badge glass-panel';
            badge.style.animationDelay = `${index * 0.1}s`;
            badge.innerHTML = `<i class="fas fa-check-circle"></i> ${text}`;
            container.appendChild(badge);
        });
    }

    /* =========================================
       MODAL LOGIC
       ========================================= */
    
    function openJourneyModal(data) {
        const overlay = document.getElementById('journeyModalOverlay');
        const content = document.getElementById('journeyModalContent');
        let listHtml = data.highlights.map(item => `<li><i class="fas fa-check"></i> ${item}</li>`).join('');
        let skillsHtml = data.skills.map(skill => `<span class="tag-pill-lg">${skill}</span>`).join('');
        content.innerHTML = `
            <div class="modal-close-btn" onclick="closeModals()">&times;</div>
            <div class="modal-particle" style="top: 10%; left: 10%; background: ${data.color}"></div>
            <div class="modal-left"><i class="fas ${data.icon} modal-big-icon" style="color: ${data.color}"></i><div style="font-size: 1.2rem; font-weight: bold; color: #fff;">${data.org}</div><div style="font-size: 0.9rem; color: var(--text-muted); margin-top: 5px;">${data.duration}</div></div>
            <div class="modal-right"><h3 class="modal-title">${data.role}</h3><div class="modal-subtitle" style="color: ${data.color}">${data.date}</div><p class="modal-desc">${data.desc}</p><div class="modal-section-title">Key Highlights</div><ul class="modal-list">${listHtml}</ul><div class="modal-section-title">Skills Gained</div><div class="modal-tags">${skillsHtml}</div></div>
        `;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function openLeadershipModal(data) {
        const overlay = document.getElementById('achModalOverlay');
        const content = document.getElementById('achModalContent');
        let skillsHtml = data.skills.map(skill => `<span class="tag-pill-lg">${skill}</span>`).join('');
        content.innerHTML = `
            <div class="modal-close-btn" onclick="closeModals()">&times;</div>
            <div class="modal-particle" style="top: 10%; left: 10%; background: ${data.color}"></div>
            <div class="modal-left"><i class="fas ${data.icon} modal-big-icon" style="color: ${data.color}"></i><div class="modal-badge">${data.badge}</div></div>
            <div class="modal-right"><h3 class="modal-title" style="background: linear-gradient(90deg, #fff, ${data.color}); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.title}</h3><p class="modal-desc">${data.desc}</p><div class="modal-section-title">Skills Developed</div><div class="modal-tags">${skillsHtml}</div></div>
        `;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModals() {
        document.querySelectorAll('.modal-overlay').forEach(el => el.classList.remove('active'));
        document.body.style.overflow = 'auto';
    }

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => { if(e.target === overlay) closeModals(); });
    });
    document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModals(); });

    /* =========================================
       TESTIMONIAL CAROUSEL LOGIC
       ========================================= */
    const slider = document.getElementById('testimonialSlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let scrollAmount = 0;
    const cardWidth = 380;

    function slideNext() {
        if(slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth - 1)) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    }

    function slidePrev() {
        slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }

    let autoScroll = setInterval(slideNext, 5000);

    slider.addEventListener('mouseenter', () => clearInterval(autoScroll));
    slider.addEventListener('mouseleave', () => autoScroll = setInterval(slideNext, 5000));

    nextBtn.addEventListener('click', () => {
        slideNext();
        clearInterval(autoScroll);
        autoScroll = setInterval(slideNext, 5000);
    });
    prevBtn.addEventListener('click', () => {
        slidePrev();
        clearInterval(autoScroll);
        autoScroll = setInterval(slideNext, 5000);
    });

    /* =========================================
       CORE INITIALIZATION
       ========================================= */

    // 1. Loader Fix
    const loader = document.getElementById('loader');
    setTimeout(() => {
        if(loader) {
            loader.style.opacity = '0';
            setTimeout(() => { loader.style.display = 'none'; }, 800);
        }
    }, 1500);

    // 2. Custom Cursor
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');
    window.addEventListener('mousemove', (e) => {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        cursorOutline.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // 3. Particles
    const canvas = document.getElementById('canvas-bg');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particlesArray;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2;
            this.speedX = (Math.random() * 0.5) - 0.25;
            this.speedY = (Math.random() * 0.5) - 0.25;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        }
        draw() {
            ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 9000;
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });

    // 4. Typing Effect
    const texts = ["Web Developer", "AI Enthusiast", "IoT Explorer", "Campus Mantri"];
    let count = 0, index = 0, currentText = "", letter = "";
    (function type() {
        if (count === texts.length) count = 0;
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        document.getElementById('typewriter').textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 100);
        }
    })();

    // 5. Theme Toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const icon = document.querySelector('#theme-toggle i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // 6. Mobile Menu
    document.getElementById('hamburger').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
        document.querySelector('#hamburger i').classList.toggle('fa-times');
    });

    // 7. Scroll Reveal & Counters
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Hero Stats
                if (entry.target.querySelector('.hero-stats')) {
                    document.querySelectorAll('.hero-stats h3').forEach(counter => {
                        let count = 0, target = +counter.getAttribute('data-val'), inc = target / 100;
                        const update = () => {
                            count += inc;
                            counter.innerText = Math.ceil(count);
                            if (count < target) requestAnimationFrame(update);
                            else counter.innerText = target + "+";
                        };
                        update();
                    });
                }

                // Journey Stats
                if (entry.target.querySelector('.stat-mini-num')) {
                    document.querySelectorAll('.stat-mini-num').forEach(counter => {
                        let count = 0, target = +counter.getAttribute('data-val'), inc = target / 50;
                        const update = () => {
                            count += inc;
                            counter.innerText = Math.ceil(count);
                            if (count < target) requestAnimationFrame(update);
                            else counter.innerText = target + "+";
                        };
                        update();
                    });
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 8. Render All Sections
    renderJourney();
    renderActivities();
    renderTestimonials();
    renderHighlights();

    // 9. Skill Tabs
    document.querySelectorAll('.skill-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.skill-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-target')).classList.add('active');
        });
    });

    // 10. Project Tilt
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.transform = `perspective(1000px) rotateX(${(y - rect.height / 2) / -10}deg) rotateY(${(x - rect.width / 2) / 10}deg)`;
        });
        card.addEventListener('mouseleave', () => card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)');
    });

    // 11. Project Filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.project-card').forEach(card => {
                card.style.display = (btn.getAttribute('data-filter') === 'all' || card.getAttribute('data-category') === btn.getAttribute('data-filter')) ? 'flex' : 'none';
            });
        });
    });

    // 12. GitHub Fetch
    async function fetchGitHub() {
        const container = document.getElementById('github-container');
        try {
            const res = await fetch(`https://api.github.com/users/CoderSoham345`);
            if (!res.ok) throw new Error();
            const data = await res.json();
            container.innerHTML = `
                <div class="glass-panel stat-card"><h3>${data.public_repos}</h3><p>Repositories</p></div>
                <div class="glass-panel stat-card"><h3>${data.followers}</h3><p>Followers</p></div>
                <div class="glass-panel stat-card"><h3>${data.following}</h3><p>Following</p></div>
            `;
        } catch (e) {
            container.innerHTML = `
                <div class="glass-panel stat-card"><h3>25+</h3><p>Repositories</p></div>
                <div class="glass-panel stat-card"><h3>140+</h3><p>Followers</p></div>
                <div class="glass-panel stat-card"><h3>50+</h3><p>Following</p></div>
            `;
        }
    }
    fetchGitHub();

    // 13. Toast Notification
    function showToast(msg) {
        const div = document.createElement('div');
        div.className = 'toast';
        div.innerHTML = `<i class="fas fa-check-circle"></i> ${msg}`;
        document.getElementById('toastContainer').appendChild(div);
        setTimeout(() => div.remove(), 3000);
    }

    // 14. Contact Form Validation
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        ['name', 'email', 'subject', 'message'].forEach(id => {
            const el = document.getElementById(id);
            if (!el.value.trim()) { el.classList.add('invalid'); valid = false; }
            else el.classList.remove('invalid');
        });
        if (!document.getElementById('email').value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            document.getElementById('email').classList.add('invalid');
            valid = false;
        }
        if (valid) { showToast('Message Sent!'); e.target.reset(); }
        else showToast('Please fix errors', 'error');
    });

    // 15. Back To Top & Navbar Scroll
    const btt = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btt.classList.add('show');
            document.getElementById('navbar').classList.add('scrolled');
        } else {
            btt.classList.remove('show');
            document.getElementById('navbar').classList.remove('scrolled');
        }
    });

    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
