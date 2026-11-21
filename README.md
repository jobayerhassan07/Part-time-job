<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'none'; base-uri 'none'; form-action 'none'">
<meta name="referrer" content="no-referrer">
<title>ঘরের কাজ – পার্ট টাইম জব</title>
<link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="jobs.css">
</head>
<body>
<header>
    <div class="w">
        <h1>🏠 ঘরের কাজ</h1>
        <p>বাসাবাড়ির পার্ট টাইম কাজ খুঁজুন অথবা কর্মী নিন – সহজে, দ্রুত</p>
    <nav>
        <button type="button" class="on" data-t="jobs">কাজ খুঁজুন</button>
        <button type="button" data-t="post">কাজ পোস্ট করুন</button>
        <button type="button" data-t="workers">কর্মী খুঁজুন</button>
        <button type="button" data-t="mine">আমার আবেদন</button>
    </nav>
    </div>
</header>

    <main class="w">
<section class="pane on" id="jobs">
    <div class="bar">
<input id="q" maxlength="60" aria-label="কাজ বা এলাকা খুঁজুন" placeholder="🔍 কাজ বা এলাকা লিখুন…">
<select id="ft" aria-label="কাজের ধরন"><option value="">সব ধরন</option><option>দৈনিক</option><option>ঘণ্টা ভিত্তিক</option><option>সাপ্তাহিক</option><option>মাসিক পার্ট টাইম</option></select>
<select id="fs" aria-label="কাজের সময়"><option value="">সময়</option><option>সকাল</option><option>বিকাল</option><option>সন্ধ্যা/রাত</option><option>ছুটির দিন</option></select>
</div>
    <div class="chips" id="chips"></div>
    <div class="mu mb" id="cnt"></div>
    <div class="grid" id="list"></div>
</section>

<section class="pane" id="post">
    <div class="box">
    <h2 class="flush">নতুন কাজ পোস্ট করুন</h2>
    <label for="pi">ছবি (ঐচ্ছিক – প্রোফাইল ছবির মতো)</label>
    <div class="pic">
        <div class="avatar" id="pv" aria-hidden="true">📷</div>
        <input id="pi" type="file" accept="image/jpeg,image/png,image/webp">
        <button type="button" class="chip" id="px" hidden>সরান</button>
    </div>
    <label for="pt">কাজের শিরোনাম</label><input id="pt" maxlength="80" placeholder="যেমন: সপ্তাহে ৩ দিন রান্নার লোক দরকার">
    <div class="row"><div><label for="pc">ক্যাটাগরি</label><select id="pc"></select></div><div><label for="py">ধরন</label><select id="py"><option>দৈনিক</option><option>ঘণ্টা ভিত্তিক</option><option>সাপ্তাহিক</option><option>মাসিক পার্ট টাইম</option></select></div></div>
    <div class="row"><div><label for="pp">বেতন (৳)</label><input id="pp" maxlength="40" placeholder="যেমন: ৫০০/দিন"></div><div><label for="ps">সময়</label><select id="ps"><option>সকাল</option><option>বিকাল</option><option>সন্ধ্যা/রাত</option><option>ছুটির দিন</option></select></div></div>
        <label for="pl">এলাকা</label><input id="pl" maxlength="60" placeholder="এলাকার নাম">
        <label for="pd">বিবরণ</label><textarea id="pd" maxlength="300" rows="3" placeholder="কাজের বিস্তারিত…"></textarea>
        <label for="pn">যোগাযোগ নম্বর</label><input id="pn" maxlength="20" autocomplete="tel" inputmode="tel" placeholder="01XXXXXXXXX">
        <button type="button" class="btn mt" id="pb">পোস্ট করুন</button>
    <div class="ok" id="pm" role="status"></div>
    </div> 
</section>

<section class="pane" id="workers">
    <p class="mu">যারা কাজ খুঁজছেন তাদের তালিকা – সরাসরি যোগাযোগ করুন।</p>
    <div class="grid" id="wl"></div>
    <div class="box gap"><h3 class="flush">আপনি কি কাজ খুঁজছেন? নিজের প্রোফাইল দিন</h3>
    <label for="wn">নাম</label><input id="wn" maxlength="40">
    <div class="row"><div><label for="wc">কী কাজ পারেন</label><select id="wc"></select></div><div><label for="we">অভিজ্ঞতা</label><select id="we"><option>নতুন</option><option>১–২ বছর</option><option>৩+ বছর</option></select></div></div>
    <label for="wp">ফোন</label><input id="wp" maxlength="20" autocomplete="tel" inputmode="tel">
    <button type="button" class="btn mt" id="wb">প্রোফাইল যোগ করুন</button><div class="ok" id="wm" role="status">
    </div>
    </div>
</section>

<section class="pane" id="mine"><div class="grid" id="ml"></div><p class="mu" id="me"></p></section>
</main>

<div class="m" id="md" role="dialog" aria-modal="true" aria-labelledby="mt"><div class="box">
    <h3 id="mt" class="flush"></h3>
    <label for="an">আপনার নাম</label><input id="an" maxlength="40" autocomplete="name">
    <label for="ap">ফোন নম্বর</label><input id="ap" maxlength="20" autocomplete="tel" inputmode="tel" placeholder="01XXXXXXXXX">
    <label for="ad">সংক্ষেপে নিজের কথা</label><textarea id="ad" maxlength="300" rows="3" placeholder="অভিজ্ঞতা, কবে থেকে কাজ করতে পারবেন…"></textarea>
    <div class="actions"><button type="button" class="btn" id="as">আবেদন করুন</button><button type="button" class="chip" id="ac">বাতিল</button></div>
    <div class="ok" id="am" role="status"></div>
    </div>
</div>

<footer>ঘরের কাজ © ২০২৬ – নিরাপদে কাজ করুন, অগ্রিম টাকা দেবেন না।</footer>

<script src="jobs.js" defer></script>
</body>
</html>










































