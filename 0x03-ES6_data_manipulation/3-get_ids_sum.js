export default function getStudentIdsSum(students) {
    return students.reduce((counter, currentObj) => counter + currentObj.id, 0);
}