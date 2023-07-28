// Funktion zum Laden des Typeform-Widgets
function loadTypeform() {
  const script = document.createElement('script');
  script.src = '//embed.typeform.com/next/embed.js';
  document.head.appendChild(script);
}

// Aufruf der Funktion, um das Typeform-Widget direkt einzufügen
loadTypeform();
