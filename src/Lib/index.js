/**
 * Convert Number to String Currency in Rupiah (Rp)
 * @returns {string}
 */
export function formatNumberToRupiahCurrency(num) {
  var p = num.toFixed(2).split(".");
  return "Rp " + p[0].split("").reverse().reduce(function (acc, num, i) {
    return num == "-" ? acc : num + (i && !(i % 3) ? "." : "") + acc;
  }, "");
}