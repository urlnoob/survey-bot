// Funktion zum Laden des Typeform-Widgets
function loadTypeform() {
  const script = document.createElement('script');
  script.src = '//embed.typeform.com/next/embed.js';
  document.head.appendChild(script);
}

// Aufruf der Funktion, wenn die Seite und alle Ressourcen vollständig geladen sind
window.onload = loadTypeform;
