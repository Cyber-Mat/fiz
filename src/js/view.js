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
  taskListHeaderText: document.querySelector('.list__header--text'),
  sidebarOverview: document.querySelector('.sidebar__overview'),
  sidebarDone: document.querySelector('.sidebar__done'),
  sidebarImportant: document.querySelector('.sidebar__important'),
  sidebarToday: document.querySelector('.sidebar__today'),
  loginBtn: document.querySelector('.login__btn'),
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
  const taskTag = DOM.taskTag.value.toLowerCase();
  const id = uuidv4();
  const formattedDueDate = format(taskDueDate, 'EEE, do MMM `yy');

  if (taskTitle && formattedDueDate) {
    const userInput = {
      taskTitle,
      taskDescription,
      taskDueDate,
      taskTag: taskTag ? taskTag : 'Primary',
      id,
      formattedDueDate,
    };

    // CREATE NEW TASK OBJECT AND STORE IN STATE
    const newTask = new taskClass(userInput);
    state.tasks.push(newTask);

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
    const id = uuidv4();

    state.tags[taskTag] = [];
    state.tags[taskTag].push(id);
    state.tags[taskTag].push(newTask);
  }
};

// RENDER TASK TO DOM
const renderTask = (tasks, show) => {
  if (tasks) {
    let newHTML;

    // CLEAR TASK LIST
    DOM.taskList.innerHTML = '';

    // RENAME TASK LIST HEADER
    DOM.taskListHeaderText.textContent = 'All';

    tasks.forEach(task => {
      newHTML = taskHTML;

      if (show) {
        // ADD CLASS TO SHOW DONE ICON
        newHTML = newHTML.replace('%%SHOW%%', 'show');
      } else {
        // ADD CLASS TO HIDE DONE ICON
        newHTML = newHTML.replace('%%SHOW%%', 'hide');
      }

      if (task.important === 'yes') {
        newHTML = newHTML.replace('%%STARICON%%', 'red');
      } else {
        newHTML = newHTML.replace('%%STARICON%%', 'black');
      }

      // REPLACE PLACEHOLDER WITH ACTUAL DATA
      newHTML = newHTML.replace('%%TITLE%%', task.taskTitle);
      newHTML = newHTML.replace('%%DUEDATE%%', task.formattedDueDate);
      newHTML = newHTML.replace('%%ID%%', task.id);
      newHTML = newHTML.replace('%%TAG%%', task.taskTag);

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

  const tagColour = ['blue', 'yellow', 'green', 'pink', 'red', 'purple'];

  // CLEAR TAGS
  DOM.tagList.innerHTML = '';

  for (const tag in state.tags) {
    newHTML = tagHTML;
    newHTML = newHTML.replace(
      '%%TAGTITLE%%',
      `${tag[0].toUpperCase()}${tag.slice(1)}`
    );
    newHTML = newHTML.replace('%%ID%%', state.tags[tag][0]);
    newHTML = newHTML.replace('%%TAGNUMBER%%', state.tags[tag].length - 1);
    newHTML = newHTML.replace(
      '%%TAGCOLOUR%%',
      tagColour[Math.floor(Math.random() * 6)]
    );

    DOM.tagList.insertAdjacentHTML('beforeend', newHTML);
  }
};

// RENDER TASKS BASED ON TAG
const renderTaskByTags = (tags, id, sortTasks) => {
  let newHTML;
  DOM.taskList.innerHTML = '';

  for (const tag in tags) {
    if (id === tags[tag][0]) {
      // SET TASK LIST HEADER TEXT TO TAGNAME
      DOM.taskListHeaderText.textContent = `${
        tag[0].toUpperCase() + tag.slice(1)
      }`;

      // SORT TASKS BY DUE DATE
      sortTasks(tags[tag]);

      tags[tag].forEach(task => {
        if (typeof task === 'object') {
          newHTML = taskHTML;

          // REPLACE PLACEHOLDER WITH ACTUAL DATA
          newHTML = newHTML.replace('%%SHOW%%', 'hide');
          newHTML = newHTML.replace('%%TITLE%%', task.taskTitle);
          newHTML = newHTML.replace('%%DUEDATE%%', task.formattedDueDate);
          newHTML = newHTML.replace('%%ID%%', task.id);
          newHTML = newHTML.replace('%%TAG%%', task.taskTag);

          // UPDATE TASK LIST
          DOM.taskList.insertAdjacentHTML('beforeend', newHTML);
        }
      });
    }
  }
};

const changeHeader = title => {
  DOM.taskListHeaderText.textContent = title;
};

// const toggleFill = icon => {
//   icon.id === 'black' ? (icon.id = 'red') : (icon.id = 'black');
// };

const renderToday = state => {
  let newHTML;
  const today = new Date().toDateString();

  // CLEAR TASK LIST
  DOM.taskList.innerHTML = '';

  // RENAME TASK LIST HEADER
  DOM.taskListHeaderText.textContent = 'Today';

  state.tasks.forEach(task => {
    if (task.taskDueDate.toDateString() === today) {
      newHTML = taskHTML;

      if (task.important === 'yes') {
        newHTML = newHTML.replace('%%STARICON%%', 'red');
      } else {
        newHTML = newHTML.replace('%%STARICON%%', 'black');
      }

      // REPLACE PLACEHOLDER WITH ACTUAL DATA
      newHTML = newHTML.replace('%%SHOW%%', 'hide');
      newHTML = newHTML.replace('%%TITLE%%', task.taskTitle);
      newHTML = newHTML.replace('%%DUEDATE%%', task.formattedDueDate);
      newHTML = newHTML.replace('%%ID%%', task.id);
      newHTML = newHTML.replace('%%TAG%%', task.taskTag);

      // UPDATE TASK LIST
      DOM.taskList.insertAdjacentHTML('beforeend', newHTML);
    }
  });
};

const viewController = (() => ({
  DOM,
  popupEvents,
  getUserInput,
  renderTask,
  renderTaskDetails,
  getTags,
  renderTags,
  renderTaskByTags,
  changeHeader,
  renderToday,
}))();

export default viewController;
