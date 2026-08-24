// --- Preloader & Scroll Progress ---
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  setTimeout(() => preloader.style.visibility = 'hidden', 500);
});

window.addEventListener('scroll', () => {
  const winScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('scroll-progress').style.width = scrolled + '%';
});

// --- Theme Toggle Setup ---
const themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  themeToggleBtn.textContent = isLight ? '🌙' : '☀️';
});

// --- 1. Typed.js Setup ---
function initTyped(lang) {
  const stringsEn = ["Software Engineer", "Full Stack Developer", "UX/UI Designer"];
  const stringsAr = ["مهندسة برمجيات", "مطور واجهات متكاملة", "مصممة واجهات المستخدم"];
  
  if(window.typedObj) { window.typedObj.destroy(); }
  
  window.typedObj = new Typed(".typed-text", {
    strings: lang === 'ar' ? stringsAr : stringsEn,
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
  });
}

// --- 2. ScrollReveal Setup ---
function initScrollReveal() {
  const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    reset: false
  });

  sr.reveal('.reveal-left', { origin: 'left' });
  sr.reveal('.reveal-right', { origin: 'right' });
  sr.reveal('.reveal-up', { origin: 'bottom', interval: 200 });
}

// --- 3. Bilingual Support (English / Arabic) ---
const translations = {
  en: {
    downloadCV: "Download CV",
    greeting: "Hello, I'm",
    name: "Mona Fawaz",
    about: "Passionate about building clean, scalable, and user-centered web applications. I specialize in full-stack development, automating processes, and crafting solutions that solve real-world problems.",
    viewWork: "View My Work",
    eduTitle: "Education",
    degree: "B.Sc. in Information Technology",
    university: "King Abdulaziz University, Jeddah",
    honors: "Second-Class Honors",
    gradDate: "Graduated May 2025",
    expTitle: "Experience",
    jobTitle: "Cooperative Trainee",
    company: "Saudia Airlines, Jeddah",
    task1: "Trained in software development and IT operations in a corporate environment.",
    task2: "Developed problem-solving and technical skills through real-world projects.",
    task3: "Gained hands-on experience with database management and web development.",
    skillsTitle: "Tech Stack & Skills",
    projectsTitle: "Featured Projects",
    filterAll: "All",
    filterFullstack: "Full-Stack",
    filterAI: "AI & Python",
    filterUIUX: "UI/UX",
    filterSystems: "Systems & Tools",
    achievementsTitle: "Achievements & Awards",
    pAchieveTitle: "Smart Educational Platform - Eduthon (3rd Place)",
    pAchieveDesc: "Innovated and built an interactive AI-driven educational platform, securing 3rd place for implementing modern EdTech solutions.",
    pOptiTitle: "Optivalue-IVI Risk Management",
    pOptiDesc: "Engineered and developed an AI platform within 72 hours to automate insurance claims analysis, predict risk ratios, and minimize financial and time losses.",
    pBirdTitle: "Bird Care Web Application (SDA Individual Graduation Project)",
    pBirdDesc: "An individual graduation project for Saudi Digital Academy. Developed a full-stack web application featuring advanced JWT authentication and containerized deployment with Docker.",
    pQawamTitle: "Qawam AI",
    pQawamDesc: "An AI-powered fitness platform creating personalized workout plans with real-time feedback and gamification.",
    pStudyTitle: "Study Sync",
    pStudyDesc: "A comprehensive platform for students to manage assignments, deadlines, and operational workflows efficiently.",
    pPnrTitle: "PNR Retriever System Upgrade",
    pPnrDesc: "Upgraded an airline IT system to .NET8 MVC, enhancing API integration and UI for live PNR handling.",
    pFaceTitle: "Facial Recognition Attendance",
    pFaceDesc: "A smart system automating attendance tracking using facial encoding, OpenCV, and a custom GUI.",
    pCoffeeTitle: "Coffee Ordering App",
    pCoffeeDesc: "A full-featured e-commerce coffee ordering app with an advanced customization system and seamless UI/UX design.",
    pEmdadTitle: "Emdad Platform",
    pEmdadDesc: "An environmental sustainability platform connecting farmers and plant enthusiasts with role-based user experiences.",
    pVerifyTitle: "Verification Tools",
    pVerifyDesc: "A specialized system providing comprehensive verification utilities and validation workflows.",
    contactTitle: "Get In Touch",
    formName: "Name",
    formEmail: "Email",
    formMsg: "Message",
    formSubmit: "Send Message",
    footerText: "Design & Built By : Mona Almalki"
  },
  ar: {
    downloadCV: "تحميل السيرة الذاتية",
    greeting: "مرحباً، أنا",
    name: "منى فواز",
    about: "شغوفة ببناء تطبيقات ويب نظيفة وقابلة للتوسع تركز على تجربة المستخدم. أمتلك خبرة في التطوير الشامل، أتمتة العمليات، وابتكار حلول للمشكلات الواقعية.",
    viewWork: "استعرض أعمالي",
    eduTitle: "التعليم",
    degree: "بكالوريوس في تقنية المعلومات",
    university: "جامعة الملك عبدالعزيز، جدة",
    honors: "مرتبة الشرف الثانية",
    gradDate: "خريجة مايو 2025",
    expTitle: "الخبرات",
    jobTitle: "متدربة تعاونية",
    company: "الخطوط السعودية، جدة",
    task1: "تدريب مكثف في تطوير البرمجيات وعمليات تقنية المعلومات في بيئة مؤسسية.",
    task2: "تطوير مهارات حل المشكلات والمهارات التقنية من خلال مشاريع واقعية.",
    task3: "اكتساب خبرة عملية في إدارة قواعد البيانات وتطوير الويب.",
    skillsTitle: "المهارات والتقنيات",
    projectsTitle: "أبرز المشاريع",
    filterAll: "الكل",
    filterFullstack: "تطوير شامل",
    filterAI: "الذكاء الاصطناعي وبايثون",
    filterUIUX: "تصميم واجهات",
    filterSystems: "أنظمة وأدوات",
    achievementsTitle: "الإنجازات والجوائز",
    pAchieveTitle: "منصة التعليم الذكي - هاكاثون التعليم (المركز الثالث)",
    pAchieveDesc: "ابتكار وبناء منصة تعليمية تفاعلية مدعومة بالذكاء الاصطناعي، وحصد المركز الثالث لتطبيق حلول تقنية تعليمية حديثة.",
    pOptiTitle: "منصة إدارة المخاطر Optivalue-IVI",
    pOptiDesc: "تصميم وتطوير منصة ذكاء اصطناعي خلال 72 ساعة لأتمتة تحليل مطالبات التأمين، التنبؤ بنسب المخاطر، وتقليل الخسائر المالية والزمنية.",
    pBirdTitle: "تطبيق العناية بالطيور (مشروع تخرج فردي SDA)",
    pBirdDesc: "مشروع تخرج فردي لأكاديمية طويق/السعودية الرقمية. تم تطوير تطبيق ويب متكامل يضم نظام مصادقة متقدم (JWT) ونشر حاويات عبر Docker.",
    pQawamTitle: "منصة قوام (Qawam AI)",
    pQawamDesc: "منصة لياقة بدنية مدعومة بالذكاء الاصطناعي تقدم خططاً مخصصة وتغذية راجعة بالوقت الفعلي.",
    pStudyTitle: "نظام Study Sync",
    pStudyDesc: "منصة متكاملة للطلاب لإدارة المهام والمواعيد النهائية وسير العمليات الإدارية بكفاءة.",
    pPnrTitle: "ترقية نظام PNR Retriever",
    pPnrDesc: "ترقية نظام تقني لشركة طيران باستخدام .NET8 MVC، مع تحسين واجهات برمجة التطبيقات وواجهة المستخدم.",
    pFaceTitle: "التعرف على الوجه للحضور",
    pFaceDesc: "نظام ذكي لأتمتة تتبع الحضور باستخدام تقنيات تشفير الوجه، OpenCV، وواجهة مستخدم مخصصة.",
    pCoffeeTitle: "تطبيق طلب القهوة",
    pCoffeeDesc: "تطبيق تجارة إلكترونية لطلب القهوة يضم نظام تخصيص متقدماً وتجربة مستخدم سلسة.",
    pEmdadTitle: "منصة إمداد",
    pEmdadDesc: "منصة استدامة بيئية تربط المزارعين وعشاق النباتات بتجربة مستخدم مخصصة حسب الأدوار.",
    pVerifyTitle: "أدوات التحقق (Verification Tools)",
    pVerifyDesc: "نظام متخصص يوفر أدوات تحقق شاملة وسير عمل دقيق للمصادقة.",
    contactTitle: "تواصل معي",
    formName: "الاسم",
    formEmail: "البريد الإلكتروني",
    formMsg: "الرسالة",
    formSubmit: "إرسال الرسالة",
    footerText: "تصميم وبرمجة: منى المالكي"
  }
};

let currentLang = 'en';
const langToggleBtn = document.getElementById('langToggle');

langToggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  
  langToggleBtn.textContent = currentLang === 'en' ? 'عربي' : 'English';
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(translations[currentLang][key]) {
      if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[currentLang][key];
      } else {
        el.textContent = translations[currentLang][key];
      }
    }
  });

  initTyped(currentLang);
});

// --- 4. Project Filtering Logic ---
function initFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.projects-gallery .project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// --- 5. Modal Lightbox & Carousel Logic ---
function initCarouselsAndModal() {
  const modal = document.getElementById('imageModal');
  const modalImg = modal.querySelector('.modal-img');
  const closeBtn = modal.querySelector('.close-modal');
  const modalPrev = modal.querySelector('.modal-prev');
  const modalNext = modal.querySelector('.modal-next');

  let activeImages = [];
  let currentModalIndex = 0;

  document.querySelectorAll('.project-card').forEach(card => {
    const track = card.querySelector('.carousel-images');
    const images = card.querySelectorAll('.project-img');
    const prevBtn = card.querySelector('.prev');
    const nextBtn = card.querySelector('.next');
    
    let currentIndex = 0;
    
    if (images.length <= 1) {
      if(prevBtn) prevBtn.style.display = 'none';
      if(nextBtn) nextBtn.style.display = 'none';
    } else {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        updateCardCarousel();
      });

      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCardCarousel();
      });
    }

    function updateCardCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    images.forEach((img, idx) => {
      img.addEventListener('click', () => {
        activeImages = Array.from(images).map(i => i.src);
        currentModalIndex = idx;
        modalImg.src = activeImages[currentModalIndex];
        modal.style.display = 'flex';
      });
    });
  });

  modalNext.addEventListener('click', () => {
    currentModalIndex = (currentModalIndex + 1) % activeImages.length;
    modalImg.src = activeImages[currentModalIndex];
  });

  modalPrev.addEventListener('click', () => {
    currentModalIndex = (currentModalIndex - 1 + activeImages.length) % activeImages.length;
    modalImg.src = activeImages[currentModalIndex];
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// --- 6. Formspree Submission Logic ---
function initForm() {
  var form = document.getElementById("my-form");
  var status = document.getElementById("my-form-status");
  if(!form) return;

  async function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = currentLang === 'en' ? "Thanks! I'll get back to you shortly." : "شكراً! سأرد عليك قريباً.";
        form.reset();
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
          } else {
            status.innerHTML = currentLang === 'en' ? "Oops! There was a problem." : "عذراً! حدث خطأ أثناء الإرسال.";
          }
        });
      }
    }).catch(error => {
      status.innerHTML = currentLang === 'en' ? "Oops! There was a problem." : "عذراً! حدث خطأ أثناء الإرسال.";
    });
  }
  form.addEventListener("submit", handleSubmit);
}

// --- Initialize All on DOM Load ---
document.addEventListener("DOMContentLoaded", () => {
  initTyped(currentLang);
  initScrollReveal();
  initFiltering();
  initCarouselsAndModal();
  initForm();
});