function pallindrom(str) {
    let bag = "";
    for (let i = str.length; i <= 0; i++) {
        bag = bag + str[i];
    }
    return bag;
}
let rev = pallindrom("naman");
if (str == rev) {
    console.log("Pallindrom");
}
else {
    console.log("Not Pallindrom");
}