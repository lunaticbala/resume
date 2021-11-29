//JSON format resume data

const data={
    "name":"Balaji",
    "age":"21",
    "gender":"male",
    "games":["kho-kho","badminton","soccer","cricket"],
    "class":["HTML","JavaScript","CSS"],
    "yop":"2021",
    "location":"Neyveli"

}

console.log(data.name);
console.log(data.class[0]);
console.log(data.yop);
console.log(data.location);


for loop

var json = {
    jsonData:  [
        {one: [11, 12, 13, 14, 15]},
        {two: [21, 22, 23]},
        {three: [31, 32]}
    ]
 }; 
 for (var i=0; i<json.jsonData.length; i++) {
    for (var key in json.jsonData[i]) {
        for (var j= 0; j<json.jsonData[i][key].length; j++) {
            console.log(json.jsonData[i][key][j])
        }
    }
 }


 for in loop

 var person = {
    fname: "Nick",
    lname: "Jonas",
    age: 26
 }; 
 for (let x in person) {
    console.log(x + ": "+ person[x])
 }
 ‍


 for each


 var results = [ {"id":"10", "class": "child-of-9"}, {"id":"11", "classd": "child-of-10"} ];

results.forEach(function(item) {
    console.log(item);
});
