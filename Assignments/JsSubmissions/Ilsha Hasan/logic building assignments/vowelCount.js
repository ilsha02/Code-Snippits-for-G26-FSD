function vowelsCount(str) {
    let count = 0;

    for (let chr of str) {
        if (chr === 'a' || chr === 'e' || chr === 'i' || chr === 'o' || chr === 'u' ||chr === 'A' || chr === 'E' || chr === 'I' || chr === 'O' || chr === 'U') {
            count++;
        }
    }

    console.log(count);
}
vowelsCount("Ilsha");