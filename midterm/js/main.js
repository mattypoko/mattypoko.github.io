// ============================================================
// EVENT LISTENER 1 — scroll changes the nav background
// CSS Alteration: Add CSS class (.nav-solid)
// ============================================================
const nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.scrollY > 60) {
    nav.classList.add('nav-solid');       // Add CSS class
  } else {
    nav.classList.remove('nav-solid');    // Remove CSS class
  }
});


// ============================================================
// EVENT LISTENER 2 — click the h1 title to toggle color
// CSS Alteration: Add CSS class (.title-glow)
// CSS Alteration: Change CSS style (cursor)
// ============================================================
const title = document.querySelector('h1');

title.style.cursor = 'pointer';          // CSS style change

title.addEventListener('click', function () {
  title.classList.toggle('title-glow');  // Add/remove CSS class
});


// ============================================================
// EVENT LISTENER 3 — click an award to check it off
// CSS Alteration: Add CSS class (.award-done)
// CSS Alteration: innerHTML (rewrites the list item)
// CSS Alteration: Change CSS style (background color)
// ============================================================
const awards = document.querySelectorAll('#awards-list li');

awards.forEach(function (item) {
  item.style.cursor = 'pointer';         // CSS style change

  item.addEventListener('click', function () {
    if (!item.classList.contains('award-done')) {
      const original = item.innerText;
      item.innerHTML = '✅ ' + original; // innerHTML change
      item.classList.add('award-done');  // Add CSS class
      item.style.backgroundColor = '#0d1f44'; // CSS style change
      item.style.borderRadius = '3px';
      item.style.padding = '2px 6px';
    }
  });
});
