// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.glass-card, .timeline-item, .project-card, .skill-category, .education-card');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        navbar.style.backdropFilter = 'blur(25px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
});

// PDF Export Functionality
function downloadPDF() {
    // Create a new window for PDF generation
    const printWindow = window.open('', '_blank');
    
    // Get the current page content
    const pageContent = document.documentElement.outerHTML;
    
    // Create a clean version for PDF
    const cleanContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jithin Varghese - Product Manager Portfolio</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Inter', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                background: white;
                padding: 20px;
            }
            
            .container {
                max-width: 800px;
                margin: 0 auto;
            }
            
            .header {
                text-align: center;
                margin-bottom: 40px;
                padding: 30px;
                background: linear-gradient(135deg, #A5C8D6 0%, #D5AAFF 50%, #C8E6C9 100%);
                color: white;
                border-radius: 15px;
            }
            
            .header h1 {
                font-size: 2.5rem;
                margin-bottom: 10px;
            }
            
            .header .subtitle {
                font-size: 1.3rem;
                margin-bottom: 5px;
            }
            
            .header .focus {
                font-size: 1.1rem;
                opacity: 0.9;
            }
            
            .contact-info {
                display: flex;
                justify-content: center;
                gap: 30px;
                margin-top: 20px;
                flex-wrap: wrap;
            }
            
            .contact-item {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .section {
                margin-bottom: 40px;
                padding: 25px;
                background: #f8f9fa;
                border-radius: 15px;
                border-left: 4px solid #A5C8D6;
            }
            
            .section h2 {
                color: #2C3E50;
                font-size: 1.8rem;
                margin-bottom: 20px;
                border-bottom: 2px solid #A5C8D6;
                padding-bottom: 10px;
            }
            
            .section h3 {
                color: #34495E;
                font-size: 1.3rem;
                margin-bottom: 10px;
            }
            
            .experience-item {
                margin-bottom: 25px;
                padding: 20px;
                background: white;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            
            .experience-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 15px;
                flex-wrap: wrap;
            }
            
            .company {
                font-weight: bold;
                color: #2C3E50;
            }
            
            .duration {
                color: #7F8C8D;
                font-size: 0.9rem;
            }
            
            .achievements {
                list-style: none;
            }
            
            .achievements li {
                margin-bottom: 8px;
                padding-left: 20px;
                position: relative;
            }
            
            .achievements li:before {
                content: "▶";
                position: absolute;
                left: 0;
                color: #A5C8D6;
            }
            
            .project-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
            }
            
            .project-item {
                background: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            
            .skills-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
            }
            
            .skill-category {
                background: white;
                padding: 15px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            
            .skill-category h3 {
                color: #2C3E50;
                margin-bottom: 10px;
                font-size: 1.1rem;
            }
            
            .skill-items {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            
            .skill-item {
                background: #A5C8D6;
                color: white;
                padding: 4px 12px;
                border-radius: 15px;
                font-size: 0.8rem;
            }
            
            .education-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
            }
            
            .education-item {
                background: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            
            .stats {
                display: flex;
                justify-content: space-around;
                margin: 20px 0;
                flex-wrap: wrap;
            }
            
            .stat {
                text-align: center;
                margin: 10px;
            }
            
            .stat-number {
                font-size: 2rem;
                font-weight: bold;
                color: #2C3E50;
                display: block;
            }
            
            .stat-label {
                font-size: 0.9rem;
                color: #7F8C8D;
            }
            
            @media print {
                body { padding: 0; }
                .section { break-inside: avoid; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Jithin Varghese</h1>
                <div class="subtitle">Product Manager</div>
                <div class="focus">Connected Vehicles & Telematics</div>
                <div class="contact-info">
                    <div class="contact-item">📧 jithinvarghese.varghese8@gmail.com</div>
                    <div class="contact-item">📱 +91 8943657704</div>
                    <div class="contact-item">📍 Bengaluru, India</div>
                    <div class="contact-item">💼 linkedin.com/in/jithin-varghese-pm/</div>
                </div>
            </div>

            <div class="section">
                <h2>Professional Summary</h2>
                <p>Results-driven Product Manager with 7+ years of experience in telematics, connected vehicles, and automotive IoT solutions. Specializing in bridging the gap between technical complexity and user needs, with a proven track record of delivering solutions that enhance user experience and drive business growth for leading OEMs and mobility companies.</p>
                
                <div class="stats">
                    <div class="stat">
                        <span class="stat-number">35%</span>
                        <span class="stat-label">More Actionable Insights</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">30%</span>
                        <span class="stat-label">Reduction in Support Tickets</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">200%</span>
                        <span class="stat-label">Efficiency Improvement</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">95%+</span>
                        <span class="stat-label">SLA Compliance</span>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Professional Experience</h2>
                
                <div class="experience-item">
                    <div class="experience-header">
                        <div>
                            <h3>Associate Product Manager</h3>
                            <div class="company">Darby Telematics</div>
                        </div>
                        <div class="duration">Dec 2023 - Present</div>
                    </div>
                    <ul class="achievements">
                        <li>Built customer feedback loops for connected-vehicle telematics, generating <strong>35% more actionable insights</strong> and informing roadmap decisions for premium mobility experiences</li>
                        <li>Led feature development and operational enhancements, achieving a <strong>30% reduction in support tickets</strong> and improved product reliability</li>
                        <li>Designed wireframes and prototypes for early-stage product concepts, reducing <strong>product definition cycle time by 40%</strong></li>
                        <li>Established product KPIs and analytics dashboards to monitor feature adoption and performance</li>
                        <li>Managed <strong>5+ vendor and client partnerships</strong>, maintaining <strong>95%+ SLA compliance</strong></li>
                        <li>Cut <strong>device activation turnaround time by 50% (4 days → 2 days)</strong>, enabling faster revenue realization</li>
                        <li>Automated <strong>7+ manual workflows</strong>, increasing efficiency by <strong>200%+</strong> and saving <strong>20+ hours/week</strong> in team effort</li>
                        <li>Delivered telematics features enhancing connected-car data accuracy and fleet insights for OEM clients</li>
                    </ul>
                </div>

                <div class="experience-item">
                    <div class="experience-header">
                        <div>
                            <h3>Product Manager</h3>
                            <div class="company">Spektra Systems</div>
                        </div>
                        <div class="duration">Jan 2020 - Nov 2023</div>
                    </div>
                    <ul class="achievements">
                        <li>Defined product strategy and roadmap using user and market insights</li>
                        <li>Owned and prioritized product backlogs, working closely with engineering, design, and QA</li>
                        <li>Contributed to go-to-market efforts including personas, content, and social media strategy</li>
                        <li>Ensured SOC2 and COPPA compliance, enabling penetration into the K–12 education segment</li>
                        <li>Defined product strategy for cloud-based digital platforms supporting global enterprise clients</li>
                    </ul>
                </div>

                <div class="experience-item">
                    <div class="experience-header">
                        <div>
                            <h3>Cloud Consultant</h3>
                            <div class="company">Spektra Systems</div>
                        </div>
                        <div class="duration">Jun 2016 - Dec 2019</div>
                    </div>
                    <ul class="achievements">
                        <li>Delivered cloud POCs that accelerated Microsoft Azure sales by <strong>3X</strong></li>
                        <li>Optimized cloud infrastructure, reducing Azure costs from <strong>$55K to $30K annually</strong></li>
                        <li>Built <strong>50+ technical labs and 10 enterprise demos</strong>, enhancing client onboarding and training</li>
                    </ul>
                </div>
            </div>

            <div class="section">
                <h2>Key Automotive & Digital Projects</h2>
                <div class="project-grid">
                    <div class="project-item">
                        <h3>Device Activation Automation via API</h3>
                        <p><strong>Role:</strong> Product Manager | <strong>Duration:</strong> Dec 2024 - Feb 2025</p>
                        <p>Defined requirements, workflows, and execution plans for API-driven automation. Guided cross-functional teams and vendors, achieving a <strong>200%+ improvement in activation turnaround time</strong>.</p>
                    </div>
                    <div class="project-item">
                        <h3>Android App for Cluster Software Flashing</h3>
                        <p><strong>Role:</strong> Product Manager | <strong>Duration:</strong> Feb 2024 - Mar 2025</p>
                        <p>Spearheaded end-to-end product development of the Android app for automotive cluster flashing. Conducted market research, requirement gathering, prototyping, and customer testing. Managed backlog, design, and QA, ensuring a successful market launch.</p>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Core Competencies</h2>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3>Product Strategy</h3>
                        <div class="skill-items">
                            <span class="skill-item">Product Roadmapping</span>
                            <span class="skill-item">Requirement Gathering</span>
                            <span class="skill-item">PRD Authoring</span>
                            <span class="skill-item">Market Research</span>
                            <span class="skill-item">Go-to-Market Strategy</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>Automotive & Telematics</h3>
                        <div class="skill-items">
                            <span class="skill-item">Connected Vehicles</span>
                            <span class="skill-item">Telematics Systems</span>
                            <span class="skill-item">Automotive IoT</span>
                            <span class="skill-item">EV & e-Mobility</span>
                            <span class="skill-item">Fleet Management</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>Design & UX</h3>
                        <div class="skill-items">
                            <span class="skill-item">Wireframing</span>
                            <span class="skill-item">Prototyping</span>
                            <span class="skill-item">Figma</span>
                            <span class="skill-item">Balsamiq</span>
                            <span class="skill-item">User Research</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>Technical Skills</h3>
                        <div class="skill-items">
                            <span class="skill-item">Cloud Computing</span>
                            <span class="skill-item">Edge Computing</span>
                            <span class="skill-item">AI/ML Applications</span>
                            <span class="skill-item">API Development</span>
                            <span class="skill-item">Data Analytics</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>Leadership & Process</h3>
                        <div class="skill-items">
                            <span class="skill-item">Agile & Scrum</span>
                            <span class="skill-item">Cross-functional Leadership</span>
                            <span class="skill-item">Vendor Management</span>
                            <span class="skill-item">Compliance (SOC2)</span>
                            <span class="skill-item">Process Automation</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>Emerging Technologies</h3>
                        <div class="skill-items">
                            <span class="skill-item">Context Engineering</span>
                            <span class="skill-item">Vibe Coding</span>
                            <span class="skill-item">AI Integration</span>
                            <span class="skill-item">Machine Learning</span>
                            <span class="skill-item">IoT Solutions</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Education & Certifications</h2>
                <div class="education-grid">
                    <div class="education-item">
                        <h3>B.Tech in Computer Science and Engineering</h3>
                        <p><strong>College of Engineering Chengannur</strong></p>
                        <p>Aug 2012 - May 2016</p>
                    </div>
                    <div class="education-item">
                        <h3>Product Management Program</h3>
                        <p><strong>Duke Corporate Education via Upgrad</strong></p>
                        <p>Nov 2020 - Jul 2021</p>
                    </div>
                    <div class="education-item">
                        <h3>SOC2 Compliance Certification</h3>
                        <p><strong>Security & Compliance</strong></p>
                        <p>Current</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
    
    printWindow.document.write(cleanContent);
    printWindow.document.close();
    
    // Wait for content to load, then trigger print
    printWindow.onload = function() {
        setTimeout(() => {
            printWindow.print();
        }, 500);
    };
}

// Add loading animation for PDF generation
function showLoadingState() {
    const button = event.target;
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
    }, 2000);
}

// Enhanced PDF download with loading state
document.addEventListener('DOMContentLoaded', function() {
    const pdfButtons = document.querySelectorAll('[onclick="downloadPDF()"]');
    pdfButtons.forEach(button => {
        button.addEventListener('click', showLoadingState);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-background');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('.title-line');
    if (titleElement) {
        const originalText = titleElement.textContent;
        typeWriter(titleElement, originalText, 150);
    }
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add click animation to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn-primary, .btn-secondary {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
