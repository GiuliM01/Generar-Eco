// Sistema Simple de Traducción
const lang = {
  es: {
    // NAVBAR
    "nav.inicio": "Inicio",
    "nav.programas": "Programas",
    "nav.dona": "Doná",
    "nav.app": "App",
    "nav.blog": "BLOG",
    
    // DROPDOWN
    "drop.edu": "Educación ambiental",
    "drop.agri": "Desarrollo Empresarial",
    "drop.ref": "Reserva Don Silvestre",
    "drop.ali": "Ecoturismo",
    
    
    // Carousel
"car1.title": "Reserva Natural Don Silvestre",
"car1.text": "Cuidamos la Selva Atlántica junto a la comunidad, aprendiendo y actuando en un corredor biológico único.",
"car1.btn": "Sumate",

"car2.title": "Ambiente que educa",
"car2.text": "Una propuesta de educación ambiental y neurociencia que acompaña el bienestar y los aprendizajes en las distintas etapas escolares.",
"car2.btn": "Reserva tu charla",

"car3.title": "Jornadas de team building con propósito",
"car3.text": "Jornadas de desarrollo empresarial sustentable que fortalecen vínculos, promueven el bienestar y conectan a los equipos con la naturaleza, tanto en entornos naturales como en la oficina.",
"car3.btn": "Ver más",
    
    // ABOUT
    "about.title": "Una ONG ambiental<br />que trabaja por la restauración de la vida",
    "about.text": "Buscamos inspirar hábitos conscientes, fortalecer comunidades y recuperar ecosistemas para que todos —personas, flora y fauna— vivan mejor.",
    "about.btn": "Conocé más",
    
    // STATS
    "stat1.num": "+5000",
    "stat1.title": "ÁRBOLES PLANTADOS",
    "stat1.text": "Pequeñas semillas que ya son parte de un futuro más saludable.",
    
    "stat2.num": "+40",
    "stat2.title": "PROYECTOS REALIZADOS",
    "stat2.text": "Acciones sostenibles que regeneran espacios y fortalecen comunidades.",
    
    "stat3.num": "+450",
    "stat3.title": "PERSONAS Y ORGANIZACIONES",
    "stat3.text": "Una red creciente de aliados comprometidos con el medio ambiente.",
    
    // CARDS
    "card1.text": "Educación ambiental para escuelas y comunidades",
    "card1.btn": "Participá",
    
    "card2.text": "Agricultura regenerativa y producción sustentable",
    "card2.btn": "Más información",
    
    "card3.text": "Reforestación con especies nativas y restauración ecológica",
    "card3.btn": "Más información",
    
    "card4.text": "Alianzas sociales y ambientales para organizaciones",
    "card4.btn": "Más información",
    
    // QR
    "qr.title": "Tu espacio para actuar y cuidar el ambiente",
    "qr.text": "La app de Generar Eco ofrece desafíos sostenibles, recursos educativos y oportunidades de participación en proyectos ambientales para sumar desde donde estés.",
    "qr.btn": "Conocé la app",
    
    // JOIN
    "join.title": "Formá parte del<br/> movimiento regenerativo",
    "join.text": "Podés participar como voluntario, asociarte, colaborar con proyectos de reforestación o impulsar acciones ambientales en tu comunidad. Cada gesto suma y multiplica el impacto.",
    "join.btn": "Súmate al movimiento",

    // ============ PÁGINA DONÁ ============
    "dona.hero.title": "Tu ayuda planta vida",
    "dona.hero.text": "Cada aporte a nuestros proyectos se traduce en acciones de reforestación nativa y restauración ecológica. Con tu donación hacés posible que más personas, ecosistemas y comunidades regeneren la naturaleza que nos rodea.",
    "dona.hero.btn": "Quiero donar »",
    
    "dona.purpose.title": "Para que sirven las donaciones",
    
    "dona.card1.title": "Plantamos árboles nativos",
    "dona.card1.text": "Para recuperar suelos, proteger biodiversidad y regenerar ecosistemas.",
    
    "dona.card2.title": "Impulsamos talleres y educación ambiental",
    "dona.card2.text": "Para que más personas aprendan a cuidar la naturaleza desde lo cotidiano.",
    
    "dona.card3.title": "Fortalecemos proyectos comunitarios",
    "dona.card3.text": "Que unen a voluntarios, escuelas y organizaciones en acciones reales de impacto.",
    
    "dona.impact1.title": "Árboles nativos<br>plantados",
    "dona.impact1.text": "gracias al apoyo de personas<br>y empresas",
    
    "dona.impact2.title": "Comunidades<br>alcanzadas",
    "dona.impact2.text": "con programas de educación ambiental",
    
    "dona.impact3.title": "Personas<br>movilizadas",
    "dona.impact3.text": "en acciones regenerativas y voluntariados",
    
    "dona.forms.title": "Formas de donar",
    
    "dona.monthly.title": "Donación mensual",
    "dona.monthly.text": "Sostené nuestros proyectos todo el año.",
    "dona.monthly.btn": "Donar »",
    
    "dona.once.title": "Donación única",
    "dona.once.text": "Tu aporte genera impacto inmediato.",
    "dona.once.btn": "Donar »",

// En el objeto de traducciones español:
"form.title.line1": "Completá tus datos y",
"form.title.line2": "te respondemos a",
"form.title.line3": "la brevedad",
"form.name.label": "Nombre Completo:",
"form.name.placeholder": "Nombre Completo",
"form.email.label": "Email:",
"form.email.placeholder": "Email",
"form.org.label": "Organización (Opcional):",
"form.org.default": "Seleccioná una opción",
"form.org.opt1": "Empresa",
"form.org.opt2": "ONG",
"form.org.opt3": "Institución educativa",
"form.org.opt4": "Persona particular",
"form.reason.label": "Motivo de contacto:",
"form.reason.default": "Seleccioná un motivo",
"form.reason.opt1": "Educación ambiental",
"form.reason.opt2": "Desarrollo Empresarial",
"form.reason.opt3": "Ecoturismo",
"form.reason.opt4": "Reforestación",
"form.reason.opt5": "Donaciones y Sponsor",
"form.reason.opt6": "Marketing",
"form.reason.opt7": "Administración",
"form.message.label": "Mensaje:",
"form.message.placeholder": "Escribí tu mensaje...",
"form.submit": "Enviar",

// Página App
"app.hero.title": "Cuidar la naturaleza desde tu día a día",
"app.hero.text": "Nuestra app transforma tus pasos en acciones reales: cada kilómetro que caminás suma para que empresas se comprometan a plantar árboles nativos con Generar Eco. Vivís tu día a día, y al mismo tiempo regenerás vida.",
"app.hero.btn": "Conocé la app »",

"app.feature1.title": "Sumá pasos y generá impacto:",
"app.feature1.text": "Tus caminatas registradas activan compromisos de reforestación con empresas.",

"app.feature2.title": "Desafíos y recompensas:",
"app.feature2.text": "Participá de metas grupales que inspiran y multiplican el impacto.",

"app.feature3.title": "Impacto en tiempo real:",
"app.feature3.text": "Conocé los árboles plantados gracias a tu participación.",

"app.feature4.title": "Comunidad que camina por el planeta:",
"app.feature4.text": "Únite a personas que también cuidan la tierra desde lo cotidiano.",

"app.cta.text": "Unimos tecnología, comunidad y naturaleza para que cualquier persona pueda regenerar vida mientras camina. Transformamos un hábito cotidiano en árboles nativos plantados donde más se necesitan.",
"app.cta.btn": "Empezá ahora »",


// ============ TRADUCCIONES PARA AGREGAR A translate.js ============
// ESPAÑOL (agregar dentro del objeto es: { ... })

// Página Quienes Somos
"qs.hero.title": "Regeneramos vida, JUNTOS",
"qs.hero.text1": "Somos una ONG argentina conformada por profesionales comprometidos con la conservación y restauración de ambientes naturales.",
"qs.hero.text2": "Promovemos hábitos sostenibles que benefician tanto a las comunidades como a los ecosistemas.",

"qs.how.title": "Cómo lo hacemos",
"qs.how.text": "Trabajamos juntos para cuidar la naturaleza e inspiramos a las personas a reconectarse con el entorno, comprender su valor y tomar acción para proteger nuestro planeta:",

"qs.mission.title": "Nuestra Misión",
"qs.mission.text": "Construir una sociedad sostenible donde personas y naturaleza convivan en equilibrio.",

"qs.vision.title": "Nuestra Visión",
"qs.vision.text": "Conectar a las personas con la naturaleza para conservar y restaurar ambientes.",

"qs.values.title": "Nuestros Valores",
"qs.values.text": "Compromiso, educación, colaboración y acción para generar un impacto concreto.",

"qs.history.title": "Nuestra Historia",

"qs.bit.title": "Un poco de historia",
"qs.bit.text": "Generar Eco nació en 2016 para reconectar a las personas con la naturaleza e inspirar su cuidado. Desde entonces, desarrollamos proyectos innovadores basados en educación socioambiental, preservación, restauración ambiental y ecoturismo.",
"qs.bit.small": "El nombre Generar Eco refleja nuestra esencia: que cada acción resuene y se multiplique.",

"qs.impact.title": "Impacto",
"qs.impact.card1": "Más participación y compromiso interno",
"qs.impact.card2": "Equipos sensibilizados y conectados.",
"qs.impact.card3": "Hábitos sostenibles que perduran.",
"qs.impact.card4": "Acciones ambientales medibles y redes.",
"qs.impact.quote": "Nos mostró la importancia de estar en contacto con la naturaleza en el día a día, su vínculo con la neurociencia y nos dejó consejos prácticos para disminuir el estrés. Fue una experiencia muy enriquecedora para todo el equipo.",
"qs.impact.author": "Jorge Yoyo Riva, CEO & Fundador de Tekudia.",

"qs.transparency.title": "Transparencia y credenciales",
"qs.transparency.text": "Personas, voluntarios y organizaciones comprometidas hacen posible nuestro trabajo. Juntos impulsamos proyectos que cuidan la naturaleza y fortalecen comunidades, y cada año nuestro impacto crece, transparente y disponible para todos.",
"qs.transparency.proj1": "Proyecto comunidad Mbya Guaraní de Yriapú",
"qs.transparency.proj2": "Biocorredor de árboles nativos en Vasa S.A.",
"qs.transparency.proj3": "Semillas que Educan",

"qs.testimonial.quote": "Hemos realizado una actividad de plantación de especies nativas desarrollando un biocorredor. Es una actividad muy linda y muy importante para la sustentabilidad ambiental, dado que estamos en un entorno industrial.",
"qs.testimonial.author": "Federico Colombo, Gerente de Planta VASA Los Cardales.",

// ============ TRADUCCIONES PÁGINA SÚMATE ============

// ====== ESPAÑOL (agregar dentro del objeto es: { ... }) ======

// Página Súmate - Hero
"sumate.hero.title": "Sumarse también es cuidar",
"sumate.hero.text1": "En Generar Eco trabajamos juntos para cuidar la naturaleza y fortalecer a las comunidades.",
"sumate.hero.text2": "Podés sumarte y ser parte de acciones con impacto real.",

// Página Súmate - Comunidad
"sumate.community.title": "En comunidad",
"sumate.community.text": "En Generar Eco creemos que cada aporte cuenta. Por eso proponemos distintas formas de involucrarse y transformar ese compromiso en acciones concretas que fortalecen el ambiente y a las comunidades.",

// Página Súmate - Cards
"sumate.card1.text": "SER VOLUNTARIO/A",
"sumate.card1.btn": "Participá",

"sumate.card2.text": "ESCUELAS QUE CUIDAN",
"sumate.card2.btn": "Conocé más",

"sumate.card3.text": "EMPRESAS CON IMPACTO",
"sumate.card3.btn": "Sumate",

// Página Súmate - Formulario (motivos específicos)
"sumate.form.reason.label": "Motivo de contacto:",
"sumate.form.reason.default": "Seleccioná un motivo",
"sumate.form.reason.opt1": "Donaciones",
"sumate.form.reason.opt2": "Voluntariado",
"sumate.form.reason.opt3": "Alianzas",
"sumate.form.reason.opt4": "Educación ambiental",
"sumate.form.reason.opt5": "Otro",
    
    
    // FOOTER
    "footer.desc": "Cuidamos la naturaleza, inspiramos personas.",
    "footer.copy": "© Áreas. 2025",
    "footer.home": "Inicio",
    "footer.prog": "Programas",
    "footer.dona": "Doná",
    "footer.app": "App",
    "footer.contact":"Contacto",
    "footer.volunteer":"Voluntariado",
    "footer.rights": "All Rights Reserved"
  },
  
  en: {
    // NAVBAR
    "nav.inicio": "Home",
    "nav.programas": "Programs",
    "nav.dona": "Donate",
    "nav.app": "App",
    "nav.blog": "BLOG",
    
    // DROPDOWN
    "drop.edu": "Environmental education",
    "drop.agri": "Business Development",
    "drop.ref": "Don Silvestre Nature Reserve",
    "drop.ali": "Sustainable Tourism",
    
    
    // Carousel
"car1.title": "Don Silvestre Nature Reserve",
"car1.text": "We care for the Atlantic Forest together with the community, learning and acting in a unique biological corridor.",
"car1.btn": "Join us",

"car2.title": "Environment that educates",
"car2.text": "An environmental education and neuroscience proposal that supports well-being and learning at different school stages.",
"car2.btn": "Book your talk",

"car3.title": "Team building sessions with purpose",
"car3.text": "Sustainable business development sessions that strengthen bonds, promote well-being and connect teams with nature, both in natural environments and at the office.",
"car3.btn": "See more",
    
    // ABOUT
    "about.title": "An environmental NGO<br />working for the restoration of life",
    "about.text": "We seek to inspire conscious habits, strengthen communities and restore ecosystems so that everyone —people, flora and fauna— can live better.",
    "about.btn": "Learn more",
    
    // STATS
    "stat1.num": "+5000",
    "stat1.title": "TREES PLANTED",
    "stat1.text": "Small seeds that are already part of a healthier future.",
    
    "stat2.num": "+40",
    "stat2.title": "PROJECTS COMPLETED",
    "stat2.text": "Sustainable actions that regenerate spaces and strengthen communities.",
    
    "stat3.num": "+450",
    "stat3.title": "PEOPLE AND ORGANIZATIONS",
    "stat3.text": "A growing network of allies committed to the environment.",
    
    // CARDS
    "card1.text": "Environmental education for schools and communities",
    "card1.btn": "Join in",
    
    "card2.text": "Regenerative agriculture and sustainable production",
    "card2.btn": "More information",
    
    "card3.text": "Reforestation with native species and ecological restoration",
    "card3.btn": "More information",
    
    "card4.text": "Social and environmental alliances for organizations",
    "card4.btn": "More information",
    
    // QR
    "qr.title": "Your space to act and care for the environment",
    "qr.text": "The Generar Eco app offers sustainable challenges, educational resources and opportunities to participate in environmental projects from wherever you are.",
    "qr.btn": "Explore the app",
    
    // JOIN
    "join.title": "Be part of the<br/> regenerative movement",
    "join.text": "You can participate as a volunteer, become a member, collaborate with reforestation projects or promote environmental actions in your community. Every gesture adds up and multiplies the impact.",
    "join.btn": "Join the movement",

    // ============ DONATE PAGE ============
    "dona.hero.title": "Your help plants life",
    "dona.hero.text": "Every contribution to our projects translates into native reforestation and ecological restoration actions. With your donation, you make it possible for more people, ecosystems and communities to regenerate the nature around us.",
    "dona.hero.btn": "I want to donate »",
    
    "dona.purpose.title": "What donations are used for",
    
    "dona.card1.title": "We plant native trees",
    "dona.card1.text": "To recover soils, protect biodiversity and regenerate ecosystems.",
    
    "dona.card2.title": "We promote workshops and environmental education",
    "dona.card2.text": "So that more people learn to care for nature in their daily lives.",
    
    "dona.card3.title": "We strengthen community projects",
    "dona.card3.text": "That unite volunteers, schools and organizations in real impact actions.",
    
    "dona.impact1.title": "Native trees<br>planted",
    "dona.impact1.text": "thanks to the support of people<br>and companies",
    
    "dona.impact2.title": "Communities<br>reached",
    "dona.impact2.text": "with environmental education programs",
    
    "dona.impact3.title": "People<br>mobilized",
    "dona.impact3.text": "in regenerative actions and volunteering",
    
    "dona.forms.title": "Ways to donate",
    
    "dona.monthly.title": "Monthly donation",
    "dona.monthly.text": "Support our projects all year long.",
    "dona.monthly.btn": "Donate »",
    
    "dona.once.title": "One-time donation",
    "dona.once.text": "Your contribution generates immediate impact.",
    "dona.once.btn": "Donate »",

    // En el objeto de traducciones inglés:
"form.title.line1": "Fill in your details and",
"form.title.line2": "we'll get back to you",
"form.title.line3": "as soon as possible",
"form.name.label": "Full Name:",
"form.name.placeholder": "Full Name",
"form.email.label": "Email:",
"form.email.placeholder": "Email",
"form.org.label": "Organization (Optional):",
"form.org.default": "Select an option",
"form.org.opt1": "Company",
"form.org.opt2": "NGO",
"form.org.opt3": "Educational Institution",
"form.org.opt4": "Individual",
"form.reason.label": "Reason for contact:",
"form.reason.default": "Select a reason",
"form.reason.label": "Reason for contact:",
"form.reason.default": "Select a reason",
"form.reason.opt1": "Environmental Education",
"form.reason.opt2": "Business Development",
"form.reason.opt3": "Ecotourism",
"form.reason.opt4": "Reforestation",
"form.reason.opt5": "Donations and Sponsorship",
"form.reason.opt6": "Marketing",
"form.reason.opt7": "Administration",
"form.message.label": "Message:",
"form.message.placeholder": "Write your message...",
"form.submit": "Send",

// Página App
"app.hero.title": "Care for nature in your daily life",
"app.hero.text": "Our app transforms your steps into real actions: every kilometer you walk adds up so companies commit to planting native trees with Generar Eco. You live your day-to-day, and at the same time you regenerate life.",
"app.hero.btn": "Learn about the app »",

"app.feature1.title": "Add steps and generate impact:",
"app.feature1.text": "Your recorded walks activate reforestation commitments with companies.",

"app.feature2.title": "Challenges and rewards:",
"app.feature2.text": "Participate in group goals that inspire and multiply impact.",

"app.feature3.title": "Real-time impact:",
"app.feature3.text": "Learn about the trees planted thanks to your participation.",

"app.feature4.title": "Community walking for the planet:",
"app.feature4.text": "Join people who also care for the earth from everyday life.",

"app.cta.text": "We unite technology, community and nature so that anyone can regenerate life while walking. We transform a daily habit into native trees planted where they are most needed.",
"app.cta.btn": "Start now »",

// ============================================
// INGLÉS (agregar dentro del objeto en: { ... })

// About Us Page
"qs.hero.title": "We regenerate life, TOGETHER",
"qs.hero.text1": "We are an Argentine NGO made up of professionals committed to the conservation and restoration of natural environments.",
"qs.hero.text2": "We promote sustainable habits that benefit both communities and ecosystems.",

"qs.how.title": "How we do it",
"qs.how.text": "We work together to care for nature and inspire people to reconnect with the environment, understand its value and take action to protect our planet:",

"qs.mission.title": "Our Mission",
"qs.mission.text": "Build a sustainable society where people and nature coexist in balance.",

"qs.vision.title": "Our Vision",
"qs.vision.text": "Connect people with nature to conserve and restore environments.",

"qs.values.title": "Our Values",
"qs.values.text": "Commitment, education, collaboration and action to generate concrete impact.",

"qs.history.title": "Our History",

"qs.bit.title": "A bit of history",
"qs.bit.text": "Generar Eco was born in 2016 to reconnect people with nature and inspire its care. Since then, we have developed innovative projects based on socio-environmental education, preservation, environmental restoration and ecotourism.",
"qs.bit.small": "The name Generar Eco reflects our essence: that every action resonates and multiplies.",

"qs.impact.title": "Impact",
"qs.impact.card1": "More participation and internal commitment",
"qs.impact.card2": "Sensitized and connected teams.",
"qs.impact.card3": "Sustainable habits that endure.",
"qs.impact.card4": "Measurable environmental actions and networks.",
"qs.impact.quote": "It showed us the importance of being in contact with nature on a daily basis, its link with neuroscience and gave us practical tips to reduce stress. It was a very enriching experience for the whole team.",
"qs.impact.author": "Jorge Yoyo Riva, CEO & Founder of Tekudia.",

"qs.transparency.title": "Transparency and credentials",
"qs.transparency.text": "Committed people, volunteers and organizations make our work possible. Together we drive projects that care for nature and strengthen communities, and each year our impact grows, transparent and available to all.",
"qs.transparency.proj1": "Mbya Guaraní community project in Yriapú",
"qs.transparency.proj2": "Native tree biocorridor at Vasa S.A.",
"qs.transparency.proj3": "Seeds that Educate",

"qs.testimonial.quote": "We carried out an activity to plant native species, developing a biocorridor. It is a very nice and very important activity for environmental sustainability, given that we are in an industrial environment.",
"qs.testimonial.author": "Federico Colombo, Plant Manager at VASA Los Cardales.",

//======= PAGINA SUMATE ==========
// ====== INGLÉS (agregar dentro del objeto en: { ... }) ======

// Join Us Page - Hero
"sumate.hero.title": "Joining is also caring",
"sumate.hero.text1": "At Generar Eco we work together to care for nature and strengthen communities.",
"sumate.hero.text2": "You can join and be part of actions with real impact.",

// Join Us Page - Community
"sumate.community.title": "In community",
"sumate.community.text": "At Generar Eco we believe that every contribution counts. That's why we propose different ways to get involved and transform that commitment into concrete actions that strengthen the environment and communities.",

// Join Us Page - Cards
"sumate.card1.text": "BECOME A VOLUNTEER",
"sumate.card1.btn": "Participate",

"sumate.card2.text": "CARING SCHOOLS",
"sumate.card2.btn": "Learn more",

"sumate.card3.text": "COMPANIES WITH IMPACT",
"sumate.card3.btn": "Join us",

// Join Us Page - Form (specific reasons)
"sumate.form.reason.label": "Reason for contact:",
"sumate.form.reason.default": "Select a reason",
"sumate.form.reason.opt1": "Donations",
"sumate.form.reason.opt2": "Volunteering",
"sumate.form.reason.opt3": "Partnerships",
"sumate.form.reason.opt4": "Environmental education",
"sumate.form.reason.opt5": "Other",





    

    // FOOTER
    "footer.desc": "Caring for nature, inspiring people.",
    "footer.copy": "© Areas. 2025",
    "footer.home": "Home",
    "footer.prog": "Programs",
    "footer.dona": "Donate",
    "footer.app": "App",
    "footer.contact":"Contact",
    "footer.volunteer":"Volunteering",
    "footer.rights": "All Rights Reserved"
  }
};

let idioma = localStorage.getItem('idioma') || 'es';

function t(key) {
  return lang[idioma][key] || key;
}

function cambiarIdioma(nuevoIdioma) {
  idioma = nuevoIdioma;
  localStorage.setItem('idioma', nuevoIdioma);
  actualizarPagina();
}

function actualizarPagina() {
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    const traduccion = t(key);
    
    // Si es INPUT o TEXTAREA, cambiar placeholder
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = traduccion;
    } 
    // Si es OPTION, cambiar textContent
    else if (el.tagName === 'OPTION') {
      el.textContent = traduccion;
    }
    // Para el resto, usar innerHTML
    else {
      el.innerHTML = traduccion;
    }
  });
  
  document.querySelectorAll('.btn-idioma').forEach(btn => {
    if (btn.dataset.lang === idioma) {
      btn.classList.add('activo');
    } else {
      btn.classList.remove('activo');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  actualizarPagina();
  
  document.querySelectorAll('.btn-idioma').forEach(btn => {
    btn.addEventListener('click', () => {
      cambiarIdioma(btn.dataset.lang);
    });
  });
});