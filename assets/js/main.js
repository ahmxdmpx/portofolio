'use strict';

// ========== DATA ==========
const projectsData = [
  {
    id: 1,
    title: "Sistem Informasi Kominfo",
    category: "web",
    description: "Merancang SOP dan desain modul keamanan digital saat magang di Kominfo.",
    fullDescription: "Proyek ini merupakan hasil dari magang di Dinas Komunikasi dan Informatika Garut. Saya bertanggung jawab dalam merancang Standard Operating Procedure (SOP) untuk keamanan digital dan mendesain modul pembelajaran interaktif untuk meningkatkan awareness masyarakat tentang keamanan siber.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["UI/UX", "SOP Design", "Government"],
    technologies: ["Figma", "Adobe Illustrator", "Microsoft Office"],
    features: ["Desain SOP keamanan digital yang komprehensif", "Modul pembelajaran interaktif", "Dokumentasi sistem yang terstruktur", "Wireframe dan prototyping untuk sistem informasi"],
    demoLink: "#",
    githubLink: "#",
    featured: true
  },
  {
    id: 2,
    title: "Konfigurasi Jaringan Skyline",
    category: "network",
    description: "Membangun koneksi point-to-point dan membantu tim IT dalam konfigurasi jaringan.",
    fullDescription: "Selama bekerja di PT Skyline Semesta, saya membantu tim IT dalam konfigurasi jaringan point-to-point menggunakan Mikrotik dan Ubiquiti. Proyek ini mencakup instalasi, konfigurasi, troubleshooting, dan dokumentasi lengkap sistem jaringan perusahaan.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    tags: ["Networking", "IT Support", "Infrastructure"],
    technologies: ["Mikrotik", "Ubiquiti", "Cisco", "Network Tools"],
    features: ["Konfigurasi point-to-point connection", "Network troubleshooting dan optimization", "Dokumentasi network topology", "Performance monitoring dan reporting"],
    demoLink: "#",
    githubLink: "#",
    featured: true
  },
  {
    id: 3,
    title: "Desain UI/UX Aplikasi",
    category: "design",
    description: "Mendesain antarmuka aplikasi menggunakan Figma dengan pendekatan user-centered.",
    fullDescription: "Proyek desain UI/UX untuk aplikasi mobile dengan fokus pada user experience. Menggunakan metode design thinking dan user research untuk menciptakan interface yang intuitif, menarik, dan memenuhi kebutuhan pengguna. Termasuk wireframing, prototyping, dan user testing.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    tags: ["UI/UX", "Mobile Design", "Prototyping"],
    technologies: ["Figma", "Adobe XD", "Miro", "Maze"],
    features: ["User research dan persona development", "Wireframing dan low-fidelity prototyping", "High-fidelity mockups dengan design system", "Usability testing dan iterasi design"],
    demoLink: "#",
    githubLink: "#",
    featured: true
  },
  {
    id: 4,
    title: "Landing Page Portfolio",
    category: "web",
    description: "Membuat landing page responsif menggunakan HTML, CSS, dan JavaScript modern.",
    fullDescription: "Landing page portfolio modern dengan animasi smooth, responsive design, dan performance optimization. Menggunakan vanilla JavaScript untuk interaktivitas tanpa dependency framework berat. Dioptimasi untuk SEO dan kecepatan loading dengan Lighthouse score 90+.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
    tags: ["Web Development", "Frontend", "Responsive"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    features: ["Fully responsive design (mobile-first)", "Smooth scroll animations dan transitions", "SEO optimized dengan semantic HTML", "Fast loading speed dengan lazy loading"],
    demoLink: "#",
    githubLink: "#",
    featured: false
  },
  {
    id: 5,
    title: "Dashboard Admin Panel",
    category: "web",
    description: "Membangun dashboard admin dengan data visualization dan responsive design.",
    fullDescription: "Dashboard admin yang powerful dengan data visualization menggunakan Chart.js. Interface yang clean dan intuitif untuk management system dengan role-based access control. Dilengkapi dengan real-time data updates dan export functionality.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["Dashboard", "Data Visualization", "Admin Panel"],
    technologies: ["React", "Chart.js", "Tailwind CSS", "Node.js"],
    features: ["Real-time data visualization dengan Chart.js", "Role-based authentication system", "Responsive table design dengan sorting", "Export data to CSV/PDF format"],
    demoLink: "#",
    githubLink: "#",
    featured: false
  }
];

const certificatesData = [
  {
    id: 1,
    title: "Sertifikat Keamanan Digital",
    issuer: "Kementerian Kominfo",
    date: "2024",
    description: "Sertifikat keamanan digital yang mencakup best practices dalam mengamankan sistem informasi, awareness terhadap ancaman siber, dan implementasi security protocols.",
    image: "https://via.placeholder.com/400x250/157668/ffffff?text=Keamanan+Digital",
    featured: true
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    issuer: "Dicoding Academy",
    date: "2023",
    description: "Pelatihan komprehensif tentang dasar-dasar UI/UX design, mencakup user research, wireframing, prototyping, dan usability testing menggunakan tools modern seperti Figma.",
    image: "https://via.placeholder.com/400x250/157668/ffffff?text=UI%2FUX+Design",
    featured: true
  },
  {
    id: 3,
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "2023",
    description: "Sertifikasi fundamental networking yang mencakup OSI model, TCP/IP, routing, switching, dan network troubleshooting. Persiapan untuk sertifikasi CCNA.",
    image: "https://via.placeholder.com/400x250/157668/ffffff?text=Networking+Basics",
    featured: true
  },
  {
    id: 4,
    title: "Cloud Computing Essentials",
    issuer: "Google Cloud",
    date: "2024",
    description: "Pengenalan cloud computing menggunakan Google Cloud Platform, termasuk compute engine, storage, networking, dan best practices dalam cloud architecture.",
    image: "https://via.placeholder.com/400x250/157668/ffffff?text=Cloud+Computing",
    featured: false
  },
  {
    id: 5,
    title: "Front-End Development",
    issuer: "FreeCodeCamp",
    date: "2024",
    description: "Sertifikasi front-end development yang mencakup HTML5, CSS3, JavaScript ES6+, responsive design, dan modern web development practices.",
    image: "https://via.placeholder.com/400x250/157668/ffffff?text=Frontend+Dev",
    featured: false
  }
];

const experienceData = [
  {
    id: 1,
    title: "Magang di Kominfo Garut",
    company: "Dinas Kominfo Garut",
    description: "Membuat SOP, modul, dan desain grafis untuk keamanan digital.",
    fullDescription: "Melakukan magang selama 3 bulan di Dinas Komunikasi dan Informatika Kabupaten Garut. Fokus pada pengembangan sistem keamanan digital dan edukasi masyarakat tentang cyber security.",
    date: "2024",
    image: "img/kominfo.jpg",
    tags: ["Internship", "Government", "Digital Security"],
    responsibilities: ["Merancang Standard Operating Procedure (SOP) keamanan digital", "Membuat modul pembelajaran interaktif untuk awareness keamanan siber", "Mendesain infografis dan konten edukasi digital", "Membantu dokumentasi sistem informasi pemerintah"],
    featured: true
  },
  {
    id: 2,
    title: "IT Support di PT Skyline Semesta",
    company: "PT Skyline Semesta",
    description: "Konfigurasi jaringan point-to-point dan dokumentasi sistem IT.",
    fullDescription: "Bekerja sebagai IT Support dengan fokus pada networking dan infrastructure. Bertanggung jawab dalam instalasi, konfigurasi, dan maintenance sistem jaringan perusahaan.",
    date: "2023",
    image: "img/skyline.jpg",
    tags: ["IT Support", "Networking", "Infrastructure"],
    responsibilities: ["Konfigurasi dan instalasi jaringan point-to-point", "Troubleshooting masalah jaringan dan hardware", "Dokumentasi network topology dan system configuration", "Maintenance dan monitoring performa jaringan"],
    featured: true
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    company: "Freelance",
    description: "Mengerjakan berbagai proyek website untuk klien lokal dan UMKM.",
    fullDescription: "Mengerjakan proyek web development secara freelance untuk berbagai klien, mulai dari landing page, company profile, hingga e-commerce sederhana. Fokus pada responsive design dan user experience.",
    date: "2022 - 2024",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
    tags: ["Freelance", "Web Development", "UI/UX"],
    responsibilities: ["Mengembangkan website responsif dengan HTML, CSS, JavaScript", "Konsultasi dengan klien untuk requirement gathering", "Implementasi design system dan branding", "Maintenance dan update website klien"],
    featured: false
  },
  {
    id: 4,
    title: "Asisten Lab Komputer",
    company: "Universitas Garut",
    description: "Membantu dosen dalam praktikum pemrograman dan jaringan komputer.",
    fullDescription: "Menjadi asisten laboratorium untuk mata kuliah pemrograman dan jaringan komputer. Membantu mahasiswa dalam memahami konsep programming dan troubleshooting masalah teknis.",
    date: "2022 - 2023",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    tags: ["Teaching", "Programming", "Networking"],
    responsibilities: ["Membantu dosen dalam praktikum pemrograman", "Memberikan tutorial dan guidance ke mahasiswa", "Troubleshooting masalah teknis di lab", "Membuat modul praktikum dan exercise"],
    featured: false
  },
  {
    id: 5,
    title: "Volunteer IT Event Organizer",
    company: "Tech Community Garut",
    description: "Mengorganisir workshop dan seminar teknologi untuk komunitas lokal.",
    fullDescription: "Aktif sebagai volunteer dalam mengorganisir berbagai event teknologi seperti workshop, seminar, dan hackathon. Fokus pada community building dan knowledge sharing.",
    date: "2021 - 2023",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
    tags: ["Volunteer", "Community", "Event Management"],
    responsibilities: ["Koordinasi dengan speaker dan sponsor", "Mengelola registrasi dan dokumentasi event", "Promosi event melalui social media", "Membantu setup teknis saat event berlangsung"],
    featured: false
  }
];

const educationData = [
  {
    id: 1,
    title: "Universitas Garut",
    major: "S1 Teknologi Informasi",
    date: "2021 - Sekarang",
    description: "Menempuh pendidikan sarjana di bidang Teknologi Informasi dengan fokus pada software engineering, web development, dan UI/UX design. Aktif dalam organisasi kampus dan berbagai project pembelajaran.",
    image: "https://via.placeholder.com/800x500",
    featured: true
  },
  {
    id: 2,
    title: "SMK Negeri 9 Garut",
    major: "Teknik Komputer dan Jaringan",
    date: "2018 - 2021",
    description: "Menyelesaikan pendidikan kejuruan dengan jurusan Teknik Komputer dan Jaringan. Mempelajari dasar-dasar networking, hardware, dan sistem operasi. Mengikuti berbagai lomba dan sertifikasi kompetensi.",
    image: "https://via.placeholder.com/800x500",
    featured: true
  }
];

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
  if (typeof lucide !== 'undefined') lucide.createIcons();
  initMenu();
  initTypingEffect();
  initSkillBars();
  initProjects();
  initCertificates();
  initExperience();
  initEducation();
  initSmoothScroll();
  initModals();
});

// ========== MENU ==========
function initMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => menu.classList.toggle("hidden"));
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) menu.classList.add('hidden');
      });
    });
  }
}

// ========== TYPING EFFECT ==========
function initTypingEffect() {
  const texts = ["Ahmad", "UI/UX Designer", "Web Developer", "Frontend Enthusiast"];
  let textIndex = 0, charIndex = 0, isDeleting = false;
  const element = document.getElementById('typing-text');
  if (!element) return;

  function type() {
    const currentText = texts[textIndex];
    element.textContent = isDeleting ? currentText.substring(0, charIndex - 1) : currentText.substring(0, charIndex + 1);
    charIndex += isDeleting ? -1 : 1;

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 2000);
      return;
    }
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
    setTimeout(type, isDeleting ? 50 : 100);
  }
  type();
}

// ========== SKILL BARS ==========
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar');
  function animateSkills() {
    skillBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8 && !bar.classList.contains('animated')) {
        bar.classList.add('animated');
        bar.style.width = (bar.getAttribute('data-width') || '0') + '%';
      }
    });
  }
  window.addEventListener('scroll', animateSkills);
  window.addEventListener('load', animateSkills);
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      if (href === "#" || !href) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
      }
    });
  });
}

// ========== PROJECTS ==========
function initProjects() {
  const container = document.getElementById('projects-container');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const viewMoreBtn = document.getElementById('view-more-projects-btn');
  const arrowIcon = document.getElementById('projects-arrow-icon');
  const btnText = document.getElementById('projects-btn-text');
  let currentFilter = 'all', showingAll = false;

  function createProjectCard(project) {
    const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    return `
      <article class="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer card-hover" data-id="${project.id}">
        <div class="overflow-hidden h-56"><img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover"></div>
        <div class="p-5">
          <div class="mb-3">${tagsHTML}</div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">${project.title}</h3>
          <p class="text-gray-600 text-sm mb-4 line-clamp-2">${project.description}</p>
          <div class="flex items-center text-primary font-medium group">
            <span>Lihat detail</span>
            <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
          </div>
        </div>
      </article>
    `;
  }

  function renderProjects(projects) {
    container.innerHTML = projects.map(createProjectCard).join('');
    if (typeof lucide !== 'undefined') lucide.createIcons();
    container.querySelectorAll('article').forEach(card => {
      card.addEventListener('click', () => {
        const project = projectsData.find(p => p.id === parseInt(card.dataset.id));
        if (project) openProjectModal(project);
      });
    });
  }

  function filterProjects(category) {
    currentFilter = category;
    let filtered = category === 'all' ? projectsData : projectsData.filter(p => p.category === category);
    if (!showingAll) filtered = filtered.filter(p => p.featured);
    renderProjects(filtered);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showingAll = false;
      filterProjects(btn.dataset.filter);
    });
  });

  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
      showingAll = !showingAll;
      arrowIcon.classList.toggle('rotated');
      btnText.textContent = showingAll ? 'Lihat Lebih Sedikit' : 'Lihat Lebih Banyak';
      filterProjects(currentFilter);
    });
  }

  renderProjects(projectsData.filter(p => p.featured));
}

function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-image').src = project.image;
  document.getElementById('modal-description').textContent = project.fullDescription;
  document.getElementById('modal-tags').innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  document.getElementById('modal-tech').innerHTML = project.technologies.map(tech => `<span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">${tech}</span>`).join('');
  document.getElementById('modal-features').innerHTML = project.features.map(f => `<li>${f}</li>`).join('');
  document.getElementById('modal-demo-link').href = project.demoLink;
  document.getElementById('modal-github-link').href = project.githubLink;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ========== CERTIFICATES ==========
function initCertificates() {
  const container = document.getElementById('certificates-container');
  const viewMoreBtn = document.getElementById('view-more-certificates-btn');
  const arrowIcon = document.getElementById('certificates-arrow-icon');
  const btnText = document.getElementById('certificates-btn-text');
  let showingAll = false;

  function createCertCard(cert) {
    return `
      <article class="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer card-hover" data-id="${cert.id}">
        <div class="overflow-hidden h-56"><img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-cover"></div>
        <div class="p-5">
          <h3 class="font-semibold text-lg mb-1">${cert.title}</h3>
          <p class="text-gray-600 text-sm">${cert.issuer}</p>
          <p class="text-gray-500 text-xs mt-1">${cert.date}</p>
        </div>
      </article>
    `;
  }

  function renderCerts(certs) {
    container.innerHTML = certs.map(createCertCard).join('');
    container.querySelectorAll('article').forEach(card => {
      card.addEventListener('click', () => {
        const cert = certificatesData.find(c => c.id === parseInt(card.dataset.id));
        if (cert) openCertModal(cert);
      });
    });
  }

  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
      showingAll = !showingAll;
      arrowIcon.classList.toggle('rotated');
      btnText.textContent = showingAll ? 'Lihat Lebih Sedikit' : 'Lihat Lebih Banyak';
      renderCerts(showingAll ? certificatesData : certificatesData.filter(c => c.featured));
    });
  }

  renderCerts(certificatesData.filter(c => c.featured));
}

function openCertModal(cert) {
  const modal = document.getElementById('certificate-modal');
  document.getElementById('cert-modal-title').textContent = cert.title;
  document.getElementById('cert-modal-image').src = cert.image;
  document.getElementById('cert-modal-issuer').textContent = `Penerbit: ${cert.issuer}`;
  document.getElementById('cert-modal-date').textContent = `Tahun: ${cert.date}`;
  document.getElementById('cert-modal-description').textContent = cert.description;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ========== EXPERIENCE ==========
function initExperience() {
  const container = document.getElementById('experience-container');
  const viewMoreBtn = document.getElementById('view-more-experience-btn');
  const arrowIcon = document.getElementById('experience-arrow-icon');
  const btnText = document.getElementById('experience-btn-text');
  let showingAll = false;

  function createExpCard(exp) {
  const tagsHTML = exp.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  return `
    <article class="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer card-hover border border-gray-100" data-id="${exp.id}">
      <div class="overflow-hidden h-56"><img src="${exp.image}" alt="${exp.title}" class="w-full h-full object-cover"></div>
      <div class="p-6">
        <div class="mb-4">${tagsHTML}</div>
        <h3 class="font-semibold text-lg mb-2">${exp.title}</h3>
        <p class="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-3">${exp.description}</p>
        <p class="text-gray-500 text-xs mb-4">${exp.date}</p>
        <div class="flex items-center text-primary font-medium group">
          <span>Lihat detail</span>
          <i data-lucide="arrow-right" class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"></i>
        </div>
      </div>
    </article>
  `;
}

  function renderExp(exps) {
    container.innerHTML = exps.map(createExpCard).join('');
    if (typeof lucide !== 'undefined') lucide.createIcons();
    container.querySelectorAll('article').forEach(card => {
      card.addEventListener('click', () => {
        const exp = experienceData.find(e => e.id === parseInt(card.dataset.id));
        if (exp) openExpModal(exp);
      });
    });
  }

  function openExpModal(exp) {
  const modal = document.getElementById('experience-modal');
  if (!modal) return;
  
  document.getElementById('exp-modal-title').textContent = exp.title;
  document.getElementById('exp-modal-image').src = exp.image;
  document.getElementById('exp-modal-image').alt = exp.title;
  document.getElementById('exp-modal-date').textContent = exp.date;
  document.getElementById('exp-modal-description').textContent = exp.fullDescription;
  document.getElementById('exp-modal-tags').innerHTML = exp.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  document.getElementById('exp-modal-responsibilities').innerHTML = exp.responsibilities.map(r => `<li>${r}</li>`).join('');
  
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

  // Show button only if there are non-featured items
  const hasMoreItems = experienceData.filter(e => !e.featured).length > 0;
  
  if (viewMoreBtn && hasMoreItems) {
    viewMoreBtn.style.display = 'flex';
    viewMoreBtn.addEventListener('click', () => {
      showingAll = !showingAll;
      arrowIcon.classList.toggle('rotated');
      btnText.textContent = showingAll ? 'Lihat Lebih Sedikit' : 'Lihat Lebih Banyak';
      renderExp(showingAll ? experienceData : experienceData.filter(e => e.featured));
    });
  }

  renderExp(experienceData.filter(e => e.featured));
}

// ========== EDUCATION ==========
function initEducation() {
  const container = document.getElementById('education-container');
  const viewMoreBtn = document.getElementById('view-more-education-btn');
  let showingAll = false;

  function createEduCard(edu) {
    return `
      <article class="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer card-hover" data-id="${edu.id}">
        <div class="overflow-hidden h-56"><img src="${edu.image}" alt="${edu.title}" class="w-full h-full object-cover"></div>
        <div class="p-5">
          <h3 class="font-semibold text-lg mb-1">${edu.title}</h3>
          <p class="text-gray-600 text-sm">${edu.major}</p>
          <p class="text-gray-500 text-xs mt-1">${edu.date}</p>
        </div>
      </article>
    `;
  }

  function renderEdu(edus) {
    container.innerHTML = edus.map(createEduCard).join('');
    container.querySelectorAll('article').forEach(card => {
      card.addEventListener('click', () => {
        const edu = educationData.find(e => e.id === parseInt(card.dataset.id));
        if (edu) openEduModal(edu);
      });
    });
  }

  if (viewMoreBtn && educationData.filter(e => !e.featured).length > 0) {
    viewMoreBtn.style.display = 'flex';
    viewMoreBtn.addEventListener('click', () => {
      showingAll = !showingAll;
      document.getElementById('education-arrow-icon').classList.toggle('rotated');
      document.getElementById('education-btn-text').textContent = showingAll ? 'Lihat Lebih Sedikit' : 'Lihat Lebih Banyak';
      renderEdu(showingAll ? educationData : educationData.filter(e => e.featured));
    });
  }

  renderEdu(educationData.filter(e => e.featured));
}

function openEduModal(edu) {
  const modal = document.getElementById('education-modal');
  document.getElementById('edu-modal-title').textContent = edu.title;
  document.getElementById('edu-modal-image').src = edu.image;
  document.getElementById('edu-modal-major').textContent = edu.major;
  document.getElementById('edu-modal-date').textContent = edu.date;
  document.getElementById('edu-modal-description').textContent = edu.description;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ========== MODALS ==========
function initModals() {
  const modals = ['project-modal', 'certificate-modal', 'experience-modal', 'education-modal'];
  const closeButtons = ['close-modal', 'close-cert-modal', 'close-exp-modal', 'close-edu-modal'];

  closeButtons.forEach((btnId, index) => {
    const btn = document.getElementById(btnId);
    const modalId = modals[index];
    if (btn) {
      btn.addEventListener('click', () => closeModal(modalId));
    }
  });

  modals.forEach(modalId => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modalId);
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modalId => closeModal(modalId));
    }
  });
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
  if (typeof lucide !== 'undefined') lucide.createIcons();
  initMenu();
  initTypingEffect();
  initSkillBars();
  initProjects();
  initCertificates();
  initExperience();
  initEducation();
  initSmoothScroll();
  initModals();
  initScrollReveal();
  initHeaderScroll();
});


