let inpCode = document.getElementById("textCode");
let btnEncode = document.getElementById("btnEncode");
let display = document.getElementById("display");
let btnEncrypt = document.getElementById("btnEncrypt");

function toggleEncrypt(str) {
	const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const LOWER = "abcdefghijklmnopqrstuvwxyz";
	let result = [];
	for (let i = 0; i < str.length; i++) {
		if (UPPER.indexOf(str[i]) !== -1) {
			result.push(str[i].toLowerCase());
		} else if (LOWER.indexOf(str[i]) !== -1) {
			result.push(str[i].toUpperCase());
		} else {
			result.push(str[i]);
		}
	}
	return result.join("");
}

btnEncode.onclick = () => {
	let inp = inpCode.value;
	inp = btoa(inp);
	display.value = inp;
};

btnEncrypt.onclick = () => {
	// let inp = display.value;
	display.value = toggleEncrypt(display.value);
	// display.value = inp;
};
