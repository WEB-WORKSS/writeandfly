// Single source of truth for company facts. Every page, the metadata and
// the structured data read from here, so details stay identical site-wide.
// Leave a value empty ('') when it is not confirmed: the site then omits it.
export const SITE = {
  name: 'Writeandfly',
  tagline: 'Learn the Language. Pass the Exam. Explore the World.',
  positioning: 'Empowering global ambitions through language, education, and opportunity.',
  statement: 'Writeandfly helps students and professionals in developing countries choose the right destination, language and international exam, then follow a step-by-step plan with guidance from people who have already made the move.',
  domain: '',            // e.g. 'writeandfly.com' once confirmed. Enables canonical URLs, sitemap and Organization url.
  email: '',             // official address on the same domain as the website, e.g. hello@<domain>
  founded: 2026,
  stage: 'In development',
  status: 'In development · Early-access list open',
  legalName: '',         // registered entity name, once incorporated
  country: '',           // registration country
  address: '',
  founders: [
    { name: 'Abdulmalik Yusuf', title: 'Founder', linkedin: 'https://www.linkedin.com/in/abdulmalik-yusuf-b5112829b/', photo: '' }
  ],
  formEndpoint: '',      // POST URL for the contact form, e.g. an Amazon API Gateway or Lambda function URL
  legalUpdated: '24 November 2026'
};
