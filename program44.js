//Mean=(कुल numbers की गिनती)/(सभी numbers का जोड़)​
function mean(arrValue) {
    console.log(arrValue.reduce((acc, next) => acc + next, 0) / arrValue.length);

}
mean([1, 2, 3, 4, 5])