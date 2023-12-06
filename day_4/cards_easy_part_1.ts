import fetch from 'node-fetch';



const data = await (await fetch("https://adventofcode.com/2023/day/4/input", {
    headers: {
        cookie: "session=53616c7465645f5fb213d394b1d5723a97a479fab20e8f6eb51f39edd1400001c51a1eef5ff18893ef5f3fd31306d24c41de99f12df8f2484e4c138752ae52b9"
    }
})).text()

//const data = "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53\nCard 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19\nCard 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1\nCard 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83\nCard 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36\nCard 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11\n"


//console.log(data)

const doesArrayContainValue = (array: string[], value: string): boolean => {
    for(const element of array) {
        if (element === value) return true;
    }
    return false;
}

const lines = data.split("\n")

const gameWinNumbers = lines.reduce<number>((winPoints: number, line) => {
    if (!line.includes("|")) return winPoints;

    let cardWinPoints = 0;
    let doubleCount = 0;

    const cardHalves = line.split("|");
    const myCardNumbers = cardHalves[0].split(" ").splice(2).filter(e => e.length > 0)
    const winningNumbers = cardHalves[1].split(" ").filter(e => e.length > 0)


    // projdu moje čísla a kouknu zda jsou ve výherních
    
    for(const number of myCardNumbers) {
        if (doesArrayContainValue(winningNumbers, number)) {
            if(cardWinPoints == 0 ) {
                cardWinPoints = 1;
            } else {
                cardWinPoints += 2**doubleCount;
                doubleCount++;
            }
        }
    }

    console.log(cardWinPoints, "line", line, "myCardNumbers", myCardNumbers.sort(), "winningNumbers", winningNumbers.sort());

    return winPoints + cardWinPoints;
}, 0);

console.log(gameWinNumbers);


