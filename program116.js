function cancelablePromise(ms) {
	let timer;
	let cancel;
	const promise = new Promise((resolve, reject) => {
		timer = setTimeout(() => resolve('done'), ms);
		cancel = () => {
			clearTimeout(timer);
			reject(new Error('canceled'));
		};
	});
	return { promise, cancel };
}
const { promise, cancel } = cancelablePromise(3000);

promise
	.then((value) => {
		console.log(value);
	})
	.catch((error) => {
		console.error(error.message);
	});
setTimeout(() => cancel(), 1000);