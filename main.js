import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import modalData from './data.js'

gsap.registerPlugin(ScrollTrigger);

// Particle / Starfield Background logic
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function initParticles() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * 0.5 - 0.25,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = `rgba(0, 180, 216, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', initParticles);
initParticles();
animateParticles();

// Hero & Explore Button Scroll
const heroTl = gsap.timeline();
heroTl.to('.hero-main-title', { opacity: 1, y: 0, duration: 1.5, ease: 'expo.out' })
    .to('.scroll-indicator', { opacity: 1, duration: 1 }, '-=0.5');

const exploreJourneyBtn = document.getElementById('explore-journey');
if (exploreJourneyBtn) {
    exploreJourneyBtn.addEventListener('click', () => {
        const stage = document.getElementById('wellness-stage');
        if (stage) {
            stage.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

/* Legacy Parallax logic removed */

// Scroll Animations for sections
const sections = document.querySelectorAll('.scroll-fade');
sections.forEach(section => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out'
    });
});

// Cinematic Background & Scroll Reveals
const blobs = [
    document.getElementById('blob-1'),
    document.getElementById('blob-2'),
    document.getElementById('blob-3')
];

if (blobs[0]) {
    gsap.to("#blob-1", { x: '25vw', y: '25vh', duration: 25, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to("#blob-2", { x: '-20vw', y: '-30vh', duration: 30, repeat: -1, yoyo: true, ease: "sine.inOut" });
}

const sectionConfigs = {
    hero: { b1: 'rgba(0, 150, 255, 0.15)', b2: 'rgba(0, 255, 255, 0.15)', b3: 'rgba(128, 0, 255, 0)' },
    mental: { b1: 'rgba(131, 56, 236, 0.25)', b2: 'rgba(63, 55, 201, 0.25)', b3: 'rgba(131, 56, 236, 0.08)' },
    physical: { b1: 'rgba(58, 134, 255, 0.25)', b2: 'rgba(0, 180, 216, 0.25)', b3: 'rgba(58, 134, 255, 0.08)' },
    financial: { b1: 'rgba(255, 190, 11, 0.2)', b2: 'rgba(251, 86, 7, 0.2)', b3: 'rgba(255, 190, 11, 0.08)' }
};

// 360 Wellness Carousel Logic
const carouselContainer = document.getElementById('wellness-carousel');
const cards3d = document.querySelectorAll('.wellness-card-3d');
const orbs = document.querySelectorAll('.nav-orb');
let currentIndex = 1; // Start with Physical (Center)

function updateCarousel() {
    cards3d.forEach((card, index) => {
        card.classList.remove('active', 'prev', 'next');
        orbs[index].classList.remove('active');

        if (index === currentIndex) {
            card.classList.add('active');
            orbs[index].classList.add('active');
            const type = card.getAttribute('data-type');
            morphBackground(type);
        } else if (index === (currentIndex - 1 + cards3d.length) % cards3d.length) {
            card.classList.add('prev');
        } else if (index === (currentIndex + 1) % cards3d.length) {
            card.classList.add('next');
        }
    });
}

cards3d.forEach((card, index) => {
    card.addEventListener('click', () => {
        if (index !== currentIndex) {
            currentIndex = index;
            updateCarousel();
        } else {
            const type = card.getAttribute('data-type');
            openCategoryGrid(type);
        }
    });
});

orbs.forEach((orb, index) => {
    orb.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Initialize Carousel
updateCarousel();

function morphBackground(id) {
    const palette = sectionConfigs[id];
    if (!palette) return;
    gsap.to("#blob-1", { backgroundColor: palette.b1, duration: 3, ease: "power1.inOut" });
    gsap.to("#blob-2", { backgroundColor: palette.b2, duration: 3, ease: "power1.inOut" });
    gsap.to("#blob-3", { backgroundColor: palette.b3, opacity: palette.b3.includes(' 0)') ? 0 : 1, duration: 3 });
}

// Modal Logic
const modal = document.getElementById('modal-overlay');
const modalContainer = document.getElementById('modal-container');
const gridView = document.getElementById('modal-grid-view');
const detailView = document.getElementById('modal-detail-view');
const cardsContainer = document.getElementById('cards-container');
const exploreBtns = document.querySelectorAll('.explore-btn');

const backBtn = document.getElementById('back-to-grid');
const closeGridBtn = document.getElementById('close-modal-grid');
const closeDetailBtn = document.getElementById('close-modal-detail');

let currentCategory = null;

function openCategoryGrid(category) {
    currentCategory = category;
    const items = modalData[category];
    cardsContainer.innerHTML = '';

    document.getElementById('grid-main-title').innerText = category.toUpperCase() + " Characters";

    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = "flex-shrink-0 w-[280px] md:w-[320px] group relative cursor-pointer scroll-snap-align-start";
        card.innerHTML = `
            <div class="relative w-full h-[320px] rounded-[40px] transition-all duration-700 mt-20 bg-white flex flex-col justify-center p-8 pt-16 border border-gray-50 shadow-sm hover:shadow-2xl hover:-translate-y-2">
                 <!-- Character Image Pop-out -->
                 <div class="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 rounded-[40px] z-10 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-4 shadow-xl overflow-hidden flex items-center justify-center" 
                      style="background: ${item.charColor}; border: 12px solid white;">
                      <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover" onerror="this.style.display='none'">
                 </div>
                 
                 <div class="relative z-20 text-center">
                    <h3 class="text-3xl font-black text-black mb-1 font-display tracking-tighter leading-tight">${item.title}</h3>
                    <p class="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] leading-tight">${item.category}</p>
                 </div>
                 
                 <div class="absolute bottom-0 left-0 right-0 h-4 rounded-b-[40px]" style="background: ${item.color}; opacity: 0.1;"></div>
            </div>
        `;

        card.addEventListener('click', () => openDetail(item));
        cardsContainer.appendChild(card);

        gsap.from(card, {
            opacity: 0,
            x: 100,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'expo.out'
        });
    });

    modal.classList.remove('pointer-events-none');
    modal.classList.add('opacity-100');
    detailView.classList.add('translate-x-full');
    gridView.classList.remove('hidden');

    setTimeout(() => {
        modalContainer.classList.remove('scale-95', 'opacity-0');
        modalContainer.classList.add('scale-100', 'opacity-100');
    }, 50);
}

const searchInput = document.getElementById('search-characters');
if (searchInput) {
    searchInput.remove();
}

function renderFilteredCards(items) {
    // Function removed as search bar is gone
}

// Carousel Navigation
const prevBtn = document.getElementById('prev-card');
const nextBtn = document.getElementById('next-card');

nextBtn.addEventListener('click', () => {
    cardsContainer.scrollBy({ left: 300, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    cardsContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

function openDetail(item) {
    const detailImage = document.getElementById('detail-image-fallback');
    const detailBgShape = document.getElementById('modal-bg-shape');
    const sidebarTitle = document.getElementById('sidebar-title');
    const sidebarCategory = document.getElementById('sidebar-category');
    const charGlow = document.querySelector('.char-glow');

    document.getElementById('modal-title').innerText = item.title;
    document.getElementById('sidebar-title').innerText = item.sidebar;
    document.getElementById('sidebar-category').innerText = item.category;
    document.getElementById('modal-category-name').innerText = currentCategory.toUpperCase();

    // Render Points or Description
    const descContainer = document.getElementById('modal-description');
    if (item.points && item.points.length > 0) {
        descContainer.innerHTML = `
            <ul class="space-y-4">
                ${item.points.map(point => `
                    <li class="flex items-start gap-3 group/point">
                        <span class="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-300 group-hover/point:scale-150" 
                              style="background: white; box-shadow: 0 0 10px white;"></span>
                        <span class="text-lg opacity-80 leading-relaxed">${point}</span>
                    </li>
                `).join('')}
            </ul>
        `;
    } else {
        descContainer.innerText = item.desc;
    }

    detailImage.innerHTML = `<img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover rounded-[40px]" onerror="this.style.display='none'">`;
    detailImage.className = "w-64 h-64 md:w-96 md:h-96 rounded-[40px] relative z-10 transition-all duration-700 shadow-2xl modal-pop-out flex items-center justify-center overflow-hidden";

    detailImage.style.background = item.charColor;
    detailBgShape.style.backgroundColor = item.color;
    charGlow.style.backgroundColor = item.color;
    sidebarTitle.style.color = item.color;

    detailView.classList.remove('translate-x-full');

    gsap.from('#detail-image-fallback', {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        clearProps: 'all'
    });
}

backBtn.addEventListener('click', () => {
    detailView.classList.add('translate-x-full');
});

function closeModal() {
    modalContainer.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('pointer-events-none');
        modal.classList.remove('opacity-100');
        detailView.classList.add('translate-x-full');
    }, 600);
}

closeGridBtn.addEventListener('click', closeModal);
closeDetailBtn.addEventListener('click', closeModal);

exploreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        openCategoryGrid(type);
    });
});

// Parallax background movement
gsap.to('#bg-canvas', {
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
    },
    y: -100,
    ease: 'none'
});
