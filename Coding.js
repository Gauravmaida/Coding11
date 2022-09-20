function palindrome(str) {
    let bag = "";
    for (let i = str.length-1; i >= 0; i--) {
        bag = bag + str[i];
    }
    return bag;
}
let rev_str = palindrome("naman");
if (str === rev_str) {
    console.log("Palindrome");
}
else {
    console.log("Not Palindrome");
}
