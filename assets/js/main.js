(function(){
  // Simple accessible carousel
  const track = document.querySelector('.carousel-track');
  const next = document.querySelector('.carousel-next');
  const prev = document.querySelector('.carousel-prev');
  if(track){
    let index=0;
    const slides = Array.from(track.querySelectorAll('img'));
    const move = ()=>{ track.style.transform = `translateX(${-index * slides[0].clientWidth}px)` };
    next.addEventListener('click', ()=>{ index=(index+1)%slides.length; move(); });
    prev.addEventListener('click', ()=>{ index=(index-1+slides.length)%slides.length; move(); });
    // auto cycle
    setInterval(()=>{ index=(index+1)%slides.length; move(); },6000);
  }

  // Gallery filtering (simple)
  const filters = document.querySelectorAll('.gallery-controls .btn');
  const items = document.querySelectorAll('.masonry-item');
  filters.forEach(btn=>btn.addEventListener('click', ()=>{
    filters.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const id = btn.id.replace('filter-','');
    items.forEach((it,i)=>{
      it.style.display = (id==='all' || it.dataset.category===id) ? '' : 'none';
    })
  }));

  // Booking form placeholder
  const form = document.getElementById('booking-form');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const data = new FormData(form);
      const payload = Object.fromEntries(data.entries());
      // local placeholder - show success
      alert('Dziękuję! Zapytanie zostało wysłane lokalnie.');
      form.reset();
    });
  }

  // Footer year
  const year = document.getElementById('year'); if(year) year.textContent = new Date().getFullYear();

  // Nav toggle (mobile)
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if(toggle) toggle.addEventListener('click', ()=>{ navLinks.style.display = navLinks.style.display==='flex' ? 'none' : 'flex' });
})();