function findFirstCriticalJsBasicsBug(bugs) {

    for (let i = 0; i < bugs.length; i++) {

        let bug = bugs[i];

        if (bug.severity === "critical") {
            return bug.title;
        }
    }

    return "No critical bug";
}