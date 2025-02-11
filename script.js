const translations = {
    fr: {
        produits: "Nos Produits Fermiers",
        activites: "Activités & Ateliers",
        hebergement: "Hébergement",
        contact: "Contact",
    },
    en: {
        produits: "Our Farm Products",
        activites: "Activities & Workshops",
        hebergement: "Accommodation",
        contact: "Contact",
    },
    es: {
        produits: "Nuestros Productos de Granja",
        activites: "Actividades y Talleres",
        hebergement: "Alojamiento",
        contact: "Contacto",
    },
    pt: {
        produits: "Nossos Produtos da Fazenda",
        activites: "Atividades & Oficinas",
        hebergement: "Alojamento",
        contact: "Contato",
    },
    it: {
        produits: "I Nostri Prodotti Agricoli",
        activites: "Attività e Laboratori",
        hebergement: "Alloggio",
        contact: "Contatto",
    },
};

function changeLanguage(lang) {
    document.querySelector("#produits h2").textContent = translations[lang].produits;
    document.querySelector("#activites h2").textContent = translations[lang].activites;
    document.querySelector("#hebergement h2").textContent = translations[lang].hebergement;
    document.querySelector("#contact h2").textContent = translations[lang].contact;
}
