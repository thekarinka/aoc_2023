import fs from 'fs';

const fileContent: string = fs.readFileSync('/home/karin/Downloads/day_1_input', 'utf8')

const map: Map<string, string> = new Map([
    ["one", "1"],
    ["two", "2"],
    ["three", "3"],
    ["four", "4"],
    ["five", "5"],
    ["six", "6"],
    ["seven", "7"],
    ["eight", "8"],
    ["nine", "9"],
])

const reverse = (s: string): string => s.split("").reverse().join("")

const fixLetterDigits = (line: string) => {
    let updatedLine: string = line.toLowerCase();
    
    for(const [key, val] of map) {
        const regex = new RegExp(`${key}`, "g")
        updatedLine = updatedLine.replace(regex, key + val + key);
    }
    return updatedLine

    /*for(const [key, val] of map) {
        updatedLine = updatedLine.replace(key, val);
    }*/

    /*updatedLine = reverse(updatedLine)

    for(const [key, val] of map) {
        updatedLine = updatedLine.replace(reverse(key), val);
    }

    return updatedLine = reverse(updatedLine)*/

/*    const lastIndex = Array.from(map.keys()).reduce<number>((biggestIndex: number, key: string): number => {
        if(map.get(key)) {
            const index = updatedLine.lastIndexOf(map.get(key) || "xxxxxxxxxxxxxxxxx")
            if(index > biggestIndex) return index;
        }
        return biggestIndex;
    }, 0);
    
    const lastNumber = updatedLine.substring(lastIndex)
    let lastPartUpdated = ""
    for(const [key, value] of map) {
        if(lastNumber.startsWith(key)) {
            lastPartUpdated = lastNumber.replace(key, value)
        }
    }

    return updatedLine.substring(0, lastIndex) + lastPartUpdated;*/
}

const sum = fileContent.split("\n").reduce<number>((prev, current) => {
    let first = -1, last = -1;
    const fixedLetterDigits = fixLetterDigits(current);
    for(const char of fixedLetterDigits) {
        const digit = parseInt(char, 10);
        if(!isNaN(digit)) {
            last = digit;
            if(first < 0) first = digit * 10;
        }
    }
    // console.log(first+last, "  ", fixedLetterDigits);
    if(first < 0 || last < 0) {
        console.log("It looks this line does not contain any digit");
        return prev;
    }
    return (first + last) + prev;
}, 0)

console.log("sum is", sum);
