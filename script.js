(() => {
  /* ===== CONFIG: ganti isi blok ini dengan data sirkelmu ===== */
  const CONFIG = {
    name: 'Solidarity',
    music: 'assets/music/music1.mp3',
    tagline: 'TRUE EVOKERS FACE THE DREAD UPFRONT; COWARDS ONLY WHISPER FROM BEHIND.',
    since: 2026,
    meetups: 47,
    members: [
      { name: 'Zen Auladi', photo: 'assets/images/Zen.jpeg', arc: 'The Hierophat', rn: 'V', role: 'Pencetus Ide', rank: 9, quote: 'Bukan orang bener, tapi beneran orang.', hobby: 'Fotografi' },
      { name: 'Billy', photo: 'assets/images/billy.jpeg', arc: 'The Justice', rn: 'VIII', role: 'A wolf in sheeps clothing', rank: 8, quote: 'Bisikan dari belakang cuma membuktikan bahwa kami di depan.', hobby: 'Baca buku, Game, Musik, dan Ngopi' },
      { name: 'Pandu', photo: 'assets/images/ndu.jpeg', arc: 'The Chariot', rn: 'VII', role: 'Master Ngoding', rank: 7, quote: 'Kejarlah cita-cita, jangan dia yang ngga cinta.', hobby: 'Game dan Musik' },
      { name: 'Naufal', photo: 'assets/images/naufal.jpeg', arc: 'The Lovers', rn: 'VI', role: 'Ambasius', rank: 10, quote: 'A lot has changed, but Im still here.', hobby: 'Musik dan Game' },
      { name: 'Faris', photo: 'assets/images/faris.jpeg', arc: 'The Emperor', rn: 'IV', role: 'Founding Father', rank: 6, quote: 'Try To Be Better.', hobby: 'Game dan Futsal' },
      { name: 'Althaf', photo: 'assets/images/althaf.jpeg', arc: 'The Temperence', rn: 'XIV', role: 'Master ngoding', rank: 8, quote: 'Hidup itu sederhana, kita yang membuatnya rumit.', hobby: 'Game dan Ngoding' },
      { name: 'Kiram', photo: 'assets/images/kiram.jpeg', arc: 'The Strength', rn: 'XI', role: 'Tuan rumah', rank: 8, quote: 'Ga perlu kata-kata, yang penting aksi nyata.', hobby: 'Futsal dan Game' },
      { name: 'Nazmy', photo: 'assets/images/nazmy.jpeg', arc: 'The Magican', rn: 'I', role: 'Reminder tugas', rank: 5, quote: 'Build with intention, refined over time.', hobby: 'Healing, Photoshoot, dan Nugas' },
      { name: 'Syafi', photo: 'assets/members/syafi.jpeg', arc: 'The Hermit', rn: 'IX', role: 'Lost member', rank: 4, quote: '', hobby: '' }
    ],
    events: [
      { at: '2026-11-14T19:00:00+07:00', title: 'Mabar Roblox' },
      { at: '2026-11-24T20:00:00+07:00', title: 'Discord' },
      { at: '2026-12-12T16:00:00+07:00', title: 'Ke Gramedia' },
      { at: '2026-12-24T21:00:00+07:00', title: 'Rapat' },
      { at: '2027-01-02T05:00:00+07:00', title: 'Healing katanya' }
    ],
    gallery: [
      { t: 'Foto with random kid', d: 'Oktober 2026' },
      { t: 'Terbentuknya Solidarity', d: 'Oktober 2026' },
      { t: 'Piknik Pantai', d: 'Oktober 2026' },
      { t: 'Bakar-bakaran', d: 'Oktober 2026' },
      { t: 'Ulang Tahun Raka', d: 'Oktober 2026' },
      { t: 'Purnama Pertama', d: 'November 2026' }
    ],
    contacts: [
      { k: 'Instagram', v: '@sirkel.purnama' },
      { k: 'Discord', v: 'discord.gg/contoh' },
      { k: 'WhatsApp', v: '+62 8xx-xxxx-xxxx' },
      { k: 'Email', v: 'halo@contoh.id' }
    ],
    steps: [
      'Kenalan dulu lewat salah satu anggota.',
      'Ikut satu malam purnama sebagai tamu.',
      'Kalau semua cocok, kamu masuk di rank 1.'
    ],
    rules: [
      'Datang tepat waktu, atau kabari dulu.',
      'Tagihan dibagi rata.',
      'Rahasia sirkel tetap di sirkel.',
      'Ponsel turun saat makan bersama.'
    ],
    about: 'Sirkel ini mulai dari satu ajakan makan malam dadakan. Sekarang kami punya jadwal tetap, aturan sendiri, dan satu tradisi: kumpul setiap bulan purnama.',
    why: 'Purnama gampang diingat, jadi tidak ada alasan lupa tanggal. Malam itu juga jadi penanda bahwa sebulan sudah lewat dan saatnya cerita lagi.',
    timeline: [
      { y: 'Okt 2026', t: 'Pembentukan', d: 'Terbentuknya Solidarity di bulan Oktober.' },
      { y: 'Okt 2026', t: 'Foto', d: 'foto dengan Albi ya ges ya.' },
      { y: 'Okt 2026', t: 'Makan Sriwedari', d: 'Zen langsung sakit.' },
      { y: 'Nov 2026', t: 'Ulang Tahun Kiram', d: 'Ulang tahun pertama member.' },
      { y: 'Kini', t: 'Terus kumpul', d: 'Kursi masih ada satu untuk kamu.' }
    ]
  };

  /* ===== helpers ===== */
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const pad = n => String(n).padStart(2, '0');
  const TZ = 'Asia/Jakarta';
  const keyWIB = d => d.toLocaleDateString('en-CA', { timeZone: TZ });
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const events = CONFIG.events.map(e => ({ ...e, date: new Date(e.at) })).sort((a, b) => a.date - b.date);

  /* ===== moon (mean synodic month, accurate to roughly half a day) ===== */
  const SYN = 29.530588853, EPOCH = Date.UTC(2000, 0, 6, 18, 14), DAY = 864e5;
  const phaseOf = d => { const p = ((d.getTime() - EPOCH) / DAY / SYN) % 1; return p < 0 ? p + 1 : p; };
  const nextFull = from => new Date(EPOCH + (Math.ceil((from.getTime() - EPOCH) / DAY / SYN - .5) + .5) * SYN * DAY);
  function phaseName(p) {
    if (p < .03 || p > .97) return 'Bulan Baru';
    if (p < .22) return 'Sabit Muda';
    if (p < .28) return 'Perempat Pertama';
    if (p < .47) return 'Cembung Muda';
    if (p < .53) return 'Purnama';
    if (p < .72) return 'Cembung Tua';
    if (p < .78) return 'Perempat Akhir';
    return 'Sabit Tua';
  }
  function moonSVG(p, s) {
    const r = s / 2 - 2, c = s / 2, k = Math.cos(2 * Math.PI * p), rx = Math.abs(k) * r, waxing = p < .5;
    const outer = waxing ? 1 : 0, inner = waxing ? (k > 0 ? 0 : 1) : (k > 0 ? 1 : 0);
    const d = `M${c} ${c - r} A${r} ${r} 0 0 ${outer} ${c} ${c + r} A${rx} ${r} 0 0 ${inner} ${c} ${c - r}Z`;
    return `<svg viewBox="0 0 ${s} ${s}" width="${s}" height="${s}" role="img" aria-label="Fase bulan"><circle class="mo-bg" cx="${c}" cy="${c}" r="${r}"/><path class="mo-lit" d="${d}"/></svg>`;
  }

  /* ===== background clock ring ===== */
  (() => {
    const rom = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
    let g = '<circle r="190" stroke-width="2"/><circle r="140" stroke-width="1"/>';
    rom.forEach((t, i) => {
      g += `<g transform="rotate(${i * 30})"><line x1="0" y1="-190" x2="0" y2="-172" stroke-width="3"/><text y="-150" text-anchor="middle">${t}</text></g>`;
    });
    $('#ring').innerHTML = g;
  })();

  /* ===== header ===== */
  $('#circleName').textContent = CONFIG.name;
  document.title = CONFIG.name;
  function drawToday() {
    const n = new Date(), f = o => n.toLocaleDateString('id-ID', { timeZone: TZ, ...o });
    $('#dNum').textContent = f({ day: '2-digit' });
    $('#dDay').textContent = f({ weekday: 'long' });
    $('#dMon').textContent = f({ month: 'short', year: 'numeric' });
    $('#todayMoon').innerHTML = moonSVG(phaseOf(n), 40);
  }
  drawToday();

  /* ===== sound ===== */
  let ac = null, sfxOn = true;
  function blip(f = 880) {
    if (!sfxOn) return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime;
      o.type = 'square';
      o.frequency.setValueAtTime(f, t);
      o.frequency.exponentialRampToValueAtTime(f * 1.5, t + .06);
      g.gain.setValueAtTime(.04, t);
      g.gain.exponentialRampToValueAtTime(.0001, t + .09);
      o.connect(g); g.connect(ac.destination);
      o.start(t); o.stop(t + .1);
    } catch (e) { }
  }
  $('#sfx').addEventListener('click', e => {
    sfxOn = !sfxOn;
    e.currentTarget.setAttribute('aria-pressed', String(sfxOn));
    blip(660);
  });

  /* ===== musik latar: file mp3 kalau ada, kalau tidak musik sintetis ===== */
  let musicOn = true, started = false, bgm = null, useSynth = !CONFIG.music, synthT = null, synthGain = null, synthI = 0;
  const CHORDS = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]];
  const mtof = n => 440 * Math.pow(2, (n - 69) / 12);
  function audioCtx() { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); if (ac.state === 'suspended') ac.resume(); }
  function synthChord() {
    const t = ac.currentTime, ch = CHORDS[synthI++ % CHORDS.length];
    [...ch, ch[0] - 12].forEach((n, k) => {
      const o = ac.createOscillator(), g = ac.createGain(), f = ac.createBiquadFilter();
      o.type = k === 3 ? 'sine' : 'triangle'; o.frequency.value = mtof(n);
      f.type = 'lowpass'; f.frequency.value = 900;
      g.gain.setValueAtTime(.0001, t); g.gain.linearRampToValueAtTime(.5, t + 1.8); g.gain.linearRampToValueAtTime(.0001, t + 5.8);
      o.connect(f); f.connect(g); g.connect(synthGain); o.start(t); o.stop(t + 6);
    });
  }
  function synthStart() {
    if (synthT) return;
    try { audioCtx(); synthGain = ac.createGain(); synthGain.gain.value = .07; synthGain.connect(ac.destination); synthChord(); synthT = setInterval(synthChord, 4000); } catch (e) { }
  }
  function synthStop() { clearInterval(synthT); synthT = null; if (synthGain) { synthGain.disconnect(); synthGain = null; } }
  function musicPlay() {
    if (!musicOn) return;
    started = true;
    if (useSynth) return synthStart();
    if (!bgm) {
      bgm = new Audio(CONFIG.music); bgm.loop = true; bgm.volume = .35;
      bgm.addEventListener('error', () => { useSynth = true; if (musicOn) synthStart(); });
    }
    bgm.play().catch(() => { });
  }
  function musicStop() { if (bgm) bgm.pause(); synthStop(); }
  $('#bgmBtn').addEventListener('click', e => {
    if (!started) { musicPlay(); return; }
    musicOn = !musicOn;
    e.currentTarget.setAttribute('aria-pressed', String(musicOn));
    musicOn ? musicPlay() : musicStop();
  });
  /* browser memblokir suara otomatis, jadi musik mulai di interaksi pertama */
  const kick = e => {
    if (e.target.closest && e.target.closest('#bgmBtn')) return;
    musicPlay(); removeEventListener('pointerdown', kick); removeEventListener('keydown', kick);
  };
  addEventListener('pointerdown', kick); addEventListener('keydown', kick);

  /* ===== toast + copy ===== */
  let toastT;
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 1600);
  }
  function copyText(text, codeEl) {
    const fallback = () => {
      try { const r = document.createRange(); r.selectNodeContents(codeEl); const s = getSelection(); s.removeAllRanges(); s.addRange(r); } catch (e) { }
      toast('Teks terpilih, tekan salin');
    };
    try { navigator.clipboard.writeText(text).then(() => toast('Tersalin'), fallback); } catch (e) { fallback(); }
  }

  /* ===== screens ===== */
  let selMember = 0, month = null, selDay = null, timer = null;

  function ransom(text) {
    let i = 0;
    return text.toUpperCase().split(' ').map(w =>
      `<span class="w">${[...w].map(ch => `<span class="l l${(i++) % 4}">${esc(ch)}</span>`).join('')}</span>`).join(' ');
  }
  const fmtEvent = d => d.toLocaleString('id-ID', { timeZone: TZ, weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hour12: false }) + ' WIB';

  function homeHTML() {
    const now = new Date(), p = phaseOf(now), lit = Math.round((1 - Math.cos(2 * Math.PI * p)) / 2 * 100), nf = nextFull(now);
    const nfTxt = nf.toLocaleDateString('id-ID', { timeZone: TZ, weekday: 'long', day: 'numeric', month: 'long' });
    return `
  <p class="kicker">Selamat datang di</p>
  <h1 class="ransom" aria-label="${esc(CONFIG.name)}">${ransom(CONFIG.name)}</h1>
  <p class="tagline">${esc(CONFIG.tagline)}</p>
  <div class="row">
    <div class="box"><h3>Bulan malam ini</h3>
      <div class="moonrow">${moonSVG(p, 76)}
        <div><p class="big">${phaseName(p)}</p>
        <p class="small">Terang ${lit}%</p>
        <p class="small">Purnama berikutnya sekitar ${nfTxt}</p></div></div></div>
    <div class="box"><h3>Kumpul berikutnya</h3><div id="nextEv"></div></div>
  </div>
  <ul class="facts">
    <li><b>${CONFIG.since}</b><span>Sejak</span></li>
    <li><b>${CONFIG.members.length}</b><span>Anggota</span></li>
    <li><b>${CONFIG.meetups}</b><span>Kali kumpul</span></li>
  </ul>`;
  }
  function tickHome() {
    const el = $('#nextEv'); if (!el) return;
    const now = new Date(), ev = events.find(e => e.date > now);
    if (!ev) { el.innerHTML = '<p class="big">Belum ada jadwal</p><p class="small">Tambahkan di menu Jadwal.</p>'; return; }
    let s = Math.max(0, Math.floor((ev.date - now) / 1000));
    const d = Math.floor(s / 86400); s %= 86400;
    const h = Math.floor(s / 3600); s %= 3600;
    const m = Math.floor(s / 60); s %= 60;
    el.innerHTML = `<p class="big">${esc(ev.title)}</p><p class="small">${fmtEvent(ev.date)}</p>
    <div class="cd"><div><b>${pad(d)}</b><i>hari</i></div><div><b>${pad(h)}</b><i>jam</i></div><div><b>${pad(m)}</b><i>menit</i></div><div><b>${pad(s)}</b><i>detik</i></div></div>`;
  }

  const photo = (m, cls = '') => `<span class="ph ${cls}"><b aria-hidden="true">${esc(m.name[0])}</b><img src="${esc(m.photo || '')}" alt="Foto ${esc(m.name)}" loading="lazy"></span>`;
  function memberDetail(i) {
    const m = CONFIG.members[i];
    return `<span class="rnbig" aria-hidden="true">${esc(m.rn)}</span><div class="dwrap">${photo(m, 'dph')}<div><span class="big">${esc(m.name)}</span>
    <p class="small">Arcana ${esc(m.rn)} · ${esc(m.arc)} · Rank ${m.rank} dari 10</p>
    <p><b>${esc(m.role)}</b>. Hobi: ${esc(m.hobby)}.</p>
    <q>“${esc(m.quote)}”</q>
    <button class="cp" type="button" data-act="rankup" ${m.rank >= 10 ? 'disabled' : ''}>${m.rank >= 10 ? 'Rank maksimal' : 'Nongkrong bareng: rank up'}</button>
    <p class="small" style="margin-top:8px">Rank hanya bertambah selama halaman ini terbuka.</p></div></div>`;
  }
  function membersHTML() {
    return `<p class="kicker">Social Link</p><h2 class="h2">Anggota</h2>
  <p class="lead">Setiap orang punya Arcana dan rank. Rank naik tiap kali kalian nongkrong bareng.</p>
  <div class="cards">${CONFIG.members.map((m, i) => `
    <button class="card" type="button" data-act="member" data-i="${i}" aria-pressed="${i === selMember}">
      ${photo(m)}<span class="rn" aria-hidden="true">${esc(m.rn)}</span>
      <span class="nm">${esc(m.name)}</span><span class="ar">${esc(m.arc)}</span>
      <span class="pips" aria-label="Rank ${m.rank} dari 10">${Array.from({ length: 10 }, (_, k) => `<i class="${k < m.rank ? 'on' : ''}"></i>`).join('')}</span>
    </button>`).join('')}</div>
  <div class="detail" id="detail">${memberDetail(selMember)}</div>`;
  }

  function scheduleHTML() {
    const y = month.getUTCFullYear(), mo = month.getUTCMonth();
    const dow = (new Date(Date.UTC(y, mo, 1)).getUTCDay() + 6) % 7, dim = new Date(Date.UTC(y, mo + 1, 0)).getUTCDate();
    const evMap = {}; events.forEach(e => (evMap[keyWIB(e.date)] ||= []).push(e));
    const fm = {}, n0 = Math.floor((Date.UTC(y, mo, 1) - EPOCH) / DAY / SYN - .5) - 1;
    for (let n = n0; n < n0 + 4; n++) { const t = new Date(EPOCH + (n + .5) * SYN * DAY); fm[keyWIB(t)] = t; }
    const todayK = keyWIB(new Date());
    let cells = '';
    for (let i = 0; i < dow; i++) cells += '<span class="day blank"></span>';
    for (let d = 1; d <= dim; d++) {
      const k = `${y}-${pad(mo + 1)}-${pad(d)}`;
      cells += `<button class="day${k === todayK ? ' today' : ''}${k === selDay ? ' sel' : ''}" type="button" data-act="day" data-k="${k}" aria-label="${d}${evMap[k] ? ', ada jadwal' : ''}${fm[k] ? ', bulan purnama' : ''}">${d}${evMap[k] ? '<span class="ev"></span>' : ''}${fm[k] ? '<span class="fm"></span>' : ''}</button>`;
    }
    let info;
    if (evMap[selDay]) info = evMap[selDay].map(e => `<li><time>${fmtEvent(e.date)}</time><span>${esc(e.title)}</span></li>`).join('');
    else if (fm[selDay]) info = `<li><time>Purnama</time><span>Bulan purnama sekitar pukul ${fm[selDay].toLocaleTimeString('id-ID', { timeZone: TZ, hour: '2-digit', minute: '2-digit', hour12: false })} WIB. Belum ada jadwal.</span></li>`;
    else info = '<li><time>Kosong</time><span>Belum ada jadwal di tanggal ini.</span></li>';
    const upcoming = events.filter(e => e.date > new Date()).slice(0, 4);
    return `<p class="kicker">Kalender</p><h2 class="h2">Jadwal</h2>
  <div class="mnav"><button class="nb" type="button" data-act="prev" aria-label="Bulan sebelumnya">◀</button>
    <span class="big">${month.toLocaleDateString('id-ID', { month: 'long', year: 'numeric', timeZone: 'UTC' })}</span>
    <button class="nb" type="button" data-act="next" aria-label="Bulan berikutnya">▶</button></div>
  <div class="cal">${['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map(w => `<span class="wd">${w}</span>`).join('')}${cells}</div>
  <p class="legend"><span><i class="d1"></i>Jadwal sirkel</span><span><i class="d2"></i>Bulan purnama</span></p>
  <ul class="ulist" style="margin-bottom:22px">${info}</ul>
  <div class="box"><h3>Mendatang</h3><ul class="ulist">${upcoming.length ? upcoming.map(e => `<li><time>${fmtEvent(e.date)}</time><span>${esc(e.title)}</span></li>`).join('') : '<li><span>Belum ada jadwal.</span></li>'}</ul></div>`;
  }

  const PATTERNS = [
    'linear-gradient(135deg,var(--royal),var(--cyan))',
    'radial-gradient(circle at 70% 30%,var(--moon) 0 11%,transparent 12%),linear-gradient(180deg,var(--deep),var(--royal))',
    'repeating-linear-gradient(120deg,var(--royal) 0 18px,var(--deep) 18px 36px)',
    'conic-gradient(from 200deg at 30% 70%,var(--cyan),var(--royal),var(--deep),var(--cyan))',
    'linear-gradient(160deg,var(--deep) 40%,var(--cyan) 40% 46%,var(--royal) 46%)',
    'radial-gradient(circle at 20% 80%,var(--cyan) 0 20%,transparent 21%),radial-gradient(circle at 80% 20%,var(--ice) 0 8%,transparent 9%),var(--deep)'
  ];
  function galleryHTML() {
    return `<p class="kicker">Kenangan</p><h2 class="h2">Galeri</h2>
  <p class="lead">Momen-momen yang bikin sirkel ini ada. Tiap kotak akan diganti foto aslinya. Klik untuk memperbesar.</p>
  <div class="tiles">${CONFIG.gallery.map((g, i) => `
    <figure class="tile" role="button" tabindex="0" data-act="photo" data-i="${i}" aria-label="Perbesar foto ${esc(g.t)}" style="margin:0;background-image:${g.img ? `url(${g.img})` : PATTERNS[i % PATTERNS.length]}">
      ${g.img ? '' : '<span class="ex">Foto contoh</span>'}
      <figcaption class="cap"><b>${esc(g.t)}</b><span>${esc(g.d)}</span></figcaption></figure>`).join('')}</div>`;
  }

  function aboutHTML() {
    return `<p class="kicker">Cerita kami</p><h2 class="h2">Tentang</h2>
  <p class="lead">${esc(CONFIG.about)}</p>
  <ol class="tl">${CONFIG.timeline.map(x => `<li><time>${esc(x.y)}</time><b>${esc(x.t)}</b><p>${esc(x.d)}</p></li>`).join('')}</ol>
  <div class="box"><h3>Kenapa bulan purnama?</h3><p style="margin:0">${esc(CONFIG.why)}</p></div>`;
  }

  function contactHTML() {
    return `<p class="kicker">Gabung</p><h2 class="h2">Kontak</h2>
  <p class="lead">Mau ikut nongkrong? Hubungi kami lewat salah satu jalur ini.</p>
  <div class="two">
    <div class="box"><h3>Hubungi</h3><ul class="ch">${CONFIG.contacts.map((c, i) => `
      <li><div><small>${esc(c.k)}</small><code id="cc${i}">${esc(c.v)}</code></div>
      <button class="cp" type="button" data-act="copy" data-i="${i}">Salin</button></li>`).join('')}</ul></div>
    <div class="box"><h3>Cara bergabung</h3><ol class="steps">${CONFIG.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol></div>
  </div>
  <div class="box"><h3>Aturan sirkel</h3><ul class="rules">${CONFIG.rules.map(r => `<li>${esc(r)}</li>`).join('')}</ul></div>`;
  }

  const SCREENS = [
    { id: 'home', slug: 'beranda', label: 'Beranda', html: homeHTML, after() { tickHome(); timer = setInterval(tickHome, 1000); } },
    { id: 'members', slug: 'anggota', label: 'Anggota', html: membersHTML },
    { id: 'schedule', slug: 'jadwal', label: 'Jadwal', html: scheduleHTML },
    { id: 'gallery', slug: 'galeri', label: 'Galeri', html: galleryHTML },
    { id: 'about', slug: 'tentang', label: 'Tentang', html: aboutHTML },
    { id: 'contact', slug: 'kontak', label: 'Kontak', html: contactHTML }
  ];

  /* ===== lightbox + stamp ===== */
  let lbI = -1, lbFrom = null;
  function lbShow(i) {
    const n = CONFIG.gallery.length, g = CONFIG.gallery[lbI = (i + n) % n];
    $('#lbimg').style.backgroundImage = g.img ? `url(${g.img})` : PATTERNS[lbI % PATTERNS.length];
    $('#lbcap').innerHTML = `<b>${esc(g.t)}</b><span>${esc(g.d)} · ${lbI + 1} dari ${n}</span>`;
  }
  function lbOpen(i, from) { lbFrom = from; $('#lb').hidden = false; lbShow(i); $('#lbclose').focus(); }
  function lbClose() { $('#lb').hidden = true; lbI = -1; if (lbFrom) lbFrom.focus({ preventScroll: true }); }
  $('#lb').addEventListener('click', e => {
    const b = e.target.closest('[data-lb]');
    if (b) { blip(900); b.dataset.lb === 'close' ? lbClose() : lbShow(lbI + (b.dataset.lb === 'next' ? 1 : -1)); }
    else if (e.target === e.currentTarget) lbClose();
  });
  function stamp(txt) {
    const d = document.createElement('div'); d.className = 'stamp'; d.textContent = txt; $('#panel').appendChild(d);
    setTimeout(() => d.remove(), 1100);
  }

  /* ===== navigation ===== */
  const menu = $('#menu'), inner = $('#inner'), wipe = $('#wipe');
  let cur = -1;
  menu.innerHTML = SCREENS.map((s, i) => `<button class="mi" type="button" style="--i:${i}" data-go="${i}"><span>${s.label}</span></button>`).join('');
  const items = [...menu.querySelectorAll('.mi')];

  function paint(i) {
    clearInterval(timer);
    if (SCREENS[i].id === 'schedule' && !month) {
      const t = new Date(); month = new Date(Date.UTC(+keyWIB(t).slice(0, 4), +keyWIB(t).slice(5, 7) - 1, 1));
      const nx = events.find(e => e.date > t); selDay = keyWIB(nx ? nx.date : t);
    }
    inner.innerHTML = SCREENS[i].html();
    SCREENS[i].after && SCREENS[i].after();
  }
  function go(i, opts = {}) {
    if (i < 0 || i >= SCREENS.length || i === cur) return;
    const first = cur === -1;
    cur = i;
    items.forEach((b, k) => b.setAttribute('aria-current', String(k === i)));
    if (matchMedia('(max-width:860px)').matches && !first) items[i].scrollIntoView({ block: 'nearest', inline: 'center' });
    if (!opts.silent) { const h = '#' + SCREENS[i].slug; if (location.hash !== h) location.hash = h; }
    if (first || reduce) { paint(i); return; }
    wipe.classList.remove('go'); void wipe.offsetWidth; wipe.classList.add('go');
    setTimeout(() => { if (cur === i) paint(i); }, 270);
  }

  menu.addEventListener('click', e => {
    const b = e.target.closest('[data-go]'); if (!b) return;
    blip(880); go(+b.dataset.go);
  });
  addEventListener('hashchange', () => {
    const i = SCREENS.findIndex(s => '#' + s.slug === location.hash);
    if (i > -1 && i !== cur) go(i, { silent: true });
  });
  document.addEventListener('keydown', e => {
    if (!$('#lb').hidden) {
      if (e.key === 'Escape') lbClose();
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { blip(1000); lbShow(lbI + (e.key === 'ArrowRight' ? 1 : -1)); }
      else if (e.key === 'Tab') {
        e.preventDefault(); const b = [...$('#lb').querySelectorAll('button')], k = b.indexOf(document.activeElement);
        b[(k + (e.shiftKey ? -1 : 1) + b.length) % b.length].focus();
      }
      return;
    }
    const a = document.activeElement, free = a === document.body || (a && a.classList.contains('mi'));
    if ((e.key === 'Enter' || e.key === ' ') && a && a.dataset && a.dataset.act === 'photo') {
      e.preventDefault(); blip(1200); lbOpen(+a.dataset.i, a); return;
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (!free) return;
      e.preventDefault(); blip(1000);
      const n = (cur + (e.key === 'ArrowDown' ? 1 : -1) + SCREENS.length) % SCREENS.length;
      go(n); items[n].focus({ preventScroll: true });
    } else if (e.key === 'Enter' && a && a.classList.contains('mi')) {
      blip(1200); setTimeout(() => inner.focus({ preventScroll: true }), 300);
    } else if (e.key === 'Escape') {
      blip(600); go(0); items[0].focus({ preventScroll: true });
    }
  });

  inner.addEventListener('error', e => {
    if (e.target.tagName === 'IMG' && e.target.closest('.ph')) e.target.closest('.ph').classList.add('no');
  }, true);

  inner.addEventListener('click', e => {
    const t = e.target.closest('[data-act]'); if (!t) return;
    const act = t.dataset.act;
    blip(act === 'copy' ? 1200 : 900);
    if (act === 'member') {
      selMember = +t.dataset.i;
      inner.querySelectorAll('.card').forEach((c, k) => c.setAttribute('aria-pressed', String(k === selMember)));
      const d = $('#detail'); d.innerHTML = memberDetail(selMember);
      d.classList.remove('pop'); void d.offsetWidth; d.classList.add('pop');
    } else if (act === 'copy') {
      const i = +t.dataset.i; copyText(CONFIG.contacts[i].v, $('#cc' + i));
    } else if (act === 'photo') {
      lbOpen(+t.dataset.i, t);
    } else if (act === 'rankup') {
      const m = CONFIG.members[selMember];
      if (m.rank < 10) {
        m.rank++; inner.innerHTML = membersHTML();
        const b = inner.querySelector('[data-act="rankup"]'); if (b) b.focus({ preventScroll: true });
        stamp(m.rank >= 10 ? 'Rank maksimal!' : 'Rank up!');
      }
    } else {
      if (act === 'prev') month = new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth() - 1, 1));
      if (act === 'next') month = new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth() + 1, 1));
      if (act === 'day') selDay = t.dataset.k;
      inner.innerHTML = scheduleHTML();
      const again = act === 'day' ? `[data-k="${selDay}"]` : `[data-act="${act}"]`;
      const el = inner.querySelector(again); if (el) el.focus({ preventScroll: true });
    }
  });

  const start = SCREENS.findIndex(s => '#' + s.slug === location.hash);
  go(start > -1 ? start : 0, { silent: true });
})();
