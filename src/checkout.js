function checkout(string){
    let letters = {A:50, B:30, C:20, D:15}
    let score = []
    let array = string.split('')
    let countA = 0;
    let countB = 0;
    array.forEach(function(item){ 
            score.push(letters[item])
    })
    score.forEach(function(item){
        if(item === 50){
            countA++
        } else if(item === 30){
            countB++
        } 
    })
    let finalScore = score.reduce(function(sum, num){
        return sum+=num
    })
    if (countA % 3 != 0 || countB % 2 != 0 ) {
        return finalScore
    } 
    else {
        return finalScore -= ((countA/3*20) + (countB/2 * 15))
    }
}