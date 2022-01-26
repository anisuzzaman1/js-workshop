function startFan(money) {
    console.log("Total Taka in Hand: ", money);
    var eachSingaga = 10;
    var numOfSingara = money / eachSingaga;
    return numOfSingara;
    //return eachSingaga;
    // console.log("You will get:", numOfSingara, " Singara In return");
}
var taka = 349;
var qtyOfSingara = startFan(taka);
//console.log("Each Singara Cost: ", eachSingaga);
console.log("Total Number of Singare Received: ", qtyOfSingara);