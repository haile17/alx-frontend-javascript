/// <reference path="Teacher.ts" />
/// <reference path="Subjects.ts" />

namespace Subjects {
    export interface Teacher {
        experianceTeachingReact?: number;
    }

    export class ReactClass extends Subject {
        getRequirments = () => 'Here is the list of requirements for React';

        getAvailableTeacher = () => {
            if (!this.teacher?.experianceTeachingReact) return 'No available teacher';

            return 'Available Teacher: ${this.teacher}';
    }
  }
}