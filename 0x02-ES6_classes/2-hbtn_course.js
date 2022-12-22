export default class HolbertonCourse {
    contractor(name, length, students) {
        if (typeof name !== 'string'){
            throw new TypeError( 'name must be string');
        } else if (typeof length !== 'number') {
            throw new TypeError( 'length must be number');
        } else if (!Array.isArray(students)){
            throw new TypeError( 'student must be an array of string');
        }
        this._name = name;
        this._length = length;
        this._students = students;
    }
    get name() {
        return this._name;
    }
    get length() {
        return this._length;
    }
    get students(){
        return this._students;
    }
    set name(name){
        if (typeof name !== 'string') {
            throw new TypeError( 'name must be a string');
        }
        this._name = name;
    }
    set length(length){
        if (typeof length !== 'number') {
            throw new TypeError( 'Length must be a number');
        }
        this._length = length;
    }

    set students(students) {
        if (!Array.isArray(students)) {
            throw new TypeError (' students must be an array of strings' );
        }
        this._students = students;
    }
}