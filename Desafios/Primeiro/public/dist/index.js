"use strict";
(() => {
    // Enums
    let NotificationPlatform;
    (function (NotificationPlatform) {
        NotificationPlatform["SMS"] = "SMS";
        NotificationPlatform["EMAIL"] = "EMAIL";
        NotificationPlatform["PUSH_NOTIFICATION"] = "PUSH_NOTIFICATION";
    })(NotificationPlatform || (NotificationPlatform = {}));
    let Mode;
    (function (Mode) {
        Mode["TODO"] = "TODO";
        Mode["REMINDER"] = "REMINDER";
    })(Mode || (Mode = {}));
    // Utils
    const DateUtils = {
        tomorrow() {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            return tomorrow;
        },
        today() {
            return new Date();
        },
        formatDate(date) {
            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        },
    };
    const UUID = () => {
        return Math.random().toString(36).substr(2, 9);
    };
    class Reminder {
        constructor(description, scheduleDate, notifications) {
            this.id = UUID();
            this.dateCreated = DateUtils.today();
            this.dateUpdated = DateUtils.today();
            this.description = "";
            this.scheduleDate = DateUtils.tomorrow();
            this.notifications = [NotificationPlatform.EMAIL];
            this.description = description;
            this.scheduleDate = scheduleDate;
            this.notifications = notifications;
        }
        render() {
            return `
      ---> Reminder <--- \n
      Description: ${this.description} \n
      Notify by ${this.notifications.join(" and ")} in ${DateUtils.formatDate(this.scheduleDate)} \n
      Created: ${DateUtils.formatDate(this.dateCreated)} Last Update: ${DateUtils.formatDate(this.dateUpdated)}
      `;
        }
    }
    class Todo {
        constructor(description) {
            this.id = UUID();
            this.dateCreated = DateUtils.today();
            this.dateUpdated = DateUtils.today();
            this.description = "";
            this.done = false;
            this.description = description;
        }
        render() {
            const doneLabel = this.done ? "Completed" : "In Progress";
            return `
      ---> TODO <--- \n
      Description: ${this.description} \n
      Status: ${doneLabel} \n
      Created: ${DateUtils.formatDate(this.dateCreated)} Last Update: ${DateUtils.formatDate(this.dateUpdated)}
      `;
        }
    }
    const taskView = {
        getTodo(form) {
            const todoDescription = form.todoDescription.value;
            form.reset();
            return new Todo(todoDescription);
        },
        getReminder(form) {
            const reminderNotifications = [
                form.notification.value,
            ];
            const reminderDate = new Date(form.scheduleDate.value);
            const reminderDescription = form.reminderDescription.value;
            form.reset();
            return new Reminder(reminderDescription, reminderDate, reminderNotifications);
        },
        render(tasks, mode) {
            const tasksList = document.getElementById("tasksList");
            while (tasksList === null || tasksList === void 0 ? void 0 : tasksList.firstChild) {
                tasksList.removeChild(tasksList.firstChild);
            }
            tasks.forEach((task) => {
                const li = document.createElement("LI");
                const textNode = document.createTextNode(task.render());
                li.appendChild(textNode);
                tasksList === null || tasksList === void 0 ? void 0 : tasksList.appendChild(li);
            });
            const todoSet = document.getElementById("todoSet");
            const reminderSet = document.getElementById("reminderSet");
            if (mode === Mode.TODO) {
                todoSet === null || todoSet === void 0 ? void 0 : todoSet.setAttribute("style", "display: block");
                todoSet === null || todoSet === void 0 ? void 0 : todoSet.removeAttribute("disabled");
                reminderSet === null || reminderSet === void 0 ? void 0 : reminderSet.setAttribute("style", "display: none");
                reminderSet === null || reminderSet === void 0 ? void 0 : reminderSet.setAttribute("disabled", "true");
            }
            else {
                reminderSet === null || reminderSet === void 0 ? void 0 : reminderSet.setAttribute("style", "display: block");
                reminderSet === null || reminderSet === void 0 ? void 0 : reminderSet.removeAttribute("disabled");
                todoSet === null || todoSet === void 0 ? void 0 : todoSet.setAttribute("style", "display: none");
                todoSet === null || todoSet === void 0 ? void 0 : todoSet.setAttribute("disabled", "true");
            }
        },
    };
    const TaskController = (view) => {
        var _a, _b;
        const tasks = [];
        let mode = Mode.TODO;
        const handleTaskCreate = (event) => {
            event.preventDefault();
            const form = event.target;
            switch (mode) {
                case Mode.TODO:
                    tasks.push(view.getTodo(form));
                    break;
                case Mode.REMINDER:
                    tasks.push(view.getReminder(form));
                    break;
            }
            view.render(tasks, mode);
        };
        const handleToggleMode = () => {
            switch (mode) {
                case Mode.TODO:
                    mode = Mode.REMINDER;
                    break;
                case Mode.REMINDER:
                    mode = Mode.TODO;
                    break;
            }
            view.render(tasks, mode);
        };
        (_a = document
            .getElementById("toggleMode")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", handleToggleMode);
        (_b = document
            .getElementById("taskForm")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", handleTaskCreate);
    };
    TaskController(taskView);
})();
