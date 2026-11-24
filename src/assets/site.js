{
  const CFG = window.WF_CONFIG || {};

  // Mobile menu
  const btn = document.querySelector('.menu-btn');
  const nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? 'Close' : 'Menu';
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.textContent = 'Menu'; btn.focus(); }
    });
  }

  // Label stacked table cells on phones
  const labelCells = () => {
    for (const c of document.querySelectorAll('.stack td:not([data-l])')) {
      let i = 0, p = c; while ((p = p.previousElementSibling)) i += p.colSpan;
      const head = c.closest('table').rows[0].cells[i];
      c.dataset.l = head ? head.textContent : '';
    }
  };
  labelCells();
  window.WF_labelCells = labelCells;

  // Contact form
  const form = document.getElementById('lead-form');
  if (form) {
    const status = document.getElementById('form-status');
    const planSel = document.getElementById('f-plan');
    const params = new URLSearchParams(location.search);
    let plan = params.get('plan') || '';
    if (!plan && location.hash.startsWith('#plan-')) plan = location.hash.slice(6);
    if (plan && planSel && [...planSel.options].some(o => o.value === plan)) planSel.value = plan;

    const show = (ok, text) => { status.hidden = false; status.className = 'form-status ' + (ok ? 'good' : 'bad'); status.textContent = text; status.focus(); };
    const setErr = (id, text) => { const el = document.getElementById(id + '-err'); if (el) el.textContent = text; const f = document.getElementById(id); if (f) f.setAttribute('aria-invalid', text ? 'true' : 'false'); };

    form.addEventListener('submit', async e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      let bad = false;
      setErr('f-name', ''); setErr('f-email', ''); setErr('f-consent', '');
      if (!data.name || data.name.trim().length < 2) { setErr('f-name', 'Enter your name.'); bad = true; }
      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) { setErr('f-email', 'Enter an email address like name@example.com.'); bad = true; }
      if (!data.consent) { setErr('f-consent', 'Tick this box so we can reply to you.'); bad = true; }
      if (data.website) return; // honeypot
      if (bad) { show(false, 'Please fix the highlighted fields and send again.'); return; }
      const lead = { name: data.name.trim(), email: data.email.trim(), country: data.country || '', interest: data.interest || '', plan: data.plan || '', message: (data.message || '').slice(0, 2000), page: 'contact', at: new Date().toISOString() };
      const submit = form.querySelector('button[type=submit]');
      submit.disabled = true; submit.textContent = 'Sending…';
      let sent = false;
      try {
        if (CFG.formEndpoint) {
          const r = await fetch(CFG.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });
          sent = r.ok;
        } else if (window.claude && window.claude.use) {
          const db = await window.claude.use('db');
          if (db) { await db.doc('leads/' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7)).set(lead); sent = true; }
        }
      } catch (err) { sent = false; }
      submit.disabled = false; submit.textContent = 'Send request';
      if (sent) { form.reset(); show(true, 'Thanks, ' + lead.name.split(' ')[0] + '. Your request has been received. We reply by email, usually within a few working days.'); }
      else show(false, 'Your request could not be sent from this page right now. Please try again later, or message our founder on LinkedIn (link below).');
    });
  }
}
