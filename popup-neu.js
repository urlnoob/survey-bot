// Funktion zum Prüfen, ob der aktuelle Tag Montag ist
function isMonday() {
  const today = new Date();
  return today.getDay() === 1; // Montag ist 1 (Sonntag ist 0, Dienstag ist 2, ...), da getDay() Werte von 0 bis 6 zurückgibt.
}

// Funktion zum Laden des Typeform-Widgets, wenn heute Montag ist
function loadTypeformIfMonday() {
  if (isMonday()) {
    const typeformContainer = document.createElement('div');
    typeformContainer.setAttribute('data-tf-popover', 'Gw2xDIKY');
    typeformContainer.setAttribute('data-tf-opacity', '100');
    typeformContainer.setAttribute('data-tf-iframe-props', 'title=Status-Bericht');
    typeformContainer.setAttribute('data-tf-open', 'time');
    typeformContainer.setAttribute('data-tf-open-value', '60000');
    typeformContainer.setAttribute('data-tf-auto-close', '604805000');
    typeformContainer.setAttribute('data-tf-transitive-search-params', '');
    typeformContainer.setAttribute('data-tf-button-color', '#000000');
    typeformContainer.setAttribute('data-tf-notification-days', '7');
    typeformContainer.setAttribute('data-tf-medium', 'snippet');
    typeformContainer.setAttribute('style', 'all:unset;');

    document.body.appendChild(typeformContainer);

    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    document.head.appendChild(script);
  }
}

// Aufruf der Funktion, wenn die Seite und alle Ressourcen vollständig geladen sind
window.onload = loadTypeformIfMonday;
