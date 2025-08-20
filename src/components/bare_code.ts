export function initializeBareCode(
  containerId: string,
  minBlackWidth: number = 3,
  maxBlackWidth: number = 10,
  minTransparentWidth: number = 2,
  maxTransparentWidth: number = 8,
): void {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID ${containerId} not found.`);
    return;
  }

  // Создаем SVG элемент
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 1440 484");

  // Добавляем классы из родительского элемента, если они есть
  if (container.dataset.className) {
    svg.setAttribute("class", container.dataset.className);
  }

  let x: number = 0;
  while (x < 1440) {
    const blackWidth: number =
      Math.floor(Math.random() * (maxBlackWidth - minBlackWidth + 1)) +
      minBlackWidth;
    const blackRect: SVGRectElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect",
    ) as SVGRectElement;
    blackRect.setAttribute("x", x.toString()); // Convert number to string for setAttribute
    blackRect.setAttribute("y", "0");
    blackRect.setAttribute("width", blackWidth.toString());
    blackRect.setAttribute("height", "484");
    blackRect.setAttribute("fill", "currentColor");
    svg.appendChild(blackRect);
    x += blackWidth;

    const transparentWidth: number =
      Math.floor(
        Math.random() * (maxTransparentWidth - minTransparentWidth + 1),
      ) + minTransparentWidth;
    const transparentRect: SVGRectElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect",
    ) as SVGRectElement;
    transparentRect.setAttribute("x", x.toString()); // Convert number to string for setAttribute
    transparentRect.setAttribute("y", "0");
    transparentRect.setAttribute("width", transparentWidth.toString());
    transparentRect.setAttribute("height", "484");
    transparentRect.setAttribute("fill", "transparent");
    svg.appendChild(transparentRect);
    x += transparentWidth;
  }

  // Очищаем контейнер и добавляем SVG
  container.innerHTML = "";
  container.appendChild(svg);
}
