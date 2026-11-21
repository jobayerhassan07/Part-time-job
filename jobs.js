'use strict';

/* ===== Data (field order for JOBS: title, category, type, time, pay, place, details) ===== */
const CATS = ['🧹 ঘর পরিষ্কার', '🍳 রান্না', '👕 কাপড় ধোয়া/ইস্ত্রি', '👶 বাচ্চা দেখাশোনা', '🧓 বয়স্ক সেবা', '🛒 বাজার/কেনাকাটা', '🌿 বাগান/ছাদবাগান', '🔧 ইলেকট্রিক/প্লাম্বিং', '🚗 গাড়ি ধোয়া', '📚 হোম টিউটর', '🐕 পোষা প্রাণী', '📦 মালপত্র/শিফটিং', '🍽️ থালাবাসন', '🪟 জানালা/ছাদ পরিষ্কার', '🥬 সবজি কাটা/প্রস্তুতি', '💊 রোগীর সঙ্গী'];


const JOBS = [
  ['সকালে ঘর ঝাড়ু-মোছা', 'ঘর পরিষ্কার', 'দৈনিক', 'সকাল', '৩০০ ৳/দিন', 'শহর এলাকা', '২ রুমের ফ্ল্যাট, ১ ঘণ্টার কাজ।'],
  ['রাত ও দুপুরের রান্নার লোক', 'রান্না',  'সকাল', '৮,০০০ ৳/মাস', 'ধানমন্ডি টাইপ এলাকা', 'সপ্তাহে ৬ দিন, ২ বেলার রান্না।'],
  ['কাপড় ধোয়া ও ইস্ত্রি', 'কাপড় ধোয়া/ইস্ত্রি', 'সাপ্তাহিক', 'বিকাল', '৪০০ ৳/দিন', 'কাছাকাছি এলাকা', 'সপ্তাহে ২ দিন, ৪ জনের পরিবার।'],
  ['স্কুল থেকে বাচ্চা আনা-নেওয়া', 'বাচ্চা দেখাশোনা', 'মাসিক পার্ট টাইম', 'বিকাল', '৫,০০০ ৳/মাস', 'স্কুল এলাকা', '৮ টা থেকে ১২ টা , ৭ বছরের ছেলে।'],
  ['দাদুর দেখাশোনা', 'বয়স্ক সেবা', 'ঘণ্টা ভিত্তিক', 'সন্ধ্যা/রাত', '১৫০ ৳/ঘণ্টা', 'শহর এলাকা', 'ওষুধ খাওয়ানো ও হাঁটতে সাহায্য।'],
  ['সপ্তাহের বাজার করা', 'বাজার/কেনাকাটা', 'সাপ্তাহিক', 'ছুটির দিন', '২০০ ৳/বার', 'যেকোনো এলাকা', 'শুক্রবার সকালে কাঁচাবাজার।'],
  ['ছাদবাগানের যত্ন', 'বাগান/ছাদবাগান', 'সাপ্তাহিক', 'সকাল', '৩৫০ ৳/দিন', 'নতুন বাসা এলাকা', 'গাছে পানি, সার, ছাঁটাই।'],
  ['ফ্যান ও লাইট ঠিক করা', 'ইলেকট্রিক/প্লাম্বিং', 'দৈনিক', 'ছুটির দিন', '৬০০ ৳/কাজ', 'যেকোনো এলাকা', 'ছোট ইলেকট্রিক মেরামত।'],
  ['গাড়ি ধোয়া', 'গাড়ি ধোয়া', 'দৈনিক', 'সকাল', '২৫০ ৳/দিন', 'অফিস পাড়া', '১টি প্রাইভেট কার।'],
  ['ক্লাস ৫ এর হোম টিউটর', 'হোম টিউটর', 'মাসিক পার্ট টাইম', 'সন্ধ্যা/রাত', '৩,৫০০ ৳/মাস', 'শহর এলাকা', 'সপ্তাহে ৫ দিন, ১ ঘণ্টা করে।'],
  ['ক্লাস ১০ শ্রেণীর  এর হোম টিউটর', 'হোম টিউটর', 'মাসিক পার্ট টাইম', 'সন্ধ্যা/রাত', '৩,৫০০ ৳/মাস', 'শহর এলাকা', 'সপ্তাহে ৫ দিন, ১ ঘণ্টা করে।'],
  ['কুকুর হাঁটানো', 'পোষা প্রাণী', 'ঘণ্টা ভিত্তিক', 'সকাল', '১০০ ৳/ঘণ্টা', 'পার্কের কাছে', 'সকালে ও বিকালে ৩০ মিনিট।'],
  ['ফ্ল্যাট শিফটিং-এ সাহায্য', 'মালপত্র/শিফটিং', 'দৈনিক', 'ছুটির দিন', '৮০০ ৳/দিন', 'যেকোনো এলাকা', 'আসবাব ওঠানো-নামানো।'],
  ['রাতের থালাবাসন ধোয়া', 'থালাবাসন', 'দৈনিক', 'সন্ধ্যা/রাত', '১৫০ ৳/দিন', 'শহর এলাকা', 'রাতের খাওয়ার পর ৩০ মিনিট।'],
  ['ছাদের ট্যাংক ও জানালা পরিষ্কার', 'জানালা/ছাদ পরিষ্কার', 'দৈনিক', 'সকাল', '১,০০০ ৳/কাজ', 'বাড়ি এলাকা', 'মাসে একবার।'],
  ['সবজি কাটা ও মসলা বাটা', 'সবজি কাটা/প্রস্তুতি', 'ঘণ্টা ভিত্তিক', 'সকাল', '১২০ ৳/ঘণ্টা', 'বাসা এলাকা', 'রান্নার আগে প্রস্তুতির কাজ।'],
  ['হাসপাতালে রোগীর সঙ্গী', 'রোগীর সঙ্গী', 'দৈনিক', 'সন্ধ্যা/রাত', '৭০০ ৳/রাত', 'হাসপাতাল এলাকা', 'রাতে রোগীর পাশে থাকা।']
]


  .map(function (a, i) { return { id: i, t: a[0], c: a[1], ty: a[2], s: a[3], p: a[4], l: a[5], d: a[6] } });
const WORKERS = [
  { n: 'রহিমা বেগম', c: 'রান্না', e: '৩+ বছর', p: '01XXXXXXXXX' },
  { n: 'সালমা খাতুন', c: 'ঘর পরিষ্কার', e: '১–২ বছর', p: '01XXXXXXXXX' },
  { n: 'কামাল হোসেন', c: 'বাগান/ছাদবাগান', e: '৩+ বছর', p: '01XXXXXXXXX' },
  { n: 'নাসরিন আক্তার', c: 'বাচ্চা দেখাশোনা', e: '১–২ বছর', p: '01XXXXXXXXX' }];
/* ===== Small helpers ===== */
const $ = id => document.getElementById(id);
const CAT_NAMES = CATS.map(c => c.replace(/^\S+\s/, '')); // "🍳 রান্না" -> "রান্না"
const MAX_SAVED = 50;       // how many saved items we keep per list
const COOLDOWN_MS = 20000;  // minimum gap between two submissions
const BN_DIGITS = '০১২৩৪৫৬৭৮৯';

// Remove control characters, squeeze spaces, cut to a safe length.
function clean(value, max) {
  return String(value ?? '').replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}


// Accepts 01712345678, +8801712345678, ০১৭১২৩৪৫৬৭৮ ... returns "01712345678" or "".
function cleanPhone(value) {
  const digits = String(value ?? '').replace(/[০-৯]/g, d => BN_DIGITS.indexOf(d)).replace(/[\s\-()]/g, '');
  const m = digits.match(/^(?:\+?88)?(01[3-9]\d{8})$/);
  return m ? m[1] : '';
}



// Build elements with textContent only, so user text can never become HTML.
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}



function tags(...labels) {
  const box = el('div');
  labels.forEach(l => box.append(el('span', 'tag', l)));
  return box;
}



function say(id, text, isError) {
  const node = $(id);
  node.textContent = text;
  node.classList.toggle('err', Boolean(isError));
}





// Only accept a <select> value that really is one of its options.
function pick(id) {
  const v = $(id).value;
  return [...$(id).options].some(o => o.value === v) ? v : '';
}




/* ===== Saved data (localStorage) ===== */
const isObj = x => x !== null && typeof x === 'object';
function load(key, sanitize) {
  try {
    const v = JSON.parse(localStorage.getItem(key));
    return Array.isArray(v) ? v.filter(isObj).slice(0, MAX_SAVED).map(sanitize) : [];
  } catch { return []; }
}



function save(key, list) {
  try { localStorage.setItem(key, JSON.stringify(list)); } catch { /* storage full or blocked */ }
}





// Only our own re-encoded JPEG thumbnails are accepted as a picture.
const cleanImg = v => (typeof v === 'string' && v.length <= 60000 && /^data:image\/jpeg;base64,[A-Za-z0-9+/]+={0,2}$/.test(v)) ? v : '';
// Anything read back from storage could have been edited by hand, so re-clean it.
const cleanJob = j => ({
  id: clean(j.id, 24), t: clean(j.t, 80), c: clean(j.c, 40), ty: clean(j.ty, 30),
  s: clean(j.s, 30), p: clean(j.p, 40), l: clean(j.l, 60), d: clean(j.d, 340), tel: cleanPhone(j.tel), img: cleanImg(j.img)
});
const cleanApp = a => ({ jobId: clean(a.jobId, 24), t: clean(a.t, 80), n: clean(a.n, 40), p: clean(a.p, 20), d: clean(a.d, 300) });
const cleanWorker = w => ({ n: clean(w.n, 40), c: clean(w.c, 40), e: clean(w.e, 20), p: clean(w.p, 20) });

let posted = load('pj', cleanJob);
let apps = load('ap', cleanApp);
let myWorkers = load('mw', cleanWorker);
let category = '';
let current = null;   // job being applied to
let opener = null;    // button that opened the dialog (to give focus back)
let lastSubmit = 0;

// Simple spam brake: one submission every 20 seconds.
function cooldownOk(msgId) {
  const left = Math.ceil((COOLDOWN_MS - (Date.now() - lastSubmit)) / 1000);
  if (left > 0) { say(msgId, `একটু অপেক্ষা করুন (${left} সেকেন্ড)।`, true); return false; }
  lastSubmit = Date.now();
  return true;
}







/* ===== Job picture ===== */
const PHOTO_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_PHOTO_BYTES = 5 * 1024 * 1024;  
const PHOTO_SIZE = 160;                  
const PHOTO_ERRORS = {
  type: 'শুধু JPG, PNG বা WebP ছবি দিন।',
  size: 'ছবির সাইজ ৫ MB এর কম হতে হবে।',
  read: 'ছবিটি পড়া যায়নি, অন্য ছবি দিয়ে চেষ্টা করুন।'
};
let pendingPhoto = '';

// Reads the file, crops it to a centred square and re-draws it on a canvas.
// Re-drawing throws away EXIF data (GPS location etc.) and anything hidden in the file.
function readPhoto(file) {
  return new Promise((resolve, reject) => {
    if (!PHOTO_TYPES.includes(file.type)) return reject(new Error('type'));
    if (file.size > MAX_PHOTO_BYTES) return reject(new Error('size'));
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('read'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('read'));
      img.onload = () => {
        if (img.width * img.height > 25e6) return reject(new Error('size')); // decompression-bomb guard
        const side = Math.min(img.width, img.height);
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = PHOTO_SIZE;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, PHOTO_SIZE, PHOTO_SIZE);
        ctx.drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, PHOTO_SIZE, PHOTO_SIZE);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}







function setPhoto(url) {
  pendingPhoto = url;
  let preview = document.createTextNode('📷');
  if (url) { preview = el('img', 'avatar'); preview.src = url; preview.alt = ''; }
  $('pv').replaceChildren(preview);
  $('px').hidden = !url;
}







// Picture shown on a job card: uploaded photo, or the category emoji.
function avatar(job) {
  if (job.img) {
    const pic = el('img', 'avatar');
    pic.src = job.img;
    pic.alt = '';
    pic.loading = 'lazy';
    return pic;
  }
  const i = CAT_NAMES.indexOf(job.c);
  return el('div', 'avatar', i > -1 ? CATS[i].split(' ')[0] : '🏠');
}







/* ===== Rendering ===== */
const allJobs = () => posted.concat(JOBS);

function renderChips() {
  const make = (label, value) => {
    const b = el('button', 'chip' + (category === value ? ' on' : ''), label);
    b.type = 'button';
    b.dataset.c = value;
    return b;
  };
  $('chips').replaceChildren(make('সব', ''), ...CATS.map((c, i) => make(c, CAT_NAMES[i])));
}





function jobCard(j) {
  const card = el('div', 'card');
  const head = el('div', 'card-head');
  head.append(avatar(j), el('h3', '', j.t));
  card.append(head, tags(j.c, j.ty, j.s), el('div', 'pay', j.p),
    el('div', 'mu', '📍 ' + j.l), el('div', 'mu', j.d));
  if (j.tel) {
    const call = el('a', 'mu', '📞 ' + j.tel);
    call.href = 'tel:' + j.tel;
    card.append(call);
  }
  const foot = el('div', 'actions foot');
  const btn = el('button', 'btn', 'আবেদন করুন');
  btn.type = 'button';
  btn.dataset.id = j.id;
  foot.append(btn);
  if (posted.includes(j)) {              // only jobs posted from this browser can be deleted
    const del = el('button', 'btn del', '🗑 মুছুন');
    del.type = 'button';
    del.dataset.del = j.id;
    foot.append(del);
  }
  card.append(foot);
  return card;
}







function renderJobs() {
  const q = $('q').value.trim().toLowerCase(), type = $('ft').value, slot = $('fs').value;
  const hits = allJobs().filter(j =>
    (!category || j.c === category) && (!type || j.ty === type) && (!slot || j.s === slot) &&
    (!q || [j.t, j.l, j.d, j.c].join(' ').toLowerCase().includes(q)));
  $('cnt').textContent = `${hits.length}টি কাজ পাওয়া গেছে`;
  $('list').replaceChildren(...(hits.length ? hits.map(jobCard) : [el('p', 'mu', 'কোনো কাজ পাওয়া যায়নি।')]));
}






function renderWorkers() {
  $('wl').replaceChildren(...WORKERS.concat(myWorkers).map(w => {
    const card = el('div', 'card');
    const tel = cleanPhone(w.p);
    const phone = el(tel ? 'a' : 'div', 'mu', '📞 ' + (tel || w.p));
    if (tel) phone.href = 'tel:' + tel;
    card.append(el('h3', '', w.n), tags(w.c, w.e), phone);
    return card;
  }));
}







function renderApps() {
  $('ml').replaceChildren(...apps.map(a => {
    const card = el('div', 'card');
    card.append(el('h3', '', a.t), el('div', 'mu', `আবেদনকারী: ${a.n} · ${a.p}`), tags('পর্যালোচনায় আছে'));
    return card;
  }));
  $('me').textContent = apps.length ? '' : 'এখনো কোনো আবেদন করেননি।';
}







/* ===== Tabs & dialog ===== */
function showTab(name) {
  document.querySelectorAll('nav button').forEach(b => {
    const on = b.dataset.t === name;
    b.classList.toggle('on', on);
    b.setAttribute('aria-pressed', on);
  });
  document.querySelectorAll('.pane').forEach(p => p.classList.toggle('on', p.id === name));
  if (name === 'workers') renderWorkers();
  if (name === 'mine') renderApps();
}




function openDialog(job, button) {
  current = job;
  opener = button;
  $('mt').textContent = 'আবেদন: ' + job.t;
  ['an', 'ap', 'ad'].forEach(id => { $(id).value = ''; });
  say('am', '');
  $('md').classList.add('on');
  $('an').focus();
}



function closeDialog() {
  $('md').classList.remove('on');
  if (opener) opener.focus();
}










/* ===== Form actions ===== */
function deleteJob(id) {
  const job = posted.find(j => j.id === id);   // sample jobs are not in this list, so they can't be deleted
  if (!job || !confirm(`“${job.t}” কাজটি মুছে ফেলবেন? এটা আর ফেরত আনা যাবে না।`)) return;
  posted = posted.filter(j => j.id !== id);
  save('pj', posted);
  renderJobs();
}







function applyToJob() {
  const name = clean($('an').value, 40), phone = cleanPhone($('ap').value), note = clean($('ad').value, 300);
  if (!current) return;
  if (!name) return say('am', 'আপনার নাম দিন।', true);
  if (!phone) return say('am', 'সঠিক মোবাইল নম্বর দিন (যেমন 01712345678)।', true);
  if (apps.some(a => a.jobId === String(current.id) && a.p === phone)) {
    return say('am', 'এই কাজে আপনি আগেই আবেদন করেছেন।', true);
  }
  if (!cooldownOk('am')) return;
  apps = [cleanApp({ jobId: current.id, t: current.t, n: name, p: phone, d: note }), ...apps].slice(0, MAX_SAVED);
  save('ap', apps);
  say('am', '✅ আবেদন পাঠানো হয়েছে!');
  setTimeout(closeDialog, 900);
}








function postJob() {
  const title = clean($('pt').value, 80), tel = cleanPhone($('pn').value);
  const cat = pick('pc'), type = pick('py'), slot = pick('ps');
  if (title.length < 5) return say('pm', 'শিরোনাম অন্তত ৫ অক্ষরের দিন।', true);
  if (!tel) return say('pm', 'সঠিক মোবাইল নম্বর দিন (যেমন 01712345678)।', true);
  if (!cat || !type || !slot) return say('pm', 'ক্যাটাগরি, ধরন ও সময় বেছে নিন।', true);
  if (!cooldownOk('pm')) return;
  posted = [cleanJob({
    id: 'p' + Date.now(), t: title, c: cat, ty: type, s: slot,
    p: $('pp').value || 'আলোচনা সাপেক্ষে', l: $('pl').value || '—', d: $('pd').value, tel, img: pendingPhoto
  }), ...posted].slice(0, MAX_SAVED);
  save('pj', posted);
  ['pt', 'pp', 'pl', 'pd', 'pn', 'pi'].forEach(id => { $(id).value = ''; });
  setPhoto('');
  say('pm', '✅ কাজ পোস্ট হয়েছে! “কাজ খুঁজুন” ট্যাবে দেখুন।');
  renderJobs();
}





function addWorker() {
  const name = clean($('wn').value, 40), phone = cleanPhone($('wp').value);
  const cat = pick('wc'), exp = pick('we');
  if (!name) return say('wm', 'আপনার নাম দিন।', true);
  if (!phone) return say('wm', 'সঠিক মোবাইল নম্বর দিন (যেমন 01712345678)।', true);
  if (!cat || !exp) return say('wm', 'কাজ ও অভিজ্ঞতা বেছে নিন।', true);
  if (!cooldownOk('wm')) return;
  myWorkers = [cleanWorker({ n: name, c: cat, e: exp, p: phone }), ...myWorkers].slice(0, MAX_SAVED);
  save('mw', myWorkers);
  ['wn', 'wp'].forEach(id => { $(id).value = ''; });
  say('wm', '✅ প্রোফাইল যোগ হয়েছে!');
  renderWorkers();
}



/* ===== Wire everything up ===== */
const options = '<option>' + CAT_NAMES.join('</option><option>') + '</option>'; // built from our own constant list
$('pc').innerHTML = options;
$('wc').innerHTML = options;

document.querySelector('nav').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (b) showTab(b.dataset.t);
});


$('chips').addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  category = chip.dataset.c;
  renderChips();
  renderJobs();
});

['q', 'ft', 'fs'].forEach(id => $(id).addEventListener('input', renderJobs));
$('list').addEventListener('click', e => {
  const del = e.target.closest('[data-del]');
  if (del) return deleteJob(del.dataset.del);
  const b = e.target.closest('[data-id]');
  const job = b && allJobs().find(j => String(j.id) === b.dataset.id);
  if (job) openDialog(job, b);
});


$('as').addEventListener('click', applyToJob);
$('ac').addEventListener('click', closeDialog);
$('md').addEventListener('click', e => { if (e.target === $('md')) closeDialog(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('md').classList.contains('on')) closeDialog(); });
$('pb').addEventListener('click', postJob);
$('wb').addEventListener('click', addWorker);




$('pi').addEventListener('change', async () => {
  const file = $('pi').files[0];
  if (!file) return setPhoto('');
  try {
    setPhoto(await readPhoto(file));
    say('pm', '');
  } catch (err) {
    $('pi').value = '';
    setPhoto('');
    say('pm', PHOTO_ERRORS[err.message] || PHOTO_ERRORS.read, true);
  }
});
$('px').addEventListener('click', () => { $('pi').value = ''; setPhoto(''); });
























showTab('jobs');
renderChips();
renderJobs();






























