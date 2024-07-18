import { Button } from "../../Common/Button/Button.js";

export function Task(task) {
    const container = document.createElement("li");
    container.append(task.title, Button("delete", () => {}));

    return container;
}