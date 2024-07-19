import { data } from "../../data/data.js";
import { Button } from "../Common/Button/Button.js";

export function EditTaskDialog(taskId) {
    const container = document.createElement("dialog");
    container.open = data.editTaskDialog.isOpen;
    
    const titleElement = document.createElement("h4");
    titleElement.innerText = "Edit Task";

    const inputElement = document.createElement("input");

    container.append(
        titleElement, 
        inputElement, 
        Button("Save", () => addTask(inputElement.value)), 
        Button("Cancel", () => closeAddNewTaskDialog())
    );

    return container;
}