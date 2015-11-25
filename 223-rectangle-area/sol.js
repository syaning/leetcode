/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
	return (C - A) * (D - B) + (G - E) * (H - F) -
		Math.max(0, Math.min(C, G) - Math.max(A, E)) *
		Math.max(0, Math.min(D, H) - Math.max(B, F));
};