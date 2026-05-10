// Identifier rules examples
// 1. Start with a letter, $ or _
// 2. Continue with letters, digits, $ or _
// 3. Case-sensitive
// 4. Must not be a reserved keyword
var abc123 = 34;
var pramod_Dutta = "hello";
var pramod$Dutta = "hello";
var pramodu123 = "hello";
var name = "pramod";
var Name = "amit";
var $value = 10;
var _score = 20;
var userName = "Alice";
console.log($value, _score, userName, abc123, pramod_Dutta, pramod$Dutta, pramodu123);
console.log(name, Name); // different identifiers because JavaScript is case-sensitive
// Invalid identifier examples (commented out)
// var 1name = "invalid";
// var my-name = "invalid";
// var pramod Dutta = "invalid";
// var for = 5; // reserved keyword
// var true = false; // reserved literal