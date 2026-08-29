// =========================
// TEMA CLARO / ESCURO
// =========================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeButton.textContent = isDark ? "☀️" : "🌙";

    localStorage.setItem("darkMode", isDark);
});


// Recupera o tema salvo
const savedTheme = localStorage.getItem("darkMode");

if (savedTheme === "true") {
    document.body.classList.add("dark");
    themeButton.textContent = "☀️";
}


// =========================
// FORMULÁRIO DE CONTATO
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formMessage.textContent =
            "Por favor, preencha todos os campos.";

        formMessage.style.color = "#ef4444";

        return;
    }

    formMessage.textContent =
        `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;

    formMessage.style.color = "#22c55e";

    contactForm.reset();
});


// =========================
// ANIMAÇÃO AO ROLAR
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// =========================
// LINKS DO MENU
// =========================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});
