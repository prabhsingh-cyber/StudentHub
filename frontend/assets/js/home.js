import { injectLayout, setContent } from './app.js';

const homeEvents = [
  {
    id: 1,
    icon: '💼',
    category: 'Career',
    title: 'Tech Career Fair 2026',
    meta: 'Feb 12 • Event Center',
    desc: 'Meet recruiters, explore internships, and connect with industry professionals.',
    fullDesc: 'Meet recruiters, explore internships, and connect with industry professionals at SJSU’s Tech Career Fair 2026.'
  },
  {
    id: 2,
    icon: '🎉',
    category: 'Community',
    title: 'Annual Spring Festival',
    meta: 'Mar 08 • Tower Lawn',
    desc: 'Enjoy student performances, food stalls, and cultural celebrations on campus.',
    fullDesc: 'Enjoy student performances, food stalls, and cultural celebrations on campus during the Annual Spring Festival.'
  },
  {
    id: 3,
    icon: '🎓',
    category: 'Academic',
    title: 'Guest Lecture: AI & Future',
    meta: 'Apr 02 • Engineering Building',
    desc: 'Join a guest speaker session on AI trends, careers, and innovation.',
    fullDesc: 'Join a guest speaker session on AI trends, careers, and innovation with faculty and invited industry experts.'
  }
];



const homeResources = [
  {
    id: 1,
    icon: '💼',
    title: 'Career Center',
    meta: 'Student Only',
    desc: 'Career development support including resumes and interviews.',
    previewHours: 'Mon–Fri 9 AM – 4:30 PM',
    previewLocation: 'Admin Building',
    badges: ['Student Only'],
    fullDesc:
      'Get one-on-one help with resumes, cover letters, job search strategy, interview preparation, and networking for internships and full-time roles.',
    details: [
      { label: 'Location', value: 'Admin Building' },
      { label: 'Hours', value: 'Mon–Fri 9 AM – 4:30 PM' },
      { label: 'Services', value: 'Resume reviews, mock interviews, career fairs, networking events' }
    ]
  },
  {
    id: 2,
    icon: '🩺',
    title: 'Student Wellness Center',
    meta: 'Health Support',
    desc: 'Medical and mental health services.',
    previewHours: 'Mon–Fri 8:30 AM – 5 PM',
    previewLocation: '7th Street',
    badges: ['Health Support'],
    fullDesc:
      'Access medical care, counseling, lab testing, and wellness guidance in one place to support both physical and mental health.',
    details: [
      { label: 'Location', value: '7th Street' },
      { label: 'Hours', value: 'Mon–Fri 8:30 AM – 5 PM' },
      { label: 'Services', value: 'Healthcare, counseling, lab tests, nutrition support' }
    ]
  },
  {
    id: 3,
    icon: '🤝',
    title: 'SJSU Cares',
    meta: 'Support',
    desc: 'Support for financial and housing needs.',
    previewHours: 'Mon–Fri 9 AM – 5 PM',
    previewLocation: 'Clark Hall',
    badges: ['Support'],
    fullDesc:
      'Connect with emergency support resources for financial hardship, housing insecurity, and referrals to campus and community services.',
    details: [
      { label: 'Location', value: 'Clark Hall' },
      { label: 'Hours', value: 'Mon–Fri 9 AM – 5 PM' },
      { label: 'Services', value: 'Emergency grants, case management, referrals' }
    ]
  }
];

const homeDeals = [
  {
    id: 1,
    icon: '🎓',
    title: 'UNiDAYS',
    meta: 'Student Only • Online',
    desc: 'Student discount platform.',
    previewHours: '24/7 Online',
    previewLocation: 'Online',
    badges: ['Student Only', 'Online'],
    fullDesc:
      'Free platform that verifies student status and unlocks discounts on brands like Nike, Apple, ASOS, and more across clothing, tech, and lifestyle categories.',
    details: [
      { label: 'Where', value: 'Online' },
      { label: 'Availability', value: '24/7 Online' },
      { label: 'Best For', value: 'Clothing, tech, lifestyle, brand discounts' }
    ]
  },
  {
    id: 2,
    icon: '🎓',
    title: 'Student Beans',
    meta: 'Student Only • Online',
    desc: 'Student deals and discounts.',
    previewHours: '24/7 Online',
    previewLocation: 'Online',
    badges: ['Student Only', 'Online'],
    fullDesc:
      'Another student verification platform offering exclusive discounts on fashion, tech, food, and subscriptions, often overlapping with UNiDAYS but sometimes providing unique deals.',
    details: [
      { label: 'Where', value: 'Online' },
      { label: 'Availability', value: '24/7 Online' },
      { label: 'Best For', value: 'Fashion, tech, food, subscriptions' }
    ]
  },
  {
    id: 3,
    icon: '🍎',
    title: 'Apple Education Store',
    meta: 'Tech • Student Pricing',
    desc: 'Discounted Apple products.',
    previewHours: '24/7 Online',
    previewLocation: 'Online',
    badges: ['Tech', 'Student Pricing'],
    fullDesc:
      'Offers special student pricing on MacBooks, iPads, and accessories, often bundled with gift cards during back-to-school promotions for additional savings.',
    details: [
      { label: 'Where', value: 'Online' },
      { label: 'Availability', value: '24/7 Online' },
      { label: 'Best For', value: 'MacBooks, iPads, accessories' }
    ]
  }
];
function openHomeModal(item) {
  const modal = document.getElementById('home-event-modal');
  const title = document.getElementById('home-event-title');
  const meta = document.getElementById('home-event-meta');
  const desc = document.getElementById('home-event-desc');

  if (!item.details) {
    title.textContent = item.title;
    meta.textContent = item.meta || '';
    desc.textContent = item.fullDesc || '';
  } else {
    title.innerHTML = `
  <div class="home-modal-title-row">
    <div class="home-modal-icon">${item.icon || ''}</div>
    <span>${item.title}</span>
  </div>
`;

    meta.innerHTML = item.badges?.length
      ? item.badges.map(b => `<span class="badge">${b}</span>`).join(' ')
      : '';

    desc.innerHTML = `
      

      <p style="margin-bottom:1rem;">${item.fullDesc || ''}</p>

      ${
        item.details?.length
          ? item.details.map(d => `
            <div style="margin-bottom:0.5rem;">
              <strong>${d.label}:</strong> ${d.value}
            </div>
          `).join('')
          : ''
      }
    `;
  }

  modal.classList.add('open');
}

function init() {
  injectLayout('Home');

  setContent(`
    <section class="home-hero home-hero-simple">
      <div class="container home-hero-simple-inner">
        <div class="home-hero-copy">
          <span class="eyebrow">SJSU Student Platform</span>
          <h1 class="hero-title">Discover campus events, resources, and student deals in one place.</h1>
          <p class="hero-subtitle">
            CampusHub helps SJSU students stay connected, save money, and find the support they need throughout the semester.
          </p>

          <div class="hero-actions hero-actions-strong">
            <a href="events.html" class="btn btn-primary hero-btn">Explore Events</a>
            <a href="resources.html" class="btn btn-secondary hero-btn">Browse Resources</a>
          </div>
        </div>
      </div>
    </section>

    <section class="container section">
      <div class="section-heading">
        <h2>Quick Access</h2>
        <p>Jump into the most important parts of CampusHub.</p>
      </div>

      <div class="quick-grid">
        <a href="events.html" class="info-card quick-card">
          <div class="icon-chip blue">📅</div>
          <h3>Events</h3>
          <p>Explore campus events, workshops, fairs, and student activities.</p>
        </a>

        <a href="resources.html" class="info-card quick-card">
          <div class="icon-chip blue">📘</div>
          <h3>Resources</h3>
          <p>Find academic, wellness, financial, and student support resources.</p>
        </a>

        <a href="deals.html" class="info-card quick-card">
          <div class="icon-chip blue">💸</div>
          <h3>Deals</h3>
          <p>Save money with student discounts, offers, and campus promotions.</p>
        </a>
      </div>
    </section>

    <section class="container section">
      <div class="section-heading section-heading-row">
        <div>
          <h2>Upcoming Events</h2>
          <p>Stay updated with what’s happening around campus.</p>
        </div>
        <a href="events.html" class="text-link">View All</a>
      </div>

      <div class="home-preview-grid">
        ${homeEvents.map(event => `
          <article class="info-card preview-card preview-clickable" data-event-id="${event.id}">
            <div class="preview-badge">${event.category}</div>
            <h3>${event.title}</h3>
            <p class="preview-meta">${event.meta}</p>
            <p>${event.desc}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="container section">
      <div class="section-heading section-heading-row">
        <div>
          <h2>Essential Resources</h2>
          <p>Start with the most useful campus services for students.</p>
        </div>
        <a href="resources.html" class="text-link">View All</a>
      </div>
     

      <div class="home-preview-grid">
        ${homeResources.map(item => `
  <article class="info-card preview-card preview-clickable preview-resource-card" data-resource-id="${item.id}">
    <div class="icon-chip blue">${item.icon}</div>
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
    <br>
    <p class="preview-meta">${item.previewHours} </p>
    <p>${item.previewLocation}</p>
  </article>
`).join('')}
      </div>
    </section>

    <section class="container section">
  <div class="section-heading section-heading-row">
    <div>
      <h2>Featured Deals</h2>
      <p>Popular student savings and promotions.</p>
    </div>
    <a href="deals.html" class="text-link">View All</a>
  </div>

  <div class="home-preview-grid">
    ${homeDeals.map(item => `
  <article class="info-card preview-card preview-clickable preview-deal-card" data-deal-id="${item.id}">
    <div class="icon-chip blue">${item.icon}</div>
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
    <p class="preview-meta">${item.previewHours}</p>
    
  </article>
`).join('')}
  </div>
</section>

    <div id="home-event-modal" class="modal">
  <div class="modal-panel home-event-modal-panel">
    <button class="modal-close" id="home-event-close">✕</button>

    <div class="home-modal-top">
      <div class="home-modal-heading">
        <h2 id="home-event-title"></h2>
        <p id="home-event-meta" class="home-event-modal-meta"></p>
      </div>
    </div>

    <p id="home-event-desc"></p>
  </div>
</div>
  `);

  const eventCards = document.querySelectorAll('[data-event-id]');
const resourceCards = document.querySelectorAll('[data-resource-id]');
const dealCards = document.querySelectorAll('[data-deal-id]');
const modal = document.getElementById('home-event-modal');
const closeBtn = document.getElementById('home-event-close');

eventCards.forEach((card) => {
  card.addEventListener('click', () => {
    const id = Number(card.dataset.eventId);
    const item = homeEvents.find((event) => event.id === id);
    if (item) openHomeModal({
  icon: item.icon,
  title: item.title,
  meta: `${item.category} • ${item.meta}`,
  fullDesc: item.fullDesc
});
  });
});

resourceCards.forEach((card) => {
  card.addEventListener('click', () => {
    const id = Number(card.dataset.resourceId);
    const item = homeResources.find((resource) => resource.id === id);
    if (item) openHomeModal(item);
  });
});

dealCards.forEach((card) => {
  card.addEventListener('click', () => {
    const id = Number(card.dataset.dealId);
    const item = homeDeals.find((deal) => deal.id === id);
    if (item) openHomeModal(item);
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
  }
});
}
init();
