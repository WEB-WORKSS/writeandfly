// Page content for the Writeandfly website. Facts come from site.config.mjs.
// Feature status vocabulary: "In development" (being built now) and "Planned" (roadmap).
const I = {
  compass: '<path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
  exam: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>',
  lang: '<path d="M4 5h9M8.5 3v2M6 5c1 4 4 7 7 8M11 5c-1 4-4 7-7 8"/><path d="m13 21 4-9 4 9M14.5 18h5"/>',
  path: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/>',
  people: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.5c2.6 0 4.5 1.8 5 4.5"/>',
  road: '<path d="M4 6h10M4 12h16M4 18h7"/><circle cx="18" cy="6" r="2"/><circle cx="15" cy="18" r="2"/>',
  badge: '<path d="M12 3 4.5 6v5.5c0 4.5 3.2 8 7.5 9.5 4.3-1.5 7.5-5 7.5-9.5V6z"/><path d="m8.8 12 2.3 2.3 4.3-4.6"/>',
  scale: '<path d="M12 4v16M5 20h14M4 8h16M7 8l-3 6a3 3 0 0 0 6 0zM17 8l-3 6a3 3 0 0 0 6 0z"/>'
};
const icon = k => `<span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[k]}</svg></span>`;
const chip = s => `<span class="chip ${s === 'In development' ? 'dev' : 'plan'}">${s}</span>`;
const plane = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 12.5 22 4l-6 16-4-6.2z"/></svg>';

// Industry figures (sources linked on the page). They describe global mobility, not Writeandfly results.
const FIGURES = [
  { num: '281 million', text: 'people were living outside their country of birth in 2020, about 3.6% of the world\'s population.', src: 'IOM World Migration Report 2024, via UN News (May 2024)', href: 'https://news.un.org/en/story/2024/05/1149426' },
  { num: '6.9 million', text: 'internationally mobile students in 2022, up from 2.1 million in 2000, according to UNESCO data.', src: 'Times Higher Education, reporting UNESCO figures', href: 'https://www.timeshighereducation.com/news/global-international-student-numbers-triple-over-two-decades' }
];

const FEATURES = [
  { id: 'opportunity-finder', icon: 'compass', name: 'AI Global Opportunity Finder', status: 'In development',
    what: 'Ranks destination countries against your qualifications, field, budget, languages, goal and timeline, and shows the reason behind each score.',
    benefit: 'You start with a short list that fits your situation instead of reading about every country.',
    step: 'Step 2: Match', viz: 'bars' },
  { id: 'exam-explorer', icon: 'exam', name: 'International Examination Explorer', status: 'In development',
    what: 'Explains which exam each goal usually asks for (IELTS, TOEFL iBT, PTE Academic, Duolingo English Test, OET, TEF Canada, TCF, DELF/DALF, Goethe-Zertifikat, TestDaF, JLPT) and how their score scales compare.',
    benefit: 'You avoid paying for the wrong test and know the score to aim for before you book.',
    step: 'Step 3: Choose', viz: 'exams' },
  { id: 'language-prep', icon: 'lang', name: 'AI Language Learning & Exam Preparation', status: 'Planned',
    what: 'Daily practice in the language your pathway needs, plus writing and speaking practice in the format of your chosen exam, with feedback against the official criteria.',
    benefit: 'Study time goes into the skills your exam actually tests.',
    step: 'Step 4: Prepare', viz: 'writing' },
  { id: 'pathways', icon: 'path', name: 'Global Career & Immigration Pathway Discovery', status: 'In development',
    what: 'Shows the common routes for your profile, such as study then work, skilled work or qualification recognition, with links to the official government pages for each one.',
    benefit: 'You see realistic options and where to verify them, without paying an agent just to find out what exists.',
    step: 'Step 2: Match', viz: 'routes' },
  { id: 'community', icon: 'people', name: 'Community of Migrants and Exam Candidates', status: 'Planned',
    what: 'Discussion spaces organised by destination, exam and profession, where people who have taken the exam or made the move answer questions.',
    benefit: 'Practical answers from people a step or two ahead of you.',
    step: 'Steps 4 and 5', viz: 'thread' },
  { id: 'roadmaps', icon: 'road', name: 'Personalised Relocation Roadmaps', status: 'In development',
    what: 'Turns your chosen pathway into a month-by-month plan: language level, exam date, applications, documents, funds and arrival.',
    benefit: 'One plan with dates replaces scattered notes and tabs.',
    step: 'Step 5: Plan', viz: 'timeline' },
  { id: 'mentors', icon: 'badge', name: 'Verified Mentorship Marketplace', status: 'Planned',
    what: 'One-to-one sessions with mentors whose identity, location and experience are checked before they can take bookings.',
    benefit: 'Advice from someone who has done the same move, with a clear record of who they are.',
    step: 'Step 5: Plan', viz: 'mentor' },
  { id: 'compare', icon: 'scale', name: 'Country Comparison & Opportunity Tracking', status: 'In development',
    what: 'Puts your shortlisted countries side by side on language, exam, cost level and routes, and lets you save options to follow up later. Alerts when a saved source page changes are planned.',
    benefit: 'Trade-offs are visible in one table, so the decision is easier to make and explain to family.',
    step: 'Step 3: Choose', viz: 'compare' }
];

const viz = k => {
  const tag = '<span class="demo-tag">Demo · Sample data</span>';
  switch (k) {
    case 'bars': return `<div class="viz" aria-label="Sample ranking"><div class="viz-head"><span>Top matches · DEMO-U101</span>${tag}</div>
      ${[['Germany', 85], ['Canada', 77], ['Australia', 73], ['Netherlands', 73]].map(([n, v]) => `<div class="bar-row"><span>${n}</span><span class="bar"><i style="width:${v}%"></i></span><span class="v">${v}</span></div>`).join('')}
      <p class="small muted">Fit score out of 100: field demand, budget, language and goal.</p></div>`;
    case 'exams': return `<div class="viz"><div class="viz-head"><span>Exam explorer</span>${tag}</div><div class="scroll"><table class="mini-table"><thead><tr><th>Exam</th><th>Language</th><th>Score scale</th></tr></thead><tbody>
      <tr><td>IELTS</td><td>English</td><td>Band 0 to 9</td></tr><tr><td>TOEFL iBT</td><td>English</td><td>0 to 120</td></tr><tr><td>PTE Academic</td><td>English</td><td>10 to 90</td></tr><tr><td>Goethe-Zertifikat</td><td>German</td><td>CEFR A1 to C2</td></tr><tr><td>JLPT</td><td>Japanese</td><td>N5 to N1</td></tr></tbody></table></div></div>`;
    case 'writing': return `<div class="viz"><div class="viz-head"><span>Writing practice · IELTS Task 2 format</span>${tag}</div>
      <div class="msg me"><b>Your paragraph (sample)</b>Many students choose to study abroad because it gives them access to programmes that are not offered at home.</div>
      <div class="msg"><b>Feedback (sample, not live AI)</b>Clear position. To reach a higher Coherence and Cohesion score, add one specific example and link it back to your main point.</div>
      <div class="bar-row"><span>Task response</span><span class="bar"><i style="width:70%"></i></span><span class="v">7.0</span></div></div>`;
    case 'routes': return `<div class="viz"><div class="viz-head"><span>Pathways · Engineering · Germany</span>${tag}</div>
      <ul class="list-clean"><li><span><b>Study, then post-study job search</b><span class="small muted" style="display:block">Common for applicants with a bachelor's degree</span></span></li><li><span><b>Skilled work with a recognised qualification</b><span class="small muted" style="display:block">Needs qualification recognition first</span></span></li></ul>
      <p class="small muted">Each route links to the official government page to check current rules.</p></div>`;
    case 'thread': return `<div class="viz"><div class="viz-head"><span>Community · OET for nurses</span>${tag}</div><div class="thread">
      <div class="msg me"><b>DEMO-U102 asked</b>How long did you prepare for the OET writing test?</div>
      <div class="msg"><b>DEMO-M221 · fictional mentor</b>About ten weeks, writing one referral letter every two days and comparing it with sample answers.</div></div></div>`;
    case 'timeline': return `<div class="viz"><div class="viz-head"><span>Roadmap · 15 months</span>${tag}</div><ol class="timeline">
      <li><span class="t">Month 0</span><span class="dot"></span><span>Check official requirements and save the sources</span></li>
      <li><span class="t">Month 1</span><span class="dot"></span><span>Start German lessons, aim for A2 by month 4</span></li>
      <li><span class="t">Month 8</span><span class="dot"></span><span>Sit TestDaF or Goethe-Zertifikat</span></li>
      <li><span class="t">Month 15</span><span class="dot"></span><span>Apply for your visa and plan arrival</span></li></ol></div>`;
    case 'mentor': return `<div class="viz"><div class="viz-head"><span>Mentor match</span>${tag}</div>
      <div class="mentor"><span class="avatar" aria-hidden="true">KA</span><span><b>Mechanical engineer, Ghana to Germany</b><span class="small muted" style="display:block">DEMO-M201 · fictional profile · identity and experience check: planned</span></span></div>
      <div class="mentor"><span class="avatar" aria-hidden="true">RM</span><span><b>Registered nurse in the UK</b><span class="small muted" style="display:block">DEMO-M221 · fictional profile</span></span></div></div>`;
    case 'compare': return `<div class="viz"><div class="viz-head"><span>Compare · DEMO-U101</span>${tag}</div><div class="scroll"><table class="mini-table"><thead><tr><th></th><th>Germany</th><th>Canada</th><th>Australia</th></tr></thead><tbody>
      <tr><td>New language</td><td>German</td><td>No</td><td>No</td></tr><tr><td>Cost level</td><td>Lower</td><td>Higher</td><td>Highest</td></tr><tr><td>Fit</td><td>85</td><td>77</td><td>73</td></tr></tbody></table></div></div>`;
  }
};

const SEGMENTS = [
  { id: 'students', name: 'Students planning to study abroad', who: 'Secondary school leavers and graduates looking at bachelor\'s and master\'s programmes overseas.', problem: 'Choosing between countries, tuition levels, language of instruction and entrance exams with advice that is often second-hand or sales-driven.', use: 'Build a profile, compare destinations by cost level and language, pick the exam the programme asks for, and follow a timed application roadmap.', benefit: 'A shortlist and a plan they can show their family, built on official sources.' },
  { id: 'healthcare', name: 'Nurses and healthcare workers', who: 'Nurses, midwives, doctors and allied health staff aiming for registration abroad.', problem: 'Registration steps, exams such as OET or IELTS, and score requirements differ by country and change over time.', use: 'Compare registration-friendly destinations, see the exam each regulator commonly accepts, and talk to mentors already working there.', benefit: 'Fewer wasted exam attempts and a clearer route to registration.' },
  { id: 'skilled-professionals', name: 'Engineers, IT and skilled professionals', who: 'Professionals and tradespeople with experience who want to work abroad.', problem: 'Knowing which countries need their skills, whether to learn a new language, and how qualification recognition works.', use: 'Rank countries by demand for their field, weigh a language like German or Japanese against English-speaking options, and plan recognition steps.', benefit: 'Realistic options matched to their field and timeline.' },
  { id: 'exam-candidates', name: 'Language learners and exam candidates', who: 'Anyone preparing for an international language exam, whatever their final destination.', problem: 'Generic courses do not target the exam format or the score their goal needs.', use: 'Find the right exam and target score, then practise in the exam\'s own format (planned) and ask candidates who sat it recently.', benefit: 'Preparation focused on the score that matters.' }
];

const STEPS = [
  ['Build your profile', 'Education, field, work experience, languages, budget range, goal and when you want to move. Takes about five minutes.'],
  ['Get matched', 'Writeandfly ranks destination countries and the usual pathways for your profile, and shows why each one scored as it did.'],
  ['Compare and choose', 'Look at your top countries side by side on language, exam, cost level and routes, then pick one to plan for.'],
  ['Prepare', 'Learn the language and prepare for the exam your pathway needs, with a target score and practice in the exam format.'],
  ['Plan and move', 'Follow a month-by-month roadmap and book time with mentors who have made the same move.']
];

const cta = (url, h = 'Start your pathway', p = 'Join the early-access list and we will invite you as features open, starting with the opportunity finder and roadmaps.') => `<section class="band sea"><div class="wrap cta-band"><div class="stack-y"><h2>${h}</h2><p class="lede">${p}</p></div><div class="btn-row"><a class="btn primary" href="${url('/contact')}">Request early access</a><a class="btn ghost" href="${url('/demo')}">Explore the live demo</a></div></div></section>`;

const pageHero = (kicker, h, p) => `<section class="page-hero"><div class="wrap"><span class="pill">${kicker}</span><h1>${h}</h1><p class="lede">${p}</p></div></section>`;

const comparisonTable = () => `<div class="scroll"><table class="table stack"><thead><tr><th>Capability</th><th>Forums and social media</th><th>Paid agents and consultants</th><th>Official websites on their own</th><th class="us">Writeandfly (in development)</th></tr></thead><tbody>
<tr><td>Based on your own profile</td><td class="no">No</td><td class="part">Partly</td><td class="no">No</td><td class="us yes">Yes</td></tr>
<tr><td>Compares several countries side by side</td><td class="no">No</td><td class="part">Usually only partner countries</td><td class="no">One country per site</td><td class="us yes">Yes</td></tr>
<tr><td>Tells you which exam and score to aim for</td><td class="part">Mixed advice</td><td class="part">Partly</td><td class="part">Scattered across pages</td><td class="us yes">Yes, with sources</td></tr>
<tr><td>Language learning linked to your goal</td><td class="no">No</td><td class="no">No</td><td class="no">No</td><td class="us part">Planned</td></tr>
<tr><td>Month-by-month plan</td><td class="no">No</td><td class="part">Sometimes</td><td class="no">No</td><td class="us yes">Yes</td></tr>
<tr><td>Links to the official source for each step</td><td class="no">Rarely</td><td class="part">Sometimes</td><td class="yes">Yes</td><td class="us yes">Yes</td></tr>
<tr><td>Talk to someone who made the move</td><td class="part">Unverified</td><td class="part">Staff, not peers</td><td class="no">No</td><td class="us part">Planned, verified mentors</td></tr>
<tr><td>Cost to start</td><td class="yes">Free</td><td class="no">Often high fees</td><td class="yes">Free</td><td class="us yes">Free plan proposed</td></tr>
</tbody></table></div>`;

const aiSection = url => `<section class="band" id="ai"><div class="wrap"><div class="sec-head"><span class="kicker">How the AI is used</span><h2>AI that explains its reasoning and stays inside the facts</h2><p class="lede">Writeandfly uses AI to match, explain and give practice feedback. Scores are calculated from your profile and our source-linked data first. The AI then explains them in plain language.</p></div>
<div class="ai-grid"><div class="card"><h3>What the AI does</h3><ul class="list-clean"><li>Explains why a country or pathway scored as it did</li><li>Turns a chosen pathway into a step-by-step plan</li><li>Gives feedback on practice writing and speaking against the exam's published criteria (planned)</li><li>Answers questions using our reviewed knowledge base, with the source shown</li></ul></div>
<div class="card"><h3>What it does not do</h3><ul class="list-clean no"><li>Predict whether you will get a visa, job or admission</li><li>Fill in details about you that you did not give</li><li>Replace official government, regulator or university information</li><li>Give legal immigration advice or act as your agent</li></ul></div>
<div class="chat" aria-label="Sample exchange"><div class="viz-head"><span>Sample exchange</span><span class="demo-tag">Demo · Sample data</span></div>
<div class="msg me"><b>DEMO-U101</b>Why is Germany ranked above Canada for me?</div>
<div class="msg"><b>Writeandfly assistant · sample</b>Germany scores 85 and Canada 77. Germany's budget fit is much stronger for a low budget, and engineering demand is high. The trade-off is that you would need to learn German to about B2 within 15 months.</div>
<a class="text-link" href="${url('/demo')}">Try it in the demo</a></div></div></div></section>`;

const SAFEGUARDS = [
  ['Every fact has a source', 'Requirements and routes link to the official page they came from, with the date it was last checked.'],
  ['You own your profile', 'Profiles are used to make your recommendations, are never sold, and can be deleted on request.'],
  ['Clear about uncertainty', 'Rules change. Recommendations say when information is general and must be confirmed with the official body.'],
  ['Mentors are checked', 'Mentors will go through identity and experience checks before they can take bookings.'],
  ['People stay in charge', 'Writeandfly suggests options. You decide, and nothing is submitted to any authority on your behalf.']
];

// ---------------------------------------------------------------- pages
const home = ({ url, SITE }) => ({
  route: '/', title: 'Writeandfly · Your global journey starts here',
  desc: 'Writeandfly is an AI-powered global mobility and education platform, in development, that helps people in developing countries choose a destination, language and international exam, then plan the move.',
  body: `<section class="hero"><div class="wrap hero-grid">
<div><span class="pill">${SITE.status}</span><h1>Your global journey starts here.</h1>
<p class="lede">Discover the right language to learn, the international exam to take, and the opportunities to explore abroad, all powered by AI.</p>
<div class="btn-row"><a class="btn primary" href="${url('/demo')}">Find my pathway</a><a class="btn ghost" href="${url('/contact')}">Request early access</a></div>
<p class="hero-note">The demo runs on sample data. <a href="${url('/product', 'compare')}">Explore global opportunities</a> to see what we are building.</p></div>
<div class="pass-stack" aria-label="Pathway pass from the demo, sample data">
<div class="pass back" aria-hidden="true"><div class="pass-top"><span>Pathway pass</span></div><div class="pass-route"><div><small>From</small><b>ACC</b></div><div class="flight"></div><div class="to"><small>To</small><b>CAN</b></div></div><div style="height:120px"></div></div>
<div class="pass"><div class="pass-top"><span>Pathway pass · DEMO-U101</span><span class="demo-tag">Demo data</span></div>
<div class="pass-route"><div><small>From</small><b>ACC</b><span>Accra, Ghana</span></div><div class="flight" aria-hidden="true">${plane}</div><div class="to"><small>To</small><b>DEU</b><span>Germany</span></div></div>
<dl class="pass-grid"><div><dt>Goal</dt><dd>Study, then work</dd></div><div><dt>Field</dt><dd>Engineering</dd></div><div><dt>Fit score</dt><dd>85 / 100</dd></div><div><dt>Language</dt><dd>German, target B2</dd></div><div><dt>Budget</dt><dd>Low</dd></div><div><dt>Roadmap</dt><dd>15 months</dd></div></dl>
<div class="pass-stub"><span>Next step: Start German lessons</span><span class="bars" aria-hidden="true"></span></div></div></div>
</div></section>

<section class="strip"><div class="wrap strip-row"><strong>Built for</strong>${['Students going abroad', 'Nurses and health workers', 'Engineers and IT professionals', 'Skilled trades', 'Language exam candidates', 'Mentors who made the move'].map(s => `<span>${s}</span>`).join('')}</div></section>

<section class="band"><div class="wrap"><div class="sec-head"><span class="kicker">What Writeandfly does</span><h2>One profile. A clear answer to where, which language and which exam.</h2><p class="lede">${SITE.statement}</p></div>
<div class="grid g4">${[['Ranked destinations', 'Countries scored against your field, budget, languages, goal and timeline, with the reasons shown.'], ['The right exam', 'Which test your goal usually needs and the score to aim for, before you pay to sit it.'], ['A dated roadmap', 'Language, exam, applications, documents and visa steps, month by month.'], ['People who did it', 'Mentors and candidates who have already taken the exam or made the move.']].map(([h, p]) => `<div class="highlight"><h3>${h}</h3><p>${p}</p></div>`).join('')}</div></div></section>

<section class="band tint" id="problem"><div class="wrap split">
<div class="stack-y"><span class="kicker">The problem</span><h2>Moving abroad starts with guesswork</h2>
<p>For a nurse in Manila or an engineer in Accra, the first question is simple: where should I go, and what do I need? The answers are spread across embassy sites, university pages, exam boards, forums and agents. Most people put the pieces together alone.</p>
<p>The cost of getting it wrong is real. Sitting the wrong exam or aiming for the wrong score can mean paying the fee again and losing months. Paid agents often recommend the countries they have partners in. One-to-one advice does not scale to the millions of people making these decisions each year.</p>
<p>Writeandfly brings the decision into one place: a profile, a ranked shortlist with reasons, the right exam and language, and a plan that links every step to its official source.</p></div>
<div class="figures">${FIGURES.map(f => `<div class="figure"><span class="num">${f.num}</span><p>${f.text}</p><a href="${f.href}" rel="noopener">Source: ${f.src}</a></div>`).join('')}
<p class="small muted">These figures describe global migration and student mobility. They are not Writeandfly results.</p></div>
</div>
<div class="wrap" style="margin-top:40px"><div class="vs"><div><h3>Today</h3><ul><li>Dozens of tabs across government, university and exam sites</li><li>Advice from forums that may be out of date</li><li>Agents who favour partner countries</li><li>Exam chosen before the destination is clear</li><li>No single plan with dates</li></ul></div>
<div><h3>With Writeandfly</h3><ul><li>One profile, a ranked shortlist with reasons</li><li>Every requirement linked to its official source</li><li>Recommendations not tied to commissions</li><li>Exam and target score chosen for your pathway</li><li>A month-by-month roadmap you can follow</li></ul></div></div></div></section>

<section class="band"><div class="wrap"><div class="sec-head"><span class="kicker">Core features</span><h2>Eight tools for one journey</h2><p class="lede">Writeandfly is in development. Each feature below is marked with its current status.</p></div>
<div class="grid g4">${FEATURES.map(f => `<a class="card" href="${url('/product', f.id)}" style="text-decoration:none">${icon(f.icon)}<h3>${f.name}</h3><p>${f.what.split('. ')[0]}.</p>${chip(f.status)}</a>`).join('')}</div>
<p style="margin-top:24px"><a class="text-link" href="${url('/product')}">See every feature in detail</a></p></div></section>

<section class="band tint"><div class="wrap"><div class="sec-head"><span class="kicker">How it works</span><h2>From profile to plan in five steps</h2></div>
<ol class="steps" style="--n:5">${STEPS.map(([h, p]) => `<li><h3>${h}</h3><p>${p}</p></li>`).join('')}</ol>
<p style="margin-top:28px"><a class="text-link" href="${url('/how-it-works')}">How each step works</a></p></div></section>

<section class="band"><div class="wrap"><div class="sec-head"><span class="kicker">Who it's for</span><h2>Built for people planning a move from a developing country</h2></div>
<div class="grid g4">${SEGMENTS.map(s => `<div class="card"><h3>${s.name}</h3><p>${s.problem}</p><a class="text-link" href="${url('/solutions', s.id)}">How it helps</a></div>`).join('')}</div></div></section>

<section class="band tint"><div class="wrap"><div class="sec-head"><span class="kicker">Compared with today</span><h2>How Writeandfly compares with the usual ways of planning</h2><p class="lede">Compared with methods, not named companies. Writeandfly's column shows what we are building.</p></div>${comparisonTable()}</div></section>

${aiSection(url)}

<section class="band tint"><div class="wrap"><div class="sec-head"><span class="kicker">Safeguards</span><h2>Principles we build to</h2></div>
<div class="grid g3">${SAFEGUARDS.map(([h, p]) => `<div class="card"><h3>${h}</h3><p>${p}</p></div>`).join('')}<div class="card"><h3>Read the detail</h3><p>Data handling, access roles, audit trail and what is not built yet.</p><a class="text-link" href="${url('/security')}">Security and safeguards</a></div></div></div></section>

<section class="band"><div class="wrap split"><div class="stack-y"><span class="kicker">Team</span><h2>Founded in ${SITE.founded} by ${SITE.founders[0].name}</h2><p class="lede">Writeandfly is an early-stage, privately held company building its first product.</p><p><a class="text-link" href="${url('/about', 'team')}">Meet the team</a></p></div>
<div class="person"><span class="avatar" aria-hidden="true">AY</span><div class="stack-y" style="gap:6px"><h3>${SITE.founders[0].name}</h3><p class="muted">${SITE.founders[0].title}</p><a class="text-link" href="${SITE.founders[0].linkedin}" rel="noopener">LinkedIn profile</a></div></div></div></section>

${cta(url)}`
});

const product = ({ url }) => ({
  route: '/product', title: 'Product · Writeandfly',
  desc: 'The Writeandfly platform: opportunity finder, exam explorer, language and exam preparation, pathway discovery, community, roadmaps, verified mentors and country comparison.',
  body: `${pageHero('Platform overview', 'Everything you need to choose, prepare and plan', 'Eight connected features, from the first question to the day you fly. Writeandfly is in development: each feature shows whether it is being built now or planned. Product images are concept illustrations using sample data.')}
<section class="band"><div class="wrap">${FEATURES.map(f => `<article class="feature" id="${f.id}"><div class="stack-y"><div class="meta">${icon(f.icon)}${chip(f.status)}<span class="small muted">${f.step}</span></div><h2 style="font-size:clamp(26px,3vw,34px)">${f.name}</h2>
<dl><div><dt>What it does</dt><dd>${f.what}</dd></div><div><dt>Why it helps</dt><dd>${f.benefit}</dd></div></dl></div>${viz(f.viz)}</article>`).join('')}</div></section>
<section class="band tint"><div class="wrap"><div class="sec-head"><h2>Compared with the usual ways of planning</h2></div>${comparisonTable()}</div></section>
${cta(url)}`
});

const how = ({ url }) => ({
  route: '/how-it-works', title: 'How it works · Writeandfly',
  desc: 'How Writeandfly works: build a profile, get matched to destinations, compare and choose, prepare for the language and exam, then plan the move with mentors.',
  body: `${pageHero('How it works', 'From profile to plan in five steps', 'Each step builds on the one before, so your exam, language plan and roadmap always match the destination you chose.')}
<section class="band"><div class="wrap"><div class="diagram scroll" role="img" aria-label="Workflow: profile, match, compare, prepare, plan and move">
<svg viewBox="0 0 980 170">${STEPS.map(([h], i) => `<g transform="translate(${10 + i * 194},30)"><rect class="box${i === 1 ? ' ai' : ''}" width="170" height="90" rx="14"/><text x="16" y="34" class="sub">Step ${i + 1}</text><text x="16" y="60">${h}</text></g>${i < 4 ? `<path class="edge" d="M${182 + i * 194} 75h18" marker-end="url(#ar)"/>` : ''}`).join('')}
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 10 5 0 10z" fill="currentColor"/></marker></defs>
<text x="204" y="150" class="sub">AI ranks and explains; you choose</text></svg></div>
<div style="margin-top:48px" class="stack-y">${STEPS.map(([h, p], i) => {
    const more = [
      'You can start with only your field, goal and languages, and add detail later. Nothing is guessed on your behalf: if a detail is missing, the result says so.',
      'Scores combine demand for your field, budget fit, language fit and how well the country suits your goal. Each part is shown so you can see why a country ranks where it does. See the demo for a working sample.',
      'The comparison table shows the new language you would need, the usual exam, cost level and common routes. You can save countries to follow up.',
      'You get a target level on the right scale (IELTS band, CEFR level or JLPT level). Language lessons and exam-format practice are planned features.',
      'The roadmap sets dates for each step and links to the official page for it. Mentor bookings are planned once mentor checks are in place.'
    ][i];
    return `<article class="feature" style="grid-template-columns:minmax(0,.6fr) minmax(0,1.4fr)"><div><span class="kicker">Step ${i + 1}</span><h2 style="font-size:30px;margin-top:6px">${h}</h2></div><div class="stack-y"><p class="lede">${p}</p><p>${more}</p></div></article>`;
  }).join('')}</div></div></section>
${cta(url, 'See the five steps on sample data', 'The demo runs the matching, comparison and roadmap steps in your browser.')}`
});

const solutions = ({ url }) => ({
  route: '/solutions', title: 'Solutions · Writeandfly',
  desc: 'How Writeandfly helps students, healthcare workers, skilled professionals and language exam candidates plan study and work abroad.',
  body: `${pageHero('Solutions', 'Who Writeandfly is for', 'Four groups with different questions and the same need: a clear, sourced answer for their own situation.')}
<section class="band"><div class="wrap">${SEGMENTS.map(s => `<article class="feature" id="${s.id}"><div class="stack-y"><h2 style="font-size:clamp(26px,3vw,34px)">${s.name}</h2><p class="lede">${s.who}</p></div>
<dl class="card" style="gap:14px"><div><dt>The problem</dt><dd>${s.problem}</dd></div><div><dt>How they use Writeandfly</dt><dd>${s.use}</dd></div><div><dt>The benefit</dt><dd>${s.benefit}</dd></div></dl></article>`).join('')}
<article class="feature" id="mentors"><div class="stack-y"><h2 style="font-size:clamp(26px,3vw,34px)">Mentors</h2><p class="lede">People who have already moved abroad or passed an international exam.</p></div><dl class="card" style="gap:14px"><div><dt>What they do</dt><dd>Answer questions in the community and offer paid one-to-one sessions once the verified mentorship marketplace opens (planned).</dd></div><div><dt>How to join</dt><dd><a class="text-link" href="${url('/contact')}?plan=mentor">Register interest as a mentor</a></dd></div></dl></article>
</div></section>${cta(url)}`
});

const SERVICES = [
  ['Amazon CloudFront + Amazon S3', 'Hosting and delivery of the website and web app', 'Proposed'],
  ['Amazon API Gateway + AWS Lambda', 'Profile, matching, roadmap and contact-form APIs', 'Proposed'],
  ['Amazon DynamoDB', 'Profiles, saved countries and roadmaps', 'Proposed'],
  ['Amazon Cognito', 'User sign-in when accounts launch', 'Proposed'],
  ['Amazon Bedrock', 'Plain-language explanations and practice feedback, grounded in our knowledge base', 'Proposed'],
  ['Amazon S3 + Amazon OpenSearch Service', 'Source-linked knowledge base of exams, countries and official pages', 'Proposed'],
  ['Amazon SES', 'Early-access and account emails', 'Proposed'],
  ['AWS CloudTrail + Amazon CloudWatch', 'Audit logging, monitoring and alerts', 'Proposed'],
  ['AWS KMS + AWS IAM', 'Encryption keys and least-privilege access', 'Proposed']
];
const technology = ({ url }) => ({
  route: '/technology', title: 'Technology · Writeandfly',
  desc: 'Writeandfly\'s proposed architecture on AWS: serverless APIs, a source-linked knowledge base and grounded AI explanations.',
  body: `${pageHero('Technology', 'Proposed architecture on AWS', 'Writeandfly is in development. The architecture below is our plan. No AWS service is listed here as deployed until it is running in production.')}
<section class="band"><div class="wrap"><div class="sec-head"><h2>How a recommendation is produced</h2><p class="lede">Scores are calculated by our own code from your profile and reviewed data. The language model only explains results and answers questions from the knowledge base, with sources attached.</p></div>
<div class="diagram scroll" role="img" aria-label="Proposed architecture diagram"><svg viewBox="0 0 1000 380">
<rect class="lane" x="6" y="6" width="988" height="368" rx="16"/><text x="22" y="32" class="sub">Proposed AWS architecture</text>
<g transform="translate(26,150)"><rect class="box" width="140" height="70" rx="12"/><text x="14" y="30">Browser / app</text><text x="14" y="52" class="sub">Learner</text></g>
<g transform="translate(206,150)"><rect class="box" width="150" height="70" rx="12"/><text x="14" y="30">CloudFront + S3</text><text x="14" y="52" class="sub">Website and app</text></g>
<g transform="translate(396,150)"><rect class="box" width="150" height="70" rx="12"/><text x="14" y="30">API Gateway</text><text x="14" y="52" class="sub">Cognito sign-in</text></g>
<g transform="translate(586,60)"><rect class="box" width="180" height="70" rx="12"/><text x="14" y="30">Lambda: matching</text><text x="14" y="52" class="sub">Scores and roadmaps</text></g>
<g transform="translate(586,240)"><rect class="box ai" width="180" height="70" rx="12"/><text x="14" y="30">Lambda: explain</text><text x="14" y="52" class="sub">Amazon Bedrock</text></g>
<g transform="translate(806,60)"><rect class="box" width="170" height="70" rx="12"/><text x="14" y="30">DynamoDB</text><text x="14" y="52" class="sub">Profiles, roadmaps</text></g>
<g transform="translate(806,240)"><rect class="box" width="170" height="70" rx="12"/><text x="14" y="30">Knowledge base</text><text x="14" y="52" class="sub">S3 + OpenSearch</text></g>
<path class="edge" d="M166 185h36M356 185h36M546 175 L582 100M546 195 L582 270M766 95h36M766 275h36M676 130v106"/>
<text x="606" y="350" class="sub">CloudTrail and CloudWatch log every service; KMS encrypts data at rest</text></svg></div></div></section>
<section class="band tint"><div class="wrap"><div class="sec-head"><h2>Services and status</h2><p class="lede">Status key: Deployed and tested, Configured (not yet tested), Proposed. All services are currently proposed.</p></div>
<div class="scroll"><table class="table stack"><thead><tr><th>Service</th><th>Planned use</th><th>Status</th></tr></thead><tbody>${SERVICES.map(([a, b, c]) => `<tr><td>${a}</td><td>${b}</td><td><span class="chip plan">${c}</span></td></tr>`).join('')}</tbody></table></div>
<div class="grid g3" style="margin-top:32px">
<div class="card"><h3>Grounded AI</h3><p>Our architecture uses retrieval from a reviewed knowledge base so the model answers from stored, dated sources. Answers without a source are not shown as facts.</p></div>
<div class="card"><h3>Serverless by default</h3><p>Lambda, API Gateway and DynamoDB keep costs low at early-stage traffic and scale with demand across regions where our users live.</p></div>
<div class="card"><h3>Low-bandwidth friendly</h3><p>Static pages served through CloudFront, small scripts and system-friendly fonts so the site works on slower mobile connections.</p></div></div></div></section>
${cta(url)}`
});

const security = ({ url }) => ({
  route: '/security', title: 'Security · Writeandfly',
  desc: 'How Writeandfly handles personal data, access roles, audit trails and AI limits, and what is not built yet.',
  body: `${pageHero('Security and safeguards', 'Built to handle personal plans with care', 'People share their education, work history and plans with us. These are the safeguards we are building in from the start, and an honest list of what is not built yet.')}
<section class="band"><div class="wrap grid g2">
<div class="card"><h3>Data handling</h3><ul class="list-clean"><li>We collect only what is needed to make recommendations: education, field, languages, budget range, goal and timeline.</li><li>We do not ask for passport numbers or immigration documents.</li><li>Data is encrypted in transit (HTTPS) and, in our proposed AWS design, at rest with AWS KMS.</li><li>Profiles are never sold. You can ask for your data to be exported or deleted.</li></ul></div>
<div class="card"><h3>Access roles</h3><div class="scroll"><table class="mini-table"><thead><tr><th>Role</th><th>Can see</th></tr></thead><tbody><tr><td>Learner</td><td>Their own profile, matches and roadmap</td></tr><tr><td>Mentor</td><td>Only what a learner chooses to share for a booked session</td></tr><tr><td>Content reviewer</td><td>The knowledge base, never learner profiles</td></tr><tr><td>Administrator</td><td>Account records for support, with every access logged</td></tr></tbody></table></div></div>
<div class="card"><h3>Audit trail</h3><p>Each change to the knowledge base records who made it, when, and the source it came from. Administrator access to accounts is logged (proposed with AWS CloudTrail).</p></div>
<div class="card"><h3>How the AI is constrained</h3><ul class="list-clean"><li>Scores are calculated by our code, not generated by the model.</li><li>The model answers from the reviewed knowledge base and shows the source.</li><li>It does not predict visa, admission or job outcomes and does not give legal advice.</li><li>If information is missing, it says so instead of guessing.</li></ul></div>
</div></section>
<section class="band tint"><div class="wrap"><div class="sec-head"><h2>What is and isn't built yet</h2></div>
<div class="scroll"><table class="table stack"><thead><tr><th>Area</th><th>Status today</th></tr></thead><tbody>
<tr><td>Public website and contact form</td><td><span class="chip ok">Live</span> HTTPS; form collects name, email, country and message only</td></tr>
<tr><td>Interactive demo</td><td><span class="chip ok">Live</span> Runs in your browser on sample data; nothing you choose is stored</td></tr>
<tr><td>User accounts and profiles</td><td><span class="chip dev">In development</span></td></tr>
<tr><td>Encryption at rest, access roles, audit logging</td><td><span class="chip plan">Planned</span> with the first release that stores profiles</td></tr>
<tr><td>Mentor identity and experience checks</td><td><span class="chip plan">Planned</span> before the marketplace opens</td></tr>
<tr><td>Security certifications</td><td>None held. We will not claim any until achieved.</td></tr></tbody></table></div></div></section>
${cta(url)}`
});

const pricing = ({ url }) => ({
  route: '/pricing', title: 'Pricing · Writeandfly',
  desc: 'Proposed Writeandfly plans: a free Explorer plan, Pathway Plus, mentor sessions and partner plans for schools and language centres.',
  body: `${pageHero('Pricing', 'Start free. Pay only for deeper help.', 'Writeandfly is not on sale yet. These are proposed prices for launch and may change. Early-access members will be told before anything is charged.')}
<section class="band"><div class="wrap"><div class="plans">
${[['explorer', 'Explorer', '$0', '', 'For anyone starting to explore.', ['Profile and ranked destinations', 'Exam explorer', 'Country comparison (up to 3)', 'Community access (planned)'], false],
    ['plus', 'Pathway Plus', '$8', '/ month', 'For people actively preparing.', ['Everything in Explorer', 'Full month-by-month roadmap', 'Unlimited comparisons and saved countries', 'Language and exam practice (planned)'], true],
    ['mentor', 'Mentor sessions', 'Set by mentor', '', 'One-to-one help, booked per session.', ['Verified mentors (planned)', 'Session price set by each mentor', 'Proposed platform fee per booking', 'Open to mentors: apply to join'], false],
    ['partners', 'Partners', 'Custom', '', 'For schools, universities and language centres.', ['Group access for students', 'Progress view with student consent', 'Custom onboarding', 'Pricing agreed per partner'], false]]
    .map(([id, n, pr, per, d, items, feat]) => `<div class="plan${feat ? ' featured' : ''}"><div class="meta" style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap"><h3>${n}</h3><span class="chip plan">Proposed</span></div><div class="price">${pr} <small>${per}</small></div><p class="muted">${d}</p><ul class="list-clean">${items.map(i => `<li>${i}</li>`).join('')}</ul><a class="btn ${feat ? 'primary' : 'ghost'}" href="${url('/contact')}?plan=${id}">${id === 'mentor' ? 'Register interest' : id === 'partners' ? 'Talk to us' : 'Join early access'}</a></div>`).join('')}
</div>
<p class="notice" style="margin-top:24px">Prices are in US dollars and proposed. We plan to offer local-currency pricing in the countries where most of our users live.</p></div></section>
<section class="band tint"><div class="wrap"><div class="sec-head"><h2>Compare plans</h2></div><div class="scroll"><table class="table stack"><thead><tr><th>Feature</th><th>Explorer</th><th>Pathway Plus</th><th>Partners</th></tr></thead><tbody>
<tr><td>Ranked destinations</td><td class="yes">Yes</td><td class="yes">Yes</td><td class="yes">Yes</td></tr>
<tr><td>Exam explorer</td><td class="yes">Yes</td><td class="yes">Yes</td><td class="yes">Yes</td></tr>
<tr><td>Country comparison</td><td>Up to 3</td><td>Unlimited</td><td>Unlimited</td></tr>
<tr><td>Roadmap</td><td>First 3 steps</td><td>Full roadmap</td><td>Full roadmap</td></tr>
<tr><td>Language and exam practice (planned)</td><td class="no">No</td><td class="yes">Yes</td><td class="yes">Yes</td></tr>
<tr><td>Mentor sessions</td><td>Pay per session</td><td>Pay per session</td><td>Agreed per partner</td></tr>
<tr><td>Group progress view</td><td class="no">No</td><td class="no">No</td><td class="yes">Yes</td></tr></tbody></table></div></div></section>
${cta(url)}`
});

const about = ({ url, SITE }) => ({
  route: '/about', title: 'About · Writeandfly',
  desc: `About Writeandfly: our mission, story and team. Founded in ${SITE.founded} by ${SITE.founders[0].name}.`,
  body: `${pageHero('About', 'Empowering global ambitions through language, education, and opportunity', SITE.statement)}
<section class="band"><div class="wrap split"><div class="stack-y"><h2>Why we started</h2>
<p>Millions of people in developing countries are qualified and ready to study or work abroad. What holds many of them back is not ability but information: which country fits, which language to learn, which exam to take and what to do first.</p>
<p>Writeandfly puts that information in one place, ranks it against each person's situation, and connects them with people who have already made the journey.</p>
<p>The name says the plan: write first, by learning the language and passing the exam, then fly.</p></div>
<div class="card"><h3>Company facts</h3><div class="scroll"><table class="mini-table"><tbody>
<tr><th>Name</th><td>${SITE.name}</td></tr>${SITE.legalName ? `<tr><th>Legal entity</th><td>${SITE.legalName}${SITE.country ? ', ' + SITE.country : ''}</td></tr>` : ''}
<tr><th>Founded</th><td>${SITE.founded}</td></tr><tr><th>Company type</th><td>Privately held</td></tr><tr><th>Stage</th><td>Building initial product</td></tr>
<tr><th>Industry</th><td>AI-powered EdTech, global mobility and career technology</td></tr>${SITE.address ? `<tr><th>Address</th><td>${SITE.address}</td></tr>` : ''}</tbody></table></div></div></div></section>
<section class="band tint" id="team"><div class="wrap"><div class="sec-head"><span class="kicker">Team</span><h2>Who is building Writeandfly</h2></div>
${SITE.founders.map(f => `<div class="person"><span class="avatar" aria-hidden="true">${f.name.split(' ').map(w => w[0]).join('')}</span><div class="stack-y" style="gap:8px"><h3>${f.name}</h3><p class="muted">${f.title}, ${SITE.name}</p><a class="text-link" href="${f.linkedin}" rel="noopener">LinkedIn profile</a></div></div>`).join('')}</div></section>
<section class="band"><div class="wrap"><div class="sec-head"><h2>What we believe</h2></div><div class="grid g3">
<div class="card"><h3>Honest information</h3><p>We link to official sources, say when something is uncertain, and never promise outcomes.</p></div>
<div class="card"><h3>Independent advice</h3><p>Recommendations are based on fit, not on commissions from schools or agencies.</p></div>
<div class="card"><h3>Built for where users are</h3><p>Plain language, light pages and pricing that makes sense in local incomes.</p></div></div></div></section>
${cta(url)}`
});

const demo = ({ url }) => ({
  route: '/demo', title: 'Live demo · Writeandfly',
  desc: 'Try the Writeandfly pathway finder on sample data: ranked destinations, exam and language targets, a roadmap and country comparison.',
  scripts: ['demo.js'],
  body: `<section class="band" style="padding-top:32px"><div class="wrap">
<div class="demo-bar" role="note"><span><span class="demo-tag">Demo · Sample data</span> &nbsp;This is a product demonstration with simplified sample data and fictional profiles. It is not immigration advice and not live AI output.</span><a class="text-link" href="${url('/contact')}">Request early access</a></div>
<div class="sec-head" style="margin-bottom:24px"><h1 style="font-size:clamp(30px,4vw,44px)">Find your pathway</h1><p class="lede">Pick a sample profile or change the details. Results update as you go.</p></div>
<div class="demo-shell">
<form class="demo-panel" onsubmit="return false" aria-label="Sample profile">
<div class="field"><label>Sample profiles</label><div class="seg" id="d-samples"><button type="button" data-k="u101">DEMO-U101</button><button type="button" data-k="u102">DEMO-U102</button><button type="button" data-k="u103">DEMO-U103</button></div></div>
<div class="field"><label for="d-from">Living in</label><select id="d-from"><option>Accra, Ghana</option><option>Manila, Philippines</option><option>Nairobi, Kenya</option><option>Lagos, Nigeria</option><option>Cairo, Egypt</option><option>Dhaka, Bangladesh</option><option>Karachi, Pakistan</option><option>Hyderabad, India</option></select></div>
<div class="field"><label for="d-field">Field</label><select id="d-field"><option value="eng">Engineering</option><option value="it">IT and software</option><option value="health">Healthcare</option><option value="biz">Business</option><option value="trades">Skilled trades</option><option value="edu">Teaching</option></select></div>
<div class="field"><label>Goal</label><div class="seg" id="d-goal"><button type="button" data-v="study">Study</button><button type="button" data-v="work">Work</button><button type="button" data-v="both">Study, then work</button></div></div>
<div class="field"><label for="d-budget">Budget</label><select id="d-budget"><option value="low">Low</option><option value="mid">Medium</option><option value="high">High</option></select></div>
<div class="field"><label>Languages you speak</label><div class="checks" id="d-langs">${['English', 'French', 'German', 'Japanese', 'Dutch'].map(l => `<label><input type="checkbox" id="d-l-${l.toLowerCase()}" value="${l}"> ${l}</label>`).join('')}</div></div>
<div class="field"><label for="d-months">Time until you want to move</label><select id="d-months"><option value="12">About 12 months</option><option value="15">About 15 months</option><option value="18">About 18 months</option><option value="24">About 24 months</option></select></div>
<button type="button" class="btn ghost small" id="d-reset">Reset this profile</button>
</form>
<div class="stack-y" style="gap:20px">
<div class="demo-panel"><div class="viz-head"><span>Top matches for <span id="d-profile-id">DEMO-U101</span></span><span class="demo-tag">Demo · Sample data</span></div><div class="result-list" id="d-results"></div><p class="small muted">Select a country to see its pass, exam, roadmap and mentors.</p></div>
<div class="pass" id="d-pass"></div>
<div class="demo-cols">
<div class="demo-panel"><div class="viz-head"><span>Why this score</span><span class="demo-tag">Demo · Sample data</span></div><div id="d-breakdown" class="stack-y" style="gap:10px"></div></div>
<div class="demo-panel"><div class="viz-head"><span>Exam and language</span><span class="demo-tag">Demo · Sample data</span></div><div id="d-exam" class="stack-y" style="gap:10px"></div></div>
<div class="demo-panel"><div class="viz-head"><span>Roadmap</span><span class="demo-tag">Demo · Sample data</span></div><ol class="timeline" id="d-road"></ol></div>
<div class="demo-panel"><div class="viz-head"><span>Mentor matches</span><span class="demo-tag">Demo · Fictional</span></div><div id="d-mentors" class="stack-y" style="gap:10px"></div></div>
</div>
<div class="demo-panel"><div class="viz-head"><span>Ask about this result</span><span class="demo-tag">Demo · Sample data</span></div>
<div class="q-btns"><button type="button" class="opt" data-q="top" id="d-q-top">Why is this country ranked first?</button><button type="button" class="opt" data-q="week">What should I do this week?</button><button type="button" class="opt" data-q="limits">What can't you tell me?</button></div>
<div id="d-answer" hidden></div><p class="small muted">Answers are written by the demo from the scores on this page. They are not live AI output.</p></div>
<div class="demo-panel"><div class="viz-head"><span>Compare top three</span><span class="demo-tag">Demo · Sample data</span></div><div class="scroll"><table class="table stack" id="d-compare"></table></div></div>
</div></div></div></section>`
});

const contact = ({ url, SITE }) => ({
  route: '/contact', title: 'Request early access · Writeandfly',
  desc: 'Join the Writeandfly early-access list, register as a mentor, or ask about partnerships.',
  body: `${pageHero('Contact', 'Request early access', 'Tell us a little about your plans. We will invite early-access members as features open and use your answers to decide what to build first.')}
<section class="band"><div class="wrap split">
<form class="form" id="lead-form" novalidate>
<div class="row2"><div class="field"><label for="f-name">Full name</label><input id="f-name" name="name" autocomplete="name" required><span class="err" id="f-name-err" aria-live="polite"></span></div>
<div class="field"><label for="f-email">Email</label><input id="f-email" name="email" type="email" autocomplete="email" required><span class="err" id="f-email-err" aria-live="polite"></span></div></div>
<div class="row2"><div class="field"><label for="f-country">Country you live in</label><input id="f-country" name="country" autocomplete="country-name"></div>
<div class="field"><label for="f-interest">I'm interested in</label><select id="f-interest" name="interest"><option>Finding my pathway</option><option>Exam preparation</option><option>Becoming a mentor</option><option>Partnership (school or language centre)</option><option>Something else</option></select></div></div>
<div class="field"><label for="f-plan">Plan</label><select id="f-plan" name="plan"><option value="">Not sure yet</option><option value="explorer">Explorer (free)</option><option value="plus">Pathway Plus</option><option value="mentor">Mentor</option><option value="partners">Partners</option></select></div>
<div class="field"><label for="f-message">Where do you want to go, and what for? (optional)</label><textarea id="f-message" name="message" maxlength="2000"></textarea></div>
<div style="position:absolute;left:-9999px" aria-hidden="true"><label for="f-website">Website</label><input id="f-website" name="website" tabindex="-1" autocomplete="off"></div>
<div><label class="consent"><input type="checkbox" id="f-consent" name="consent" value="yes"><span>I agree that Writeandfly may store these details to reply to me and send early-access updates, as described in the <a href="${url('/privacy')}">Privacy Policy</a>.</span></label><span class="err" id="f-consent-err" aria-live="polite"></span></div>
<div id="form-status" tabindex="-1" hidden></div>
<button class="btn primary" type="submit">Send request</button>
</form>
<div class="stack-y"><h2 style="font-size:28px">What happens next</h2><ul class="list-clean"><li>We reply by email, usually within a few working days.</li><li>Early-access invitations go out as features open, starting with the opportunity finder and roadmaps.</li><li>You can unsubscribe at any time.</li></ul>
${SITE.email ? `<p>Email: <b style="user-select:all">${SITE.email}</b></p>` : ''}
<p>You can also reach our founder, ${SITE.founders[0].name}, on <a class="text-link" href="${SITE.founders[0].linkedin}" rel="noopener">LinkedIn</a>.</p>
<p><a class="text-link" href="${url('/demo')}">Try the demo while you wait</a></p></div>
</div></section>`
});

const legal = (route, title, h, desc, sections) => ({ url, SITE }) => ({
  route, title: `${title} · Writeandfly`, desc,
  body: `${pageHero('Legal', h, `Last updated ${SITE.legalUpdated}.`)}<section class="band"><div class="wrap prose">${sections(SITE, url)}</div></section>`
});
const privacy = legal('/privacy', 'Privacy Policy', 'Privacy Policy', 'How Writeandfly collects, uses and protects personal information.', (S, url) => `
<p>This policy explains how ${S.legalName || S.name} ("${S.name}", "we") handles personal information collected through this website.</p>
<h2>What we collect</h2><ul><li><b>Contact form:</b> your name, email address, country, area of interest, plan preference and any message you write.</li><li><b>Demo:</b> the demo runs in your browser on sample data. We do not store the choices you make in it.</li><li><b>Technical data:</b> our hosting provider may record standard server logs such as IP address, browser type and pages requested, for security and reliability.</li></ul>
<h2>How we use it</h2><ul><li>To reply to you and send early-access updates you asked for.</li><li>To understand which features people need most.</li><li>To keep the website secure.</li></ul><p>We do not sell personal information and do not use it for third-party advertising.</p>
<h2>Legal basis</h2><p>We process contact-form data with your consent, which you give by ticking the box on the form. You can withdraw consent at any time.</p>
<h2>Sharing</h2><p>We share data only with service providers that host our website and email, under agreements that require them to protect it, or where the law requires it.</p>
<h2>Retention</h2><p>We keep early-access requests until you ask us to delete them or until 24 months after our last contact with you, whichever comes first.</p>
<h2>Your rights</h2><p>You can ask to access, correct, export or delete your data, or to stop receiving updates. Contact us through the <a href="${url('/contact')}">contact page</a>${S.email ? ` or at ${S.email}` : ''}. Depending on where you live, laws such as the GDPR or Nigeria's NDPA may give you further rights, including complaining to your data protection authority.</p>
<h2>International transfers</h2><p>Our providers may store data in other countries. Where they do, we rely on appropriate safeguards.</p>
<h2>Children</h2><p>This website is not intended for children under 16, and we do not knowingly collect their data.</p>
<h2>Changes</h2><p>We will post any changes on this page and update the date above.</p>`);
const terms = legal('/terms', 'Terms of Service', 'Terms of Service', 'The terms that apply when you use the Writeandfly website and demo.', (S, url) => `
<p>These terms apply to your use of the ${S.name} website, including the interactive demo. By using the website you agree to them.</p>
<h2>About the service</h2><p>${S.name} is in development. The website describes planned features, and the demo uses sample data and fictional profiles. Features, prices and dates may change before launch.</p>
<h2>Not professional advice</h2><p>Information on this website and in the demo is general guidance. It is not legal, immigration, admissions or financial advice. Requirements set by governments, regulators, universities and exam boards change. Always confirm with the official body before you act or pay any fee.</p>
<h2>No guarantee of outcomes</h2><p>We do not guarantee any visa, admission, registration, exam result or job.</p>
<h2>Acceptable use</h2><ul><li>Do not misuse the website, try to break its security, or submit false or harmful information.</li><li>Do not copy or resell the website content without permission.</li></ul>
<h2>Third-party links</h2><p>We link to official and third-party websites. We are not responsible for their content.</p>
<h2>Intellectual property</h2><p>The ${S.name} name, logo, design and content belong to ${S.legalName || S.name}. Exam and organisation names belong to their owners and are used only to describe them; we are not affiliated with or endorsed by them.</p>
<h2>Liability</h2><p>To the extent the law allows, the website is provided "as is" and we are not liable for losses arising from reliance on its content.</p>
<h2>Changes and contact</h2><p>We may update these terms and will post changes here. Questions: use the <a href="${url('/contact')}">contact page</a>${S.email ? ` or email ${S.email}` : ''}.</p>`);

const notFound = ({ url }) => ({
  route: '/404', title: 'Page not found · Writeandfly', desc: 'This page could not be found.', noindex: true,
  body: `<section class="band"><div class="wrap split" style="align-items:center"><div class="stack-y"><span class="kicker">Error 404</span><h1>This page took a different flight</h1><p class="lede">The page you asked for does not exist or has moved.</p><div class="btn-row"><a class="btn primary" href="${url('/')}">Go to the home page</a><a class="btn ghost" href="${url('/demo')}">Open the demo</a></div></div>
<div class="pass"><div class="pass-top"><span>Pathway pass</span><span>Status: not found</span></div><div class="pass-route"><div><small>From</small><b>404</b><span>Unknown page</span></div><div class="flight" aria-hidden="true">${plane}</div><div class="to"><small>To</small><b>HOME</b><span>writeandfly</span></div></div><div class="pass-stub"><span>Gate changed. Use the links on this page.</span><span class="bars" aria-hidden="true"></span></div></div></div></section>`
});

export const PAGES = [home, product, how, solutions, technology, security, pricing, about, demo, contact, privacy, terms, notFound];
