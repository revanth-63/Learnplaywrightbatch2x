function print() {
    console.log("Normal Function is called");
}

function placeOrder(ClipboardItem, pramodCallback) {
    console.log("Hi, You order is placed");
    pramodCallback();
}

// First Way
placeOrder("Pizza", print);

// Second Way Anonymous
placeOrder("Burger", function () {
    console.log("Anoy Fn, I am also a function wihtout name!")
});

// Third Way - Arrow Fn
placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});


test('has title', () => {
    console.log("Hi");
});