


// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => { };
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        get: function () { return Object.prototype._value },
        set: function (value) { return Object.prototype._value = value }
    });
    return propertyName;
};
const createProtoMagicObject = () => {
    var magObj = function () { return {} };
    magObj.prototype = magObj.__proto__;
    return magObj;
};

var numbCallFunction = 0;
Function.prototype.valueOf = function () { return numbCallFunction; }
const incrementor = () => {
    numbCallFunction++;
    return incrementor;
};

var numbCallAsyncFunction = 0;
const asyncIncrementor = () => {
    var number = new Promise(function (resolve) {
        numbCallAsyncFunction++;
        return resolve(numbCallAsyncFunction);
    });

    return number;


};


const createIncrementer = () => {
    var inc = {
        count: 0,
        next() {
            return { value: ++this.count }
        },
        
        [Symbol.iterator]() {
            return {
                next: () => {
                    if (this.count > 10) {
                        return this;
                    }

                    return this.next();


                },
            };
        },
    };
    return inc;

};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise(function (resolve) {
        setTimeout(function () {
            return resolve(param);
        }, 1005);
    });
};


var countLenght = 0;
function isEmpty(params) {
    for (var key in params) {
        countLenght++;
      }
      return countLenght;
}
const getDeepPropertiesCount = (obj) => {

    let arr = Object.getOwnPropertyNames(obj);
    var a = arr.length;
    arr.forEach(function(i) {
        if (isEmpty(obj[i]) > 0){
            a += getDeepPropertiesCount(obj[i]);
        };
    });
    return a;
        
    
};
const createSerializedObject = () => { 
    return null;
};
const toBuffer = () => { };
const sortByProto = (arr) => {

return arr
 };

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;