function buildJsBasicsChecklist(items) {

    let result = [];
    let count = 1;

    for (let i = 0; i < items.length; i++) {

        let item = items[i].trim();

        // skip empty items
        if (item !== "") {

            result.push(count + ". " + item + " - TODO");
            count++;
        }
    }

    return result;
}