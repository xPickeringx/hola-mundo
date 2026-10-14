document.addEventListener('DOMContentLoaded', () => {
  // Elementos del DOM
  const greetingEl = document.getElementById('greeting');
  const sizeValueEl = document.getElementById('sizeValue');
  const btnIncrease = document.getElementById('btnIncrease');
  const btnDecrease = document.getElementById('btnDecrease');
  const btnReset = document.getElementById('btnReset');
  
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeLabel = document.getElementById('themeLabel');
  const htmlTag = document.documentElement;

  // Tamaño inicial en rem (1.0rem = 16px)
  let currentRemSize = 2.8; 
  const BASE_FONT_PX = 16;
  const MIN_SIZE_REM = 1.5;
  const MAX_SIZE_REM = 4.5;
  const STEP_REM = 0.2;

  // 1. Función para actualizar el tamaño de fuente y la UI
  function updateFontSize() {
    greetingEl.style.fontSize = `${currentRemSize}rem`;
    const calculatedPx = Math.round(currentRemSize * BASE_FONT_PX);
    sizeValueEl.textContent = `${currentRemSize.toFixed(1)}rem (${calculatedPx}px)`;
  }

  // Eventos de botones para cambiar el tamaño
  btnIncrease.addEventListener('click', () => {
    if (currentRemSize < MAX_SIZE_REM) {
      currentRemSize += STEP_REM;
      updateFontSize();
    }
  });

  btnDecrease.addEventListener('click', () => {
    if (currentRemSize > MIN_SIZE_REM) {
      currentRemSize -= STEP_REM;
      updateFontSize();
    }
  });

  btnReset.addEventListener('click', () => {
    currentRemSize = 2.8;
    updateFontSize();
  });

  // 2. Lógica para alternar entre Modo Oscuro y Modo Claro
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlTag.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlTag.setAttribute('data-theme', newTheme);
    themeLabel.textContent = newTheme === 'dark' ? 'Modo Claro' : 'Modo Oscuro';
    themeToggleBtn.firstChild.textContent = newTheme === 'dark' ? '🌙 ' : '☀️ ';
  });

  // Inicializar estado de tamaño al cargar
  updateFontSize();
});