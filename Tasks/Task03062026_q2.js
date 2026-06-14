function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let sorted1 = str1.toLowerCase().split("").sort().join("");
    let sorted2 = str2.toLowerCase().split("").sort().join("");

    return sorted1 === sorted2;
}

// Examples
console.log(isAnagram("eat", "tea"));   // true
console.log(isAnagram("from", "form")); // true
console.log(isAnagram("hello", "world")); // false