{
  // ---------------------------------------------------------------
  // Writeandfly demo. Everything here is SAMPLE DATA for a product
  // demonstration: simplified, illustrative scores and notes, not
  // immigration, admissions or legal advice, and not live AI output.
  // ---------------------------------------------------------------
  const COUNTRIES = [
    { code: 'DEU', name: 'Germany', main: 'German', cost: 2, eng: { study: 16, work: 8 },
      fields: { eng: 30, it: 26, health: 24, biz: 16, trades: 22, edu: 12 }, goal: { study: 20, work: 18 },
      exam: { study: 'TestDaF or Goethe-Zertifikat C1 for German-taught courses; IELTS Academic for English-taught ones', work: 'Goethe-Zertifikat B1 to B2' },
      scale: 'cefr', target: 'B2', routes: ['Study, then post-study job search', 'Skilled work with a recognised qualification'] },
    { code: 'CAN', name: 'Canada', main: 'English', alt: 'French', cost: 4, eng: { study: 25, work: 25 },
      fields: { eng: 26, it: 26, health: 28, biz: 18, trades: 26, edu: 16 }, goal: { study: 20, work: 20 },
      exam: { study: 'IELTS Academic, TOEFL iBT or PTE Academic', work: 'IELTS General Training or CELPIP; TEF Canada adds points for French' },
      scale: 'ielts', target: '7.0', routes: ['Study permit, then work', 'Economic (points-based) immigration'] },
    { code: 'GBR', name: 'United Kingdom', main: 'English', cost: 5, eng: { study: 25, work: 25 },
      fields: { eng: 22, it: 24, health: 30, biz: 20, trades: 14, edu: 20 }, goal: { study: 20, work: 20 },
      exam: { study: 'IELTS for UKVI or PTE Academic', work: 'IELTS for UKVI; OET for nurses and doctors' },
      scale: 'ielts', target: '7.0', routes: ['Student route, then graduate work', 'Skilled worker or health and care work'] },
    { code: 'IRL', name: 'Ireland', main: 'English', cost: 4, eng: { study: 25, work: 25 },
      fields: { eng: 20, it: 28, health: 26, biz: 20, trades: 12, edu: 12 }, goal: { study: 19, work: 18 },
      exam: { study: 'IELTS Academic, TOEFL iBT, PTE Academic or Duolingo English Test (course dependent)', work: 'IELTS Academic or OET for healthcare registration' },
      scale: 'ielts', target: '6.5', routes: ['Study, then stay-back work', 'Critical skills employment'] },
    { code: 'AUS', name: 'Australia', main: 'English', cost: 5, eng: { study: 25, work: 25 },
      fields: { eng: 26, it: 22, health: 28, biz: 16, trades: 28, edu: 18 }, goal: { study: 20, work: 19 },
      exam: { study: 'IELTS Academic, PTE Academic or TOEFL iBT', work: 'IELTS, PTE Academic or OET (healthcare)' },
      scale: 'ielts', target: '7.0', routes: ['Student visa, then graduate work', 'Skilled migration (points-based)'] },
    { code: 'NLD', name: 'Netherlands', main: 'Dutch', cost: 3, eng: { study: 16, work: 12 },
      fields: { eng: 26, it: 26, health: 12, biz: 24, trades: 10, edu: 8 }, goal: { study: 19, work: 17 },
      exam: { study: 'IELTS Academic or TOEFL iBT for English-taught degrees', work: 'IELTS; Dutch A2 to B1 for daily life' },
      scale: 'ielts', target: '6.5', routes: ['Study, then search year', 'Highly skilled migrant work'] },
    { code: 'FRA', name: 'France', main: 'French', cost: 2, eng: { study: 12, work: 6 },
      fields: { eng: 24, it: 20, health: 16, biz: 24, trades: 12, edu: 14 }, goal: { study: 19, work: 15 },
      exam: { study: 'DELF B2 / DALF C1 or TCF for French-taught courses', work: 'TCF or DELF B1 to B2' },
      scale: 'cefr', target: 'B2', routes: ['Study, then work authorisation', 'Talent and skilled work'] },
    { code: 'JPN', name: 'Japan', main: 'Japanese', cost: 3, eng: { study: 8, work: 6 },
      fields: { eng: 24, it: 26, health: 18, biz: 12, trades: 20, edu: 14 }, goal: { study: 18, work: 18 },
      exam: { study: 'JLPT N2 for Japanese-taught courses; EJU for many universities', work: 'JLPT N3 to N2' },
      scale: 'jlpt', target: 'N2', routes: ['Study, then job hunting', 'Specified skills and engineering work'] }
  ];
  const MENTORS = {
    DEU: [['DEMO-M201', 'KA', 'Mechanical engineer, moved from Ghana to Germany', 'Reaching German B2 while working full time'], ['DEMO-M202', 'SN', 'Master\'s student in Germany', 'Choosing English-taught programmes']],
    CAN: [['DEMO-M211', 'TO', 'Software developer in Canada', 'Preparing for IELTS General Training']],
    GBR: [['DEMO-M221', 'RM', 'Registered nurse in the UK', 'OET preparation and registration steps'], ['DEMO-M222', 'JB', 'Master\'s graduate in the UK', 'Budgeting for the first year']],
    IRL: [['DEMO-M231', 'AE', 'Data analyst in Ireland', 'Moving from study to work']],
    AUS: [['DEMO-M241', 'PL', 'Electrician in Australia', 'Skills assessment paperwork']],
    NLD: [['DEMO-M251', 'FH', 'Engineer in the Netherlands', 'Finding English-taught degrees']],
    FRA: [['DEMO-M261', 'MD', 'Business school graduate in France', 'Going from French A2 to B2']],
    JPN: [['DEMO-M271', 'YC', 'Developer in Japan', 'JLPT N3 to N2 study plan']]
  };
  const PROFILES = {
    u101: { id: 'DEMO-U101', from: 'Accra, Ghana', field: 'eng', goal: 'both', budget: 'low', langs: ['English'], months: 15 },
    u102: { id: 'DEMO-U102', from: 'Manila, Philippines', field: 'health', goal: 'work', budget: 'mid', langs: ['English'], months: 12 },
    u103: { id: 'DEMO-U103', from: 'Nairobi, Kenya', field: 'it', goal: 'study', budget: 'mid', langs: ['English', 'French'], months: 24 }
  };
  const FIELD_NAMES = { eng: 'Engineering', it: 'IT and software', health: 'Healthcare', biz: 'Business', trades: 'Skilled trades', edu: 'Teaching' };
  const GOAL_NAMES = { study: 'Study', work: 'Work', both: 'Study, then work' };
  const BUDGET = { low: 1, mid: 3, high: 5 };
  const BUDGET_NAMES = { low: 'Low', mid: 'Medium', high: 'High' };
  const COST_NAMES = ['', 'Lower', 'Lower', 'Moderate', 'Higher', 'Highest'];

  const score = (p, c) => {
    const field = c.fields[p.field];
    const budget = Math.max(0, 25 - Math.max(0, c.cost - BUDGET[p.budget]) * 7);
    const knows = p.langs.includes(c.main) || (c.alt && p.langs.includes(c.alt));
    const g = p.goal === 'both' ? 'study' : p.goal;
    let lang;
    if (knows) lang = 25;
    else if (p.langs.includes('English') && c.eng[g] >= 12) lang = c.eng[g];
    else lang = p.months >= 18 ? 14 : p.months >= 12 ? 8 : 3;
    const goal = p.goal === 'both' ? Math.round((c.goal.study + c.goal.work) / 2) + 2 : c.goal[p.goal];
    const needLang = !knows && c.main !== 'English';
    return { c, total: field + budget + lang + goal, parts: { field, budget, lang, goal }, needLang };
  };
  const rank = p => COUNTRIES.map(c => score(p, c)).sort((a, b) => b.total - a.total);
  window.WF_demoRank = rank; window.WF_PROFILES = PROFILES;

  const examFor = (p, c) => (p.goal === 'work' ? c.exam.work : c.exam.study);
  const scaleHtml = c => {
    const steps = c.scale === 'cefr' ? ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] : c.scale === 'jlpt' ? ['N5', 'N4', 'N3', 'N2', 'N1'] : ['5.0', '5.5', '6.0', '6.5', '7.0', '7.5', '8.0'];
    const label = c.scale === 'cefr' ? 'CEFR level (A1 to C2)' : c.scale === 'jlpt' ? 'JLPT level (N5 to N1)' : 'IELTS band (0 to 9)';
    return `<div class="small muted">${label}, sample target ${c.target}</div><div class="scale" aria-label="Sample target ${c.target}">${steps.map(s => `<span class="${s === c.target ? 'on' : ''}">${s}</span>`).join('')}</div>`;
  };
  const roadmap = (p, r) => {
    const T = p.months, c = r.c, steps = [];
    let m = 0;
    steps.push([m, 'Check the official requirements for ' + c.name + ' on the government and university websites. Save each source.']);
    if (r.needLang) {
      const langEnd = Math.round(T * 0.55);
      steps.push([1, 'Start ' + c.main + ' lessons. Aim for ' + (c.scale === 'jlpt' ? 'N4' : 'A2') + ' by month ' + Math.round(langEnd / 2) + '.']);
      steps.push([langEnd, 'Sit ' + (p.goal === 'work' ? c.exam.work : c.exam.study).split(';')[0] + '.']);
      m = langEnd;
    } else {
      steps.push([1, 'Take a diagnostic test, then prepare for ' + examFor(p, c).split(/[;,]| or /)[0] + ' (sample target ' + c.target + ').']);
      m = Math.max(3, Math.round(T * 0.3));
      steps.push([m, 'Sit the exam. Book a retake date in advance in case you need it.']);
    }
    if (p.goal !== 'work') steps.push([Math.min(T - 4, m + 2), 'Shortlist 5 to 8 programmes in ' + FIELD_NAMES[p.field].toLowerCase() + ' and apply.']);
    if (p.goal !== 'study') steps.push([Math.min(T - 4, m + 2), 'Start qualification recognition and prepare a CV in the local format.']);
    steps.push([Math.max(m + 3, T - 3), 'Gather documents and proof of funds. Book a call with a mentor who made the same move.']);
    steps.push([T, 'Apply for your visa or permit and plan your arrival.']);
    return steps.sort((a, b) => a[0] - b[0]);
  };

  // ------- UI -------
  const $ = id => document.getElementById(id);
  const state = { p: { ...PROFILES.u101, langs: [...PROFILES.u101.langs] }, pick: 0, key: 'u101' };

  const syncForm = () => {
    const p = state.p;
    $('d-field').value = p.field; $('d-budget').value = p.budget; $('d-months').value = String(p.months); $('d-from').value = p.from;
    document.querySelectorAll('#d-goal button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.v === p.goal)));
    document.querySelectorAll('#d-langs input').forEach(i => { i.checked = p.langs.includes(i.value); });
    document.querySelectorAll('#d-samples button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.k === state.key)));
  };
  const readForm = () => {
    const p = state.p;
    p.field = $('d-field').value; p.budget = $('d-budget').value; p.months = +$('d-months').value; p.from = $('d-from').value;
    p.langs = [...document.querySelectorAll('#d-langs input:checked')].map(i => i.value);
    if (!p.langs.length) p.langs = ['English'];
    p.id = PROFILES[state.key].id + '-EDIT';
  };

  const render = () => {
    const p = state.p, list = rank(p), top = list.slice(0, 4), r = top[state.pick] || top[0], c = r.c;
    $('d-profile-id').textContent = p.id;
    $('d-results').innerHTML = top.map((x, i) => `<button type="button" class="result" data-i="${i}" aria-pressed="${i === state.pick}">
      <span class="rank">${i + 1}</span>
      <span><b>${x.c.name}</b><span class="why" style="display:block">${x.needLang ? 'Learn ' + x.c.main + ' · ' : ''}${COST_NAMES[x.c.cost]} cost · ${x.c.routes[0]}</span></span>
      <span class="score">${x.total}</span></button>`).join('');
    $('d-results').querySelectorAll('.result').forEach(b => b.addEventListener('click', () => { state.pick = +b.dataset.i; render(); }));

    // pass
    const fromCode = p.from.split(',')[0].slice(0, 3).toUpperCase();
    $('d-pass').innerHTML = `<div class="pass-top"><span>Pathway pass · ${p.id}</span><span class="demo-tag">Demo · Sample data</span></div>
      <div class="pass-route"><div><small>From</small><b>${fromCode}</b><span>${p.from}</span></div>
      <div class="flight" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 12.5 22 4l-6 16-4-6.2z"/></svg></div>
      <div class="to"><small>To</small><b>${c.code}</b><span>${c.name}</span></div></div>
      <dl class="pass-grid">
        <div><dt>Goal</dt><dd>${GOAL_NAMES[p.goal]}</dd></div>
        <div><dt>Field</dt><dd>${FIELD_NAMES[p.field]}</dd></div>
        <div><dt>Fit score</dt><dd>${r.total} / 100</dd></div>
        <div><dt>Language</dt><dd>${r.needLang ? c.main + ', target ' + c.target : 'English, target ' + c.target}</dd></div>
        <div><dt>Budget</dt><dd>${BUDGET_NAMES[p.budget]}</dd></div>
        <div><dt>Roadmap</dt><dd>${p.months} months</dd></div>
      </dl>
      <div class="pass-stub"><span>Next step: ${roadmap(p, r)[1][1].split('.')[0]}</span><span class="bars" aria-hidden="true"></span></div>`;

    // breakdown
    const parts = [['Field demand', r.parts.field, 30], ['Budget fit', r.parts.budget, 25], ['Language fit', r.parts.lang, 25], ['Goal fit', r.parts.goal, 22]];
    $('d-breakdown').innerHTML = parts.map(([n, v, m]) => `<div class="bar-row"><span>${n}</span><span class="bar"><i style="width:${Math.round(v / m * 100)}%"></i></span><span class="v">${v}/${m}</span></div>`).join('');

    $('d-exam').innerHTML = `<p><b>${examFor(p, c)}</b></p>${scaleHtml(c)}<p class="small muted">${r.needLang ? 'You would need ' + c.main + ' for daily life and most jobs. ' : ''}Always confirm the exact exam and score with the university, employer or official body.</p>`;
    $('d-road').innerHTML = roadmap(p, r).map(([m, t]) => `<li><span class="t">Month ${m}</span><span class="dot" aria-hidden="true"></span><span>${t}</span></li>`).join('');
    $('d-mentors').innerHTML = (MENTORS[c.code] || []).map(([id, ini, role, topic]) => `<div class="mentor"><span class="avatar" aria-hidden="true">${ini}</span><span><b>${role}</b><span class="small muted" style="display:block">${id} · fictional profile · Can help with: ${topic}</span></span></div>`).join('');

    // compare
    const cmp = list.slice(0, 3);
    $('d-compare').innerHTML = `<thead><tr><th>Sample data</th>${cmp.map(x => `<th>${x.c.name}</th>`).join('')}</tr></thead><tbody>
      <tr><td>Fit score</td>${cmp.map(x => `<td>${x.total}</td>`).join('')}</tr>
      <tr><td>New language needed</td>${cmp.map(x => `<td>${x.needLang ? x.c.main : 'No'}</td>`).join('')}</tr>
      <tr><td>Suggested exam</td>${cmp.map(x => `<td>${examFor(p, x.c)}</td>`).join('')}</tr>
      <tr><td>Cost level</td>${cmp.map(x => `<td>${COST_NAMES[x.c.cost]}</td>`).join('')}</tr>
      <tr><td>Common routes</td>${cmp.map(x => `<td>${x.c.routes.join('; ')}</td>`).join('')}</tr></tbody>`;
    if (window.WF_labelCells) window.WF_labelCells();
    $('d-answer').hidden = true;
    $('d-q-top').textContent = 'Why is ' + c.name + ' ranked ' + (state.pick === 0 ? 'first' : 'number ' + (state.pick + 1)) + '?';
  };

  const answer = q => {
    const p = state.p, list = rank(p), r = list[state.pick] || list[0], c = r.c, a = $('d-answer');
    let text;
    if (q === 'top') {
      const best = Object.entries({ 'field demand': r.parts.field / 30, 'budget fit': r.parts.budget / 25, 'language fit': r.parts.lang / 25 }).sort((x, y) => y[1] - x[1]);
      text = c.name + ' scores ' + r.total + ' out of 100 for this sample profile. Its strongest factor is ' + best[0][0] + ' and its weakest is ' + best[2][0] + '. ' + (r.needLang ? 'The main trade-off is learning ' + c.main + ' within ' + p.months + ' months. ' : '') + 'These scores come from the sample data on this page, so check each point against official sources.';
    } else if (q === 'week') {
      const s = roadmap(p, r);
      text = 'This week: ' + s[0][1] + ' Next: ' + s[1][1];
    } else {
      text = 'I can explain how the scores were worked out and what each step involves. I can\'t tell you if you will get a visa or admission, I don\'t fill in missing details about you, and I don\'t replace official government or university information.';
    }
    a.hidden = false;
    a.innerHTML = '<div class="msg"><b>Writeandfly assistant · demo explanation</b></div>';
    a.firstChild.append(document.createTextNode(text));
  };

  const pickSample = k => { state.key = k; state.p = { ...PROFILES[k], langs: [...PROFILES[k].langs] }; state.pick = 0; syncForm(); render(); };
  const init = () => {
    document.querySelectorAll('#d-samples button').forEach(b => b.addEventListener('click', () => { pickSample(b.dataset.k); try { history.replaceState(null, '', '#' + b.dataset.k); } catch (e) {} }));
    document.querySelectorAll('#d-goal button').forEach(b => b.addEventListener('click', () => { state.p.goal = b.dataset.v; state.pick = 0; syncForm(); render(); }));
    ['d-field', 'd-budget', 'd-months', 'd-from'].forEach(id => $(id).addEventListener('change', () => { readForm(); state.pick = 0; render(); }));
    document.querySelectorAll('#d-langs input').forEach(i => i.addEventListener('change', () => { readForm(); state.pick = 0; render(); }));
    document.querySelectorAll('[data-q]').forEach(b => b.addEventListener('click', () => answer(b.dataset.q)));
    $('d-reset').addEventListener('click', () => pickSample(state.key));
    const h = location.hash.slice(1);
    pickSample(PROFILES[h] ? h : 'u101');
    window.addEventListener('hashchange', () => { const k = location.hash.slice(1); if (PROFILES[k] && k !== state.key) pickSample(k); });
  };
  if (document.getElementById('d-results')) init();
}
