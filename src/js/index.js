import '../sass/main.scss';

import viewController from './view';
import modelController from './model';

const appCtrl = ((viewCtrl, modelCtrl) => {
  // DOM VARIABLES
  const {
    addTaskBtn,
    form,
    taskList,
    tagList,
    sidebarOverview,
    sidebarDone,
    sidebarImportant,
    sidebarToday,
    searchInput,
    pageNext,
    pagePrev,
    deleteBtn,
  } = viewCtrl.DOM;

  let state = {
    tasks: [],
    tags: {},
    completed: [],
    important: [],
  };

  // STORAGE
  const persistData = () => {
    localStorage.setItem('state', JSON.stringify(state));
  };

  let pageNumber = 1;
  let tasks;

  window.addEventListener('load', e => {
    if (!JSON.parse(localStorage.getItem('state'))) {
      persistData();
    } else {
      state = JSON.parse(localStorage.getItem('state'));
    }

    modelCtrl.sortTasksByDate(state.tasks);

    pageNumber = 1;
    tasks = state.tasks;
    viewCtrl.showPageNumbers(state.tasks, pageNumber);
    modelCtrl.pageCtrl(state.tasks, viewCtrl.renderTask, pageNumber);

    // RENDER TAGS
    if (state.tags) {
      viewCtrl.renderTags(state);
    }

    document.querySelector(
      '.loadingio-spinner-wedges-cqyhjjq8b24'
    ).style.display = 'none';
  });
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
      this.important = '';
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

    //////////////////////////////////////////
    // UPDATE TASK LIST WITH NEW TASK
    // viewCtrl.renderTask(state.tasks);
    pageNumber = 1;
    tasks = state.tasks;
    viewCtrl.showPageNumbers(state.tasks, pageNumber);
    modelCtrl.pageCtrl(state.tasks, viewCtrl.renderTask, pageNumber);

    // GET TAGS
    viewCtrl.getTags(state, newTask, newTask.taskTag);

    // RENDER TAGS
    viewCtrl.renderTags(state);

    /////////////////////////////////////////////
    persistData();
  });

  // TASK LIST EVENT LISTENER (EVENT BUBBLING)
  taskList.addEventListener('click', e => {
    const className = e.target.className;
    const classList = e.target.classList;

    // TASK LIST EVENT
    if (className === 'cover') {
      const id = e.target.parentNode.getAttribute('data-id');
      viewCtrl.renderTaskDetails(state, id);
    }

    // DONE ICON EVENT
    if (className === 'done__icon-div') {
      const id = e.target.parentNode.getAttribute('data-id');
      const tag = e.target.parentNode.getAttribute('data-tag');

      // MOVE COMPLETED TASKS FROM TASKS LIST TO DONE
      modelCtrl.removeCompleted(state, id, tag);

      // RENDER NEW TASK LIST
      // viewCtrl.renderTask(state.tasks);

      modelCtrl.sortTasksByDate(state.tasks);

      pageNumber = 1;
      viewCtrl.showPageNumbers(tasks, pageNumber);
      modelCtrl.pageCtrl(tasks, viewCtrl.renderTask, pageNumber);

      viewCtrl.changeHeader('', tasks, state);

      // RENDER TAGS
      viewCtrl.renderTags(state);

      /////////////////////////////////////////////
      persistData();
      changeHeader;
    }

    // STAR ICON EVENT
    if (classList[1] === 'star-icon') {
      const id = e.target.parentNode.getAttribute('data-id');

      modelCtrl.toggleImportant(state, id);

      modelCtrl.sortTasksByDate(state.tasks);

      pageNumber = 1;
      viewCtrl.showPageNumbers(tasks, pageNumber);
      modelCtrl.pageCtrl(tasks, viewCtrl.renderTask, pageNumber);

      viewCtrl.changeHeader('', tasks, state);

      /////////////////////////////////////////////
      persistData();
    }

    // DELETE BUTTON EVENT
    if (className === 'delete') {
      const id = e.target.parentNode.getAttribute('data-id');
      const tag = e.target.parentNode.getAttribute('data-tag');

      modelCtrl.deleteTask(state, id, tag);

      modelCtrl.sortTasksByDate(state.tasks);

      pageNumber = 1;

      viewCtrl.showPageNumbers(tasks, pageNumber);
      modelCtrl.pageCtrl(tasks, viewCtrl.renderTask, pageNumber);

      viewCtrl.changeHeader('', tasks, state);

      // RENDER TAGS
      viewCtrl.renderTags(state);

      /////////////////////////////////////////////
      persistData();
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
    modelCtrl.sortTasksByDate(state.tasks);

    pageNumber = 1;
    tasks = state.tasks;
    viewCtrl.showPageNumbers(state.tasks, pageNumber);
    // viewCtrl.renderTask(state.tasks);
    modelCtrl.pageCtrl(state.tasks, viewCtrl.renderTask, pageNumber);

    /////////////////////////////////////////////
    persistData();
  });

  // SIDEBAR DONE EVENT LISTENER
  sidebarDone.addEventListener('click', e => {
    modelCtrl.sortTasksByDate(state.completed);

    pageNumber = 1;
    tasks = state.completed;
    viewCtrl.showPageNumbers(state.completed, pageNumber);
    // viewCtrl.renderTask(state.completed, 'show');
    modelCtrl.pageCtrl(
      state.completed,
      viewCtrl.renderTask,
      pageNumber,
      'show'
    );
    viewCtrl.changeHeader('Completed');
  });

  // SIDEBAR IMPORTANT EVENT LISTENER
  sidebarImportant.addEventListener('click', e => {
    modelCtrl.sortTasksByDate(state.important);

    pageNumber = 1;
    tasks = state.important;
    viewCtrl.showPageNumbers(state.important, pageNumber);
    // viewCtrl.renderTask(state.important);
    modelCtrl.pageCtrl(state.important, viewCtrl.renderTask, pageNumber);
    viewCtrl.changeHeader('Important');
  });

  // SIDEBAR TODAY EVENT LISTENER
  sidebarToday.addEventListener('click', e => {
    viewCtrl.renderToday(state);
  });

  // SEARCH INPUT EVENT LISTENER
  searchInput.addEventListener('input', e => {
    const value = e.target.value;
    modelCtrl.searchTask(state, value, viewCtrl.renderTask);
  });

  // PAGES
  pageNext.addEventListener('click', e => {
    pageNumber += 1;
    let show = '';

    if (tasks === state.completed) {
      show = 'show';
    }

    viewCtrl.showPageNumbers(tasks, pageNumber);
    modelCtrl.pageCtrl(tasks, viewCtrl.renderTask, pageNumber, show);
  });
  pagePrev.addEventListener('click', e => {
    pageNumber -= 1;
    let show = '';

    if (tasks === state.completed) {
      show = 'show';
    }

    viewCtrl.showPageNumbers(tasks, pageNumber);
    modelCtrl.pageCtrl(tasks, viewCtrl.renderTask, pageNumber, show);
  });

  // PAGE LOAD
  window.addEventListener('onload', e => {});
})(viewController, modelController);
