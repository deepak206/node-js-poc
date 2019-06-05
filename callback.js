
//callback

function functionOne(x) { return 'Total ' + x + 1; }

function functionTwo(var1, callback) {
    return callback(var1);		
}
var person = functionTwo(2, functionOne);
console.log(person);
module.exports = person;