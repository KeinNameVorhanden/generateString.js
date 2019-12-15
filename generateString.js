function generateString(length, need_num = false) {
	let str = "";
	let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (let i = 0; i < length; i++) {
		let x = Math.floor(Math.random() * chars.length);
		str += chars.charAt(x);
	}
	if ((need_num && !str.match(/\d/)) || !(str.match(/[A-Z]/) && str.match(/[a-z]/)))
		return generateString(length, need_num);
	else
		return str;
}