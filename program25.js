function expandAroundCenter(s, left, right) {
	while (left >= 0 && right < s.length && s[left] === s[right]) {
		left--;
		right++;
	}
	return s.substring(left + 1, right); // क्योंकि loop extra expand कर जाता है
}

function longestPalindromeSubstring(str) {
	let longest = "";
	for (let i = 0; i < str.length; i++) {
		let odd = expandAroundCenter(str, i, i);
		let even = expandAroundCenter(str, i, i + 1);

		let bigger = odd.length > even.length ? odd : even;
		// console.log(bigger, "bigger");

		if (bigger.length > longest.length) {
			longest = bigger;
		}
	}
	   console.log(longest);
}
longestPalindromeSubstring("babad");
longestPalindromeSubstring("cbbd");