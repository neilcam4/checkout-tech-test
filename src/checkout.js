function checkout(string){
    let letters = {A:50, B:30, C:20, D:15}
    let score = []
    let array = string.split('')
    console.log(array)
    let countA = 0;
    let countB = 0;
    array.forEach(function(item){ 
            score.push(letters[item])
            console.log(score)
    })
    score.forEach(function(item){
        if(item ===50){
            countA++
            console.log(countA) 
        } else if(item === 30){
            countB++
            console.log(countB)
        }
    })
    let finalScore = score.reduce(function(sum, num){
        return sum+=num
    })
    if (countA % 3 === 0) {
        console.log("countA" + countA)
         finalScore -= (countA/3*20)
    } else if (countB % 2 == 0){
        console.log("countB" + countB)
        finalScore -= (countB/2 * 15)
    }
    return finalScore
}