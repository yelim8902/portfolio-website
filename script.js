// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "none";
  }
});

// Active navigation link highlighting
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(".skill-category, .project-card, .contact-item, .stat")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Skill items hover effect
document.querySelectorAll(".skill-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.05)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Project cards hover effect
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-15px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Contact form handling
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelectorAll('input[type="text"]')[1].value;
    const message = this.querySelector("textarea").value;

    // Simple validation
    if (!name || !email || !subject || !message) {
      showNotification("모든 필드를 입력해주세요.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showNotification("올바른 이메일 주소를 입력해주세요.", "error");
      return;
    }

    // Simulate form submission
    showNotification("메시지가 성공적으로 전송되었습니다!", "success");
    this.reset();
  });
}

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  // Animate in
  requestAnimationFrame(() => {
    notification.style.transform = "translateX(0)";
  });

  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(400px)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 3000);
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
  // HTML 태그가 포함된 텍스트의 경우 바로 설정
  if (text.includes("<") && text.includes(">")) {
    element.innerHTML = text;
    return;
  }

  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing animation when page loads
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const originalText = heroTitle.innerHTML;
    typeWriter(heroTitle, originalText, 50);
  }
});

// Parallax effect for hero section (disabled if reduced motion)
const prefersReducedMotion =
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersReducedMotion) {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    if (hero) {
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    }
  });
}

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// CSS for loading, nav active, hamburger is now in styles.css

// Add scroll to top button
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
scrollToTopBtn.className = "scroll-to-top";
document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.opacity = "1";
    scrollToTopBtn.style.visibility = "visible";
  } else {
    scrollToTopBtn.style.opacity = "0";
    scrollToTopBtn.style.visibility = "hidden";
  }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Hover effect is handled by CSS

// 즉시 실행 테스트
console.log("Script loaded!");

// Profile card switching functionality
setTimeout(function () {
  console.log("Starting profile card initialization...");

  const profileCards = document.querySelectorAll(".profile-card");
  console.log("Found cards:", profileCards.length);

  if (profileCards.length >= 2) {
    const card1 = profileCards[0];
    const card2 = profileCards[1];

    console.log("Setting up card 1 and card 2");

    // 간단한 클릭 이벤트
    card1.addEventListener("click", function () {
      console.log("Card 1 clicked - switching!");

      // z-index 변경
      card1.style.zIndex = "2";
      card2.style.zIndex = "5";

      // 간단한 애니메이션
      card2.style.transition = "all 0.3s ease";
      card1.style.transition = "all 0.3s ease";

      card2.style.transform = "scale(1.05)";
      card1.style.transform = "scale(0.95)";

      setTimeout(() => {
        card2.style.transform = "scale(1)";
        card1.style.transform = "scale(1)";
      }, 300);
    });

    card2.addEventListener("click", function () {
      console.log("Card 2 (finance) clicked - bringing tech card to front!");

      // z-index 변경 - 기술 카드(card1)를 앞으로
      card2.style.zIndex = "2";
      card1.style.zIndex = "5";

      // 간단한 애니메이션 - 기술 카드가 앞으로 나오는 효과
      card1.style.transition = "all 0.3s ease";
      card2.style.transition = "all 0.3s ease";

      card1.style.transform = "scale(1.05)";
      card2.style.transform = "scale(0.95)";

      setTimeout(() => {
        card1.style.transform = "scale(1)";
        card2.style.transform = "scale(1)";
      }, 300);
    });

    // 커서 설정
    card1.style.cursor = "pointer";
    card2.style.cursor = "pointer";

    console.log("Profile cards setup complete!");
  } else {
    console.log("Could not find 2 profile cards");
  }
}, 3000);

// EmailJS 초기화
(function () {
  emailjs.init("qsdvJh6oC_dtxRdKV"); // Public Key
})();

// 아예 간단하게 onclick 방식으로 변경
function sendEmail() {
  console.log("sendEmail function called!");

  // 직접 값 가져오기
  const nameInput = document.querySelector('#contact-form input[name="name"]');
  const emailInput = document.querySelector(
    '#contact-form input[name="email"]'
  );
  const subjectInput = document.querySelector(
    '#contact-form input[name="subject"]'
  );
  const messageInput = document.querySelector(
    '#contact-form textarea[name="message"]'
  );

  console.log("Input elements:", {
    nameInput,
    emailInput,
    subjectInput,
    messageInput,
  });

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  console.log("Values:", { name, email, subject, message });

  // 유효성 검사
  if (!name || !email || !subject || !message) {
    showNotification("모든 필드를 입력해주세요!", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showNotification("올바른 이메일 주소를 입력해주세요!", "error");
    return;
  }

  // 전송 버튼 비활성화
  const submitButton = document.querySelector("#contact-form button");
  const originalText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = "전송 중...";

  // EmailJS로 이메일 전송
  const templateParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
    to_email: "yelim2849@gmail.com",
  };

  console.log("Sending email with params:", templateParams);

  emailjs
    .send("service_lyl", "template_bmjsumh", templateParams)
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
      showNotification("메시지가 성공적으로 전송되었습니다!", "success");

      // 폼 초기화
      nameInput.value = "";
      emailInput.value = "";
      subjectInput.value = "";
      messageInput.value = "";
    })
    .catch(function (error) {
      console.log("FAILED...", error);
      showNotification(
        "메시지 전송에 실패했습니다. 다시 시도해주세요.",
        "error"
      );
    })
    .finally(function () {
      // 버튼 복원
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    });
}

// onclick 방식으로 변경했으므로 이벤트 리스너 초기화 불필요
