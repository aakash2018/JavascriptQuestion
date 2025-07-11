//Promise

const promisevalue = new Promise((resolve, reject) => {
	resolve("my promise  gives resolve");
});

promisevalue.then((res) => {
	console.log(res);
}).catch((err) => console.log(err));
