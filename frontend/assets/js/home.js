import { injectLayout, setContent, escapeHTML } from './app.js';

const BACKEND_URL = 'https://studenthub-backend-rpn0.onrender.com';

const homeResources = [
  {
    id: 1,
    icon: '💼',
    title: 'Career Center',
    meta: 'Career Support',
    desc: 'Resume reviews, interview prep, job fairs, and career support.',
    fullDesc: 'The Career Center helps students with resume reviews, interview preparation, job fairs, internships, and career planning support.'
  },
  {
    id: 2,
    icon: '🩺',
    title: 'Student Wellness Center',
    meta: 'Health & Wellness',
    desc: 'Medical services, counseling, wellness care, and health support.',
    fullDesc: 'The Student Wellness Center provides medical services, counseling, wellness care, and student health support on campus.'
  },
  {
    id: 3,
    icon: '🥫',
    title: 'Spartan Food Pantry',
    meta: 'Basic Needs',
    desc: 'Free groceries and basic needs support for students in need.',
    fullDesc: 'The Spartan Food Pantry offers free groceries and basic needs support for students who need food assistance.'
  }
];

const homeDeals = [
  {
    id: 1,
    icon: '🎵',
    title: 'Spotify Premium Student',
    meta: 'Streaming Deal',
    desc: 'Get discounted premium music streaming with student verification.',
    fullDesc: 'Spotify Premium Student gives eligible students discounted premium streaming with verification.'
  },
  {
    id: 2,
    icon: '📦',
    title: 'Amazon Prime Student',
    meta: 'Shopping Deal',
    desc: 'Enjoy shipping benefits, shopping offers, and student pricing.',
    fullDesc: 'Amazon Prime Student includes delivery benefits, shopping offers, and student pricing for eligible accounts.'
  },
  {
    id: 3,
    icon: '📚',
    title: 'Campus Bookstore Offers',
    meta: 'Bookstore Deal',
    desc: 'Check discounts on textbooks, merchandise, and school essentials.',
    fullDesc: 'Campus Bookstore Offers include savings on textbooks, merchandise, and essential student supplies.'
  }
];

async function getHomeEvents() {
  try {
    const res = await fetch(`${BACKEND_URL}/items`);
    const events = await res.json();

    return events
      .filter((event) =>
        event.status === 'approved' ||
        event.approval_status === 'approved'
      )
      .slice(0, 3);
  } catch (err) {
    console.error(err);
    return [];
  }
}

function openHomeModal(item) {
  const modal = document.getElementById('home-event-modal');
  const icon = document.getElementById('home-event-icon');
  const title = document.getElementById('home-event-title');
  const meta = document.getElementById('home-event-meta');
  const desc = document.getElementById('home-event-desc');

  icon.textContent = item.icon || '📘';
  title.textContent = item.title;
  meta.textContent = item.meta;
  desc.textContent = item.fullDesc;
  modal.classList.add('open');
}

async function init() {
  injectLayout('Home');

  const homeEvents = await getHomeEvents();

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
        ${
          homeEvents.length === 0
            ? `
              <article class="info-card preview-card">
                <h3>No upcoming events yet</h3>
                <p>Check back later for new campus events.</p>
              </article>
            `
            : homeEvents.map((event) => {
                const eventId = event.id || event.item_id;
                const title = event.title || event.item_name || 'Untitled Event';
                const timeframe = event.timeframe || 'TBA';
                const location = event.location || event.loc_content || 'TBA';
                const desc = event.description || event.item_desc || '';

                return `
                  <a class="info-card preview-card" href="event.html?id=${eventId}">
                    <div class="preview-badge">CampusHub Event</div>
                    <h3>${escapeHTML(title)}</h3>
                    <p class="preview-meta">${escapeHTML(timeframe)} • ${escapeHTML(location)}</p>
                    <p>${escapeHTML(desc).slice(0, 110)}${desc.length > 110 ? '...' : ''}</p>
                  </a>
                `;
              }).join('')
        }
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
          </article>
        `).join('')}
      </div>
    </section>

    <div id="home-event-modal" class="modal">
      <div class="modal-panel home-event-modal-panel">
        <button class="modal-close" id="home-event-close">✕</button>

        <div class="home-modal-top">
          <div id="home-event-icon" class="home-modal-icon"></div>
          <div class="home-modal-heading">
            <h2 id="home-event-title"></h2>
            <p id="home-event-meta" class="home-event-modal-meta"></p>
          </div>
        </div>

        <p id="home-event-desc"></p>
      </div>
    </div>
  `);

  const resourceCards = document.querySelectorAll('[data-resource-id]');
  const dealCards = document.querySelectorAll('[data-deal-id]');
  const modal = document.getElementById('home-event-modal');
  const closeBtn = document.getElementById('home-event-close');

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