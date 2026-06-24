// Central source of truth for all static UI text, organized by page / section.
// Keys here map directly to the t('static', 'key') translation calls in components.

export const staticText = {
    // ─── Shared: Navigation ──────────────────────────────────────────────────
    nav: {
        bookTrip:   'Book a Trip',
        login:      'Log In',
        logout:     'Log Out',
        myTrips:    'My Trips',
        myProfile:  'My Profile',
        adminPanel: 'Admin Panel',
        account:    'Account',
        openMenu:   'Open menu',
    },

    // ─── Shared: Generic Actions ──────────────────────────────────────────────
    actions: {
        contactUs: 'Contact Us',
        subscribe: 'Subscribe',
    },

    // ─── Shared: Footer ───────────────────────────────────────────────────────
    footer: {
        // CTA card
        contact_H: 'Ready to set sail?',
        contact_P: "Get in touch and we'll help you plan the perfect trip.",

        // Newsletter
        subscribeTitle: 'Stay Updated',
        subscribe_P: 'Subscribe for the latest offers and news.',
        subscribe_Hint: 'Your email address',
        subscribe_SuccessTitle: "You're subscribed!",
        subscribe_SuccessMsg:
            "Thanks for signing up. We'll keep you in the loop.",
        subscribe_SuccessCta: 'Close',

        // Columns
        legalTitle: 'Legal',
        linksTitle: 'Quick Links',

        // Legal links
        legal_1: 'Terms of Service',
        legal_2: 'Privacy Policy',
        legal_3: 'GDPR',
        legal_4: 'Cancellation & Refunds',

        // Quick links
        links_1: 'Excursions',
        links_2: 'Calendar',
        links_3: 'About',
        links_4: 'Contact',

        // Bottom bar
        copyright: '© 2025 KrkBoat. All rights reserved.',
        cookies: 'Cookie Settings',
    },

    // ─── Shared: Verify Email Modal ───────────────────────────────────────────
    verifyEmail: {
        title: 'Please verify your email',
        message: 'Verify your email address to unlock all features.',
        bookCta: 'Book a Trip',
        profileCta: 'Go to Profile',
    },

    // ─── Page: Home ───────────────────────────────────────────────────────────
    home: {
        hero_H: 'Experience the Adriatic',
        hero_P: 'Unforgettable boat trips from the island of Krk.',
        hero_Cta: 'See Excursions',
    },

    // ─── Page: Excursions ─────────────────────────────────────────────────────
    excursions: {
        title: 'Our Excursions',
        intro_P: 'Choose from a range of day trips and private charters.',
    },

    // ─── Page: Calendar ───────────────────────────────────────────────────────
    calendar: {
        title: 'Availability Calendar',
        noSlots_P: 'No available slots for this date.',
        book_Cta: 'Book This Date',
    },

    // ─── Page: About ──────────────────────────────────────────────────────────
    about: {
        title: 'About Us',
        intro_P:
            'We are a family-run boat tour company based on the island of Krk.',
    },

    // ─── Page: Contact ────────────────────────────────────────────────────────
    contact: {
        title: 'Get in Touch',
        intro_P: 'Have a question or want to book a private trip? Reach out.',
        name_Label: 'Your Name',
        email_Label: 'Email Address',
        message_Label: 'Message',
        submit_Cta: 'Send Message',
        success_Title: 'Message sent!',
        success_P: "We'll get back to you as soon as possible.",
    },

    // ─── Page: Legal ──────────────────────────────────────────────────────────
    legal: {
        title: 'Terms of Service',
    },

    // ─── Page: Privacy ────────────────────────────────────────────────────────
    privacy: {
        title: 'Privacy Policy',
    },

    // ─── Page: GDPR ───────────────────────────────────────────────────────────
    gdpr: {
        title: 'GDPR',
    },
} as const;

export type StaticTextKey = keyof typeof staticText;
