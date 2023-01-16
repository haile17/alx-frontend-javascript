/// <reference path="Teacher.ts" />
/// <reference path="Subjects.ts" />

namespace Subjects {
    export interface Teacher {
        experianceTeachingC?: number;
    }

    export class cpp extends Subject {

        getRequirments = () => 'Here is the list of requirements for Cpp';

            getAvailableTeacher = () => {
                if (!this.teacher?.experianceTeachingC) return 'No available teacher';

                return 'Available Teacher: <first name of teacher>';
            }

    }
}