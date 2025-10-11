async function fetchData(id) {
 return new Promise((resolve) => {
 setTimeout(() => {
   console.log(`Fetched data for ${id}`); //3 
 resolve(id * 2);
 }, 1000);
 });
}
async function process() {
 const ids = [1, 2, 3];
 const results = ids.map(async (id) => {
 const data = await fetchData(id);
 return data;
 });
 console.log("Processing started"); //1
 const final = await Promise.all(results); 
 console.log("Final result:", final);//2 [2,4,6]
}
process();