function validParantheses(str1) {

	const stack = [];

	const map = {
		'(': ')',
		'[': ']',
		'{': '}'
	}

	for (let i = 0; i < str1.length; i++) {
		const char = str1[i];
		if (map[char]) {
			stack.push(char);
		} else {
			const last = stack.pop();
			if (char !== map[last]) {
				return false;
			}
		}
	}
  return stack.length === 0;
}

console.log(validParantheses('()[]{}'));