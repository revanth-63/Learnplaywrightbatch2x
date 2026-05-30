function createUniqueJsBasicsTags(tags) {

    let result = [];

    for (let i = 0; i < tags.length; i++) {

        let tag = tags[i].trim().toLowerCase();

        // skip empty
        if (tag !== "" && !result.includes(tag)) {
            result.push(tag);
        }
    }

    return result;
}