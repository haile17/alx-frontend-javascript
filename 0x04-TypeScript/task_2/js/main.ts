interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirctorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirctorTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirctorTasks(): string {
        return "Getting to director tasks";
    }
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workDirctorTasks(): string {
        return "Getting to work";
    }    
    }
export const createEmployee = (salary: number| string): Teacher | Director => Number(salary) < 500 ? new Teacher(): new Director();

export const isDirector = (employee : Teacher | Director): boolean => employee interfaceof Director;

export const executeWork = (employee: Teacher | Director)
: void => {
    const work = employee instanceof Teacher? employee.workTeacherTasks() : employee.workDirctorTasks();
    console.log(work)
}

type Subjects = 'Math' | 'History'

export const teachClass = (todayClass: Subjects) : string => {
    return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}
}
