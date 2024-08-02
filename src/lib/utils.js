import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cubicOut } from "svelte/easing";

/**
 * Combines multiple class names using `clsx` and merges them using `twMerge`.
 *
 * @param {...any} inputs - The class names to be combined.
 * @returns {string} - The merged class names.
 */
export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

/**
 * Creates an animation that combines flying and scaling effects.
 *
 * @param {HTMLElement} node - The HTML element to be animated.
 * @param {Object} [params] - The parameters for the animation.
 * @param {number} [params.y=-8] - The vertical translation distance.
 * @param {number} [params.x=0] - The horizontal translation distance.
 * @param {number} [params.start=0.95] - The initial scale value.
 * @param {number} [params.duration=150] - The duration of the animation in milliseconds.
 * @returns {Object} - The animation configuration.
 */
export const flyAndScale = (
	node,
	params = { y: -8, x: 0, start: 0.95, duration: 150 }
) => {
	const style = getComputedStyle(node);
	const transform = style.transform === "none" ? "" : style.transform;

	/**
	 * Converts a value from one scale to another.
	 *
	 * @param {number} valueA - The value to be converted.
	 * @param {number[]} scaleA - The scale of the input value.
	 * @param {number[]} scaleB - The scale of the output value.
	 * @returns {number} - The converted value.
	 */
	const scaleConversion = (valueA, scaleA, scaleB) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	/**
	 * Converts a style object to a CSS string.
	 * @function
	 * @param {Record<string, string | number | undefined>} style - The style object.
	 * @returns {string} The CSS string representation of the style object.
	 */
	const styleToString = (style) => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, "");
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,

		/**
		 * The CSS function for the animation.
		 *
		 * @param {number} t - The progress of the animation (between 0 and 1).
		 * @returns {string} - The CSS for the current progress of the animation.
		 */
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};