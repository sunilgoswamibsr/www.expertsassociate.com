// ---------- mobile nav ----------
function toggleMenu(){document.querySelector('nav').classList.toggle('open')}

// ---------- scroll reveal (with safety fallback so content is never stuck hidden) ----------
(function(){
  var els = document.querySelectorAll('.reveal');
  if(!els.length) return;
  if(!('IntersectionObserver' in window)){ els.forEach(function(e){e.classList.add('in')}); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, {threshold:.1, rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(e){ io.observe(e); });
  // safety net: reveal everything after 2.5s regardless (covers edge cases / very tall viewports)
  setTimeout(function(){ els.forEach(function(e){ e.classList.add('in'); }); }, 2500);
})();

// ---------- animated bar groups (hero dashboard + finance metric card) ----------
(function(){
  var groups = document.querySelectorAll('.bars-row, .metric-card .bars');
  if(!('IntersectionObserver' in window)){ groups.forEach(function(g){g.classList.add('in')}); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, {threshold:.4});
  groups.forEach(function(g){ io.observe(g); });
})();

// ---------- animated KPI counters ----------
(function(){
  var kpis = document.querySelectorAll('[data-count]');
  if(!kpis.length) return;
  function animate(el){
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals')) : 0;
    var start = 0, duration = 1400, t0 = null;
    function step(ts){
      if(!t0) t0 = ts;
      var p = Math.min(1, (ts - t0) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = start + (target - start) * eased;
      el.textContent = val.toFixed(decimals) + suffix;
      if(p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if(!('IntersectionObserver' in window)){ kpis.forEach(animate); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ animate(en.target); io.unobserve(en.target); }
    });
  }, {threshold:.5});
  kpis.forEach(function(k){ io.observe(k); });
})();

// ---------- live dashboard clock ----------
(function(){
  var clock = document.getElementById('dashClock');
  if(!clock) return;
  function tick(){
    var d = new Date();
    var h = d.getHours().toString().padStart(2,'0');
    var m = d.getMinutes().toString().padStart(2,'0');
    var s = d.getSeconds().toString().padStart(2,'0');
    clock.textContent = 'Session ' + h + ':' + m + ':' + s;
  }
  tick();
  setInterval(tick, 1000);
})();

// ---------- live enquiry preview panel ----------
(function(){
  var form = document.getElementById('enquiryForm');
  if(!form) return;
  var pName = document.getElementById('pv-name');
  var pCompany = document.getElementById('pv-company');
  var pEmail = document.getElementById('pv-email');
  var pService = document.getElementById('pv-service');
  var pMsg = document.getElementById('pv-msg');
  var priority = document.getElementById('pv-priority');
  var priorityLabel = document.getElementById('pv-priority-label');

  var nameEl = document.getElementById('name');
  var companyEl = document.getElementById('company');
  var emailEl = document.getElementById('email');
  var serviceEl = document.getElementById('service');
  var msgEl = document.getElementById('message');

  var urgentTerms = ['erp','hrms','automation','power bi'];

  function refresh(){
    pName.textContent = nameEl.value.trim() || '—';
    pCompany.textContent = companyEl.value.trim() || '—';
    pEmail.textContent = emailEl.value.trim() || '—';
    var svc = serviceEl.value;
    pService.textContent = svc || '—';
    var chars = msgEl.value.trim().length;
    pMsg.textContent = chars ? (chars + ' characters drafted') : '—';

    var ready = nameEl.value.trim() && emailEl.value.trim() && msgEl.value.trim();
    priority.classList.toggle('set', !!ready);
    priorityLabel.textContent = ready ? 'Ready to send' : 'Awaiting details';
  }

  [nameEl, companyEl, emailEl, serviceEl, msgEl].forEach(function(el){
    el.addEventListener('input', refresh);
    el.addEventListener('change', refresh);
  });
  refresh();
})();

// ---------- send enquiry via mailto ----------
function sendEnquiry(e){
  e.preventDefault();
  var n = document.getElementById('name').value;
  var c = document.getElementById('company').value;
  var em = document.getElementById('email').value;
  var s = document.getElementById('service').value;
  var m = document.getElementById('message').value;
  var body = 'Name: ' + n + '\nCompany: ' + c + '\nEmail: ' + em + '\nService: ' + s + '\n\nRequirement:\n' + m;
  window.location.href = 'mailto:info@expertsassociate.com?subject=' +
    encodeURIComponent('Experts Associates — Business Enquiry') +
    '&body=' + encodeURIComponent(body);
}
