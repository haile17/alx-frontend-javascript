/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subjects.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />


export const cpp = Subjects.cpp;
export const java = Subjects.JavaClass;
export const react = Subjects.ReactClass;

export const cTeacher: Subjects.Teacher = {
    firstName: "Haile",
    lastName: 'Hassen',
    experianceTeachingC: 10,
}

const cSubject = new cpp();

console.log('c++');
console.log(cSubject.setTeacher(cTeacher));
console.log(cSubject.getRequirments());
console.log(cSubject.getAvailableTeacher());

const javaSubject = new java();


console.log('Java');
console.log(javaSubject.setTeacher(cTeacher));
console.log(javaSubject.getRequirments());
console.log(javaSubject.getAvailableTeacher());

const reactSubject = new react();

console.log('React');
console.log(reactSubject.setTeacher(cTeacher));
console.log(reactSubject.getRequirments());
console.log(reactSubject.getAvailableTeacher());








