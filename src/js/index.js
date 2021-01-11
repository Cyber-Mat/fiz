import '../sass/main.scss';

import viewController from './view';
import modelController from './model';

const appCtrl = ((viewCtrl, modelCtrl) => {
  // DOM VARIABLES
  const { addTaskBtn, form, popup, popupCloseBtn, taskList } = viewCtrl.DOM;

  const state = {
    tasks: [],
    tags: {},
    dates: [],
  };

  class Task {
    constructor({
      taskTitle,
      taskDescription,
      taskDueDate,
      taskTag,
      id,
      formattedDueDate,
    }) {
      (this.taskTitle = taskTitle),
        (this.taskDescription = taskDescription),
        (this.taskDueDate = taskDueDate),
        (this.taskTag = taskTag);
      this.id = id;
      this.formattedDueDate = formattedDueDate;
    }
  }

  // POPUP EVENTS
  viewCtrl.popupEvents();

  // FORM SUBMIT EVENT LISTENER
  form.addEventListener('submit', e => {
    e.preventDefault();

    // GET USER INPUT AND STORE IN STATE
    const newTask = viewCtrl.getUserInput(Task, state);

    // SORT TASKS BY DUE DATE
    modelCtrl.sortTasksByDate(state);

    // UPDATE TASK LIST WITH NEW TASK
    viewCtrl.renderTask(state);
  });

  ///////////////////////////
  taskList.addEventListener('click', e => {
    const className = e.target.className;

    if (className === 'cover') {
      // console.log(className);

      const id = e.target.parentNode.getAttribute('data-id');
      viewCtrl.renderTaskDetails(state, id);
    }
  });
})(viewController, modelController);
