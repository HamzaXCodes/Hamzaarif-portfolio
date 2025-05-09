/**
 * Scrolls to a specific element with smooth animation but immediate response
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top (for fixed headers)
 */
export const scrollToElement = (elementId, offset = 70) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Get element position
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  // Use native scrollTo with smooth behavior for optimized performance
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

/**
 * Creates an onClick handler that scrolls to the specified element
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top (for fixed headers)
 */
export const createScrollHandler = (elementId, offset = 70) => {
  return () => scrollToElement(elementId, offset);
};
