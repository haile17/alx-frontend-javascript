import { RowId, RowElement } from "./interface";
import * as CURD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

const newRowID: RowId = CURD.insertRow(row);
row.age = 23;
const updatedRow: RowElement = row;

CURD.updateRow(newRowID, updatedRow);
CURD.deleteRow(newRowID);
