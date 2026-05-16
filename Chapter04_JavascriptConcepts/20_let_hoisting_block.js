// let is Block-Scoped

if (true) {
    // TDZ for block-scoped "x" starts here
    // console.log(x);  // ReferenceError (NOT "global"!)
    let x = "block";   // TDZ ends
    console.log(x);    // "block"
}

console.log(x);