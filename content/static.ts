// Central source of truth for all static UI text, organized by page / section.
// Keys here map directly to the t('static', 'key') translation calls in components.

export const staticText = {
    // ─── Shared: Brand ─────────────────────────────────────────────────────────
    brand: {
        name: 'Auto Lider',
    },

    // ─── Shared: Navigation labels (Header + MobileMenu) ──────────────────────
    nav: {
        pocetna: 'Početna',
        vozila: 'Vozila',
        oNama: 'O nama',
        blog: 'Blog',
        kontakt: 'Kontakt',
    },

    // ─── Shared: Header ────────────────────────────────────────────────────────
    header: {
        ariaLabel: 'Navigacija',
        ctaLabel: 'Kontaktiraj nas',
        openMenuAria: 'Otvori izbornik',
    },

    // ─── Shared: Footer ────────────────────────────────────────────────────────
    footer: {
        tagline:
            'Vaš premium partner za kupovinu novih automobila. Audi, BMW, Volkswagen, Volvo i više od 12 premium brendova.',
        navTitle: 'Navigacija',
        navProdajaVozila: 'Prodaja vozila',
        contactTitle: 'Kontakt',
        copyrightSuffix: 'Auto Lider. Sva prava pridržana.',
        location: 'Otok Krk, Hrvatska',
        facebookAria: 'Facebook',
        youtubeAria: 'YouTube',
    },

    // ─── Shared: Contact details (phone / email / address) ────────────────────
    contactInfo: {
        phone: '+385 98 932 2969',
        phoneHref: 'tel:+385989322969',
        email: 'info@autolider.com.hr',
        emailHref: 'mailto:info@autolider.com.hr',
        address: 'Otok Krk, Hrvatska',
    },

    // ─── Shared: Form fields & inquiry actions ─────────────────────────────────
    forms: {
        namePlaceholder: 'Ime i prezime *',
        emailPlaceholder: 'E-mail adresa *',
        phonePlaceholder: 'Broj telefona *',
        submitCta: 'POŠALJI UPIT →',
        sendingCta: 'SLANJE...',
    },

    // ─── Shared: Carousel / list navigation arrows ─────────────────────────────
    navArrows: {
        prevAria: 'Prethodno',
        nextAria: 'Sljedeće',
    },

    // ─── Shared: Offer / contact CTAs (Hero, About) ────────────────────────────
    actions: {
        viewOffer: 'POGLEDAJ PONUDU',
        contactUs: 'KONTAKTIRAJ NAS',
    },

    // ─── Homepage: Hero ─────────────────────────────────────────────────────────
    hero: {
        eyebrow: 'Auto Lider · Otok Krk',
        headingLine1: 'Svaka vožnja,',
        headingLine2: 'savršeno iskustvo.',
        description:
            'Premium vozila s garancijom kvalitete. Pronađite savršen automobil u našoj ponudi — od uvoza do isporuke.',
        scrollLabel: 'Skrolaj',
    },

    // ─── Homepage: Stats bar + brands strip ────────────────────────────────────
    stats: {
        carsSold: 'Prodanih automobila',
        brandsCount: 'Premium brendova',
        avgDelivery: 'Prosječna isporuka (dana)',
        brandsStripLabel: 'Brendovi u ponudi',
    },

    // ─── Homepage: Featured cars (Prodaja vozila) ──────────────────────────────
    carSell: {
        eyebrow: 'Ponuda',
        title: 'Vozila u ponudi',
        viewAllCta: 'Pogledaj sva vozila →',
        imagePlaceholder: 'Slika vozila',
        badgeNew: 'Novo',
        badgeAvailable: 'Dostupno',
        priceOnRequest: 'Od upita',
        emptyState: 'Trenutno nema istaknutih vozila u ponudi.',
    },

    // ─── Homepage: About (O nama) ───────────────────────────────────────────────
    about: {
        imagePlaceholder: 'Slika salona',
        eyebrow: 'O nama',
        title: 'Vaš pouzdani partner za premium vozila',
        paragraph1:
            'Auto Lider osnovan je s jednim ciljem — pružiti klijentima na Otoku Krku i šire pristup vrhunskim europskim automobilima bez kompromisa u kvaliteti ili usluzi.',
        paragraph2:
            'Kao ovlašteni uvoznik premium brendova, svako vozilo prolazi kroz rigoroznu provjeru prije isporuke. Naš tim brine o svakom detalju — od prvog upita do predaje ključeva.',
        badgeNumber: '#1',
        badgeText: 'Audi uvoznik na Otoku Krku',
    },

    // ─── Homepage: Blog (Najnovije objave) ──────────────────────────────────────
    blog: {
        eyebrow: 'Blog',
        title: 'Najnovije objave',
        imagePlaceholderLarge: 'Slika objave',
        imagePlaceholderSmall: 'Slika',
        viewAllCta: 'Pogledaj sve objave →',
    },

    // ─── Homepage: Reviews (Zadovoljne stranke) ─────────────────────────────────
    reviews: {
        eyebrow: 'Recenzije',
        title: 'Zadovoljne stranke',
    },

    // ─── Homepage: Contact CTA ───────────────────────────────────────────────────
    contact: {
        eyebrow: 'Kontakt',
        title: 'Pronađimo zajedno vaš savršeni automobil',
        description:
            'Kontaktirajte nas za upit o dobavljivosti željenog modela, cijeni ili uvjetima financiranja. Odgovaramo u roku 24 sata.',
        successMessage:
            'Upit je uspješno poslan. Javit ćemo vam se u roku 24 sata.',
        messagePlaceholder: 'Koji automobil vas zanima?',
    },

    // ─── Shared: Car inquiry modal ──────────────────────────────────────────────
    carInquiry: {
        messagePlaceholder: 'Poruka',
    },

    // ─── Shared: Verify Email Modal ───────────────────────────────────────────
    verifyEmail: {
        title: 'Please verify your email',
        message: 'Verify your email address to unlock all features.',
        bookCta: 'Book a Trip',
        profileCta: 'Go to Profile',
    },
} as const;

export type StaticTextKey = keyof typeof staticText;
