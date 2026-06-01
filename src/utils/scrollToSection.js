/**
 * Scrolls smoothly to a target DOM element by ID.
 * @param {string} id - The ID of the target element (without the '#' prefix)
 */
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // Offset standard scroll for fixed header (approx. 80px)
    const yOffset = -80; 
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
