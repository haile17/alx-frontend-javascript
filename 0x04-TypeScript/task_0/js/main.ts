interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const stud1: Student = {
    firstName: "Haile",
    lastName: "Hassen",
    age: 28,
    location: "Addis Ababa",
};

const stud2: Student = {
    firstName: "Izabella",
    lastName: "Kassa",
    age: 27,
    location: "Addis Ababa",
};

const studentsList: Student[] = [stud1, stud2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

document.body.appendChild(table);


