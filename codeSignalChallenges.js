// Given an array of integers (a), find how many of its contiguous sub-arrays of length (m) contain a pair of integers with a sum equal to (k)
const solution = (a, m, k) => {
    let count = 0;
    while (a.length > m - 1) {
        let subArray = a.splice(0, m);
        const results = {};
        for (let i = 0; i < subArray.length - 1; i++) {
            if (!results[subArray[i]]) {
                results[subArray[i]] = subArray[0] + subArray[i + 1];
            }
        }
    }
}

const intArray = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7];
const subArrayLength = 4;
const targetSum = 10;

console.log(solution(intArray, subArrayLength, targetSum));
