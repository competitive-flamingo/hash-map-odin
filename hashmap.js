import {LinkedList} from "./linkedList.js"
const HashMap = function() {
    let capacity = 16;
    const loadFactor = 0.8;
    let growAfterNum = Math.round(capacity * loadFactor);
    let entriesNumber = 0;
    let arr = [];
    const hash = function(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
        }
        return hashCode;
    }
    const rehash = function() {
        let newArr = [];
        for(let i = 0 ; i < arr.length ; i++) {
            if(arr[i] !== undefined) {
                for(let j = 0 ; j < arr[i].getSize() ; j++) {
                    const keyValueObj = arr[i].at(j);
                    let newIndex = hash(keyValueObj.key);
                    if(newArr[newIndex] === undefined) {
                        newArr[newIndex] = LinkedList();
                    }
                    newArr[newIndex].append({key: keyValueObj.key, value: keyValueObj.value});
                }
            }
        }
        arr = newArr;
    }
    const set = function(key, value) {
        if(entriesNumber === growAfterNum - 1) {
            capacity *= 2;
            growAfterNum = Math.round(capacity * loadFactor);
            rehash();
        }
        let index = hash(key);
        if(arr[index] === undefined) {
            arr[index] = LinkedList();
        }
        let keyValueIndex = arr[index].find(key);
        if(keyValueIndex != null) {
            arr[index].at(keyValueIndex).value = value;
        }
        else {
            arr[index].append({key, value});
            entriesNumber++;
        }
    }
    const get = function(key) {
        if(!has(key)) return null;
        let index = hash(key);
        for(let i = 0 ; i < arr[index].getSize() ; i++) {
            if(arr[index].at(i).key === key) return arr[index].at(i).value;
        }
        return null;
    }
    const has = function(key) {
        let index = hash(key);
        if(arr[index] !== undefined) {
            for(let j = 0 ; j < arr[index].getSize() ; j++) {
                if(arr[index].at(j).key === key) return true;
            }
        }
        return false;
    }
    const remove = function(key) {
        if(!has(key)) return false;
        let index = hash(key);
        for(let i = 0 ; i < arr[index].getSize() ; i++) {
            if(arr[index].at(i).key === key) {
                arr[index].removeAt(i);
                entriesNumber--;
                return true;
            }
        }
        return false;
    }
    const length = function() {
        return entriesNumber;
    }
    const clear = function() {
        arr = [];
        entriesNumber = 0;
        capacity = 16;
        growAfterNum = Math.round(capacity * loadFactor);
    }
    const keys = function() {
        let keys = [];
        for(let i = 0 ;  i < capacity ; i++) {
            if(arr[i] !== undefined) {
                for(let j = 0 ; j < arr[i].getSize() ; j++) {
                    keys.push(arr[i].at(j).key);
                }
            }
        }
        return keys;
    }
    const values = function() {
        let values = [];
        for(let i = 0 ; i < capacity ; i++) {
            if(arr[i] !== undefined) {
                for(let j = 0 ; j < arr[i].getSize() ; j++) {
                    values.push(arr[i].at(j).value);
                }
            }
        }
        return values;
    }
    const entries = function() {
        let keyValueArr = [];
        for(let i = 0 ; i < capacity ; i++) {
            if(arr[i] !== undefined) {
                for(let j = 0 ; j < arr[i].getSize() ; j++) {
                    const keyValueObj = arr[i].at(j);
                    keyValueArr.push([keyValueObj.key, keyValueObj.value]); 
                }
            }
        }
        return keyValueArr;
    }

    return {
        set,
        values,
        has,
        get,
        remove,
        length,
        clear,
        keys,
        entries,
    }

}

const test = HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('elephant', 'black');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('kite', 'red');
test.set('lion', 'blue');
console.log(test.entries());
console.log(test.get("lion"));
console.log(test.length());
console.log(test.has("jacket"));
console.log(test.has("cat"));
console.log(test.get("cat"));
console.log(test.keys());
console.log(test.values());
test.remove("frog");
console.log(test.entries());
test.clear();
console.log(test.entries());