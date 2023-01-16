/// <reference path="Teacher.ts" />
/// <reference path="Subjects.ts" />

namespace Subjects {
    export interface Teacher {
        experianceTeachingJava?: number;
    }

    export class JavaClass extends Subject {
        getRequirments = () => 'Here is the list of requirements for Java';

        getAvailableTeacher = () => {
            if (!this.teacher?.experianceTeachingJava) return 'No available teacher';

            return 'Available Teacher: ${this.teacher}';
    }
  }
}