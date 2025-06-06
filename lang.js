// Cambio de lenguaje
// Este archivo contiene las traducciones para el sitio web.

const translations = {
  es: {
    //Navbar
    home: "Inicio",
    services: "Especialidad",
    about: "Trayectoria", 
    contact: "Contacto",
    
    //Header
    title: "Representante Comercial",
    welcome: "Bienvenido",
    
    //About
    description: "Con casi 19 años de experiencia impulsando relaciones comerciales sólidas y estratégicas en la industria automotriz y metalmecánica, me especializo en representar productos y servicios de alta calidad, conectando empresas internacionales con el mercado mexicano.",
    about_description: "Mi trayectoria profesional ha estado llena de retos y aprendizajes. A lo largo de estos casi 19 años, he tenido la oportunidad de colaborar con equipos de trabajo excepcionales, quienes me han brindado valiosas lecciones tanto en lo positivo como en los desafíos del mundo comercial.",
    about_description2: "Lo que más valoro de mi carrera es haber establecido relaciones duraderas basadas en la confianza, el compromiso y el profesionalismo. Cada etapa me ha formado como un asesor comercial íntegro, con visión estratégica y un fuerte enfoque en resultados.",
    about_description3: "Hoy me presento como un partner comercial que trasciende lo transaccional. Mi valor diferencial radica en entender las necesidades profundas del  negocio, anticipar escenarios y ofrecer soluciones personalizadas que generan impacto real. Más que un asesor, me considero un arquitecto de  oportunidades comerciales sostenibles.",

    //Speciality
    title_especiality: "Especialidad",
    description_especiality: "Impulso relaciones comerciales estratégicas para empresas industriales, con especialización en:",
    especiality_1: "Sector Automotriz",
    especiality_2: "Metalmecanica",
    especiality_3: "Sector Industrial",

    //Banner
    banner_text1: "¿Quieres saber más?",
    banner_text2: "Contáctame directamente a través de WhatsApp para más información.",

    //Contact
    contact_name: "Nombre",
    contact_email: "Correo",
    contact_subject: "Asunto",
    contact_message: "Mensaje",
    send_message: "Enviar Mensaje",

    // Footer
    footer_rights: "Todos los derechos reservados.",
    footer_designed_by: "Diseñado por",

},
  en: {
    //Navbar
    home: "Home",
    services: "Especiality",
    about: "Tracyectory", 
    contact: "Contact",

    //Header
    title: "Commercial Representative",
    welcome: "Welcome",
    
    //About
    description: "With nearly 19 years of experience fostering strong, strategic business relationships in the automotive and metalworking industries, I specialize in representing high-quality products and services, connecting international companies with the Mexican market.",
    about_description: "My professional career has been full of challenges and learning experiences. Over these nearly 19 years, I've had the opportunity to collaborate with exceptional teams, who have taught me valuable lessons, both positive and challenging, in the commercial world.",
    about_description2: "What I value most about my career is having established long-lasting relationships based on trust, commitment, and professionalism. Each stage has shaped me as a well-rounded commercial advisor with a strategic vision and a strong focus on results.",
    about_description3: "Today I present myself as a business partner who transcends the transactional. My unique value lies in understanding the deep needs of the business, anticipating scenarios, and offering customized solutions that generate real impact. More than an advisor, I consider myself an architect of sustainable business opportunities.",
    
    //Speciality
    title_especiality: "Specialty",
    description_especiality: "Promoting strategic business relationships for industrial companies, specializing in:",
    especiality_1: "Automotive Sector",
    especiality_2: "Metalworking",
    especiality_3: "Industrial Sector",

    //Banner
    banner_text1: "Want to know more?",
    banner_text2: "Contact me directly via WhatsApp for more information.",

    //Contact
    contact_name: "Name",
    contact_email: "Email",
    contact_subject: "Subject",
    contact_message: "Message",
    send_message: "Send Message",

    // Footer
    footer_rights: "All rights reserved.",
    footer_designed_by: "Designed by",

  }
};

// Funcion para cambiar el idioma de la página

let currentLang = localStorage.getItem("lang") || "es";

function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // Cambiar el idioma del atributo html para accesibilidad
  document.documentElement.lang = currentLang;

  // Cambiar el texto del botón
  document.getElementById("lang-toggle").textContent = currentLang === "es" ? "EN" : "ES";
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  localStorage.setItem("lang", currentLang);
  translatePage();
});

// Cargar traducción inicial
translatePage();

function setLanguage(lang) {
    // Cambia textos normales
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const key = el.getAttribute('data-i18n');
        // Si es input o textarea, cambia el placeholder
        if (
            (el.tagName === "INPUT" || el.tagName === "TEXTAREA") &&
            el.hasAttribute("placeholder")
        ) {
            el.placeholder = translations[lang][key] || el.placeholder;
        } else {
            // Si no, cambia el texto interno
            el.textContent = translations[lang][key] || el.textContent;
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('lang-toggle');
    const flagEs = document.getElementById('flag-es');
    const flagEn = document.getElementById('flag-en');
    function updateFlags() {
        if (toggle.checked) {
            flagEs.classList.remove('active');
            flagEn.classList.add('active');
        } else {
            flagEs.classList.add('active');
            flagEn.classList.remove('active');
        }
    }
    toggle.addEventListener('change', updateFlags);
    updateFlags(); // Inicializa al cargar
});

