import { Header } from "./Header/Header.js";
import { Tasklist } from "./Tasklist/Tasklist.js";
import { AddNewTaskDialog } from "./AddNewTaskDialog/AddNewTaskDialog.js";
import { openAddNewTaskDialog } from "../data/data.js";
import { Button } from "./Common/Button/Button.js";

export function Todolist() {
    const container = document.createElement("div");
    container.append(
        Header(), 
        Tasklist(), 
        AddNewTaskDialog(),
        Button("Add", () => openAddNewTaskDialog())
    );

    return container;
}