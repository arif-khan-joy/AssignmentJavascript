 //feetToMile
 function feetToMile(feet){
    var mile = feet/5280;
    return mile;
 }
 var output =feetToMile(15840);
 console.log(output);

//woodCalculator
 
function woodCalculator(chair, table, bed){
     var chairCount = chair * 1;
    var tableCount = table * 3;
     var bedCount = bed * 5;
     var totalWood = chairCount + tableCount + bedCount;
     return totalWood;
 }
 var woodResult = woodCalculator(5, 5, 5);
 console.log(woodResult);

 //tinyFriend
 function tinyFriend(arr) {
    var shortLength = Infinity;
    var shortest = "";

    if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string' && arr[i].length < shortLength) {
                shortest = arr[i];
                shortLength = arr[i].length;
            }
        }
    }

    return shortest;
}

var output = tinyFriend(['riya', 'tuhin', "sumon","joy", 'three']);
console.log(output); 