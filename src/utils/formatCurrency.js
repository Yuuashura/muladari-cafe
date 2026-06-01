/**
 * Formats a number into Indonesian Rupiah (IDR) currency format.
 * Example: 15000 -> Rp15.000 or Rp 15.000
 * @param {number} value - The numeric value to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value).replace(/\s/g, ''); // Remove spaces if any
};
