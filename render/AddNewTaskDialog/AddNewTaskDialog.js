import { Button } from "../Common/Button/Button.js";
import { addTask, closeAddNewTaskDialog, data } from "../../data/data.js";

export function AddNewTaskDialog() {
    const container = document.createElement("dialog");
    container.open = data.addNewTaskDialog.isOpen;
    
    const titleElement = document.createElement("h4");
    titleElement.innerText = "New Task";

    const inputElement = document.createElement("input");

    container.append(
        titleElement, 
        inputElement, 
        Button("Save", () => addTask(inputElement.value)), 
        Button("Cancel", () => closeAddNewTaskDialog())
    );

    return container;
}