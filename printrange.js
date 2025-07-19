function range(start, end) {

    if (start > end) {
        return;
    }
    console.log(start);
    range(start + 1, end);
}

range(1, 6);