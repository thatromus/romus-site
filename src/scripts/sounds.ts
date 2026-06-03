let lastHoverTime = 0;
let lastHoveredElement: HTMLElement | null = null;
const HOVER_THROTTLE = 300; // Задержка, если нужно - можешь поднять или опустить

export const playSound = (soundName: 'klick' | 'hover' | 'portfolio_hover') => {
  const audio = new Audio(`/sound/${soundName}.mp3`);
  audio.play().catch(e => console.error("Error playing sound:", e));
};

let isInitialized = false;

export const initGlobalSounds = () => {
  if (typeof window === 'undefined' || isInitialized) return;
  isInitialized = true;
  document.addEventListener('mousedown', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('li')) {
      playSound('klick');
    }
  });

  // Наведение на элементы + сделал защиту от спама
  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;
    const interactive = target.closest('button') || target.closest('a') || target.closest('li') || target.closest('.hover-sound');
    
    if (interactive) {
      if (interactive === lastHoveredElement) return; 
      
      lastHoveredElement = interactive as HTMLElement;

      // Кароче есле это элемент портфолио то не играем hover
      if (interactive.closest('.portfolio-animation')) {
        return;
      }

      const now = Date.now();
      if (now - lastHoverTime > HOVER_THROTTLE) {
        playSound('hover');
        lastHoverTime = now;
      }
    } else {
      lastHoveredElement = null; 
    }
  });
};
