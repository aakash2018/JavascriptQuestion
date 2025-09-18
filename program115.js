function retry(fn, entries = 3, delay = 1000) {
	return new Promise((resolve, reject) => {
		function attempt(n) {
			fn().then(resolve).catch((err) => {
				if (n === 0) reject(err);
				else {
					console.log("Retrying...");
					setTimeout(() => attempt(n - 1), delay);
				}
			})
		}
		attempt(entries);
	})
}
let count = 0;
retry(() => {
	return new Promise((resolve, reject) => {
		count++;
		count < 3 ? reject("Fail") : resolve("success");
	});
}, 3).then(console.log);