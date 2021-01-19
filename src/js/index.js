import '../sass/main.scss';

import viewController from './view';
import modelController from './model';

const appCtrl = ((viewCtrl, modelCtrl) => {
  // DOM VARIABLES
  const {
    addTaskBtn,
    form,
    popup,
    popupCloseBtn,
    taskList,
    tagList,
    sidebarOverview,
    sidebarDone,
  } = viewCtrl.DOM;

  const state = {
    tasks: [],
    tags: {},
    completed: [],
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
    modelCtrl.sortTasksByDate(state.tasks);

    // UPDATE TASK LIST WITH NEW TASK
    viewCtrl.renderTask(state.tasks);

    // GET TAGS
    viewCtrl.getTags(state, newTask, newTask.taskTag);

    // RENDER TAGS
    viewCtrl.renderTags(state);
  });

  // TASK LIST EVENT LISTENER (EVENT BUBBLING)
  taskList.addEventListener('click', e => {
    const className = e.target.className;

    // TASK LIST EVENT
    if (className === 'cover') {
      const id = e.target.parentNode.getAttribute('data-id');
      viewCtrl.renderTaskDetails(state, id);
    }

    // DONE ICON EVENT
    if (className === 'done__icon-div') {
      const id = e.target.parentNode.getAttribute('data-id');

      // MOVE COMPLETED TASKS FROM TASKS LIST TO DONE
      modelCtrl.removeCompleted(state, id);
      viewCtrl.renderTask(state.tasks);
    }
  });

  // TAGS LIST EVENT LISTENER
  tagList.addEventListener('click', e => {
    const [id, className] = e.target.classList;

    if (className === 'cover') {
      viewCtrl.renderTaskByTags(state.tags, id, modelCtrl.sortTasksByDate);
    }
  });

  // SIDEBAR OVERVIEW EVENT LISTENER
  sidebarOverview.addEventListener('click', e => {
    viewCtrl.renderTask(state.tasks);
  });

  // SIDEBAR DONE EVENT LISTENER
  sidebarDone.addEventListener('click', e => {
    viewCtrl.renderTask(state.completed);
  });
})(viewController, modelController);
