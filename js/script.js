/*
 * BILDETEKSTER
 * Endre bare teksten etter filnavnet. Eksempel:
 * ['stue-01.jpg', 'Skriv ny bildetekst her'],
 */
const groups = {
  ute: {
    title: 'Uteområder',
    images: [
      ['drone-04.jpg', 'Inngangsparti, inngjerdet hage og frittstående bod'],
      ['drone-02.jpg', 'Droneoversikt over boligen, uteplassene og hagen'],
      ['ute-kveld-05.jpg', 'Sittegruppen med integrert terrassebelysning'],
      ['drone-09.jpg', 'Dronebilde av bod, platting og inngjerdet plen'],
      ['drone-03.jpg', 'Overbygd sittegruppe ved inngangspartiet'],
      ['drone-05.jpg', 'Stor sittegruppe på terrassen bak'],
      ['drone-08.jpg', 'Terrassen bak med sittegrupper og helårspaviljong'],
      ['drone-01.jpg', 'Droneoversikt over veranda og helårspaviljong'],
      ['drone-10.jpg', 'Verandaen bak sett ovenfra'],
      ['drone-06.jpg', 'Utvendig trapp som forbinder etasjene'],
      ['uteomraade-01.jpg', 'Boligen med inngjerdet uteområde'],
      ['uteomraade-02.jpg', 'Stor platting ved inngangspartiet'],
      ['uteomraade-03.jpg', 'Praktisk oppbevaring ved utetrappen'],
      ['uteomraade-04.jpg', 'Helårspaviljong'],
      ['uteomraade-05.jpg', 'Veranda i 2 etg'],
      ['uteomraade-06.jpg', 'Lun balkong med sitteplass'],
      ['uteomraade-07.jpg', 'Terrasse med sittegruppe'],
      ['uteomraade-08.jpg', 'Inngangsparti'],
      ['uteomraade-09.jpg', 'Utvendig trapp mellom etasjene'],
      ['uteomraade-10.jpg', 'Praktisk oppbevaring ved utetrappen'],
      ['uteomraade-11.jpg', 'Overbygd inngangsparti'],
      ['uteomraade-12.jpg', 'Naturtomt med fjell og vegetasjon'],
      ['ute-kveld-01.jpg', 'Terrassen med stemningsbelysning på kveldstid'],
      ['ute-kveld-02.jpg', 'Den frittstående boden med utvendig belysning'],
      ['ute-kveld-03.jpg', 'Helårspaviljongen og terrassen på kveldstid'],
      ['ute-kveld-04.jpg', 'Opplyst utvendig trapp mellom etasjene'],
      ['ute-kveld-06.jpg', 'Inngangspartiet og uteplassen på kveldstid'],
      ['ute-kveld-07.jpg', 'Trapp og gangareal med stemningsbelysning'],
    ],
  },

  stue: {
    title: 'Stue og spisestue',
    images: [
      ['stue-01.jpg', 'Spisestue og trappeløp i åpen løsning'],
      ['stue-02.jpg', 'Romslig spiseplass med utgang til uteområdet'],
      ['stue-03.jpg', 'Stue med stor sofagruppe og utgang til balkong'],
      ['stue-04.jpg', 'Spisestue med god plass til mange'],
      ['stue-05.jpg', 'Stuen og trappen sett fra spiseplassen'],
      ['stue-06.jpg', 'Lun stue med store vindusflater'],
    ],
  },

  kjokken: {
    title: 'Kjøkken',
    images: [
      ['kjokken-01.jpg', 'Systemkjøkken med halvøy og integrert ventilator'],
      ['kjokken-02.jpg', 'Underlimt komposittvask ved vinduet'],
      ['kjokken-03.jpg', 'Elica platetopp med integrert ventilator'],
      ['kjokken-04.jpg', 'Spilevegg med Philips Hue-belysning'],
      ['kjokken-05.jpg', 'Elica platetopp med integrert ventilator'],
      ['kjokken-06.jpg', 'Komplett kjøkken med integrerte hvitevarer'],
    ],
  },

  'stort-soverom': {
    title: 'Stort soverom i underetasjen',
    images: [
      ['stort-soverom-01-sengeteppe.jpg', 'Stort soverom med pent, lyst sengeteppe'],
      ['stort-soverom-02-sengeteppe.jpg', 'Soverommet sett mot vinduene'],
      ['stort-soverom-03.jpg', 'Plassbygd garderobe med belyste eikehyller'],
      ['stort-soverom-04.jpg', 'Garderobeløsningen fra Systemkjøkken'],
    ],
  },

  kontor: {
    title: 'Soverom og kontor',
    images: [
      ['kontor-01.jpg', 'Spilevegg med varm LED-belysning'],
      ['kontor-02.jpg', 'Arbeidsplass med skrivebord og skjermer'],
      ['kontor-03.jpg', 'Fleksibel kontorplass'],
      ['kontor-04.jpg', 'TV-vegg og inngang til rommet'],
    ],
  },

  'soverom-hoved': {
    title: 'Soverom i hovedetasjen',
    images: [
      ['soverom-hovedetasje-01.jpg', 'Lunt soverom med dobbeltseng og vinduer'],
      ['soverom-hovedetasje-02.jpg', 'Stor skyvedørsgarderobe med trestruktur og sorte detaljer'],
    ],
  },

  bad: {
    title: 'Bad',
    images: [
      ['bad-01.jpg', 'Bad med boblekar, dusj og baderomsinnredning'],
      ['bad-02.jpg', 'Fusion-styring integrert i spilefelt'],
      ['bad-03.jpg', 'Fusion-stereo med Bluetooth og nettverk'],
      ['bad-04.jpg', 'Dusjnisje med sort takdusj'],
      ['bad-05.jpg', 'Vegghengt toalett og høyskap'],
      ['bad-06.jpg', 'Boblekar fylt med bobler'],
      ['bad-07.jpg', 'Stor dusjnisje og belyst speil'],
    ],
  },

  toalett: {
    title: 'Toalettrom',
    images: [
      ['toalettrom-01.jpg', 'Toalettrom med belyst speil og sort innredning'],
      ['toalettrom-02.jpg', 'Servant med sort armatur'],
      ['toalettrom-03.jpg', 'Vegghengt toalett og sorte detaljer'],
      ['toalettrom-04.jpg', 'Eikespiler og innfelte spotter i taket'],
      ['toalettrom-05.jpg', 'Gjennomførte materialvalg'],
      ['toalettrom-06.jpg', 'Sort Elko Plus-styring'],
    ],
  },

  entre: {
    title: 'Entré og vindfang',
    images: [
      ['entre-01.jpg', 'Entré med oppgradert trapp og nytt rekkverk'],
      ['entre-02.jpg', 'Lys entré med dimbare LED-spotter'],
    ],
  },

  vaskerom: {
    title: 'Vaskerom',
    images: [
      ['vaskerom-01.jpg', 'Vaskerom med 300 liters varmtvannstank og vannfordelingsskap'],
    ],
  },

  bod: {
    title: 'Frittstående bod',
    images: [
      ['drone-07.jpg', 'Den vinterisolerte boden sett ovenfra'],
      ['bod-utvendig-01.jpg', 'Frittstående bod med uteplass'],
      ['bod-utvendig-02.jpg', 'Bodens inngangsparti'],
      ['bod-utvendig-03.jpg', 'Boden sett fra veien'],
      ['bod-innvendig-01.jpg', 'Verksted med arbeidsbenk og verktøy'],
      ['bod-innvendig-02.jpg', 'Innvendig oversikt over den isolerte boden'],
      ['bod-innvendig-03.jpg', 'Takpanel og Philips Hue-belysning i boden'],
    ],
  },
};
const allItems=[];document.querySelectorAll('[data-gallery]').forEach(gallery=>{const group=groups[gallery.dataset.gallery];group.images.forEach(([file,alt],index)=>{const button=document.createElement('button');button.type='button';button.className='gallery-item'+(index===0?' main':'')+(index>5?' gallery-hidden':'');button.dataset.src=`images/${file}`;button.dataset.alt=alt;button.dataset.group=group.title;const img=document.createElement('img');img.src=`images/${file}`;img.alt=alt;img.loading=index===0?'eager':'lazy';button.append(img);if(index===0){const label=document.createElement('span');label.textContent='Se bilder';button.append(label)}if(index===5&&group.images.length>6){const more=document.createElement('b');more.className='gallery-more';more.textContent=`+ ${group.images.length-6} bilder`;button.append(more)}gallery.append(button);allItems.push(button)})});
const menuButton=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const dialog=document.querySelector('.lightbox'),lightboxImage=dialog.querySelector('img'),lightboxTitle=dialog.querySelector('.lightbox-title'),lightboxCount=dialog.querySelector('.lightbox-count');let activeItems=[],activeIndex=0,returnFocus=null;function showImage(index){activeIndex=(index+activeItems.length)%activeItems.length;const item=activeItems[activeIndex];lightboxImage.src=item.dataset.src;lightboxImage.alt=item.dataset.alt;lightboxTitle.textContent=item.dataset.alt;lightboxCount.textContent=`${item.dataset.group} · ${activeIndex+1} / ${activeItems.length}`}function openLightbox(item,items){activeItems=items;activeIndex=items.indexOf(item);returnFocus=item;showImage(activeIndex);dialog.showModal();document.body.classList.add('lightbox-open')}function closeLightbox(){dialog.close();document.body.classList.remove('lightbox-open');returnFocus?.focus()}
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>openLightbox(item,[...item.closest('.gallery').querySelectorAll('.gallery-item')])));document.querySelectorAll('[data-open-all]').forEach(button=>button.addEventListener('click',()=>{openLightbox(allItems[0],allItems);returnFocus=button}));dialog.querySelector('.prev').addEventListener('click',()=>showImage(activeIndex-1));dialog.querySelector('.next').addEventListener('click',()=>showImage(activeIndex+1));dialog.querySelector('.lightbox-close').addEventListener('click',closeLightbox);dialog.addEventListener('click',e=>{if(e.target===dialog)closeLightbox()});dialog.addEventListener('cancel',e=>{e.preventDefault();closeLightbox()});document.addEventListener('keydown',e=>{if(!dialog.open)return;if(e.key==='ArrowLeft')showImage(activeIndex-1);if(e.key==='ArrowRight')showImage(activeIndex+1)});let touchStart=0;dialog.addEventListener('touchstart',e=>touchStart=e.changedTouches[0].screenX,{passive:true});dialog.addEventListener('touchend',e=>{const delta=e.changedTouches[0].screenX-touchStart;if(Math.abs(delta)>50)showImage(activeIndex+(delta<0?1:-1))},{passive:true});
