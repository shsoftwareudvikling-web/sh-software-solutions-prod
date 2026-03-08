export type Lang = "da" | "en";

export const copy = {
  da: {
    nav: { services: "Ydelser", cases: "Cases", about: "Om os", contact: "Kontakt" },
    heroTitle: "det du forstiller dig , udvikler vi.",
    heroSub:
      "Vi bygger moderne softwareløsninger: webapps, API’er, dashboards, integrationer og automatisering — hurtigt, stabilt og skalerbart.",
    primaryCta: "Kontakt",
    secondaryCta: "Se ydelser",
    cards: [
      { title: "Skræddersyet udvikling", body: "Fra idé til produkt med fokus på kvalitet, sikkerhed og performance." },
      { title: "Hurtig levering", body: "MVP på uger — sprintbaseret udvikling med løbende demo og feedback." },
      { title: "Skalerbart fra start", body: "Arkitektur der kan vokse med din forretning og dine kunder." },
    ],
    servicesTitle: "Vores ydelser",
    services: [
      {
        title: "Softwareudvikling",
        body: "Vi udvikler skræddersyet software til virksomheder – fra webapplikationer og interne systemer til komplette digitale platforme. Har du en idé eller et problem der kan løses med software, kan vi bygge løsningen.",
      },
      {
        title: "Data & Integrationer",
        body: "Vi forbinder dine systemer og data, så din virksomhed arbejder smartere. Vi udvikler API'er, integrationer og dataløsninger der sikrer stabil kommunikation mellem platforme.",
      },
      {
        title: "Automatisering",
        body: "Gentagne manuelle opgaver kan automatiseres. Vi udvikler workflows og automatiserede processer der sparer tid, reducerer fejl og gør din virksomhed mere effektiv.",
      },
      {
        title: "IT Support",
        body: "Vi hjælper med tekniske udfordringer, systemopsætning og vedligeholdelse. Når teknologien driller, sørger vi for at få dine systemer hurtigt tilbage på sporet",
      },
    ],
    processTitle: "Sådan arbejder vi",
    process: [
      { title: "Afklaring", body: "Mål, scope, krav og forventninger." },
      { title: "Plan", body: "Teknisk plan og tydelige milepæle." },
      { title: "Udvikling", body: "Sprintbaseret, med løbende status." },
      { title: "Launch", body: "Test, performance og deployment." },
    ],
    bottomTitle: "Klar til at realisere din idé?",
    bottomCta: "Kontakt os i dag",
    casesTitle: "Cases",
    cases: [
      { title: "Dashboard / Analytics", body: "KPI-overblik med live-data og rollebaseret adgang." },
      { title: "Integration Layer", body: "Sammenkobling af systemer, webhooks og automatiseret datasync." },
      { title: "Workflow Automation", body: "Automatiser manuelle processer og spar tid i hverdagen." },
    ],
    aboutTitle: "Om os",
    aboutBody: "SH Software Solutions bygger robuste løsninger med fokus på performance, sikkerhed og en god udviklingsproces. Vi arbejder sprintbaseret og holder dig tæt på fremdriften, så du altid ved hvad næste skridt er.",
    companyInfo: {
      cvr: "CVR",
      cvrNumber: "45703622",
      phone: "Telefon",
      phoneNumber: "+45 71 61 49 79",
      email: "Email",
      emailAddress: "shsoftwareudvikling@gmail.com",
    },
    footer: {
      copyright: "© {year} SH Software Solutions",
      terms: "Vilkår og betingelser",
      privacy: "Privatlivspolitik",
      cookies: "Cookie-politik",
    },
    legal: {
      termsTitle: "Vilkår og betingelser",
      termsContent: `
        <h3>1. Generelt</h3>
        <p>Disse vilkår gælder for alle aftaler indgået mellem SH Software Solutions (CVR: 45703622) og kunden.</p>
        
        <h3>2. Ydelser</h3>
        <p>Vi leverer softwareudvikling, IT-support og relaterede services efter aftale. Leverancen sker efter godkendt projektplan eller løbende efter timebaseret aftale.</p>
        
        <h3>3. Betaling</h3>
        <p>Betaling sker efter faktura med 14 dages betalingsfrist. Ved forsinket betaling tillægges renter efter renteloven.</p>
        
        <h3>4. Ansvar</h3>
        <p>Vi påtager os ansvar for fejl og mangler efter almindelige principper, men er ikke ansvarlige for indirekte tab eller driftstab.</p>
        
        <h3>5. Ophavsret</h3>
        <p>Ophavsret til udviklet software tilfalder kunden efter fuld betaling, medmindre andet er aftalt.</p>
        
        <h3>6. Fortrolighed</h3>
        <p>Begge parter forpligter sig til at behandle alle oplysninger fortroligt.</p>
        
        <h3>7. Opsigelse</h3>
        <p>Løbende aftaler kan opsiges med 30 dages varsel. Projektbaseret arbejde følger den aftalte plan.</p>
        
        <h3>8. Tvister</h3>
        <p>Tvister afgøres efter dansk ret ved danske domstole.</p>
      `,
      privacyTitle: "Privatlivspolitik",
      privacyContent: `
        <h3>1. Dataansvarlig</h3>
        <p>SH Software Solutions<br/>CVR: 45703622<br/>Email: shsoftwareudvikling@gmail.com<br/>Telefon: +45 71 61 49 79</p>
        
        <h3>2. Hvilke data indsamler vi?</h3>
        <p>Vi indsamler kun de oplysninger, du selv giver os gennem kontaktformularen: navn, email og besked.</p>
        
        <h3>3. Formål</h3>
        <p>Vi bruger dine oplysninger udelukkende til at besvare din henvendelse og give dig den bedste service.</p>
        
        <h3>4. Opbevaring</h3>
        <p>Vi opbevarer dine data så længe det er nødvendigt for at behandle din henvendelse, herefter slettes de.</p>
        
        <h3>5. Videregivelse</h3>
        <p>Vi videregiver ikke dine data til tredjeparter, medmindre det er nødvendigt for at levere vores ydelser (f.eks. email-levering via Resend).</p>
        
        <h3>6. Dine rettigheder</h3>
        <p>Du har ret til indsigt, berigtigelse, sletning og dataportabilitet. Kontakt os på shsoftwareudvikling@gmail.com.</p>
        
        <h3>7. Klagemuligheder</h3>
        <p>Du kan klage til Datatilsynet, hvis du mener, vi ikke overholder reglerne.</p>
      `,
      cookiesTitle: "Cookie-politik",
      cookiesContent: `
        <h3>Hvad er cookies?</h3>
        <p>Cookies er små tekstfiler, der gemmes på din enhed, når du besøger en hjemmeside.</p>
        
        <h3>Bruger vi cookies?</h3>
        <p>Denne hjemmeside bruger ikke cookies til at spore dig eller indsamle personlige data. Vi bruger heller ikke tredjeparts analyse-værktøjer.</p>
        
        <h3>Fremtidige ændringer</h3>
        <p>Hvis vi i fremtiden vælger at bruge cookies, vil vi opdatere denne politik og indhente dit samtykke, hvor det er påkrævet.</p>
        
        <h3>Kontakt</h3>
        <p>Har du spørgsmål til vores cookie-politik, er du velkommen til at kontakte os på shsoftwareudvikling@gmail.com.</p>
      `,
    },
    modal: {
      title: "Kontakt SH",
      hint: "Skriv kort hvad du vil have bygget — så vender vi tilbage hurtigt.",
      placeholder: "Hej SH, jeg har brug for udvikling af ... ",
      send: "Send",
      sending: "Sender...",
      sent: "Sendt! Vi vender tilbage hurtigst muligt.",
      error: "Ups — kunne ikke sende. Prøv igen om lidt.",
      emailLabel: "Din email",
      emailInvalid: "Indtast en gyldig email-adresse.",
    },
  },
  en: {
    nav: { services: "Services", cases: "Cases", about: "About", contact: "Contact" },
    heroTitle: "If you can imagine it, we can build it.",
    heroSub:
      "We create modern software solutions: web apps, APIs, dashboards, integrations and automation — fast, reliable and scalable.",
    primaryCta: "Contact",
    secondaryCta: "View services",
    cards: [
      { title: "Custom development", body: "From idea to product with quality, security and performance in mind." },
      { title: "Fast delivery", body: "MVP in weeks — sprint-based development with demos and feedback." },
      { title: "Scalable by design", body: "Architecture that grows with your business and customers." },
    ],
    servicesTitle: "Our services",
    services: [
      { title: "Web development", body: "React/Next.js, APIs, dashboards and customer portals." },
      { title: "Backend & integrations", body: "Databases, third-party APIs, system integration and data flows." },
      { title: "Automation & workflows", body: "Streamline processes with automated workflows and tooling." },
      { title: "IT support", body: "Standard IT support when needed — fast and pragmatic." },
    ],
    processTitle: "How we work",
    process: [
      { title: "Discovery", body: "Goals, scope, requirements and expectations." },
      { title: "Plan", body: "Technical plan and clear milestones." },
      { title: "Build", body: "Sprint-based, with frequent updates." },
      { title: "Launch", body: "Testing, performance and deployment." },
    ],
    bottomTitle: "Ready to bring your idea to life?",
    bottomCta: "Contact us today",    casesTitle: "Cases",
    cases: [
      { title: "Dashboard / Analytics", body: "KPI overview with live data and role-based access." },
      { title: "Integration Layer", body: "System integration, webhooks and automated data sync." },
      { title: "Workflow Automation", body: "Automate manual processes and save time every day." },
    ],
    aboutTitle: "About us",
    aboutBody: "SH Software Solutions builds robust solutions with a focus on performance, security and a solid development process. We work in sprints and keep you close to the progress, so you always know what the next step is.",
    companyInfo: {
      cvr: "CVR",
      cvrNumber: "45703622",
      phone: "Phone",
      phoneNumber: "+45 71 61 49 79",
      email: "Email",
      emailAddress: "shsoftwareudvikling@gmail.com",
    },
    footer: {
      copyright: "© {year} SH Software Solutions",
      terms: "Terms and Conditions",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
    },
    legal: {
      termsTitle: "Terms and Conditions",
      termsContent: `
        <h3>1. General</h3>
        <p>These terms apply to all agreements between SH Software Solutions (CVR: 45703622) and the customer.</p>
        
        <h3>2. Services</h3>
        <p>We deliver software development, IT support and related services according to agreement. Delivery follows an approved project plan or on an hourly basis.</p>
        
        <h3>3. Payment</h3>
        <p>Payment is made according to invoice with 14 days payment terms. Late payments incur interest according to the Interest Act.</p>
        
        <h3>4. Liability</h3>
        <p>We assume responsibility for errors and defects according to general principles, but are not liable for indirect losses or loss of earnings.</p>
        
        <h3>5. Copyright</h3>
        <p>Copyright to developed software belongs to the customer after full payment, unless otherwise agreed.</p>
        
        <h3>6. Confidentiality</h3>
        <p>Both parties undertake to treat all information confidentially.</p>
        
        <h3>7. Termination</h3>
        <p>Ongoing agreements can be terminated with 30 days notice. Project-based work follows the agreed plan.</p>
        
        <h3>8. Disputes</h3>
        <p>Disputes are resolved under Danish law in Danish courts.</p>
      `,
      privacyTitle: "Privacy Policy",
      privacyContent: `
        <h3>1. Data Controller</h3>
        <p>SH Software Solutions<br/>CVR: 45703622<br/>Email: shsoftwareudvikling@gmail.com<br/>Phone: +45 71 61 49 79</p>
        
        <h3>2. What data do we collect?</h3>
        <p>We only collect the information you provide through the contact form: name, email and message.</p>
        
        <h3>3. Purpose</h3>
        <p>We use your information solely to respond to your inquiry and provide you with the best service.</p>
        
        <h3>4. Storage</h3>
        <p>We store your data as long as necessary to process your inquiry, after which it is deleted.</p>
        
        <h3>5. Disclosure</h3>
        <p>We do not share your data with third parties unless necessary to deliver our services (e.g., email delivery via Resend).</p>
        
        <h3>6. Your rights</h3>
        <p>You have the right to access, rectification, deletion and data portability. Contact us at shsoftwareudvikling@gmail.com.</p>
        
        <h3>7. Complaints</h3>
        <p>You can complain to the Data Protection Agency if you believe we are not complying with the rules.</p>
      `,
      cookiesTitle: "Cookie Policy",
      cookiesContent: `
        <h3>What are cookies?</h3>
        <p>Cookies are small text files stored on your device when you visit a website.</p>
        
        <h3>Do we use cookies?</h3>
        <p>This website does not use cookies to track you or collect personal data. We also don't use third-party analytics tools.</p>
        
        <h3>Future changes</h3>
        <p>If we choose to use cookies in the future, we will update this policy and obtain your consent where required.</p>
        
        <h3>Contact</h3>
        <p>If you have questions about our cookie policy, please contact us at shsoftwareudvikling@gmail.com.</p>
      `,
    },    modal: {
      title: "Contact SH",
      hint: "Describe what you want built — we’ll get back to you quickly.",
      placeholder: "Hi SH, I need development for ... ",
      send: "Send",
      sending: "Sending...",
      sent: "Sent! We’ll get back to you ASAP.",
      error: "Oops — could not send. Please try again soon.",
      emailLabel: "Your email",
      emailInvalid: "Enter a valid email address.",
    },
  },
} as const;

export function getText(lang: Lang) {
  return copy[lang];
}
