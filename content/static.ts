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

    // ─── Homepage: Hero (rotating slides) ───────────────────────────────────────
    hero: {
        scrollLabel: 'Skrolaj',
        slideAriaLabel: 'Prikaži slajd',
        slides: [
            {
                eyebrow: 'Volkswagen · Volvo · BMW · Audi',
                headingLine1: 'Vaš partner za',
                headingLine2: 'novi automobil.',
                description:
                    'Više od 12 premium brendova. Isporuka za 14 dana. Potpuna podrška od odabira do predaje ključeva.',
                ctaLabel: 'SAZNAJ VIŠE',
            },
            {
                eyebrow: 'Audi Premium',
                headingLine1: '#1 Audi',
                headingLine2: 'premium uvoznik.',
                description:
                    'Beskompromisna upravljivost i udobnost Audija osigurati će užitak u svakom trenutku vaše vožnje.',
                ctaLabel: 'KONTAKTIRAJTE NAS',
            },
            {
                eyebrow: 'BMW X3 M Sport',
                headingLine1: 'Svaka vožnja,',
                headingLine2: 'savršeno iskustvo.',
                description:
                    'Luksuzni BMW M paket opreme osigurava udobnost i snagu u svakom trenutku. Vaš novi automobil čeka vas.',
                ctaLabel: 'POGLEDAJ PONUDU',
            },
        ],
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
        priceOnRequest: 'Na upit',
        emptyState: 'Trenutno nema istaknutih vozila u ponudi.',
    },

    // ─── Cars page (Prodaja vozila) ─────────────────────────────────────────────
    carsPage: {
        eyebrow: 'Ponuda',
        title: 'Prodaja vozila',
        subtitle:
            'Pregledajte našu kompletnu ponudu premijum vozila. Svako vozilo je pažljivo odabrano i pripremljeno za vašu vožnju.',
        filterLabel: 'Filtriraj po brendu',
        allBrands: 'Sve',
        countPrefix: 'Prikazano',
        countSuffix: 'vozila',
        emptyState: 'Trenutno nema vozila u ovoj kategoriji.',
        sortLabel: 'Sortiraj po',
        sortNewest: 'Datum dodavanja: najnovije',
        sortPriceAsc: 'Cijena: niža prema višoj',
        sortPriceDesc: 'Cijena: viša prema nižoj',
        sortYearDesc: 'Godište: novije prema starijem',
        sortYearAsc: 'Godište: starije prema novijem',
    },

    // ─── Car detail page ─────────────────────────────────────────────────────────
    carDetail: {
        backCta: 'Natrag',
        basicInfoTitle: 'Osnovni podaci',
        yearLabel: 'Godište',
        mileageLabel: 'Kilometraža',
        fuelLabel: 'Gorivo',
        transmissionLabel: 'Mjenjač',
        priceLabel: 'Cijena',
        contactTitle: 'Kontakt',
        aboutTitle: 'O vozilu',
        videoTitle: 'Video pregled',
        videoPlaceholder: 'Video pregled uskoro dostupan.',
        technicalTitle: 'Tehnički podaci',
        engineLabel: 'Motor',
        powerLabel: 'Snaga',
        colorLabel: 'Boja',
        interiorLabel: 'Unutrašnjost',
        doorsLabel: 'Vrata',
        seatsLabel: 'Sjedala',
        registrationLabel: 'Registracija',
        vinLabel: 'VIN',
        equipmentTitle: 'Oprema',
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

    // ─── About page (O nama) ─────────────────────────────────────────────────────
    aboutPage: {
        eyebrow: 'O nama',
        headingLine1: 'Vaš pouzdani',
        headingLine2: 'partner za',
        headingLine3: 'premium vozila',
        locationLabel: 'Krk, Hrvatska',
        hoursLabel: 'Dostupni 7 dana u tjednu',

        stats: [
            { value: '18+', label: 'Godina iskustva' },
            { value: '500+', label: 'Vozila godišnje' },
            { value: '2000+', label: 'Zadovoljnih kupaca' },
            { value: '#1', label: 'Audi uvoznik' },
        ],

        introTitle: 'Osnivanje s ciljem — odličnost bez kompromisa',
        introParagraph1:
            'Adria Lider iz Krka ovlaštena je tvrtka za uvoz i prodaju vozila. Uvozimo osobna i N1 vozila. Prodaja rabljenih automobila, uvoz automobila i riješena kompletna papirologija — mi nudimo princip "ključ u ruke"!',
        introParagraph2:
            'Realiziramo financiranje kupnje automobila putem leasinga ili kredita. Prepustite brigu nabave nama, a mi vam dovozimo vaš auto iz snova do kućnog praga!',

        timelineEyebrow: 'Naša priča',
        timeline: [
            {
                year: '2005',
                title: 'Osnivanje',
                description:
                    'Adria Lider osnovan je na otoku Krku s vizijom dovođenja premium vozila bliže hrvatskim kupcima.',
            },
            {
                year: '2010',
                title: 'Ovlašteni uvoznik',
                description:
                    'Stječemo status ovlaštenog uvoznika, što nam omogućuje direktne uvozne kanale i povoljnije uvjete.',
            },
            {
                year: '2016',
                title: 'Ekspanzija ponude',
                description:
                    'Proširujemo ponudu na BMW, Volkswagen i Volvo uz već etabliranu Audi liniju vozila.',
            },
            {
                year: '2023',
                title: 'Regionalni lider',
                description:
                    'Postajemo #1 Audi uvoznik u regiji s više od 500 zadovoljnih kupaca godišnje.',
            },
        ],

        servicesEyebrow: 'Što nudimo',
        servicesTitle: 'Kompletna usluga od odabira do predaje ključeva',
        services: [
            {
                title: 'Uvoz vozila',
                description:
                    'Uvozimo osobna i N1 vozila iz cijele Europe. Kompletna papirologija — princip ključ u ruke.',
            },
            {
                title: 'Leasing & kredit',
                description:
                    'Realiziramo financiranje kupnje automobila putem leasinga ili kredita prema vašim mogućnostima.',
            },
            {
                title: 'Jamstvo kvalitete',
                description:
                    'Svako vozilo prolazi detaljnu tehničku provjeru. Prodajemo isključivo vozila bez skrivenih nedostataka.',
            },
            {
                title: 'Premium marke',
                description:
                    'Specijalizirani smo za Audi, BMW, Volkswagen i Volvo — vrhunske europske marke u jednom salonu.',
            },
        ],

        quote:
            'Prepustite brigu nabave nama, a mi vam dovozimo vaš auto iz snova do kućnog praga.',
        quoteAttribution: 'Adria Lider, od 2005.',

        ctaTitle: 'Pronađite vaše idealno vozilo',
        ctaDescription:
            'Pregledajte našu aktualnu ponudu ili nas kontaktirajte za individualni uvoz prema vašim željama.',
        ctaPrimary: 'Pogledaj vozila →',
        ctaSecondary: 'Kontaktirajte nas',
    },

    // ─── Homepage: Blog (Najnovije objave) ──────────────────────────────────────
    blog: {
        eyebrow: 'Blog',
        title: 'Najnovije objave',
        imagePlaceholderLarge: 'Slika objave',
        imagePlaceholderSmall: 'Slika',
        viewAllCta: 'Pogledaj sve objave →',
    },

    // ─── Blogs page (Najnovije objave) ───────────────────────────────────────────
    blogsPage: {
        subtitle:
            'Pratite naše najnovije isporuke, novosti iz svijeta premium automobila i savjete za kupnju vozila.',
        imagePlaceholder: 'Slika objave',
        emptyState: 'Trenutno nema objavljenih članaka.',
    },

    // ─── Blog post detail page ───────────────────────────────────────────────────
    blogDetail: {
        backCta: 'Natrag',
        galleryTitle: 'Galerija',
        ctaTitle: 'Zainteresirani ste za naša vozila?',
        ctaSubtitle:
            'Kontaktirajte nas i saznajte više o našoj ponudi premium automobila.',
        ctaButton: 'KONTAKTIRAJTE NAS',
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

    // ─── Contact page (Kontakt) ─────────────────────────────────────────────────
    contactPage: {
        subtitle:
            'Odgovaramo u roku 24 sata. Dostupni smo za sve upite — od pregleda ponude do potpuno personaliziranog uvoza.',
        successMessage:
            'Upit je uspješno poslan. Javit ćemo vam se u roku 24 sata.',

        tabStockLabel: 'Upit za vozilo iz ponude',
        tabStockDescription: 'Pretražite i upitajte o dostupnim vozilima',
        tabImportLabel: 'Upit za uvoz vozila',
        tabImportDescription: 'Uvezemo bilo koje vozilo prema vašim željama',

        personalInfoTitle: 'Vaši kontakt podaci',
        vehiclePrefsTitle: 'Kakvo vozilo tražite?',

        namePlaceholder: 'Vaše ime',
        phonePlaceholder: '+385 xx xxx xxxx',
        emailPlaceholder: 'vasa@email.com',
        brandLabel: 'Marka',
        bodyTypeLabel: 'Tip karoserije',
        yearLabel: 'Godište vozila',
        fuelLabel: 'Vrsta goriva',
        transmissionLabel: 'Mjenjač',
        budgetLabel: 'Proračun',
        notesLabel: 'Dodatne napomene',
        notesPlaceholder:
            'Opišite što vas zanima — boja, oprema, kilometi, specifičnosti...',

        sidebarDirectContactTitle: 'Direktan kontakt',
        sidebarPhoneLabel: 'Telefon',
        sidebarEmailLabel: 'E-mail',
        sidebarAddressLabel: 'Adresa',
        sidebarHoursTitle: 'Radno vrijeme',
        sidebarHoursWeekdays: 'Pon – Pet',
        sidebarHoursWeekdaysValue: '08:00 – 18:00',
        sidebarHoursSaturday: 'Subota',
        sidebarHoursSaturdayValue: '09:00 – 14:00',
        sidebarHoursSunday: 'Nedjelja',
        sidebarHoursSundayValue: 'Po dogovoru',
        sidebarWhyTitle: 'Zašto Auto Lider?',
        whyItem1: 'Princip ključ u ruke',
        whyItem2: 'Kompletna papirologija',
        whyItem3: 'Leasing i kredit',
        whyItem4: 'Dostava do kućnog praga',
        whyItem5: '18+ godina iskustva',
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
