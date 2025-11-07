
let rank =[100,90,90,80,75,60];
let player =[50,65,77,90,102];
function rankingModel(ranks,players){
    console.log(ranks,players);
    let setRanks = [...new Set(ranks)];
    let playersAssignRank = [];
    let i = setRanks.length - 1;
    for(let score of player){
        while(i >= 0 && score >= setRanks[i]){
            i--;
        }
        playersAssignRank.push(i+2);
    }
    // return result;
    return playersAssignRank;
}
console.log(rankingModel(rank,player));