import '../sass/main.scss';

import viewController from './view';
import modelController from './model';

const appCtrl = ((viewCtrl, modelCtrl) => {
  // DOM VARIABLES
  const { addTaskBtn, form, popup, popupCloseBtn } = viewCtrl.DOM;

  const state = {
    tasks: [],
    tags: {},
  };

  class Task {
    constructor({ taskTitle, taskDescription, taskDueDate, taskTag }) {
      (this.taskTitle = taskTitle),
        (this.taskDescription = taskDescription),
        (this.taskDueDate = taskDueDate),
        (this.taskTag = taskTag);
    }
  }

  // POPUP EVENTS
  viewCtrl.popupEvents();

  // FORM SUBMIT EVENT LISTENER
  form.addEventListener('submit', e => {
    e.preventDefault();

    // GET USER INPUT AND STORE IN STATE
    const newTask = viewCtrl.getUserInput(Task, state);

    // UPDATE TASK LIST WITH NEW TASK
    viewCtrl.updateDOM(state);
  });
})(viewController, modelController);
