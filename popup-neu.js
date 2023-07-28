// Funktion zum Prüfen, ob der aktuelle Tag Freitag ist
function isFriday() {
  const today = new Date();
  return today.getDay() === 5; // Beachte: Sonntag ist 0, Montag ist 1, ... und Freitag ist 5
}

// Funktion zum Laden des Typeform-Widgets, wenn heute Freitag ist
function loadTypeformIfFriday() {
  if (isFriday()) {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    document.head.appendChild(script);
  }
}

// Aufruf der Funktion beim Laden der Seite
document.addEventListener('DOMContentLoaded', loadTypeformIfFriday);
