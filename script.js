// ── RECIPE DATA ──────────────────────────────────────────────────────────────

const recipes = {

  r4: {
    origin:   'Colombia · La Cabana',
    name:     'Sweet Washed Iced V60',
    roaster:  'Local Roaster · La Cabana',
    process:  'Washed',
    method:   'Iced V60',
    approved: false,
    params: [
      { l: 'Coffee',           v: '17 g' },
      { l: 'Hot water',        v: '170 ml' },
      { l: 'Ice (in server)',  v: '85 g' },
      { l: 'Temperature',      v: '94 °C' },
      { l: 'Grind',            v: 'Medium-fine' },
      { l: 'Total time',       v: '3:00 min' },
    ],
    steps: [
      '<strong>SETUP</strong> · Place 85 g of ice directly into your server or cup beneath the V60. The ice is part of the recipe — it melts into the final brew volume (~255 ml total). Rinse the filter with hot water and discard.',
      'Grind 17 g at medium-fine. Slightly finer than a hot V60 — the concentrated brew needs a bit more extraction to compensate for the dilution from the ice.',
      'Add grounds, level the bed, tare your scale.',
      '<strong>BLOOM — 0:00 to 0:45</strong> · Pour 50 ml at 94 °C in a slow center spiral. The higher temp (vs. hot brew) is intentional — you need full extraction since only 170 ml of hot water is used. Stir once. Wait 45 seconds.',
      '<strong>POUR 1 — 0:45 to 1:20</strong> · Pour to 100 ml total in tight concentric circles. The concentrated brew will drip directly onto the ice below — you\'ll hear it hit and see steam rise. This is correct.',
      '<strong>POUR 2 — 1:30 to 2:00</strong> · Continue to 140 ml total. Keep pours slow and steady — the smaller water volume means every pour has more impact on extraction.',
      '<strong>POUR 3 — 2:05 to 2:25</strong> · Final pour to 170 ml. End with a slow center pour.',
      '<strong>DRAIN — 2:25 to 3:00</strong> · Let draw down fully. Swirl the server gently to help melt the ice evenly into the concentrate. Serve immediately over the remaining ice.',
    ],
    notes: 'This is the Japanese iced pour over method — brew hot and concentrated directly onto ice. The rapid chilling locks in the green apple and strawberry aromatics that would fade if the coffee cooled slowly. The total brew volume after ice melt is ~250 ml. Do not add more ice to the cup — the recipe accounts for dilution. The washed process makes this exceptionally clean and bright on ice.',
  },

  r5: {
    origin:   'Colombia · La Cabana',
    name:     'Caramel Shot Iced Espresso',
    roaster:  'Local Roaster · DeLonghi Dedica',
    process:  'Washed',
    method:   'Iced Espresso',
    approved: false,
    params: [
      { l: 'Dose (in)',   v: '17 g' },
      { l: 'Yield (out)', v: '34 g' },
      { l: 'Ice in cup',  v: '60–80 g' },
      { l: 'Temperature', v: '94 °C' },
      { l: 'Grind',       v: 'Fine' },
      { l: 'Shot time',   v: '28–32 s' },
    ],
    steps: [
      '<strong>SETUP</strong> · Fill your serving glass with 60–80 g of ice before pulling the shot. The shot goes directly over the ice — no waiting, no cooling separately.',
      '<strong>DOSE & DISTRIBUTE</strong> · Weigh 17 g into the portafilter. Distribute evenly — WDT or a light tap. An even puck is even more important for iced espresso since any channeling produces sour notes that are harsh cold.',
      '<strong>TAMP</strong> · Tamp straight and firm at ~15 kg. Consistent tamp = consistent flow = no bitter channels.',
      '<strong>PULL</strong> · Place the ice-filled glass under the portafilter spout. Start timer and brew. First drop at 6–8 s. Pull to exactly 34 g between 28–32 s. Stop at 34 g — do not go longer.',
      '<strong>CHILL & SERVE</strong> · The hot shot hits the ice and chills instantly. Swirl the glass once to distribute. The ice melts slightly into the shot, diluting it to the right drinking strength. Drink within 2 minutes — iced espresso oxidizes fast.',
      '<strong>EVALUATE</strong> · Color should be deep amber. Taste: caramel sweetness, bright green apple, clean finish — no bitterness. If sour → grind finer. If bitter → grind coarser or reduce yield to 30 g.',
    ],
    notes: 'Pulling espresso directly over ice is the fastest and cleanest iced coffee method. The shock-chilling from the ice locks in the caramel and apple sweetness of this washed Colombian while killing any potential bitterness. Use large, dense ice cubes — small cubes melt too fast and over-dilute. This recipe does not need milk or sweetener.',
  },

  r6: {
    origin:   'Costa Rica · El Mango',
    name:     'Tropical Honey Iced AeroPress',
    roaster:  'ضحى محمصة · El Mango',
    process:  'Honey',
    method:   'Iced AeroPress',
    approved: false,
    params: [
      { l: 'Coffee',         v: '20 g' },
      { l: 'Hot water',      v: '140 ml' },
      { l: 'Ice (in cup)',   v: '80 g' },
      { l: 'Temperature',    v: '88 °C' },
      { l: 'Grind',          v: 'Medium-fine' },
      { l: 'Total time',     v: '2:30 min' },
    ],
    steps: [
      '<strong>SETUP</strong> · Place 80 g of ice into your serving glass. Set AeroPress up in inverted position. Pre-rinse paper filter in cap. The AeroPress will press concentrated coffee directly onto the ice.',
      'Grind 20 g at medium-fine. Slightly finer than a hot AeroPress brew to compensate for the reduced water volume (140 ml instead of 220 ml).',
      '<strong>POUR — 0:00 to 0:20</strong> · Pour all 140 ml at 88 °C in a slow spiral. The lower temp protects the honey-process mango and blueberry aromatics — critical on an iced brew where these notes are the star.',
      '<strong>STIR — 0:20 to 0:30</strong> · Stir 12 times firmly. The concentrated brew needs full saturation — no dry grounds.',
      '<strong>STEEP — 0:30 to 1:45</strong> · Attach cap firmly. Steep undisturbed for 75 seconds. The longer steep on a smaller volume extracts the honey-process sweetness fully.',
      '<strong>FLIP — 1:45</strong> · Flip the AeroPress confidently directly over the ice-filled glass.',
      '<strong>PRESS — 1:45 to 2:30</strong> · Press slowly and steadily over 45 seconds directly onto the ice. The hot concentrate hits the ice and chills instantly. Stop at the hiss. Swirl gently — the ice melts into the concentrate to reach drinking strength.',
    ],
    notes: 'This iced AeroPress uses a concentrated brew ratio (20 g / 140 ml) that accounts for ice dilution. The result is a 220 ml iced drink after the ice melts — full-bodied, syrupy, and tropical. The honey process on El Mango makes this the sweetest iced coffee in the collection: mango and blueberry flavors are amplified by the cold, not dulled. Never add extra ice to the finished drink — the dilution is calibrated.',
  },

  r7: {
    origin:   'Costa Rica · El Mango',
    name:     'Mango Honey Iced Espresso',
    roaster:  'ضحى محمصة · DeLonghi Dedica',
    process:  'Honey',
    method:   'Iced Espresso',
    approved: false,
    params: [
      { l: 'Dose (in)',   v: '17 g' },
      { l: 'Yield (out)', v: '38 g' },
      { l: 'Ice in cup',  v: '60–80 g' },
      { l: 'Temperature', v: '92 °C' },
      { l: 'Grind',       v: 'Fine' },
      { l: 'Shot time',   v: '30–34 s' },
    ],
    steps: [
      '<strong>SETUP</strong> · Fill serving glass with 60–80 g of large ice cubes. Warm Dedica 15+ minutes. Run a flush shot. Keep the portafilter and basket very clean — honey-process oils accumulate fast and add bitterness.',
      '<strong>DOSE & DISTRIBUTE</strong> · Weigh 17 g. WDT is essential — honey-process grounds clump more than washed. Eliminate all dry pockets before tamping.',
      '<strong>TAMP</strong> · Tamp straight and firm. The honey-process puck is denser — ensure the seal is even across the entire basket.',
      '<strong>PULL</strong> · Place the ice-filled glass under the spout. Start timer, begin brew. First drop at 7–9 s. Pull to 38 g between 30–34 s. The hot shot lands directly on the ice and flash-chills.',
      '<strong>CHILL & SERVE</strong> · Swirl immediately. The mango and blueberry flavors intensify as the shot cools rapidly. Drink within 2 minutes. The ice will continue melting — do not let it sit.',
      '<strong>EVALUATE</strong> · Deep amber color, dense texture. Taste: honey sweetness entry, mango mid-palate, blueberry in the cold finish. If over-diluted → use fewer, larger ice cubes. If bitter → grind coarser.',
    ],
    notes: 'The honey-process El Mango is the most naturally sweet bean in this collection and is exceptional as an iced espresso. The cold amplifies the tropical mango and blueberry notes while completely suppressing any bitter edges. Running the Dedica at 92 °C (slightly cooler) protects the fruit aromatics during extraction. Use the largest ice cubes available — large cubes melt slowly, controlling dilution precisely. This is a standalone drink — no milk needed.',
  },

  r8: {
    origin:   'Ethiopia · Chelchele',
    name:     'Wild Yeast Iced V60',
    roaster:  'Caffeine Batch · Chelchele',
    process:  'Yeast',
    method:   'Iced V60',
    approved: false,
    params: [
      { l: 'Coffee',          v: '16 g' },
      { l: 'Hot water',       v: '160 ml' },
      { l: 'Ice (in server)', v: '80 g' },
      { l: 'Temperature',     v: '93 °C' },
      { l: 'Grind',           v: 'Medium-fine' },
      { l: 'Total time',      v: '2:45 min' },
    ],
    steps: [
      '<strong>SETUP</strong> · Place 80 g of ice in your server or cup. Rinse filter, discard water. The yeast-process Chelchele is naturally light-bodied — the iced Japanese method and 1:15 effective ratio (after melt) build sweetness without needing more water.',
      'Grind 16 g at medium-fine, slightly finer than a standard hot V60. The concentrated brew needs a bit more extraction surface to compensate for the smaller water volume.',
      'Add grounds, level bed, tare scale.',
      '<strong>BLOOM — 0:00 to 0:50</strong> · Pour 48 ml at 93 °C in a tight center spiral. Wait the full 50 seconds — yeast-process coffee releases CO₂ very aggressively. A full bloom is non-negotiable or the first pour will be uneven.',
      '<strong>POUR 1 — 0:50 to 1:20</strong> · Pour to 100 ml total in slow, tight circles. Concentrated pours — keep them controlled. The coffee dripping onto ice below will look very dark. This is correct.',
      '<strong>POUR 2 — 1:30 to 1:55</strong> · Continue to 135 ml. Very slow, no turbulence. The yeast process makes this bean sensitive to agitation — rough pours = funky extraction.',
      '<strong>POUR 3 — 2:00 to 2:15</strong> · Final pour to 160 ml total. A gentle center finish.',
      '<strong>DRAIN — 2:15 to 2:45</strong> · Let draw down fully. Swirl the server to blend concentrate with ice melt. The cold immediately tames the yeast character and amplifies the blueberry and red apple. Serve immediately.',
    ],
    notes: 'The Chelchele yeast process on ice is a revelation — the cold eliminates any risk of the fermentation character turning funky, leaving only the blueberry, red apple, and orange blossom notes. At 93 °C (slightly higher than the hot version) the concentrated extraction is full and sweet. Total volume after ice melt is ~235 ml. The Heirloom Hurlijum variety adds a floral complexity that is best appreciated cold. This is the most complex-tasting iced coffee in the collection.',
  },

  r9: {
    origin:   'Ethiopia · Chelchele',
    name:     'Fermented Fruit Iced Espresso',
    roaster:  'Caffeine Batch · DeLonghi Dedica',
    process:  'Yeast',
    method:   'Iced Espresso',
    approved: false,
    params: [
      { l: 'Dose (in)',   v: '17 g' },
      { l: 'Yield (out)', v: '40 g' },
      { l: 'Ice in cup',  v: '60–80 g' },
      { l: 'Temperature', v: '91 °C' },
      { l: 'Grind',       v: 'Fine' },
      { l: 'Shot time',   v: '32–36 s' },
    ],
    steps: [
      '<strong>SETUP</strong> · Fill serving glass with 60–80 g of large ice. Run two flush shots on the Dedica — yeast-process residue in the group head ruins the shot. The portafilter basket must be perfectly clean.',
      '<strong>DOSE & DISTRIBUTE</strong> · 17 g exactly. WDT is essential — this light-roasted, dense bean clumps significantly. Stir thoroughly with a thin needle before tamping to eliminate any dry channels.',
      '<strong>TAMP</strong> · Tamp level and firm. Any angle = channeling = sour yeast taste in the cup. Take your time here.',
      '<strong>PULL</strong> · Place ice glass under the spout. Start timer. First drop at 8–10 s (normal for a dense light roast). Pull to 40 g between 32–36 s. The shot falls directly onto ice and chills instantly.',
      '<strong>CHILL & SERVE</strong> · Swirl the glass immediately. The rapid chilling kills the yeast fermentation edge and unlocks the blueberry jam and orange blossom in the cold. Drink within 90 seconds — this shot evolves fast on ice.',
      '<strong>EVALUATE</strong> · Light amber crema (normal for light roast), complex aroma. Taste: blueberry sweetness, tamarind depth, orange blossom finish. If yeast/sour → pull to 42 g next time. If flat → grind finer.',
    ],
    notes: 'The Chelchele yeast-process iced espresso is the boldest and most complex shot in this collection. The cold is essential — it neutralizes the fermentation character that can dominate at room temperature and brings the blueberry, red apple, and tamarind into sharp focus. The 1:2.35 ratio (40 g yield) is longer than classic specifically to dilute the yeast fermentation flavor while keeping the fruit notes concentrated. On ice this becomes a perfectly balanced, fruit-forward espresso.',
  },

};

// ── MODAL ────────────────────────────────────────────────────────────────────

function openModal(id) {
  const r = recipes[id];
  if (!r) return;

  document.getElementById('m-origin').textContent  = r.origin;
  document.getElementById('m-name').textContent    = r.name;
  document.getElementById('m-roaster').textContent = r.roaster;

  const paramsHtml = r.params.map(p =>
    `<div class="full-param">
       <div class="param-label">${p.l}</div>
       <div class="param-value">${p.v}</div>
     </div>`
  ).join('');

  const stepsHtml = r.steps.map((s, i) =>
    `<li class="step-item">
       <span class="step-num">${String(i + 1).padStart(2, '0')}</span>
       <span class="step-text">${s}</span>
     </li>`
  ).join('');

  const tagsHtml = `
    <div class="card-tags" style="margin-bottom:0">
      <span class="tag tag-process">${r.process}</span>
      <span class="tag tag-method">${r.method}</span>
      <span class="tag" style="background:#ddeef7;color:#1a4f6e">🧊 Iced</span>
      ${r.approved ? '<span class="tag tag-approved">★ Approved</span>' : ''}
    </div>`;

  document.getElementById('modal-body').innerHTML = `
    ${tagsHtml}
    <div class="section-title" style="margin-top:20px">Parameters</div>
    <div class="full-params">${paramsHtml}</div>
    <div class="section-title">Brew Steps</div>
    <ul class="step-list">${stepsHtml}</ul>
    <div class="section-title">Tasting Notes</div>
    <p style="font-size:13.5px;line-height:1.7;color:#3d342c">${r.notes}</p>
  `;

  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal')) return;
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

// ── FILTERS ──────────────────────────────────────────────────────────────────

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const f = btn.dataset.filter;

    document.querySelectorAll('.card').forEach(card => {
      const show =
        f === 'all'      ? true :
        f === 'approved' ? card.dataset.approved === 'true' :
        f === 'espresso' ? card.dataset.type === 'espresso' :
        card.dataset.origin === f || card.dataset.process === f;

      card.classList.toggle('hidden', !show);
    });
  });
});
