function hashCode(str) { // java String#hashCode
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}
	return hash;
}

function intToRGB(i) {
	const c = (i & 0x00FFFFFF)
		.toString(16)
		.toUpperCase();

	return "00000".substring(0, 6 - c.length) + c;
}

function colorToHex(color: number) {
	const hexadecimal = color.toString(16);
	return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
}

export function convertRGBtoHex(red: number, green: number, blue: number) {
	return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
}

export function convertHexToRGB(hex: string, opacity = 1) {
	const red = parseInt(hex[1] + hex[2], 16);
	const green = parseInt(hex[3] + hex[4], 16);
	const blue = parseInt(hex[5] + hex[6], 16);
	return `rgba(${red},${green},${blue},${opacity})`;
}

export function convertHexToHSL(hex, a = 1, L = -1) {
	// Convert hex to RGB first
	let r = 0, g = 0, b = 0;
	if (hex.length === 4) {
		r = parseInt("0x" + hex[1] + hex[1]);
		g = parseInt("0x" + hex[2] + hex[2]);
		b = parseInt("0x" + hex[3] + hex[3]);
	} else if (hex.length === 7) {
		r = parseInt("0x" + hex[1] + hex[2]);
		g = parseInt("0x" + hex[3] + hex[4]);
		b = parseInt("0x" + hex[5] + hex[6]);
	}
	// Then to HSL
	r /= 255;
	g /= 255;
	b /= 255;
	const cmin = Math.min(r, g, b),
		cmax = Math.max(r, g, b),
		delta = cmax - cmin;
	let h = 0,
		s = 0,
		l = 0;

	if (delta === 0)
		h = 0;
	else if (cmax === r)
		h = ((g - b) / delta) % 6;
	else if (cmax === g)
		h = (b - r) / delta + 2;
	else
		h = (r - g) / delta + 4;

	h = Math.round(h * 60);

	if (h < 0)
		h += 360;

	l = (cmax + cmin) / 2;
	s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);

	return "hsl(" + h + "," + s + "%," + (L === -1 ? l : L) + "%," + a + "%)";
}

export function stringToColor(str: string) {
	return '#' + intToRGB(hashCode(str))
}