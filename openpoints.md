# openpoints: Vispaico Website Redesign

This document outlines the open points and future plans for the Vispaico website.

---
## COMPLETED ITEMS

- **Newsletter Subscription:**
  - **Status:** FIXED.
  - **Details:** The form was using a simulated API call. It has been updated to make a real API call to the backend, which now correctly sends an email to `newsletter@vispaico.com`.

- **Homepage & Contact Page Forms:**
  - **Status:** FIXED.
  - **Details:** The recipient email had a typo (`.co` instead of `.com`). This has been corrected to `hey@vispaico.com`.

- **Kickoff Page Product Name:**
  - **Status:** FIXED.
  - **Details:** The `affiliate-website` service name was missing from the display list. This has been added, and the correct product name now appears.

- **Full Site Redesign:**
  - **Status:** COMPLETE.
  - **Details:** The new "Unified Glass & Gradient" theme has been applied to all main pages, individual service pages, and quiz pages.

---
## NEXT STEPS: Internationalization (i18n) Plan

**IMPORTANT:** All work for the i18n implementation will be done on a dedicated `development` branch to ensure the stability of the live `main` branch.

This is a full rundown of the best modern technique to implement multi-language support (German and Spanish) for the website.

### 1. Strategy: Sub-path Routing (Recommended)

While subdomains (`de.vispaico.com`) are an option, the recommended and more modern approach for Next.js is **sub-path routing** (`vispaico.com/de`, `vispaico.com/es`).

*   **Why it's better:**
    *   **SEO:** It consolidates all your SEO authority onto a single domain (`vispaico.com`), which is generally preferred by search engines.
    *   **Simpler Management:** It's easier to manage deployments, SSL certificates, and analytics for one domain.
    *   **Excellent Next.js Support:** The Next.js App Router is built specifically for this approach, making it seamless to implement.

### 2. Implementation: Next.js i18n Routing

We will leverage Next.js's built-in internationalization features.

*   **Directory Structure:** We will move all pages from the `app/(main_site)` directory into a new dynamic route directory: `app/[lang]/(main_site)`. The `[lang]` part will automatically handle the language code from the URL (e.g., `en`, `de`, `es`).
*   **Middleware:** We will update `src/middleware.ts` to handle language detection and routing. It will look at a user's browser language (`Accept-Language` header) and automatically redirect them to their preferred language path (e.g., a German user visiting `vispaico.com` will be sent to `vispaico.com/de`). It will also handle fallback logic if a language is not supported.

### 3. Content Management: JSON Dictionaries

All text content will be managed in simple JSON files, separated by language.

*   **File Structure:** We will create a new `dictionaries` folder to hold our translations:
    ```
    /dictionaries
    ├── de.json
    ├── en.json
    └── es.json
    ```
*   **How it Works:** Each file will contain key-value pairs. For example, in `en.json`:
    ```json
    {
      "heroTitle": "Innovate with AI. Create with Impact.",
      "aboutUs": "About Us"
    }
    ```
    And in `de.json`:
    ```json
    {
      "heroTitle": "Innovation mit KI. Wirkungsvoll gestalten.",
      "aboutUs": "Über uns"
    }
    ```
*   **Loading Translations:** We will create a utility function that loads the correct JSON file based on the `lang` parameter from the URL. In our pages and components, we'll call this utility to get the dictionary and then use the keys to display the correct text (e.g., `dictionary.heroTitle`).

### 4. Language Switcher in Header

We will add a simple language switcher to the header.

*   **How it Works:** The switcher will display the available languages (EN, DE, ES). When a user clicks a new language, it will navigate them to the same page they are currently on, but with the new language prefix. For example, if you are on `/de/services`, clicking "Español" will take you to `/es/services`.

### 5. Translating Dynamic Content (Contracts & Invoices)

This is a critical part that requires backend changes.

*   **Contracts:** We will create language-specific versions of each contract template (e.g., `contract_affiliate-website_de.html`, `contract_affiliate-website_es.html`).
*   **API Update:** The form submission from the service pages will include the current language. Our backend API (`api/submit-form/route.ts`) will use this language to:
    1.  Load the correct translated contract template.
    2.  Translate the service name in the invoice and PayPal description. We will update the `serviceDetails` object to hold translations for each service name.
    3.  Translate static text on the invoice (like "Invoice", "Date Issued", "Total") using a small backend dictionary.
*   **Result:** The user will receive their contract and invoice PDFs completely in their chosen language.

This plan provides a complete, modern, and SEO-friendly solution for making Vispaico a multilingual platform.