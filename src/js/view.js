import { compareAsc, format } from 'date-fns';
import { taskHTML } from './html';

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

//GET USER INPUT
const getUserInput = (taskClass, state) => {
  const taskTitle = DOM.taskTitle.value;
  const taskDescription = DOM.taskDescription.value;
  const taskDueDate = format(new Date(DOM.taskDueDate.value), 'EEE, do MMM');
  const taskTag = DOM.taskTag.value;

  if (taskTitle && taskDueDate) {
    const userInput = { taskTitle, taskDescription, taskDueDate, taskTag };

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

// UPDATE DOM
const updateDOM = state => {
  if (state.tasks) {
    let newHTML, dueDate;

    // CLEAR TASK LIST
    DOM.taskList.innerHTML = '';

    state.tasks.forEach(task => {
      newHTML = taskHTML;

      // REPLACE PLACEHOLDER WITH ACTUAL DATA
      newHTML = newHTML.replace('%%TITLE%%', task.taskTitle);
      newHTML = newHTML.replace('%%DUEDATE%%', task.taskDueDate);

      // UPDATE TASK LIST
      DOM.taskList.insertAdjacentHTML('beforeend', newHTML);
    });
  }
};

const viewController = (() => ({
  DOM,
  popupEvents,
  getUserInput,
  updateDOM,
}))();

export default viewController;
