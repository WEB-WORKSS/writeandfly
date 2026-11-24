# Writeandfly website

Static multi-page site for Writeandfly. No framework and no dependencies, just Node 18+.

```
node build.mjs            # dist/    clean URLs (/product/, /demo/ ...) for deployment
node build.mjs --preview  # preview/ flat files (product.html) for the hosted preview
node serve.mjs            # serves dist/ at http://localhost:4173 (unknown paths get the 404 page)
```

## Where things live
- `src/site.config.mjs`: every company fact (name, domain, email, founder, stage, form endpoint). Change it here and it updates on every page, in the metadata and in the JSON-LD.
- `src/pages.mjs`: all page content, the feature list with each feature's status, segments, industry figures and AWS services.
- `src/assets/site.css`, `site.js` (menu and contact form), `demo.js` (pathway finder on sample data).

## Routes
`/`, `/product`, `/how-it-works`, `/solutions` (#students, #healthcare, #skilled-professionals, #exam-candidates, #mentors), `/technology`, `/security`, `/pricing`, `/about` (#team), `/demo` (#u101, #u102, #u103), `/contact` (`?plan=explorer|plus|mentor|partners`), `/privacy`, `/terms`, and `404.html` for any other path.

## Deploying on AWS (S3 + CloudFront)
1. Upload `dist/` to an S3 bucket and put CloudFront in front of it (Origin Access Control, HTTPS, your domain's ACM certificate).
2. Add a CloudFront Function that rewrites `/product` and `/product/` to `/product/index.html`, and set the custom error response for 403/404 to `/404.html` with status 404.
3. The contact form posts JSON to `formEndpoint` in `site.config.mjs`. A Lambda function URL or API Gateway route that writes to DynamoDB and/or sends an email through SES works. **Until this is set, the form shows an error and points people to the founder's LinkedIn.**

**Vercel:** `vercel.json` runs `node build.mjs` and serves `dist/`, with clean URLs and the 404 page. No settings needed in the Vercel dashboard (leave Framework Preset as "Other").

Amplify Hosting and Netlify serve `dist/` as-is.

## Before you publish: facts to fill in or confirm
These were blank in the brief, so the site leaves them out instead of inventing them.
- **Domain** (`domain`): turns on canonical URLs, `sitemap.xml`, og:url and the Organization `url`/`logo`.
- **Official email on that domain** (`email`): shown on the contact page, footer and legal pages. AWS Activate checks that it matches the website domain.
- **Founder photo** (optional): initials are shown for now. Also confirm the title "Founder".
- **Legal entity name, registration country and address**: they appear in the footer copyright, About facts and legal pages once set.
- **Feature status**: the site marks the opportunity finder, exam explorer, pathway discovery, roadmaps and country comparison as "In development", and language prep, community and mentorship as "Planned". Correct this in `FEATURES` if it is wrong.
- **Pricing**: $0 Explorer, $8/month Pathway Plus, mentor-set session fees and custom Partner pricing are **proposed** prices I chose. They are labelled as proposed on the site.
- **AWS services**: all are labelled "Proposed". Move a service to "Deployed and tested" only after it is running.
- **Team size**: left off the site (the brief's default of 2 to 10 needs verifying).
- **Legal review**: the Privacy Policy and Terms are a sensible starting point, not legal advice. Have them reviewed, especially governing law, the 24-month retention period and the minimum age of 16.
- **Industry figures** (home page) were checked on 24 November 2026:
  - 281 million international migrants (2020): IOM World Migration Report 2024, via UN News, https://news.un.org/en/story/2024/05/1149426
  - 6.9 million internationally mobile students (2022): UNESCO data, via Times Higher Education, https://www.timeshighereducation.com/news/global-international-student-numbers-triple-over-two-decades
- **Demo data**: country scores, exam suggestions and routes in `demo.js` are simplified sample data, labelled as such on every panel. Have someone review them before showing the demo to partners.
