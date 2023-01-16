interface Teacher {
    readonly firstName: string;
    readonly lastNmae: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher{
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

interface printTeacher:
printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};

interface StudentConstructor{
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface{
    workOnHomework(): string;
    display():string;
}

const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName:string) {
        this.firstName = firstName;
        this.lastName  = lastName;
    }
    workOnHome(): string {
        return "Currently Working";
    }
    displayName(): string {
        return this.firstName;
    }
};

export{ printTeacher, StudentClass};