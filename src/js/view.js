import { compareAsc, format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

import { detailHTML, taskHTML, tagHTML } from './html';

const DOM = {
  addTaskBtn: document.querySelector('.sidebar__add'),
  form: document.querySelector('.form'),
  popup: document.querySelector('.popup'),
  popupCloseBtn: document.querySelector('.close-popup'),
  taskTitle: document.querySelector('#title'),
  taskDescription: document.querySelector('#description'),
  taskDueDate: document.querySelector('#deadline'),
  taskTag: document.querySelector('#tag'),
  taskSubmitBtn: document.querySelector('.submit-btn'),
  taskList: document.querySelector('.list__content'),
  detailSection: document.querySelector('.detail'),
  tagList: document.querySelector('.sidebar__tag'),
};

const popupOpen = () => {
  DOM.form.style.opacity = 1;
  DOM.form.style.visibility = 'visible';

  DOM.popup.style.opacity = 1;
  DOM.popup.style.visibility = 'visible';
};

const popupClose = () => {
  DOM.form.style.opacity = 0;
  DOM.form.style.visibility = 'hidden';

  DOM.popup.style.opacity = 0;
  DOM.popup.style.visibility = 'hidden';
};

//EVENT LISTERS TO POP UP
const popupEvents = () => {
  DOM.addTaskBtn.addEventListener('click', e => {
    popupOpen();
  });

  DOM.popupCloseBtn.addEventListener('click', e => {
    popupClose();
  });
};

const clearInput = () => {
  DOM.taskTitle.value = '';
  DOM.taskDescription.value = '';
  DOM.taskDueDate.value = '';
  DOM.taskTag.value = '';
};

// GET USER INPUT
const getUserInput = (taskClass, state) => {
  const taskTitle = DOM.taskTitle.value;
  const taskDescription = DOM.taskDescription.value;
  const taskDueDate = new Date(DOM.taskDueDate.value);
  const taskTag = DOM.taskTag.value;
  const id = uuidv4();
  const formattedDueDate = format(taskDueDate, 'EEE, do MMM `yy');

  if (taskTitle && formattedDueDate) {
    const userInput = {
      taskTitle,
      taskDescription,
      taskDueDate,
      taskTag,
      id,
      formattedDueDate,
    };

    // CREATE NEW TASK OBJECT AND STORE IN STATE
    const newTask = new taskClass(userInput);
    state.tasks.push(newTask);

    // STORE DATE IN DATES ARRAY
    state.dates.push(taskDueDate);

    // CLEAR USER INPUT
    clearInput();

    // CLOSE POPUP
    popupClose();

    return newTask;
  }
};

// ADD TASKS BY TAGS
const getTags = (state, newTask, taskTag) => {
  if (state.tags[taskTag]) {
    state.tags[taskTag].push(newTask);
  } else {
    state.tags[taskTag] = [];
    state.tags[taskTag].push(newTask);
  }

  console.log(state.tags);
};

// RENDER TASK TO DOM
const renderTask = state => {
  if (state.tasks) {
    let newHTML, formattedDueDate;

    // CLEAR TASK LIST
    DOM.taskList.innerHTML = '';

    state.tasks.forEach(task => {
      newHTML = taskHTML;
      // formattedDueDate = format(task.taskDueDate, 'EEE, do MMM `yy');

      // REPLACE PLACEHOLDER WITH ACTUAL DATA
      newHTML = newHTML.replace('%%TITLE%%', task.taskTitle);
      newHTML = newHTML.replace('%%DUEDATE%%', task.formattedDueDate);
      newHTML = newHTML.replace('%%ID%%', task.id);

      // UPDATE TASK LIST
      DOM.taskList.insertAdjacentHTML('beforeend', newHTML);
    });
  }
};

// RENDER TASK DETAILS
const renderTaskDetails = (state, id) => {
  let newHTML = detailHTML;

  // CLEAR DETAIL SECTION
  DOM.detailSection.innerHTML = '';

  state.tasks.forEach(task => {
    if (task.id === id) {
      // REPLACE PLACEHOLDER TEXT WITH ACTUAL DATA
      newHTML = newHTML.replace('%%DETAILTITLE%%', task.taskTitle);
      newHTML = newHTML.replace('%%DETAILDUEDATE%%', task.formattedDueDate);
      newHTML = newHTML.replace('%%DETAILDESCRIPTION%%', task.taskDescription);

      // APPEND TASK TO DETAIL SECTION
      DOM.detailSection.insertAdjacentHTML('beforeend', newHTML);
    }
  });
};

// RENDER TAGS TO DOM
const renderTags = state => {
  let newHTML;

  // CLEAR TAGS
  DOM.tagList.innerHTML = '';

  for (const tag in state.tags) {
    newHTML = tagHTML;
    newHTML = newHTML.replace(
      '%%TAGTITLE%%',
      `${tag[0].toUpperCase()}${tag.slice(1)}`
    );
    newHTML = newHTML.replace('%%TAGNUMBER%%', state.tags[tag].length);

    DOM.tagList.insertAdjacentHTML('beforeend', newHTML);
  }
};

const viewController = (() => ({
  DOM,
  popupEvents,
  getUserInput,
  renderTask,
  renderTaskDetails,
  getTags,
  renderTags,
}))();

export default viewController;
