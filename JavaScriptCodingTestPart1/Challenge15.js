function calculateJsBasicsWeightedScore(passed, failed, skipped) {

    let score = (passed * 2) - failed;

    return score;
}