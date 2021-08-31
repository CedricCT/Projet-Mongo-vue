function toArray(str){
const testf = str.split(",");
console.log(testf);
}
const test = 'pizza,aux,kiwi';
toArray(test);
function toJoinz(array){
    const toJoin = array.join(",");
    console.log(toJoin)
    return toJoin;
}const kiwi=['un','deux','trois'];
const miaou = toJoinz(kiwi);
toArray(miaou);