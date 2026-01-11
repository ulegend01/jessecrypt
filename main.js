const initHeroInteractivity = () => {
    const character = document.querySelector('.hero-asset-character');
    const community = document.querySelector('.hero-asset-community');
    const heroBtn = document.querySelector('.hero-btn-literal');

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Parallax for character and community element
        if (character) {
            const moveX = (clientX - centerX) / 50;
            const moveY = (clientY - centerY) / 50;
            character.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }

        if (community) {
            const moveX = (clientX - centerX) / -40;
            const moveY = (clientY - centerY) / -40;
            community.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }

        // Magnetic button effect
        if (heroBtn) {
            const rect = heroBtn.getBoundingClientRect();
            const btnCenterX = rect.left + rect.width / 2;
            const btnCenterY = rect.top + rect.height / 2;

            const dist = Math.hypot(clientX - btnCenterX, clientY - btnCenterY);

            if (dist < 150) {
                const magneticX = (clientX - btnCenterX) * 0.3;
                const magneticY = (clientY - btnCenterY) * 0.3;
                heroBtn.style.transform = `translate(${magneticX}px, ${magneticY}px)`;
            } else {
                heroBtn.style.transform = `translate(0px, 0px)`;
            }
        }
    });

    if (heroBtn) {
        heroBtn.addEventListener('mouseleave', () => {
            heroBtn.style.transform = `translate(0, 0)`;
        });
    }
};

// Custom Cursor Animation
let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

const initCursor = () => {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (!cursor || !follower) return;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const animate = () => {
        posX += (mouseX - posX) * 0.15;
        posY += (mouseY - posY) * 0.15;

        cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
        follower.style.transform = `translate(${posX - 20}px, ${posY - 20}px)`;

        requestAnimationFrame(animate);
    };
    animate();
};

// Project Population (Bento Style)
const initProjects = () => {
    const projects = [
        { name: "BOOSEY", role: "Community Lead", desc: "Solana ecosystem growth catalyst. Scaled organic reach by 800%." },
        { name: "SWISSTRONIK", role: "Contributor", desc: "Privacy L1 ecosystem strategic growth and content distribution." },
        { name: "THEATRON", role: "Manager", desc: "Web3 social infrastructure scaling for content creators." },
        { name: "TRADEBOT", role: "Early Support", desc: "Strategic feedback and beta testing for automated trading protocols." },
        { name: "DUALMINT", role: "Ambassador", desc: "RWA project advocacy and community reach expansion." },
        { name: "ROQQU", role: "Community Staff", desc: "High-volume support and moderation for major crypto exchange." }
    ];

    const grid = document.getElementById('project-grid');
    if (!grid) return;

    projects.forEach((p, i) => {
        const card = document.createElement('div');
        card.style.cssText = `
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.05);
            padding: 2.5rem;
            transition: 0.4s ease;
            position: relative;
            overflow: hidden;
        `;

        card.innerHTML = `
            <span style="color: #1DA1F2; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.25em;">[ ${p.role.toUpperCase()} ]</span>
            <h3 style="margin: 1.5rem 0; font-family: 'Orbitron'; font-size: 1.8rem; color: #fff;">${p.name}</h3>
            <p style="color: #888; font-size: 0.95rem; margin-bottom: 2rem;">${p.desc}</p>
            <a href="#" style="color: #fff; text-decoration: none; font-weight: 700; font-size: 0.8rem; letter-spacing: 0.1em; border-bottom: 1px solid #1DA1F2;">DECRYPT CASE</a>
        `;

        card.addEventListener('mouseenter', () => {
            card.style.backgroundColor = 'rgba(29, 161, 242, 0.05)';
            card.style.borderColor = 'rgba(29, 161, 242, 0.3)';
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.backgroundColor = 'rgba(255,255,255,0.02)';
            card.style.borderColor = 'rgba(255,255,255,0.05)';
            card.style.transform = 'translateY(0)';
        });

        grid.appendChild(card);
    });
};

// Scroll Reveal
const initReveal = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.content-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = '1s ease-out';
        observer.observe(el);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initHeroInteractivity();
    initCursor();
    initProjects();
    initReveal();
});
