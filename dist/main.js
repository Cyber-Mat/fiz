/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/html.js":
/*!************************!*\
  !*** ./src/js/html.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskHTML": () => /* binding */ taskHTML,
/* harmony export */   "detailHTML": () => /* binding */ detailHTML,
/* harmony export */   "tagHTML": () => /* binding */ tagHTML
/* harmony export */ });
var taskHTML = "\n            <div class=\"list__item\" data-id=\"%%ID%%\" data-tag=\"%%TAG%%\">\n              <div class=\"cover\">&nbsp;</div>\n              <div class=\"done__icon-div\">\n                <svg class=\"icon %%SHOW%%\">\n                  <use xlink:href=\"./img/sprite.svg#icon-checkmark\"></use>\n                </svg>\n              </div>\n              <div class=\"list__item--description\">\n                <span class=\"top\">%%TITLE%%</span>\n                <div class=\"bottom\">\n                  <svg class=\"icon time-icon\">\n                    <use xlink:href=\"./img/sprite.svg#icon-access_time\"></use>\n                  </svg>\n                  <span class=\"due-date\">%%DUEDATE%%</span>\n                  <!--\n                  <svg class=\"icon notif-icon\">\n                    <use\n                      xlink:href=\"./img/sprite.svg#icon-notifications-outline\"\n                    ></use>\n                  </svg>\n                  -->\n                </div>\n              </div>\n              <svg id=\"%%STARICON%%\" class=\"icon star-icon\">\n              <use xlink:href=\"./img/sprite.svg#icon-star-o\"></use>\n              </svg>\n              <span class=\"delete\">x</span>\n            </div>";
var detailHTML = "  \n            <div class=\"detail__icon\">\n            <svg class=\"icon done-icon\">\n              <use xlink:href=\"./img/sprite.svg#icon-\"></use>\n            </svg>\n          </div>\n      \n          <div class=\"detail__content\">\n            <div class=\"detail__header\">\n              <div class=\"top\">\n                <span>%%DETAILTITLE%%</span>\n                <div class=\"icon-div\">\n                  <svg class=\"icon\">\n                    <use\n                      xlink:href=\"./img/sprite.svg#icon-dots-horizontal-triple\"\n                    ></use>\n                  </svg>\n                  <!--\n                  <svg class=\"icon\">\n                    <use\n                      xlink:href=\"./img/sprite.svg#icon-dots-horizontal-triple\"\n                    ></use>\n                  </svg>\n                  -->\n                </div>\n              </div>\n              <div class=\"bottom\">\n                <div class=\"date\">\n                  <svg class=\"icon\">\n                    <use xlink:href=\"./img/sprite.svg#icon-access_time\"></use>\n                  </svg>\n                  <span>%%DETAILDUEDATE%%</span>\n                </div>\n                <!--\n                <div class=\"reminder\">\n                  <svg class=\"icon\">\n                    <use xlink:href=\"./img/sprite.svg#icon-alarmclock\"></use>\n                  </svg>\n                  <span>Remind me at 9:15am</span>\n                </div>\n                -->\n              </div>\n            </div>\n            <p class=\"detail__text\">\n              %%DETAILDESCRIPTION%%\n            </p>\n            \n            <!--\n            <div class=\"detail__step\">\n              <a class=\"detail__step--add\"> &#43; Add step </a>\n              <div class=\"detail__step--item\">\n                <input type=\"checkbox\" name=\"\" id=\"step item\" />\n                <label for=\"step item\">play soccer</label>\n              </div>\n\n              <div class=\"detail__step--item\">\n                <input type=\"checkbox\" name=\"\" id=\"step item\" />\n                <label for=\"step item\">music lesson</label>\n              </div>\n              <div class=\"detail__step--item\">\n                <input type=\"checkbox\" name=\"\" id=\"step item\" />\n                <label for=\"step item\">visit the dentist</label>\n              </div>\n            </div>\n            -->\n          </div>";
var tagHTML = "\n          <div class=\"sidebar__tag--item sidebar__tag--work\">\n            <div class=\"%%ID%% cover\">&nbsp;</div>\n            <span class=\"tag-color %%TAGCOLOUR%%\">&nbsp;</span>\n            <span class=\"tag-text\">%%TAGTITLE%%</span>\n            <span class=\"tag-count\">%%TAGNUMBER%%</span>\n          </div>\n          ";

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/js/view.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/js/model.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var appCtrl = function (viewCtrl, modelCtrl) {
  // DOM VARIABLES
  var _viewCtrl$DOM = viewCtrl.DOM,
      addTaskBtn = _viewCtrl$DOM.addTaskBtn,
      form = _viewCtrl$DOM.form,
      taskList = _viewCtrl$DOM.taskList,
      tagList = _viewCtrl$DOM.tagList,
      sidebarOverview = _viewCtrl$DOM.sidebarOverview,
      sidebarDone = _viewCtrl$DOM.sidebarDone,
      sidebarImportant = _viewCtrl$DOM.sidebarImportant,
      sidebarToday = _viewCtrl$DOM.sidebarToday,
      searchInput = _viewCtrl$DOM.searchInput,
      pageNext = _viewCtrl$DOM.pageNext,
      pagePrev = _viewCtrl$DOM.pagePrev,
      deleteBtn = _viewCtrl$DOM.deleteBtn;
  var state = {
    tasks: [],
    tags: {},
    completed: [],
    important: []
  }; // STORAGE

  var persistData = function persistData() {
    localStorage.setItem('state', JSON.stringify(state));
  };

  var pageNumber = 1;
  var tasks;
  window.addEventListener('load', function (e) {
    if (!JSON.parse(localStorage.getItem('state'))) {
      persistData();
    } else {
      state = JSON.parse(localStorage.getItem('state'));
    }

    modelCtrl.sortTasksByDate(state.tasks);
    pageNumber = 1;
    tasks = state.tasks;
    viewCtrl.showPageNumbers(state.tasks, pageNumber);
    modelCtrl.pageCtrl(state.tasks, viewCtrl.renderTask, pageNumber); // RENDER TAGS

    if (state.tags) {
      viewCtrl.renderTags(state);
    }

    document.querySelector('.loadingio-spinner-wedges-cqyhjjq8b24').style.display = 'none';
  });

  var Task = function Task(_ref) {
    var taskTitle = _ref.taskTitle,
        taskDescription = _ref.taskDescription,
        taskDueDate = _ref.taskDueDate,
        taskTag = _ref.taskTag,
        id = _ref.id,
        formattedDueDate = _ref.formattedDueDate;

    _classCallCheck(this, Task);

    this.taskTitle = taskTitle, this.taskDescription = taskDescription, this.taskDueDate = taskDueDate, this.taskTag = taskTag;
    this.id = id;
    this.formattedDueDate = formattedDueDate;
    this.important = '';
  }; // POPUP EVENTS


  viewCtrl.popupEvents(); // FORM SUBMIT EVENT LISTENER

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // GET USER INPUT AND STORE IN STATE

    var newTask = viewCtrl.getUserInput(Task, state); // SORT TASKS BY DUE DATE

    modelCtrl.sortTasksByDate(state.tasks); //////////////////////////////////////////
    // UPDATE TASK LIST WITH NEW TASK
    // viewCtrl.renderTask(state.tasks);

    pageNumber = 1;
    tasks = state.tasks;
    viewCtrl.showPageNumbers(state.tasks, pageNumber);
    modelCtrl.pageCtrl(state.tasks, viewCtrl.renderTask, pageNumber); // GET TAGS

    viewCtrl.getTags(state, newTask, newTask.taskTag); // RENDER TAGS

    viewCtrl.renderTags(state); /////////////////////////////////////////////

    persistData();
  }); // TASK LIST EVENT LISTENER (EVENT BUBBLING)

  taskList.addEventListener('click', function (e) {
    var className = e.target.className;
    var classList = e.target.classList; // TASK LIST EVENT

    if (className === 'cover') {
      var id = e.target.parentNode.getAttribute('data-id');
      viewCtrl.renderTaskDetails(state, id);
    } // DONE ICON EVENT


    if (className === 'done__icon-div') {
      var _id = e.target.parentNode.getAttribute('data-id');

      var tag = e.target.parentNode.getAttribute('data-tag'); // MOVE COMPLETED TASKS FROM TASKS LIST TO DONE

      modelCtrl.removeCompleted(state, _id, tag); // RENDER NEW TASK LIST
      // viewCtrl.renderTask(state.tasks);

      modelCtrl.sortTasksByDate(state.tasks);
      pageNumber = 1;
      viewCtrl.showPageNumbers(tasks, pageNumber);
      modelCtrl.pageCtrl(tasks, viewCtrl.renderTask, pageNumber);
      viewCtrl.changeHeader('', tasks, state); // RENDER TAGS

      viewCtrl.renderTags(state); /////////////////////////////////////////////

      persistData();
      changeHeader;
    } // STAR ICON EVENT


    if (classList[1] === 'star-icon') {
      var _id2 = e.target.parentNode.getAttribute('data-id');

      modelCtrl.toggleImportant(state, _id2);
      modelCtrl.sortTasksByDate(state.tasks);
      pageNumber = 1;
      viewCtrl.showPageNumbers(tasks, pageNumber);
      modelCtrl.pageCtrl(tasks, viewCtrl.renderTask, pageNumber);
      viewCtrl.changeHeader('', tasks, state); /////////////////////////////////////////////

      persistData();
    } // DELETE BUTTON EVENT


    if (className === 'delete') {
      var _id3 = e.target.parentNode.getAttribute('data-id');

      var _tag = e.target.parentNode.getAttribute('data-tag');

      modelCtrl.deleteTask(state, _id3, _tag);
      modelCtrl.sortTasksByDate(state.tasks);
      pageNumber = 1;
      viewCtrl.showPageNumbers(tasks, pageNumber);
      modelCtrl.pageCtrl(tasks, viewCtrl.renderTask, pageNumber);
      viewCtrl.changeHeader('', tasks, state); // RENDER TAGS

      viewCtrl.renderTags(state); /////////////////////////////////////////////

      persistData();
    }
  }); // TAGS LIST EVENT LISTENER

  tagList.addEventListener('click', function (e) {
    var _e$target$classList = _slicedToArray(e.target.classList, 2),
        id = _e$target$classList[0],
        className = _e$target$classList[1];

    if (className === 'cover') {
      viewCtrl.renderTaskByTags(state.tags, id, modelCtrl.sortTasksByDate);
    }
  }); // SIDEBAR OVERVIEW EVENT LISTENER

  sidebarOverview.addEventListener('click', function (e) {
    modelCtrl.sortTasksByDate(state.tasks);
    pageNumber = 1;
    tasks = state.tasks;
    viewCtrl.showPageNumbers(state.tasks, pageNumber); // viewCtrl.renderTask(state.tasks);

    modelCtrl.pageCtrl(state.tasks, viewCtrl.renderTask, pageNumber); /////////////////////////////////////////////

    persistData();
  }); // SIDEBAR DONE EVENT LISTENER

  sidebarDone.addEventListener('click', function (e) {
    modelCtrl.sortTasksByDate(state.completed);
    pageNumber = 1;
    tasks = state.completed;
    viewCtrl.showPageNumbers(state.completed, pageNumber); // viewCtrl.renderTask(state.completed, 'show');

    modelCtrl.pageCtrl(state.completed, viewCtrl.renderTask, pageNumber, 'show');
    viewCtrl.changeHeader('Completed');
  }); // SIDEBAR IMPORTANT EVENT LISTENER

  sidebarImportant.addEventListener('click', function (e) {
    modelCtrl.sortTasksByDate(state.important);
    pageNumber = 1;
    tasks = state.important;
    viewCtrl.showPageNumbers(state.important, pageNumber); // viewCtrl.renderTask(state.important);

    modelCtrl.pageCtrl(state.important, viewCtrl.renderTask, pageNumber);
    viewCtrl.changeHeader('Important');
  }); // SIDEBAR TODAY EVENT LISTENER

  sidebarToday.addEventListener('click', function (e) {
    viewCtrl.renderToday(state);
  }); // SEARCH INPUT EVENT LISTENER

  searchInput.addEventListener('input', function (e) {
    var value = e.target.value;
    modelCtrl.searchTask(state, value, viewCtrl.renderTask);
  }); // PAGES

  pageNext.addEventListener('click', function (e) {
    pageNumber += 1;
    var show = '';

    if (tasks === state.completed) {
      show = 'show';
    }

    viewCtrl.showPageNumbers(tasks, pageNumber);
    modelCtrl.pageCtrl(tasks, viewCtrl.renderTask, pageNumber, show);
  });
  pagePrev.addEventListener('click', function (e) {
    pageNumber -= 1;
    var show = '';

    if (tasks === state.completed) {
      show = 'show';
    }

    viewCtrl.showPageNumbers(tasks, pageNumber);
    modelCtrl.pageCtrl(tasks, viewCtrl.renderTask, pageNumber, show);
  }); // PAGE LOAD

  window.addEventListener('onload', function (e) {});
}(_view__WEBPACK_IMPORTED_MODULE_1__.default, _model__WEBPACK_IMPORTED_MODULE_2__.default);

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var sortFunction = function sortFunction(a, b) {
  if (a.taskDueDate < b.taskDueDate) return -1;
  if (a.taskDueDate > b.taskDueDate) return 1;
  return 0;
};

var sortTasksByDate = function sortTasksByDate(tasks) {
  // SORT TASKS BASED ON DUE DATE
  tasks.sort(sortFunction);
};

var removeCompleted = function removeCompleted(state, id, tag) {
  // LOOP THROUGH ALL TASKS AND REMOVE COMPLETED
  state.tasks.forEach(function (task, i) {
    if (task.id === id) {
      // Add task to completed array
      state.completed.push(task); // Remove tasks from tasks list array

      state.tasks.splice(i, 1);
      state.important.splice(i, 1); // Clear detail section

      document.querySelector('.detail').innerHTML = '';
    }
  }); // LOOP THROUGH TAGS AND REMOVE COMPLETED

  state.tags[tag].forEach(function (task, i) {
    if (task.id === id) {
      // Remove tasks from tags
      state.tags[tag].splice(i, 1);
    }
  });
};

var toggleImportant = function toggleImportant(state, id) {
  // LOOP THROUGH ALL TASKS AND ADD IMPORTANT TASKS TO IMPORTANT ARRAY IN STATE
  state.tasks.forEach(function (task) {
    if (task.id === id) {
      if (state.important.indexOf(task) < 0 && state.completed.indexOf(task) < 0) {
        task['important'] = 'yes';
        state.important.push(task);
      } else {
        // LOOP THROUGH ALL TASKS AND REMOVE IMPORTANT TASKS TO IMPORTANT ARRAY IN STATE
        task['important'] = '';
        state.important.forEach(function (arr, i) {
          if (arr.id === id) state.important.splice(i, 1);
        });
      }
    }
  });
};

var searchTask = function searchTask(state, value, renderTasks) {
  var filteredArr = state.tasks.filter(function (task) {
    return task.taskTitle.includes(value);
  });
  renderTasks(filteredArr);
};

var pageCtrl = function pageCtrl(tasks, renderTasks, pageNumber, show) {
  var taskNumber = 6;
  var start = (pageNumber - 1) * taskNumber;
  var end = pageNumber * taskNumber;
  var newTaskList = tasks.slice(start, end);
  /*
  newTaskList.forEach(task => {
    if (newTaskList.indexOf(task) >= pageNumber * taskNumber) {
      pageNumber += 1;
    }
  });
  */

  renderTasks(newTaskList, show);
};

var loopDelete = function loopDelete(arr, id) {
  arr.forEach(function (c, i, a) {
    if (c.id === id) {
      a.splice(i, 1);
    }
  });
};

var deleteTask = function deleteTask(state, id, tag) {
  // LOOP THROUGH ALL TASKS AND REMOVE COMPLETED
  loopDelete(state.tasks, id);
  loopDelete(state.important, id);
  loopDelete(state.completed, id); // Clear detail section

  document.querySelector('.detail').innerHTML = ''; // LOOP THROUGH TAGS AND REMOVE COMPLETED

  state.tags[tag].forEach(function (task, i) {
    if (task.id === id) {
      // Remove tasks from tags
      state.tags[tag].splice(i, 1);
    }
  });
};

var modelController = function () {
  return {
    sortTasksByDate: sortTasksByDate,
    removeCompleted: removeCompleted,
    toggleImportant: toggleImportant,
    searchTask: searchTask,
    pageCtrl: pageCtrl,
    deleteTask: deleteTask
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modelController);

/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html */ "./src/js/html.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var DOM = {
  addTaskBtn: document.querySelector('.sidebar__add'),
  form: document.querySelector('.form'),
  popup: document.querySelector('.add-popup'),
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
  searchInput: document.querySelector('.search__input'),
  pageNext: document.querySelector('.page__next'),
  pagePrev: document.querySelector('.page__prev'),
  deleteBtn: document.querySelector('.delete')
};

var popupOpen = function popupOpen() {
  DOM.form.style.opacity = 1;
  DOM.form.style.visibility = 'visible';
  DOM.popup.style.opacity = 1;
  DOM.popup.style.visibility = 'visible';
};

var popupClose = function popupClose() {
  DOM.form.style.opacity = 0;
  DOM.form.style.visibility = 'hidden';
  DOM.popup.style.opacity = 0;
  DOM.popup.style.visibility = 'hidden';
}; //EVENT LISTERS TO POP UP


var popupEvents = function popupEvents() {
  DOM.addTaskBtn.addEventListener('click', function (e) {
    popupOpen();
  });
  DOM.popupCloseBtn.addEventListener('click', function (e) {
    popupClose();
  });
};

var clearInput = function clearInput() {
  DOM.taskTitle.value = '';
  DOM.taskDescription.value = '';
  DOM.taskDueDate.value = '';
  DOM.taskTag.value = '';
}; // GET USER INPUT


var getUserInput = function getUserInput(taskClass, state) {
  var taskTitle = DOM.taskTitle.value;
  var taskDescription = DOM.taskDescription.value;
  var taskDueDate = new Date(DOM.taskDueDate.value);
  var taskTag = DOM.taskTag.value.toLowerCase();
  var id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
  var formattedDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(taskDueDate, 'EEE, do MMM `yy');

  if (taskTitle && formattedDueDate) {
    var userInput = {
      taskTitle: taskTitle,
      taskDescription: taskDescription,
      taskDueDate: taskDueDate,
      taskTag: taskTag ? taskTag : 'Primary',
      id: id,
      formattedDueDate: formattedDueDate
    }; // CREATE NEW TASK OBJECT AND STORE IN STATE

    var newTask = new taskClass(userInput);
    state.tasks.push(newTask); // CLEAR USER INPUT

    clearInput(); // CLOSE POPUP

    popupClose(DOM.form, DOM.addPopup);
    return newTask;
  }
}; // ADD TASKS BY TAGS


var getTags = function getTags(state, newTask, taskTag) {
  if (state.tags[taskTag]) {
    state.tags[taskTag].push(newTask);
  } else {
    var id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
    state.tags[taskTag] = [];
    state.tags[taskTag].push(id);
    state.tags[taskTag].push(newTask);
  }
}; // RENDER TASK TO DOM


var renderTask = function renderTask(tasks, show) {
  if (tasks) {
    var newHTML; // CLEAR TASK LIST

    DOM.taskList.innerHTML = ''; // RENAME TASK LIST HEADER

    DOM.taskListHeaderText.textContent = 'All';
    tasks.forEach(function (task) {
      newHTML = _html__WEBPACK_IMPORTED_MODULE_1__.taskHTML;

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
      } // REPLACE PLACEHOLDER WITH ACTUAL DATA


      newHTML = newHTML.replace('%%TITLE%%', task.taskTitle);
      newHTML = newHTML.replace('%%DUEDATE%%', task.formattedDueDate);
      newHTML = newHTML.replace('%%ID%%', task.id);
      newHTML = newHTML.replace('%%TAG%%', task.taskTag); // UPDATE TASK LIST

      DOM.taskList.insertAdjacentHTML('beforeend', newHTML);
    });
  }
}; // RENDER TASK DETAILS


var renderTaskDetails = function renderTaskDetails(state, id) {
  var newHTML = _html__WEBPACK_IMPORTED_MODULE_1__.detailHTML; // CLEAR DETAIL SECTION

  DOM.detailSection.innerHTML = '';
  state.tasks.forEach(function (task) {
    if (task.id === id) {
      // REPLACE PLACEHOLDER TEXT WITH ACTUAL DATA
      newHTML = newHTML.replace('%%DETAILTITLE%%', task.taskTitle);
      newHTML = newHTML.replace('%%DETAILDUEDATE%%', task.formattedDueDate);
      newHTML = newHTML.replace('%%DETAILDESCRIPTION%%', task.taskDescription); // APPEND TASK TO DETAIL SECTION

      DOM.detailSection.insertAdjacentHTML('beforeend', newHTML);
    }
  });
}; // RENDER TAGS TO DOM


var renderTags = function renderTags(state) {
  var newHTML;
  var tagColour = ['blue', 'yellow', 'green', 'pink', 'red', 'purple']; // CLEAR TAGS

  DOM.tagList.innerHTML = '';

  for (var tag in state.tags) {
    newHTML = _html__WEBPACK_IMPORTED_MODULE_1__.tagHTML;
    newHTML = newHTML.replace('%%TAGTITLE%%', "".concat(tag[0].toUpperCase()).concat(tag.slice(1)));
    newHTML = newHTML.replace('%%ID%%', state.tags[tag][0]);
    newHTML = newHTML.replace('%%TAGNUMBER%%', state.tags[tag].length - 1);
    newHTML = newHTML.replace('%%TAGCOLOUR%%', tagColour[Math.floor(Math.random() * 6)]);
    DOM.tagList.insertAdjacentHTML('beforeend', newHTML);
  }
}; // RENDER TASKS BASED ON TAG


var renderTaskByTags = function renderTaskByTags(tags, id, sortTasks) {
  var newHTML;
  DOM.taskList.innerHTML = '';

  for (var tag in tags) {
    if (id === tags[tag][0]) {
      // SET TASK LIST HEADER TEXT TO TAGNAME
      DOM.taskListHeaderText.textContent = "".concat(tag[0].toUpperCase() + tag.slice(1)); // SORT TASKS BY DUE DATE

      sortTasks(tags[tag]);
      tags[tag].forEach(function (task) {
        if (_typeof(task) === 'object') {
          newHTML = _html__WEBPACK_IMPORTED_MODULE_1__.taskHTML; // REPLACE PLACEHOLDER WITH ACTUAL DATA

          newHTML = newHTML.replace('%%SHOW%%', 'hide');
          newHTML = newHTML.replace('%%TITLE%%', task.taskTitle);
          newHTML = newHTML.replace('%%DUEDATE%%', task.formattedDueDate);
          newHTML = newHTML.replace('%%ID%%', task.id);
          newHTML = newHTML.replace('%%TAG%%', task.taskTag); // UPDATE TASK LIST

          DOM.taskList.insertAdjacentHTML('beforeend', newHTML);
        }
      });
    }
  }
};

var changeHeader = function changeHeader(title, tasks, state) {
  if (tasks && tasks) {
    if (tasks === state.tasks) {
      title = 'All';
    } else if (tasks === state.important) {
      title = 'Important';
    } else if (tasks === state.completed) {
      title = 'Completed';
    }
  }

  DOM.taskListHeaderText.textContent = title;
};

var renderToday = function renderToday(state) {
  var newHTML;
  var today = new Date().toDateString(); // CLEAR TASK LIST

  DOM.taskList.innerHTML = ''; // RENAME TASK LIST HEADER

  DOM.taskListHeaderText.textContent = 'Today';
  state.tasks.forEach(function (task) {
    var taskDate = new Date(task.taskDueDate).toDateString();

    if (taskDate === today) {
      newHTML = _html__WEBPACK_IMPORTED_MODULE_1__.taskHTML;

      if (task.important === 'yes') {
        newHTML = newHTML.replace('%%STARICON%%', 'red');
      } else {
        newHTML = newHTML.replace('%%STARICON%%', 'black');
      } // REPLACE PLACEHOLDER WITH ACTUAL DATA


      newHTML = newHTML.replace('%%SHOW%%', 'hide');
      newHTML = newHTML.replace('%%TITLE%%', task.taskTitle);
      newHTML = newHTML.replace('%%DUEDATE%%', task.formattedDueDate);
      newHTML = newHTML.replace('%%ID%%', task.id);
      newHTML = newHTML.replace('%%TAG%%', task.taskTag); // UPDATE TASK LIST

      DOM.taskList.insertAdjacentHTML('beforeend', newHTML);
    }
  });
};

var showPageNumbers = function showPageNumbers(tasks, pageNumber) {
  var pages = Math.ceil(tasks.length / 6);

  if (pageNumber === 1 && pages > 1) {
    DOM.pageNext.style.display = 'block';
    DOM.pagePrev.style.display = 'none';
  } else if (pageNumber < pages) {
    DOM.pagePrev.style.display = 'block';
    DOM.pageNext.style.display = 'block';
  } else if (pages === pageNumber && pages > 1) {
    DOM.pagePrev.style.display = 'block';
    DOM.pageNext.style.display = 'none';
  } else {
    DOM.pagePrev.style.display = 'none';
    DOM.pageNext.style.display = 'none';
  }
};

var viewController = function () {
  return {
    DOM: DOM,
    popupOpen: popupOpen,
    popupClose: popupClose,
    popupEvents: popupEvents,
    getUserInput: getUserInput,
    renderTask: renderTask,
    renderTaskDetails: renderTaskDetails,
    getTags: getTags,
    renderTags: renderTags,
    renderTaskByTags: renderTaskByTags,
    changeHeader: changeHeader,
    renderToday: renderToday,
    showPageNumbers: showPageNumbers
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewController);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background: linear-gradient(to right top, rgba(30, 39, 46, 0.8), #1e272e); }\n\n.container {\n  display: grid;\n  grid-template-columns: 20% 80%;\n  grid-template-rows: 4rem 1fr;\n  max-width: 95rem;\n  min-height: 55rem;\n  margin: 8rem auto;\n  background-color: white;\n  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);\n  position: relative; }\n  @media only screen and (max-width: 62.5em) {\n    .container {\n      grid-template-columns: 22% 78%; } }\n  @media only screen and (max-width: 600px) {\n    .container {\n      display: none; } }\n\n.main {\n  display: grid;\n  grid-template-columns: 40% 60%;\n  grid-column-gap: 1rem; }\n\n.header {\n  grid-row: 1/2;\n  grid-column: 2/-1;\n  height: 100%;\n  width: 100%; }\n\n.sidebar {\n  grid-row: 1/-1;\n  grid-column: 1/2;\n  height: 100%;\n  width: 100%; }\n\n.warning {\n  display: none; }\n  @media only screen and (max-width: 600px) {\n    .warning {\n      display: flex;\n      position: fixed;\n      padding: 10rem;\n      align-items: center;\n      justify-content: center;\n      text-align: center; } }\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: inherit; }\n\nhtml {\n  font-size: 62.5%; }\n  @media only screen and (max-width: 62.5em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 50em) {\n    html {\n      font-size: 43.75%; } }\n\nbody {\n  box-sizing: border-box;\n  font-family: \" Lato \", sans-serif;\n  font-size: 1.4rem;\n  font-weight: 300;\n  line-height: 1.6;\n  color: #202124; }\n\n@-webkit-keyframes ldio-n6x17pgox4 {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes ldio-n6x17pgox4 {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.ldio-n6x17pgox4 > div > div {\n  -webkit-animation: ldio-n6x17pgox4 3.0303030303030303s linear infinite;\n          animation: ldio-n6x17pgox4 3.0303030303030303s linear infinite;\n  opacity: 0.8; }\n\n.ldio-n6x17pgox4 > div > div > div {\n  position: absolute;\n  left: 30px;\n  top: 30px;\n  width: 70px;\n  height: 70px;\n  border-radius: 70px 0 0 0;\n  transform-origin: 100px 100px; }\n\n.ldio-n6x17pgox4 > div div:nth-child(1) {\n  -webkit-animation-duration: 0.7575757575757576s;\n          animation-duration: 0.7575757575757576s; }\n\n.ldio-n6x17pgox4 > div div:nth-child(1) > div {\n  background: #e15b64;\n  transform: rotate(0deg); }\n\n.ldio-n6x17pgox4 > div div:nth-child(2) {\n  -webkit-animation-duration: 1.0101010101010102s;\n          animation-duration: 1.0101010101010102s; }\n\n.ldio-n6x17pgox4 > div div:nth-child(2) > div {\n  background: #f47e60;\n  transform: rotate(0deg); }\n\n.ldio-n6x17pgox4 > div div:nth-child(3) {\n  -webkit-animation-duration: 1.5151515151515151s;\n          animation-duration: 1.5151515151515151s; }\n\n.ldio-n6x17pgox4 > div div:nth-child(3) > div {\n  background: #f8b26a;\n  transform: rotate(0deg); }\n\n.ldio-n6x17pgox4 > div div:nth-child(4) {\n  -webkit-animation-duration: 3.0303030303030303s;\n          animation-duration: 3.0303030303030303s; }\n\n.ldio-n6x17pgox4 > div div:nth-child(4) > div {\n  background: #abbd81;\n  transform: rotate(0deg); }\n\n/*\n.loadingio-spinner-wedges-cqyhjjq8b24 {\n  width: 200px;\n  height: 200px;\n  display: inline-block;\n  overflow: hidden;\n  background: #ffffff;\n}\n*/\n.ldio-n6x17pgox4 {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform: translateZ(0) scale(1);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform-origin: 0 0;\n  /* see note above */ }\n\n.ldio-n6x17pgox4 div {\n  box-sizing: content-box; }\n\n.loadingio-spinner-wedges-cqyhjjq8b24 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  min-height: 100vh;\n  min-width: 100vw;\n  z-index: 10000000;\n  overflow: hidden;\n  background: #1e272e;\n  margin: 0 auto; }\n\n.icon {\n  display: block;\n  height: 2rem;\n  width: 2rem;\n  fill: #202124; }\n\ninput,\ninput:active,\ninput:focus {\n  border: none;\n  outline: none; }\n\n.cover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  background-color: transparent; }\n\n.cursor {\n  cursor: pointer; }\n\n.blue {\n  background-color: #1b9cfc; }\n\n.yellow {\n  background-color: #6ab04c; }\n\n.green {\n  background-color: #f53b57; }\n\n.pink {\n  background-color: #1e272e; }\n\n.red {\n  background-color: #eb4d4b; }\n\n.purple {\n  background-color: #be2edd; }\n\n.show {\n  opacity: 1;\n  visibility: visible; }\n\n.hide {\n  opacity: 0;\n  visibility: hidden; }\n\n::-webkit-input-placeholder {\n  color: rgba(51, 51, 51, 0.6); }\n\n.popup {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(51, 51, 51, 0.3);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px); }\n\n.header {\n  display: grid;\n  grid-template-columns: 1fr 8rem 18rem;\n  justify-items: center;\n  align-items: center;\n  padding: 0 2rem;\n  background-color: rgba(180, 196, 206, 0.1);\n  background-color: #eb4d4b;\n  color: #fff; }\n  .header .icon {\n    fill: #fff; }\n  .header__search {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    width: 100%; }\n    .header__search input {\n      width: 100%;\n      height: 4rem;\n      border: none;\n      background-color: transparent;\n      color: #fff; }\n      .header__search input:active, .header__search input:focus {\n        outline: none; }\n    .header__search .search-icon {\n      margin-right: 1rem;\n      width: 1.5rem;\n      height: 1.5rem; }\n  .header__notif .notif-icon {\n    fill: #d4d4d4; }\n  .header__user {\n    display: flex;\n    justify-self: end;\n    justify-content: center;\n    align-items: center; }\n    .header__user--img {\n      margin-right: 1rem;\n      width: 2rem;\n      height: 2rem; }\n      .header__user--img .image {\n        display: block;\n        width: 2rem;\n        height: 2rem;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 0.5rem; }\n    .header__user--name {\n      font-weight: 400; }\n    .header__user--menu {\n      margin-left: 1rem; }\n\n.sidebar {\n  padding: 1rem 2rem;\n  border-right: 1.5px #bebebe solid;\n  display: grid;\n  grid-template-rows: 10% -webkit-min-content 1fr -webkit-min-content;\n  grid-template-rows: 10% min-content 1fr min-content;\n  grid-row-gap: 4rem; }\n  .sidebar__logo {\n    color: transparent;\n    font-size: 4rem;\n    font-weight: 700;\n    background: linear-gradient(to right bottom, #1e272e, #eb4d4b);\n    -webkit-background-clip: text;\n            background-clip: text; }\n  .sidebar__nav {\n    display: grid;\n    grid-template-rows: repeat(5, -webkit-min-content);\n    grid-template-rows: repeat(5, min-content);\n    grid-row-gap: 2rem; }\n    .sidebar__nav .icon {\n      height: 1.5rem;\n      width: 1.5rem; }\n    .sidebar__nav > div {\n      display: grid;\n      grid-template-columns: 10% 90%;\n      grid-column-gap: 1.5rem;\n      align-items: center;\n      text-transform: capitalize; }\n  .sidebar__overview .icon {\n    fill: #1b9cfc;\n    height: 2rem;\n    width: 2rem; }\n  .sidebar__today .icon {\n    fill: #6ab04c; }\n  .sidebar__important .icon {\n    fill: #f53b57; }\n  .sidebar__scheduled .icon {\n    fill: #1e272e; }\n  .sidebar__done .icon {\n    fill: #be2edd; }\n  .sidebar__tag {\n    display: flex;\n    flex-direction: column; }\n    .sidebar__tag--item {\n      display: grid;\n      grid-template-columns: -webkit-min-content 1fr -webkit-min-content;\n      grid-template-columns: min-content 1fr min-content;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 1rem;\n      position: relative;\n      cursor: pointer; }\n      .sidebar__tag--item .tag-color {\n        height: 1rem;\n        width: 1rem;\n        border-radius: 2px;\n        margin-right: 2rem; }\n      .sidebar__tag--item .tag-count {\n        position: relative;\n        color: #fff;\n        z-index: 100;\n        font-size: 1rem; }\n        .sidebar__tag--item .tag-count::after {\n          display: block;\n          content: '';\n          position: absolute;\n          top: 0;\n          right: 0;\n          transform: translate(30%, -5%);\n          z-index: -1;\n          height: 1.5rem;\n          width: 1.5rem;\n          border-radius: 100%;\n          background-color: rgba(30, 39, 46, 0.5); }\n  .sidebar__add {\n    justify-self: center;\n    margin-top: -6rem;\n    height: 4rem;\n    width: 4rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #eb4d4b;\n    border-radius: 100%;\n    box-shadow: 0 0.5rem 1rem rgba(51, 51, 51, 0.1);\n    cursor: pointer; }\n    .sidebar__add-btn {\n      fill: #fff; }\n\n.blue {\n  background-color: #1b9cfc; }\n\n.yellow {\n  background-color: #6ab04c; }\n\n.red {\n  background-color: #f53b57; }\n\n.form {\n  opacity: 0;\n  visibility: hidden;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10000; }\n  .form__input {\n    background-color: #fff;\n    color: rgba(30, 39, 46, 0.7);\n    padding: 1rem;\n    border-radius: 5px;\n    margin-bottom: 1rem;\n    width: 25rem; }\n    .form__input:hover {\n      box-shadow: 0 0.5rem 1rem rgba(51, 51, 51, 0.1); }\n  .form__label {\n    font-size: 1.4rem;\n    color: #1e272e;\n    font-weight: 700; }\n  .form__desc {\n    padding: 1rem;\n    height: 10rem;\n    outline: none;\n    border: none; }\n    .form__desc:active, .form__desc:focus {\n      outline: none;\n      border: none; }\n\n.submit-btn {\n  padding: 1rem 2rem;\n  box-shadow: 0 0.5rem 1rem rgba(51, 51, 51, 0.1);\n  font-weight: 700;\n  margin-top: 1rem;\n  background: linear-gradient(to right, #eb4d4b, #a73533);\n  color: #fff;\n  cursor: pointer;\n  transition: all 0.5s; }\n  .submit-btn:hover {\n    background: linear-gradient(to right, rgba(235, 77, 75, 0.7), rgba(167, 53, 51, 0.8)); }\n    .submit-btn:hover:active {\n      transform: translateY(2px); }\n\n.close-popup {\n  position: absolute;\n  top: -2rem;\n  right: -2rem;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: red;\n  cursor: pointer; }\n\n.list {\n  border-right: 1.5px #bebebe solid;\n  position: relative; }\n  .list__header {\n    padding: 1rem 2rem;\n    border-bottom: 2px solid #1b9cfc;\n    display: flex;\n    justify-content: space-between; }\n  .list__content {\n    display: flex;\n    flex-direction: column;\n    height: 90%; }\n  .list__item {\n    padding: 1.5rem 2rem;\n    border-bottom: 1.5px rgba(190, 190, 190, 0.3) solid;\n    display: grid;\n    grid-template-columns: 2rem 1fr 1rem 1rem;\n    align-items: center;\n    position: relative; }\n    .list__item:hover {\n      box-shadow: 0 0.5rem 1rem rgba(51, 51, 51, 0.1);\n      cursor: pointer; }\n    .list__item .icon {\n      height: 1rem;\n      width: 1rem; }\n    .list__item .star-icon {\n      position: relative;\n      z-index: 10000; }\n    .list__item .delete {\n      position: relative;\n      z-index: 10000;\n      margin-left: 1rem;\n      color: #202124; }\n    .list__item--description {\n      display: flex;\n      flex-direction: column;\n      margin-left: 2rem; }\n      .list__item--description .bottom {\n        display: flex;\n        align-items: center;\n        text-transform: capitalize;\n        font-size: 0.9rem; }\n        .list__item--description .bottom > .icon {\n          margin-right: 0.5rem; }\n        .list__item--description .bottom > span {\n          margin-right: 2rem; }\n        .list__item--description .bottom .time-icon {\n          fill: #f53b57;\n          position: relative;\n          z-index: 10000; }\n        .list__item--description .bottom .notif-icon {\n          fill: #1b9cfc;\n          position: relative;\n          z-index: 10000; }\n    .list__item .done__icon-div {\n      height: 2rem;\n      width: 2rem;\n      border-radius: 100%;\n      border: 1.5px rgba(190, 190, 190, 0.3) solid;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n      z-index: 10000; }\n      .list__item .done__icon-div .icon {\n        fill: #27ae60;\n        transition: all 0.5s; }\n\n#red {\n  fill: #eb4d4b; }\n\n#black {\n  fill: #202124; }\n\n.page {\n  position: absolute;\n  bottom: 1rem;\n  right: 3rem;\n  display: grid;\n  grid-template-columns: repeat(2, -webkit-min-content);\n  grid-template-columns: repeat(2, min-content);\n  grid-column-gap: 2rem; }\n  .page > a {\n    display: none;\n    cursor: pointer;\n    color: #eb4d4b; }\n    .page > a:hover {\n      color: #000; }\n\n.detail {\n  display: grid;\n  grid-template-columns: 4rem 1fr;\n  grid-column-gap: 1rem;\n  padding: 1rem;\n  padding-top: 3rem;\n  padding-right: 3rem; }\n  .detail__icon {\n    height: 3rem;\n    width: 3rem;\n    border-radius: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    .detail__icon .icon {\n      fill: #fff;\n      transition: all 0.5s; }\n  .detail__header {\n    display: grid;\n    grid-template-rows: repeat(2, 50%);\n    grid-row-gap: 0.5rem; }\n    .detail__header .top {\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-start;\n      align-items: center;\n      font-size: 1.4rem;\n      font-weight: 700; }\n      .detail__header .top .icon-div {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-column-gap: 1rem; }\n        .detail__header .top .icon-div .icon {\n          height: 1.5rem;\n          width: 1.5rem; }\n    .detail__header .bottom {\n      display: grid;\n      grid-template-columns: 10rem 20rem;\n      font-size: 1rem;\n      color: #eb4d4b; }\n      .detail__header .bottom > div {\n        display: flex;\n        align-items: center; }\n        .detail__header .bottom > div .icon {\n          margin-right: 0.5rem;\n          height: 1.2rem;\n          width: 1.2rem;\n          fill: #eb4d4b; }\n      .detail__header .bottom .date {\n        margin-right: -10rem; }\n  .detail__text {\n    padding-top: 2rem;\n    padding-right: 2rem;\n    font-size: 1.2rem; }\n  .detail__step {\n    padding-top: 2rem; }\n    .detail__step--add {\n      display: block;\n      margin-bottom: 1rem;\n      color: #1b9cfc;\n      cursor: pointer; }\n    .detail__step--item {\n      margin-bottom: 0.5rem;\n      display: grid;\n      grid-template-columns: repeat(2, -webkit-max-content);\n      grid-template-columns: repeat(2, max-content);\n      grid-column-gap: 1rem;\n      align-items: center; }\n\n.login__form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10000;\n  padding: 10rem;\n  background-color: #fff;\n  color: rgba(30, 39, 46, 0.7); }\n\n.login__img {\n  margin-bottom: 2rem; }\n\n.login__text {\n  margin-bottom: 2rem; }\n\n.login__btn {\n  border: none;\n  outline: none;\n  padding: 1rem 2rem;\n  box-shadow: 0 0.5rem 1rem rgba(51, 51, 51, 0.1);\n  font-weight: 700;\n  background-color: #0097e6;\n  color: #fff;\n  cursor: pointer;\n  transition: all 0.5s; }\n  .login__btn:hover {\n    background-color: #016699; }\n    .login__btn:hover:active {\n      transform: translateY(2px); }\n", "",{"version":3,"sources":["webpack://./src/sass/_layout.scss","webpack://./src/sass/_variables.scss","webpack://./src/sass/_base.scss","webpack://./src/sass/main.scss","webpack://./src/sass/_utils.scss","webpack://./src/sass/_header.scss","webpack://./src/sass/_sidebar.scss","webpack://./src/sass/_list.scss","webpack://./src/sass/_detail.scss","webpack://./src/sass/_login.scss"],"names":[],"mappings":"AAAA;EAEE,yEAIC,EAAA;;AAGH;EACE,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;EAE5B,gBAAgB;EAChB,iBAAiB;EAEjB,iBAAiB;EACjB,uBAAoC;EACpC,0CCMqC;EDJrC,kBAAkB,EAAA;EAElB;IAdF;MAeI,8BAA8B,EAAA,EAMjC;EAHC;IAlBF;MAmBI,aAAa,EAAA,EAEhB;;AAED;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB,EAAA;;AAOvB;EACE,aAAa;EACb,iBAAiB;EACjB,YAAY;EACZ,WAAW,EAAA;;AAEb;EACE,cAAc;EACd,gBAAgB;EAChB,YAAY;EACZ,WAAW,EAAA;;AAGb;EACE,aAAa,EAAA;EACb;IAFF;MAGI,aAAa;MACb,eAAe;MACf,cAAc;MAEd,mBAAmB;MACnB,uBAAuB;MACvB,kBAAkB,EAAA,EAErB;;AElED;;;EAGE,UAAU;EACV,SAAS;EACT,mBAAmB,EAAA;;AAGrB;EACE,gBAAgB,EAAA;EAEhB;IAHF;MAII,iBAAiB,EAAA,EAQpB;EANC;IANF;MAOI,cAAc,EAAA,EAKjB;EAHC;IATF;MAUI,iBAAiB,EAAA,EAEpB;;AAED;EACE,sBAAsB;EACtB,iCDNiC;ECOjC,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,cDhBmC,EAAA;;ACmBrC;EACE;IACE,uBAAuB,EAAA;EAEzB;IACE,yBAAyB,EAAA,EAAA;;AAL7B;EACE;IACE,uBAAuB,EAAA;EAEzB;IACE,yBAAyB,EAAA,EAAA;;AAG7B;EAEE,sEAA8D;UAA9D,8DAA8D;EAC9D,YAAY,EAAA;;AAEd;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,6BAA6B,EAAA;;AAE/B;EACE,+CAAuC;UAAvC,uCAAuC,EAAA;;AAEzC;EACE,mBAAmB;EACnB,uBAAuB,EAAA;;AAEzB;EACE,+CAAuC;UAAvC,uCAAuC,EAAA;;AAEzC;EACE,mBAAmB;EACnB,uBAAuB,EAAA;;AAEzB;EACE,+CAAuC;UAAvC,uCAAuC,EAAA;;AAEzC;EACE,mBAAmB;EACnB,uBAAuB,EAAA;;AAEzB;EACE,+CAAuC;UAAvC,uCAAuC,EAAA;;AAEzC;EACE,mBAAmB;EACnB,uBAAuB,EAAA;;AAEzB;;;;;;;;CCiDC;ADvCD;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iCAAiC;EACjC,mCAA2B;UAA3B,2BAA2B;EAC3B,qBAAqB;EAAE,mBAAA,EAAoB;;AAG7C;EACE,uBAAuB,EAAA;;AAGzB;EACE,eAAe;EACf,MAAM;EACN,OAAO;EAGP,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EAErB,iBAAiB;EACjB,gBAAgB;EAEhB,iBAAiB;EAEjB,gBAAgB;EAChB,mBDnHqC;ECqHrC,cAAc,EAAA;;AE1HhB;EACE,cAAc;EACd,YAAY;EACZ,WAAW;EAEX,aHOmC,EAAA;;AGJrC;;;EAGE,YAAY;EACZ,aAAa,EAAA;;AAGf;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,aAAa;EAEb,WAAW;EACX,YAAY;EAEZ,6BAA6B,EAAA;;AAG/B;EACE,eAAe,EAAA;;AAGjB;EACE,yBH9BuC,EAAA;;AGiCzC;EACE,yBHjCuC,EAAA;;AGmCzC;EACE,yBHnCsC,EAAA;;AGsCxC;EACE,yBHtCqC,EAAA;;AGwCvC;EACE,yBH7CkC,EAAA;;AG+CpC;EACE,yBH3CuC,EAAA;;AG8CzC;EACE,UAAU;EACV,mBAAmB,EAAA;;AAGrB;EACE,UAAU;EACV,kBAAkB,EAAA;;AAGpB;EACE,4BAAgB,EAAA;;AAGlB;EACE,UAAU;EACV,kBAAkB;EAElB,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,aAAa;EAEb,YAAY;EACZ,WAAW;EAEX,uCAA2B;EAC3B,kCAA0B;UAA1B,0BAA0B,EAAA;;AC/E5B;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,mBAAmB;EAEnB,eAAe;EAEf,0CJE2C;EID3C,yBJRkC;EISlC,WAAW,EAAA;EAVb;IAaI,UAAU,EAAA;EAGZ;IACE,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IAEnB,WAAW,EAAA;IALZ;MAQG,WAAW;MACX,YAAY;MACZ,YAAY;MACZ,6BAA6B;MAC7B,WAAW,EAAA;MAZd;QAgBK,aAAa,EAAA;IAhBlB;MAqBG,kBAAkB;MAElB,aAAa;MACb,cAAc,EAAA;EAIjB;IAEG,aAAwB,EAAA;EAI5B;IACE,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB,EAAA;IAEnB;MACE,kBAAkB;MAClB,WAAW;MACX,YAAY,EAAA;MAHb;QAMG,cAAc;QACd,WAAW;QACX,YAAY;QACZ,oBAAiB;WAAjB,iBAAiB;QACjB,qBAAqB,EAAA;IAIzB;MACE,gBAAgB,EAAA;IAGlB;MACE,iBAAiB,EAAA;;AC3EvB;EACE,kBAAkB;EAClB,iCLmBsC;EKjBtC,aAAa;EACb,mEAAmD;EAAnD,mDAAmD;EACnD,kBAAkB,EAAA;EAElB;IACE,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,8DAIC;IACD,6BAAqB;YAArB,qBAAqB,EAAA;EAGvB;IACE,aAAa;IACb,kDAA0C;IAA1C,0CAA0C;IAC1C,kBAAkB,EAAA;IAHnB;MAMG,cAAc;MACd,aAAa,EAAA;IAPhB;MAWG,aAAa;MACb,8BAA8B;MAC9B,uBAAuB;MACvB,mBAAmB;MAEnB,0BAA0B,EAAA;EAG7B;IAEG,aLvCmC;IKwCnC,YAAY;IACZ,WAAW,EAAA;EAGd;IAEG,aL7CmC,EAAA;EKgDtC;IAEG,aLjDkC,EAAA;EKoDrC;IAEG,aLrDiC,EAAA;EKwDpC;IAEG,aLzDmC,EAAA;EK6DvC;IACE,aAAa;IACb,sBAAsB,EAAA;IAEtB;MACE,aAAa;MACb,kEAAkD;MAAlD,kDAAkD;MAClD,8BAA8B;MAC9B,mBAAmB;MAEnB,mBAAmB;MACnB,kBAAkB;MAElB,eAAe,EAAA;MAThB;QAaK,YAAY;QACZ,WAAW;QACX,kBAAkB;QAClB,kBAAkB,EAAA;MAhBvB;QAoBK,kBAAkB;QAClB,WAAW;QACX,YAAY;QACZ,eAAe,EAAA;QAvBpB;UA0BO,cAAc;UACd,WAAW;UACX,kBAAkB;UAClB,MAAM;UACN,QAAQ;UACR,8BAA8B;UAE9B,WAAW;UAEX,cAAc;UACd,aAAa;UACb,mBAAmB;UAEnB,uCLzG2B,EAAA;EKgHrC;IACE,oBAAoB;IACpB,iBAAiB;IAEjB,YAAY;IACZ,WAAW;IAEX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IAEnB,yBL/HgC;IKgIhC,mBAAmB;IAEnB,+CLzGkC;IK2GlC,eAAe,EAAA;IAEf;MACE,UAAU,EAAA;;AAKhB;EACE,yBL5IuC,EAAA;;AK+IzC;EACE,yBL/IuC,EAAA;;AKiJzC;EACE,yBLjJsC,EAAA;;AKoJxC;EACE,UAAU;EACV,kBAAkB;EAElB,aAAa;EACb,sBAAsB;EAEtB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,cAAc,EAAA;EAEd;IACE,sBAAsB;IACtB,4BLlKmC;IKoKnC,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,YAAY,EAAA;IAPb;MAUG,+CLrJgC,EAAA;EK4JpC;IACE,iBAAiB;IACjB,cLnLmC;IKoLnC,gBAAgB,EAAA;EAGlB;IACE,aAAa;IACb,aAAa;IACb,aAAa;IACb,YAAY,EAAA;IAJb;MAQG,aAAa;MACb,YAAY,EAAA;;AAKlB;EACE,kBAAkB;EAClB,+CLlLoC;EKmLpC,gBAAgB;EAChB,gBAAgB;EAEhB,uDAA6E;EAC7E,WAAW;EAEX,eAAe;EAEf,oBAAoB,EAAA;EAXtB;IAcI,qFAIC,EAAA;IAlBL;MAqBM,0BAA0B,EAAA;;AAKhC;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EAEZ,iBAAiB;EACjB,gBAAgB;EAEhB,UAAqB;EAErB,eAAe,EAAA;;AC9OjB;EACE,iCNoBsC;EMnBtC,kBAAkB,EAAA;EAElB;IACE,kBAAkB;IAClB,gCNJqC;IMMrC,aAAa;IACb,8BAA8B,EAAA;EAEhC;IACE,aAAa;IACb,sBAAsB;IAEtB,WAAW,EAAA;EAEb;IACE,oBAAoB;IACpB,mDNGgD;IMDhD,aAAa;IACb,yCAAyC;IACzC,mBAAmB;IAEnB,kBAAkB,EAAA;IARnB;MAaG,+CNJgC;MMKhC,eAAe,EAAA;IAdlB;MAkBG,YAAY;MACZ,WAAW,EAAA;IAnBd;MAwBG,kBAAkB;MAClB,cAAc,EAAA;IAzBjB;MA6BG,kBAAkB;MAClB,cAAc;MACd,iBAAiB;MAEjB,cNtC+B,EAAA;IMyCjC;MACE,aAAa;MACb,sBAAsB;MACtB,iBAAiB,EAAA;MAHlB;QAMG,aAAa;QACb,mBAAmB;QAEnB,0BAA0B;QAC1B,iBAAiB,EAAA;QAVpB;UAaK,oBAAoB,EAAA;QAbzB;UAiBK,kBAAkB,EAAA;QAjBvB;UAqBK,aNtE8B;UMwE9B,kBAAkB;UAClB,cAAc,EAAA;QAxBnB;UA4BK,aN/E+B;UMiF/B,kBAAkB;UAClB,cAAc,EAAA;IAnErB;MAyEG,YAAY;MACZ,WAAW;MAEX,mBAAmB;MACnB,4CNxE8C;MM0E9C,aAAa;MACb,uBAAuB;MACvB,mBAAmB;MAEnB,kBAAkB;MAClB,cAAc,EAAA;MApFjB;QAuFK,aNjGgC;QMqGhC,oBAAoB,EAAA;;AAM5B;EACE,aNlHkC,EAAA;;AMqHpC;EACE,aN3GmC,EAAA;;AM8GrC;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,qDAA6C;EAA7C,6CAA6C;EAC7C,qBAAqB,EAAA;EANvB;IASI,aAAa;IACb,eAAe;IAEf,cNrIgC,EAAA;IMyHpC;MAeM,WAAW,EAAA;;ACzIjB;EACE,aAAa;EACb,+BAA+B;EAC/B,qBAAqB;EAErB,aAAa;EACb,iBAAiB;EACjB,mBAAmB,EAAA;EAEnB;IACE,YAAY;IACZ,WAAW;IAEX,mBAAmB;IAGnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB,EAAA;IATpB;MAaG,UAAU;MAIV,oBAAoB,EAAA;EAKxB;IACE,aAAa;IACb,kCAAkC;IAClC,oBAAoB,EAAA;IAHrB;MAMG,aAAa;MACb,8BAA8B;MAC9B,uBAAuB;MACvB,mBAAmB;MAEnB,iBAAiB;MACjB,gBAAgB,EAAA;MAZnB;QAeK,aAAa;QACb,qCAAqC;QACrC,qBAAqB,EAAA;QAjB1B;UAoBO,cAAc;UACd,aAAa,EAAA;IArBpB;MA2BG,aAAa;MACb,kCAAkC;MAClC,eAAe;MACf,cP5D8B,EAAA;MO8BjC;QAiCK,aAAa;QACb,mBAAmB,EAAA;QAlCxB;UAqCO,oBAAoB;UACpB,cAAc;UACd,aAAa;UACb,aPtE0B,EAAA;MO8BjC;QA6CK,oBAAoB,EAAA;EAI1B;IACE,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB,EAAA;EAGnB;IACE,iBAAiB,EAAA;IAEjB;MACE,cAAc;MACd,mBAAmB;MAEnB,cP3FmC;MO6FnC,eAAe,EAAA;IAGjB;MACE,qBAAqB;MACrB,aAAa;MACb,qDAA6C;MAA7C,6CAA6C;MAC7C,qBAAqB;MACrB,mBAAmB,EAAA;;ACtGvB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EAEvB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,cAAc;EACd,cAAc;EAEd,sBAAsB;EACtB,4BRVmC,EAAA;;AQarC;EACE,mBAAmB,EAAA;;AAErB;EACE,mBAAmB,EAAA;;AAErB;EACE,YAAY;EACZ,aAAa;EAEb,kBAAkB;EAClB,+CRHkC;EQIlC,gBAAgB;EAEhB,yBRlB8B;EQmB9B,WAAW;EAEX,eAAe;EAEf,oBAAoB,EAAA;EAbrB;IAgBG,yBRzBwB,EAAA;IQS3B;MAmBK,0BAA0B,EAAA","sourcesContent":["body {\n  // height: 100vh;\n  background: linear-gradient(\n    to right top,\n    rgba($color-secondary-4, 0.8),\n    rgba($color-secondary-4, 1)\n  );\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 20% 80%;\n  grid-template-rows: 4rem 1fr;\n\n  max-width: 95rem;\n  min-height: 55rem;\n\n  margin: 8rem auto;\n  background-color: rgb(255, 255, 255);\n  box-shadow: $shadow;\n\n  position: relative;\n\n  @media only screen and (max-width: $bp-large) {\n    grid-template-columns: 22% 78%;\n  }\n\n  @media only screen and (max-width: 600px) {\n    display: none;\n  }\n}\n\n.main {\n  display: grid;\n  grid-template-columns: 40% 60%;\n  grid-column-gap: 1rem;\n\n  @media only screen and (max-width: $bp-large) {\n    // grid-template-columns: 45% 55%;\n  }\n}\n\n.header {\n  grid-row: 1/2;\n  grid-column: 2/-1;\n  height: 100%;\n  width: 100%;\n}\n.sidebar {\n  grid-row: 1/-1;\n  grid-column: 1/2;\n  height: 100%;\n  width: 100%;\n}\n\n.warning {\n  display: none;\n  @media only screen and (max-width: 600px) {\n    display: flex;\n    position: fixed;\n    padding: 10rem;\n\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n  }\n}\n","//COLORS\n$color-primary: rgba(235, 77, 75, 1);\n$color-secondary-1: rgba(27, 156, 252, 1);\n$color-secondary-2: rgba(106, 176, 76, 1);\n$color-secondary-3: rgba(245, 59, 87, 1);\n$color-secondary-4: rgba(30, 39, 46, 1);\n$color-secondary-5: rgba(190, 46, 221, 1);\n$color-secondary-6: rgba(39, 174, 96, 1);\n\n// $color-grey-light-1: rgba(180, 196, 206, 0.22);\n$color-grey-light-1: rgba(180, 196, 206, 0.1);\n$color-grey-light-2: rgba(97, 116, 141, 1);\n$color-grey-dark: rgba(32, 33, 36, 1);\n\n$color-blue2: rgba(0, 151, 230, 1);\n$color-blue3: rgb(1, 102, 153);\n\n//FONTS\n$font-primary: ' Lato ', sans-serif;\n\n//OUTLINES\n$outline: 1.5px rgb(190, 190, 190) solid;\n$outline-light: 1.5px rgba(190, 190, 190, 0.3) solid;\n$outline-light-2: 1px rgba($color-secondary-6, 1) solid;\n\n$shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);\n$shadow-light: 0 0.5rem 1rem rgba(#333, 0.1);\n\n//RESPONSIVE BREAKPOINTS\n$bp-largest: 75em; // 1200px\n$bp-large: 62.5em; // 1000px\n$bp-medium: 56.25em; // 900px;\n$bp-small: 37.5em; // 600px;\n","*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n\n  @media only screen and (max-width: $bp-large) {\n    font-size: 56.25%;\n  }\n  @media only screen and (max-width: $bp-medium) {\n    font-size: 50%;\n  }\n  @media only screen and (max-width: 50em) {\n    font-size: 43.75%;\n  }\n}\n\nbody {\n  box-sizing: border-box;\n  font-family: $font-primary;\n  font-size: 1.4rem;\n  font-weight: 300;\n  line-height: 1.6;\n  color: $color-grey-dark;\n}\n\n@keyframes ldio-n6x17pgox4 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.ldio-n6x17pgox4 > div > div {\n  // transform-origin: 10px 10px;\n  animation: ldio-n6x17pgox4 3.0303030303030303s linear infinite;\n  opacity: 0.8;\n}\n.ldio-n6x17pgox4 > div > div > div {\n  position: absolute;\n  left: 30px;\n  top: 30px;\n  width: 70px;\n  height: 70px;\n  border-radius: 70px 0 0 0;\n  transform-origin: 100px 100px;\n}\n.ldio-n6x17pgox4 > div div:nth-child(1) {\n  animation-duration: 0.7575757575757576s;\n}\n.ldio-n6x17pgox4 > div div:nth-child(1) > div {\n  background: #e15b64;\n  transform: rotate(0deg);\n}\n.ldio-n6x17pgox4 > div div:nth-child(2) {\n  animation-duration: 1.0101010101010102s;\n}\n.ldio-n6x17pgox4 > div div:nth-child(2) > div {\n  background: #f47e60;\n  transform: rotate(0deg);\n}\n.ldio-n6x17pgox4 > div div:nth-child(3) {\n  animation-duration: 1.5151515151515151s;\n}\n.ldio-n6x17pgox4 > div div:nth-child(3) > div {\n  background: #f8b26a;\n  transform: rotate(0deg);\n}\n.ldio-n6x17pgox4 > div div:nth-child(4) {\n  animation-duration: 3.0303030303030303s;\n}\n.ldio-n6x17pgox4 > div div:nth-child(4) > div {\n  background: #abbd81;\n  transform: rotate(0deg);\n}\n/*\n.loadingio-spinner-wedges-cqyhjjq8b24 {\n  width: 200px;\n  height: 200px;\n  display: inline-block;\n  overflow: hidden;\n  background: #ffffff;\n}\n*/\n\n.ldio-n6x17pgox4 {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform: translateZ(0) scale(1);\n  backface-visibility: hidden;\n  transform-origin: 0 0; /* see note above */\n}\n\n.ldio-n6x17pgox4 div {\n  box-sizing: content-box;\n}\n\n.loadingio-spinner-wedges-cqyhjjq8b24 {\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  // padding: 0 auto;\n  display: grid;\n  justify-content: center;\n  align-content: center;\n\n  min-height: 100vh;\n  min-width: 100vw;\n\n  z-index: 10000000;\n\n  overflow: hidden;\n  background: $color-secondary-4;\n\n  margin: 0 auto;\n}\n","@import 'variables';\n@import 'layout';\n@import 'base';\n@import 'utils';\n@import 'header';\n@import 'sidebar';\n@import 'list';\n@import 'detail';\n@import 'login';\n",".icon {\n  display: block;\n  height: 2rem;\n  width: 2rem;\n\n  fill: $color-grey-dark;\n}\n\ninput,\ninput:active,\ninput:focus {\n  border: none;\n  outline: none;\n}\n\n.cover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n\n  width: 100%;\n  height: 100%;\n\n  background-color: transparent;\n}\n\n.cursor {\n  cursor: pointer;\n}\n\n.blue {\n  background-color: $color-secondary-1;\n}\n\n.yellow {\n  background-color: $color-secondary-2;\n}\n.green {\n  background-color: $color-secondary-3;\n}\n\n.pink {\n  background-color: $color-secondary-4;\n}\n.red {\n  background-color: $color-primary;\n}\n.purple {\n  background-color: $color-secondary-5;\n}\n\n.show {\n  opacity: 1;\n  visibility: visible;\n}\n\n.hide {\n  opacity: 0;\n  visibility: hidden;\n}\n\n::-webkit-input-placeholder {\n  color: rgba(#333, 0.6);\n}\n\n.popup {\n  opacity: 0;\n  visibility: hidden;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n\n  height: 100%;\n  width: 100%;\n\n  background-color: rgba(#333, 0.3);\n  backdrop-filter: blur(4px);\n}\n",".header {\n  display: grid;\n  grid-template-columns: 1fr 8rem 18rem;\n  justify-items: center;\n  align-items: center;\n\n  padding: 0 2rem;\n\n  background-color: $color-grey-light-1;\n  background-color: $color-primary;\n  color: #fff;\n\n  .icon {\n    fill: #fff;\n  }\n\n  &__search {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n\n    width: 100%;\n\n    input {\n      width: 100%;\n      height: 4rem;\n      border: none;\n      background-color: transparent;\n      color: #fff;\n\n      &:active,\n      &:focus {\n        outline: none;\n      }\n    }\n\n    .search-icon {\n      margin-right: 1rem;\n\n      width: 1.5rem;\n      height: 1.5rem;\n    }\n  }\n\n  &__notif {\n    .notif-icon {\n      fill: rgb(212, 212, 212);\n    }\n  }\n\n  &__user {\n    display: flex;\n    justify-self: end;\n    justify-content: center;\n    align-items: center;\n\n    &--img {\n      margin-right: 1rem;\n      width: 2rem;\n      height: 2rem;\n\n      .image {\n        display: block;\n        width: 2rem;\n        height: 2rem;\n        object-fit: cover;\n        border-radius: 0.5rem;\n      }\n    }\n\n    &--name {\n      font-weight: 400;\n    }\n\n    &--menu {\n      margin-left: 1rem;\n    }\n  }\n}\n",".sidebar {\n  padding: 1rem 2rem;\n  border-right: $outline;\n\n  display: grid;\n  grid-template-rows: 10% min-content 1fr min-content;\n  grid-row-gap: 4rem;\n\n  &__logo {\n    color: transparent;\n    font-size: 4rem;\n    font-weight: 700;\n    background: linear-gradient(\n      to right bottom,\n      rgba($color-secondary-4, 1),\n      rgba($color-primary, 1)\n    );\n    background-clip: text;\n  }\n\n  &__nav {\n    display: grid;\n    grid-template-rows: repeat(5, min-content);\n    grid-row-gap: 2rem;\n\n    .icon {\n      height: 1.5rem;\n      width: 1.5rem;\n    }\n\n    & > div {\n      display: grid;\n      grid-template-columns: 10% 90%;\n      grid-column-gap: 1.5rem;\n      align-items: center;\n\n      text-transform: capitalize;\n    }\n  }\n  &__overview {\n    .icon {\n      fill: $color-secondary-1;\n      height: 2rem;\n      width: 2rem;\n    }\n  }\n  &__today {\n    .icon {\n      fill: $color-secondary-2;\n    }\n  }\n  &__important {\n    .icon {\n      fill: $color-secondary-3;\n    }\n  }\n  &__scheduled {\n    .icon {\n      fill: $color-secondary-4;\n    }\n  }\n  &__done {\n    .icon {\n      fill: $color-secondary-5;\n    }\n  }\n\n  &__tag {\n    display: flex;\n    flex-direction: column;\n\n    &--item {\n      display: grid;\n      grid-template-columns: min-content 1fr min-content;\n      justify-content: space-between;\n      align-items: center;\n\n      margin-bottom: 1rem;\n      position: relative;\n\n      cursor: pointer;\n\n      .tag {\n        &-color {\n          height: 1rem;\n          width: 1rem;\n          border-radius: 2px;\n          margin-right: 2rem;\n        }\n\n        &-count {\n          position: relative;\n          color: #fff;\n          z-index: 100;\n          font-size: 1rem;\n\n          &::after {\n            display: block;\n            content: '';\n            position: absolute;\n            top: 0;\n            right: 0;\n            transform: translate(30%, -5%);\n\n            z-index: -1;\n\n            height: 1.5rem;\n            width: 1.5rem;\n            border-radius: 100%;\n\n            background-color: rgba($color-secondary-4, 0.5);\n          }\n        }\n      }\n    }\n  }\n\n  &__add {\n    justify-self: center;\n    margin-top: -6rem;\n\n    height: 4rem;\n    width: 4rem;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background-color: $color-primary;\n    border-radius: 100%;\n\n    box-shadow: $shadow-light;\n\n    cursor: pointer;\n\n    &-btn {\n      fill: #fff;\n    }\n  }\n}\n\n.blue {\n  background-color: $color-secondary-1;\n}\n\n.yellow {\n  background-color: $color-secondary-2;\n}\n.red {\n  background-color: $color-secondary-3;\n}\n\n.form {\n  opacity: 0;\n  visibility: hidden;\n\n  display: flex;\n  flex-direction: column;\n\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10000;\n\n  &__input {\n    background-color: #fff;\n    color: rgba($color-secondary-4, 0.7);\n\n    padding: 1rem;\n    border-radius: 5px;\n    margin-bottom: 1rem;\n    width: 25rem;\n\n    &:hover {\n      box-shadow: $shadow-light;\n    }\n\n    // &:invalid {\n    //   outline: 0.1px solid red;\n    // }\n  }\n  &__label {\n    font-size: 1.4rem;\n    color: $color-secondary-4;\n    font-weight: 700;\n  }\n\n  &__desc {\n    padding: 1rem;\n    height: 10rem;\n    outline: none;\n    border: none;\n\n    &:active,\n    &:focus {\n      outline: none;\n      border: none;\n    }\n  }\n}\n\n.submit-btn {\n  padding: 1rem 2rem;\n  box-shadow: $shadow-light;\n  font-weight: 700;\n  margin-top: 1rem;\n\n  background: linear-gradient(to right, rgba(235, 77, 75, 1), rgb(167, 53, 51));\n  color: #fff;\n\n  cursor: pointer;\n\n  transition: all 0.5s;\n\n  &:hover {\n    background: linear-gradient(\n      to right,\n      rgba(235, 77, 75, 0.7),\n      rgba(167, 53, 51, 0.8)\n    );\n\n    &:active {\n      transform: translateY(2px);\n    }\n  }\n}\n\n.close-popup {\n  position: absolute;\n  top: -2rem;\n  right: -2rem;\n\n  font-size: 1.6rem;\n  font-weight: 700;\n\n  color: rgb(255, 0, 0);\n\n  cursor: pointer;\n}\n",".list {\n  border-right: $outline;\n  position: relative;\n\n  &__header {\n    padding: 1rem 2rem;\n    border-bottom: 2px solid $color-secondary-1;\n\n    display: flex;\n    justify-content: space-between;\n  }\n  &__content {\n    display: flex;\n    flex-direction: column;\n\n    height: 90%;\n  }\n  &__item {\n    padding: 1.5rem 2rem;\n    border-bottom: $outline-light;\n\n    display: grid;\n    grid-template-columns: 2rem 1fr 1rem 1rem;\n    align-items: center;\n\n    position: relative;\n\n    // background-color: $color-grey-light-1;\n\n    &:hover {\n      box-shadow: $shadow-light;\n      cursor: pointer;\n    }\n\n    .icon {\n      height: 1rem;\n      width: 1rem;\n    }\n\n    .star-icon {\n      //   fill: $color-primary;\n      position: relative;\n      z-index: 10000;\n    }\n\n    .delete {\n      position: relative;\n      z-index: 10000;\n      margin-left: 1rem;\n\n      color: $color-grey-dark;\n    }\n\n    &--description {\n      display: flex;\n      flex-direction: column;\n      margin-left: 2rem;\n\n      .bottom {\n        display: flex;\n        align-items: center;\n\n        text-transform: capitalize;\n        font-size: 0.9rem;\n\n        & > .icon {\n          margin-right: 0.5rem;\n        }\n\n        & > span {\n          margin-right: 2rem;\n        }\n\n        .time-icon {\n          fill: $color-secondary-3;\n\n          position: relative;\n          z-index: 10000;\n        }\n\n        .notif-icon {\n          fill: $color-secondary-1;\n\n          position: relative;\n          z-index: 10000;\n        }\n      }\n    }\n\n    .done__icon-div {\n      height: 2rem;\n      width: 2rem;\n\n      border-radius: 100%;\n      border: $outline-light;\n\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      position: relative;\n      z-index: 10000;\n\n      .icon {\n        fill: $color-secondary-6;\n        // opacity: 0;\n        // visibility: hidden;\n\n        transition: all 0.5s;\n      }\n    }\n  }\n}\n\n#red {\n  fill: $color-primary;\n}\n\n#black {\n  fill: $color-grey-dark;\n}\n\n.page {\n  position: absolute;\n  bottom: 1rem;\n  right: 3rem;\n  display: grid;\n  grid-template-columns: repeat(2, min-content);\n  grid-column-gap: 2rem;\n\n  & > a {\n    display: none;\n    cursor: pointer;\n\n    color: $color-primary;\n\n    &:hover {\n      color: #000;\n    }\n  }\n}\n",".detail {\n  display: grid;\n  grid-template-columns: 4rem 1fr;\n  grid-column-gap: 1rem;\n\n  padding: 1rem;\n  padding-top: 3rem;\n  padding-right: 3rem;\n\n  &__icon {\n    height: 3rem;\n    width: 3rem;\n\n    border-radius: 100%;\n    // border: $outline-light;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    // background-color: $color-secondary-6;\n\n    .icon {\n      fill: #fff;\n      // opacity: 1;\n      // visibility: hidden;\n\n      transition: all 0.5s;\n    }\n  }\n  &__content {\n  }\n  &__header {\n    display: grid;\n    grid-template-rows: repeat(2, 50%);\n    grid-row-gap: 0.5rem;\n\n    .top {\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-start;\n      align-items: center;\n\n      font-size: 1.4rem;\n      font-weight: 700;\n\n      .icon-div {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-column-gap: 1rem;\n\n        .icon {\n          height: 1.5rem;\n          width: 1.5rem;\n        }\n      }\n    }\n\n    .bottom {\n      display: grid;\n      grid-template-columns: 10rem 20rem;\n      font-size: 1rem;\n      color: $color-primary;\n\n      & > div {\n        display: flex;\n        align-items: center;\n\n        .icon {\n          margin-right: 0.5rem;\n          height: 1.2rem;\n          width: 1.2rem;\n          fill: $color-primary;\n        }\n      }\n\n      .date {\n        margin-right: -10rem;\n      }\n    }\n  }\n  &__text {\n    padding-top: 2rem;\n    padding-right: 2rem;\n    font-size: 1.2rem;\n  }\n\n  &__step {\n    padding-top: 2rem;\n\n    &--add {\n      display: block;\n      margin-bottom: 1rem;\n\n      color: $color-secondary-1;\n\n      cursor: pointer;\n    }\n\n    &--item {\n      margin-bottom: 0.5rem;\n      display: grid;\n      grid-template-columns: repeat(2, max-content);\n      grid-column-gap: 1rem;\n      align-items: center;\n    }\n  }\n}\n",".login {\n  &__form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 10000;\n    padding: 10rem;\n\n    background-color: #fff;\n    color: rgba($color-secondary-4, 0.7);\n  }\n\n  &__img {\n    margin-bottom: 2rem;\n  }\n  &__text {\n    margin-bottom: 2rem;\n  }\n  &__btn {\n    border: none;\n    outline: none;\n\n    padding: 1rem 2rem;\n    box-shadow: $shadow-light;\n    font-weight: 700;\n\n    background-color: $color-blue2;\n    color: #fff;\n\n    cursor: pointer;\n\n    transition: all 0.5s;\n\n    &:hover {\n      background-color: $color-blue3;\n\n      &:active {\n        transform: translateY(2px);\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ addLeadingZeros
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
   * |  d  | Day of month                   |  D  | Day of year                    |
   * |  e  | Local day of week              |  E  | Day of week                    |
   * |  f  |                                |  F* | Day of week in month           |
   * |  g* | Modified Julian day            |  G  | Era                            |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  i! | ISO day of week                |  I! | ISO week of year               |
   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
   * |  m  | Minute                         |  M  | Month                          |
   * |  n  |                                |  N  |                                |
   * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
   * |  p! | Long localized time            |  P! | Long localized date            |
   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
   * |  u  | Extended year                  |  U* | Cyclic year                    |
   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
   * |  w  | Local week of year             |  W* | Week of month                  |
   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
   * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   *
   * Letters marked by ! are non-standard, but implemented by date-fns:
   * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
   *   i.e. 7 for Sunday, 1 for Monday, etc.
   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
   *   `R` is supposed to be used in conjunction with `I` and `i`
   *   for universal ISO week-numbering date, whereas
   *   `Y` is supposed to be used in conjunction with `w` and `e`
   *   for week-numbering date specific to the locale.
   * - `P` is long localized date format
   * - `p` is long localized time format
   */

};
var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getTimezoneOffsetInMilliseconds
/* harmony export */ });
var MILLISECONDS_IN_MINUTE = 60000;

function getDateMillisecondsPart(date) {
  return date.getTime() % MILLISECONDS_IN_MINUTE;
}
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */


function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
  date.setSeconds(0, 0);
  var hasNegativeUTCOffset = baseTimezoneOffset > 0;
  var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset ? (MILLISECONDS_IN_MINUTE + getDateMillisecondsPart(date)) % MILLISECONDS_IN_MINUTE : getDateMillisecondsPart(date);
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getUTCDayOfYear
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getUTCISOWeek
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getUTCISOWeekYear
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getUTCWeek
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getUTCWeekYear
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => /* binding */ isProtectedDayOfYearToken,
/* harmony export */   "isProtectedWeekYearToken": () => /* binding */ isProtectedWeekYearToken,
/* harmony export */   "throwProtectedError": () => /* binding */ throwProtectedError
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ requiredArgs
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ startOfUTCISOWeek
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ startOfUTCISOWeekYear
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ startOfUTCWeek
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ startOfUTCWeekYear
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ toInteger
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ addMilliseconds
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ format
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aaa  | AM, PM                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 05/29/1453                        | 7     |
 * |                                 | PP      | May 29, 1453                      | 7     |
 * |                                 | PPP     | May 29th, 1453                    | 7     |
 * |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
 * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__.default;
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__.default[firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__.default[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ isValid
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  return !isNaN(date);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ buildFormatLongFn
/* harmony export */ });
function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ buildLocalizeFn
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ buildMatchFn
/* harmony export */ });
function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ buildMatchPatternFn
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ formatDistance
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ formatRelative
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.

};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__.default,
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__.default,
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__.default,
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__.default,
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__.default,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ subMilliseconds
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ toDate
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/***/ ((module) => {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXovLi9zcmMvanMvaHRtbC5qcyIsIndlYnBhY2s6Ly9maXovLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZml6Ly4vc3JjL2pzL21vZGVsLmpzIiwid2VicGFjazovL2Zpei8uL3NyYy9qcy92aWV3LmpzIiwid2VicGFjazovL2Zpei8uL3NyYy9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9maXovLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Zpei8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2Zpei8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZml6Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL2Zpei8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL2Zpei8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZml6Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZml6Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9maXovLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9maXovLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZml6Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZml6Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL2Zpei8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZml6Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9maXovLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZml6Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9maXovLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZml6Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9maXovLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL2Zpei8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL2Zpei8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL2Zpei8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9maXovLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL2Zpei8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL2Zpei8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL2Zpei8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9maXovLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL2Zpei8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9maXovLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL2Zpei8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZml6Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9maXovLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly9maXovLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9maXovLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9maXovLi9zcmMvc2Fzcy9tYWluLnNjc3M/Y2MxZiIsIndlYnBhY2s6Ly9maXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZml6Ly4vbm9kZV9tb2R1bGVzL3V1aWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZml6Ly4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovL2Zpei8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9maXovLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qcyIsIndlYnBhY2s6Ly9maXovLi9ub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsIndlYnBhY2s6Ly9maXovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZml6L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Zpei93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZml6L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZml6L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZml6L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJ0YXNrSFRNTCIsImRldGFpbEhUTUwiLCJ0YWdIVE1MIiwiYXBwQ3RybCIsInZpZXdDdHJsIiwibW9kZWxDdHJsIiwiRE9NIiwiYWRkVGFza0J0biIsImZvcm0iLCJ0YXNrTGlzdCIsInRhZ0xpc3QiLCJzaWRlYmFyT3ZlcnZpZXciLCJzaWRlYmFyRG9uZSIsInNpZGViYXJJbXBvcnRhbnQiLCJzaWRlYmFyVG9kYXkiLCJzZWFyY2hJbnB1dCIsInBhZ2VOZXh0IiwicGFnZVByZXYiLCJkZWxldGVCdG4iLCJzdGF0ZSIsInRhc2tzIiwidGFncyIsImNvbXBsZXRlZCIsImltcG9ydGFudCIsInBlcnNpc3REYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYWdlTnVtYmVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwYXJzZSIsImdldEl0ZW0iLCJzb3J0VGFza3NCeURhdGUiLCJzaG93UGFnZU51bWJlcnMiLCJwYWdlQ3RybCIsInJlbmRlclRhc2siLCJyZW5kZXJUYWdzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5IiwiVGFzayIsInRhc2tUaXRsZSIsInRhc2tEZXNjcmlwdGlvbiIsInRhc2tEdWVEYXRlIiwidGFza1RhZyIsImlkIiwiZm9ybWF0dGVkRHVlRGF0ZSIsInBvcHVwRXZlbnRzIiwicHJldmVudERlZmF1bHQiLCJuZXdUYXNrIiwiZ2V0VXNlcklucHV0IiwiZ2V0VGFncyIsImNsYXNzTmFtZSIsInRhcmdldCIsImNsYXNzTGlzdCIsInBhcmVudE5vZGUiLCJnZXRBdHRyaWJ1dGUiLCJyZW5kZXJUYXNrRGV0YWlscyIsInRhZyIsInJlbW92ZUNvbXBsZXRlZCIsImNoYW5nZUhlYWRlciIsInRvZ2dsZUltcG9ydGFudCIsImRlbGV0ZVRhc2siLCJyZW5kZXJUYXNrQnlUYWdzIiwicmVuZGVyVG9kYXkiLCJ2YWx1ZSIsInNlYXJjaFRhc2siLCJzaG93Iiwidmlld0NvbnRyb2xsZXIiLCJtb2RlbENvbnRyb2xsZXIiLCJzb3J0RnVuY3Rpb24iLCJhIiwiYiIsInNvcnQiLCJmb3JFYWNoIiwidGFzayIsImkiLCJwdXNoIiwic3BsaWNlIiwiaW5uZXJIVE1MIiwiaW5kZXhPZiIsImFyciIsInJlbmRlclRhc2tzIiwiZmlsdGVyZWRBcnIiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInRhc2tOdW1iZXIiLCJzdGFydCIsImVuZCIsIm5ld1Rhc2tMaXN0Iiwic2xpY2UiLCJsb29wRGVsZXRlIiwiYyIsInBvcHVwIiwicG9wdXBDbG9zZUJ0biIsInRhc2tTdWJtaXRCdG4iLCJkZXRhaWxTZWN0aW9uIiwidGFza0xpc3RIZWFkZXJUZXh0IiwicG9wdXBPcGVuIiwib3BhY2l0eSIsInZpc2liaWxpdHkiLCJwb3B1cENsb3NlIiwiY2xlYXJJbnB1dCIsInRhc2tDbGFzcyIsIkRhdGUiLCJ0b0xvd2VyQ2FzZSIsInV1aWR2NCIsImZvcm1hdCIsInVzZXJJbnB1dCIsImFkZFBvcHVwIiwibmV3SFRNTCIsInRleHRDb250ZW50IiwicmVwbGFjZSIsImluc2VydEFkamFjZW50SFRNTCIsInRhZ0NvbG91ciIsInRvVXBwZXJDYXNlIiwibGVuZ3RoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic29ydFRhc2tzIiwidGl0bGUiLCJ0b2RheSIsInRvRGF0ZVN0cmluZyIsInRhc2tEYXRlIiwicGFnZXMiLCJjZWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsUUFBUSxzdUNBQWQ7QUE4QkEsSUFBTUMsVUFBVSxpN0VBQWhCO0FBbUVBLElBQU1DLE9BQU8sbVZBQWIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR1A7QUFFQTtBQUNBOztBQUVBLElBQU1DLE9BQU8sR0FBSSxVQUFDQyxRQUFELEVBQVdDLFNBQVgsRUFBeUI7QUFDeEM7QUFEd0Msc0JBZXBDRCxRQUFRLENBQUNFLEdBZjJCO0FBQUEsTUFHdENDLFVBSHNDLGlCQUd0Q0EsVUFIc0M7QUFBQSxNQUl0Q0MsSUFKc0MsaUJBSXRDQSxJQUpzQztBQUFBLE1BS3RDQyxRQUxzQyxpQkFLdENBLFFBTHNDO0FBQUEsTUFNdENDLE9BTnNDLGlCQU10Q0EsT0FOc0M7QUFBQSxNQU90Q0MsZUFQc0MsaUJBT3RDQSxlQVBzQztBQUFBLE1BUXRDQyxXQVJzQyxpQkFRdENBLFdBUnNDO0FBQUEsTUFTdENDLGdCQVRzQyxpQkFTdENBLGdCQVRzQztBQUFBLE1BVXRDQyxZ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QUFNLFVBQVUsWUFBWSxXQUFXLGdCQUFnQixLQUFLLFVBQVUsWUFBWSxXQUFXLGdCQUFnQixLQUFLLGVBQWUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSx5QkFBeUIsUUFBUSxVQUFVLFVBQVUsa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sS0FBSyx1QkFBdUIsS0FBSyxLQUFLLHFCQUFxQixLQUFLLEtBQUssd0JBQXdCLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixPQUFPLEtBQUssaUJBQWlCLE1BQU0sdUJBQXVCLE1BQU0sS0FBSyxpQkFBaUIsTUFBTSx1QkFBdUIsTUFBTSxZQUFZLGFBQWEsaUJBQWlCLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxrQkFBa0IsT0FBTyxVQUFVLFVBQVUsVUFBVSxpQkFBaUIsUUFBUSxVQUFVLGdCQUFnQixLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLGtCQUFrQixNQUFNLGdCQUFnQixNQUFNLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixPQUFPLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLG1CQUFtQixPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssZUFBZSxLQUFLLFVBQVUsWUFBWSxhQUFhLGdCQUFnQixLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksZ0JBQWdCLEtBQUssZ0JBQWdCLE9BQU8sYUFBYSxXQUFXLGVBQWUsTUFBTSxnQkFBZ0IsTUFBTSxVQUFVLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsZUFBZSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxZQUFZLGNBQWMsWUFBWSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLFlBQVksWUFBWSxZQUFZLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsZUFBZSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsa0JBQWtCLE1BQU0sWUFBWSxZQUFZLGVBQWUsS0FBSyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUIsT0FBTyxVQUFVLGlCQUFpQixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsZ0JBQWdCLE1BQU0sVUFBVSxVQUFVLFlBQVksa0JBQWtCLE9BQU8sYUFBYSxXQUFXLFVBQVUsZUFBZSxPQUFPLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksbUJBQW1CLE9BQU8sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLGNBQWMsY0FBYyxpQkFBaUIsS0FBSyxnQkFBZ0IsTUFBTSxtQkFBbUIsT0FBTyxtQkFBbUIsT0FBTyxtQkFBbUIsT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksZ0JBQWdCLEtBQUssWUFBWSxjQUFjLFlBQVksWUFBWSxhQUFhLGdCQUFnQixLQUFLLGtCQUFrQixPQUFPLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxVQUFVLFVBQVUsVUFBVSxlQUFlLEtBQUssVUFBVSxnQkFBZ0IsTUFBTSxZQUFZLGNBQWMsY0FBYyxhQUFhLGFBQWEsV0FBVyxVQUFVLGlCQUFpQixNQUFNLGdCQUFnQixNQUFNLG1CQUFtQixNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxZQUFZLGlCQUFpQixPQUFPLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxhQUFhLFdBQVcsaUJBQWlCLE1BQU0sVUFBVSxZQUFZLGdCQUFnQixLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxZQUFZLGdCQUFnQixNQUFNLFdBQVcsZUFBZSxNQUFNLGFBQWEsZ0JBQWdCLE9BQU8sYUFBYSxXQUFXLFlBQVksa0JBQWtCLE9BQU8sVUFBVSxZQUFZLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxhQUFhLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGtCQUFrQixPQUFPLGFBQWEsY0FBYyxnQkFBZ0IsT0FBTyxhQUFhLGNBQWMsZ0JBQWdCLE9BQU8sV0FBVyxVQUFVLFlBQVksY0FBYyxZQUFZLFlBQVksYUFBYSxhQUFhLGdCQUFnQixPQUFPLGFBQWEsb0JBQW9CLE1BQU0sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sVUFBVSxVQUFVLGlCQUFpQixPQUFPLGdCQUFnQixPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxpQkFBaUIsTUFBTSxVQUFVLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxrQkFBa0IsT0FBTyxXQUFXLGVBQWUsT0FBTyxXQUFXLFlBQVksV0FBVyxpQkFBaUIsT0FBTyxXQUFXLGlCQUFpQixPQUFPLGFBQWEsV0FBVyxVQUFVLGlCQUFpQixPQUFPLGtCQUFrQixNQUFNLFlBQVksYUFBYSxr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QVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGtFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxrRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0VBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQzVHQSxVQUFVLG1CQUFPLENBQUMseURBQVc7QUFDN0Isa0JBQWtCLG1CQUFPLENBQUMsaUVBQW1COztBQUU3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztVQzVCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRhc2tIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RfX2l0ZW1cIiBkYXRhLWlkPVwiJSVJRCUlXCIgZGF0YS10YWc9XCIlJVRBRyUlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3ZlclwiPiZuYnNwOzwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG9uZV9faWNvbi1kaXZcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbiAlJVNIT1clJVwiPlxuICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiLi9pbWcvc3ByaXRlLnN2ZyNpY29uLWNoZWNrbWFya1wiPjwvdXNlPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RfX2l0ZW0tLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b3BcIj4lJVRJVExFJSU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb24gdGltZS1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIi4vaW1nL3Nwcml0ZS5zdmcjaWNvbi1hY2Nlc3NfdGltZVwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImR1ZS1kYXRlXCI+JSVEVUVEQVRFJSU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8IS0tXG4gICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbiBub3RpZi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICAgICAgICB4bGluazpocmVmPVwiLi9pbWcvc3ByaXRlLnN2ZyNpY29uLW5vdGlmaWNhdGlvbnMtb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgID48L3VzZT5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3ZnIGlkPVwiJSVTVEFSSUNPTiUlXCIgY2xhc3M9XCJpY29uIHN0YXItaWNvblwiPlxuICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIuL2ltZy9zcHJpdGUuc3ZnI2ljb24tc3Rhci1vXCI+PC91c2U+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlbGV0ZVwiPng8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuXG5leHBvcnQgY29uc3QgZGV0YWlsSFRNTCA9IGAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbF9faWNvblwiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb24gZG9uZS1pY29uXCI+XG4gICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIi4vaW1nL3Nwcml0ZS5zdmcjaWNvbi1cIj48L3VzZT5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbF9fY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4lJURFVEFJTFRJVExFJSU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24tZGl2XCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8dXNlXG4gICAgICAgICAgICAgICAgICAgICAgeGxpbms6aHJlZj1cIi4vaW1nL3Nwcml0ZS5zdmcjaWNvbi1kb3RzLWhvcml6b250YWwtdHJpcGxlXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8IS0tXG4gICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8dXNlXG4gICAgICAgICAgICAgICAgICAgICAgeGxpbms6aHJlZj1cIi4vaW1nL3Nwcml0ZS5zdmcjaWNvbi1kb3RzLWhvcml6b250YWwtdHJpcGxlXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAtLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiLi9pbWcvc3ByaXRlLnN2ZyNpY29uLWFjY2Vzc190aW1lXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPiUlREVUQUlMRFVFREFURSUlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVtaW5kZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIi4vaW1nL3Nwcml0ZS5zdmcjaWNvbi1hbGFybWNsb2NrXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlJlbWluZCBtZSBhdCA5OjE1YW08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImRldGFpbF9fdGV4dFwiPlxuICAgICAgICAgICAgICAlJURFVEFJTERFU0NSSVBUSU9OJSVcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbF9fc3RlcFwiPlxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImRldGFpbF9fc3RlcC0tYWRkXCI+ICYjNDM7IEFkZCBzdGVwIDwvYT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbF9fc3RlcC0taXRlbVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiXCIgaWQ9XCJzdGVwIGl0ZW1cIiAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGVwIGl0ZW1cIj5wbGF5IHNvY2NlcjwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxfX3N0ZXAtLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlwiIGlkPVwic3RlcCBpdGVtXCIgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3RlcCBpdGVtXCI+bXVzaWMgbGVzc29uPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxfX3N0ZXAtLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlwiIGlkPVwic3RlcCBpdGVtXCIgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3RlcCBpdGVtXCI+dmlzaXQgdGhlIGRlbnRpc3Q8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLS0+XG4gICAgICAgICAgPC9kaXY+YDtcblxuZXhwb3J0IGNvbnN0IHRhZ0hUTUwgPSBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXJfX3RhZy0taXRlbSBzaWRlYmFyX190YWctLXdvcmtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIlJUlEJSUgY292ZXJcIj4mbmJzcDs8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnLWNvbG9yICUlVEFHQ09MT1VSJSVcIj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZy10ZXh0XCI+JSVUQUdUSVRMRSUlPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWctY291bnRcIj4lJVRBR05VTUJFUiUlPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGA7XG4iLCJpbXBvcnQgJy4uL3Nhc3MvbWFpbi5zY3NzJztcblxuaW1wb3J0IHZpZXdDb250cm9sbGVyIGZyb20gJy4vdmlldyc7XG5pbXBvcnQgbW9kZWxDb250cm9sbGVyIGZyb20gJy4vbW9kZWwnO1xuXG5jb25zdCBhcHBDdHJsID0gKCh2aWV3Q3RybCwgbW9kZWxDdHJsKSA9PiB7XG4gIC8vIERPTSBWQVJJQUJMRVNcbiAgY29uc3Qge1xuICAgIGFkZFRhc2tCdG4sXG4gICAgZm9ybSxcbiAgICB0YXNrTGlzdCxcbiAgICB0YWdMaXN0LFxuICAgIHNpZGViYXJPdmVydmlldyxcbiAgICBzaWRlYmFyRG9uZSxcbiAgICBzaWRlYmFySW1wb3J0YW50LFxuICAgIHNpZGViYXJUb2RheSxcbiAgICBzZWFyY2hJbnB1dCxcbiAgICBwYWdlTmV4dCxcbiAgICBwYWdlUHJldixcbiAgICBkZWxldGVCdG4sXG4gIH0gPSB2aWV3Q3RybC5ET007XG5cbiAgbGV0IHN0YXRlID0ge1xuICAgIHRhc2tzOiBbXSxcbiAgICB0YWdzOiB7fSxcbiAgICBjb21wbGV0ZWQ6IFtdLFxuICAgIGltcG9ydGFudDogW10sXG4gIH07XG5cbiAgLy8gU1RPUkFHRVxuICBjb25zdCBwZXJzaXN0RGF0YSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdGUnLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICB9O1xuXG4gIGxldCBwYWdlTnVtYmVyID0gMTtcbiAgbGV0IHRhc2tzO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZSA9PiB7XG4gICAgaWYgKCFKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0ZScpKSkge1xuICAgICAgcGVyc2lzdERhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0ZScpKTtcbiAgICB9XG5cbiAgICBtb2RlbEN0cmwuc29ydFRhc2tzQnlEYXRlKHN0YXRlLnRhc2tzKTtcblxuICAgIHBhZ2VOdW1iZXIgPSAxO1xuICAgIHRhc2tzID0gc3RhdGUudGFza3M7XG4gICAgdmlld0N0cmwuc2hvd1BhZ2VOdW1iZXJzKHN0YXRlLnRhc2tzLCBwYWdlTnVtYmVyKTtcbiAgICBtb2RlbEN0cmwucGFnZUN0cmwoc3RhdGUudGFza3MsIHZpZXdDdHJsLnJlbmRlclRhc2ssIHBhZ2VOdW1iZXIpO1xuXG4gICAgLy8gUkVOREVSIFRBR1NcbiAgICBpZiAoc3RhdGUudGFncykge1xuICAgICAgdmlld0N0cmwucmVuZGVyVGFncyhzdGF0ZSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcubG9hZGluZ2lvLXNwaW5uZXItd2VkZ2VzLWNxeWhqanE4YjI0J1xuICAgICkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG4gIGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgIHRhc2tUaXRsZSxcbiAgICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICAgIHRhc2tEdWVEYXRlLFxuICAgICAgdGFza1RhZyxcbiAgICAgIGlkLFxuICAgICAgZm9ybWF0dGVkRHVlRGF0ZSxcbiAgICB9KSB7XG4gICAgICAodGhpcy50YXNrVGl0bGUgPSB0YXNrVGl0bGUpLFxuICAgICAgICAodGhpcy50YXNrRGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb24pLFxuICAgICAgICAodGhpcy50YXNrRHVlRGF0ZSA9IHRhc2tEdWVEYXRlKSxcbiAgICAgICAgKHRoaXMudGFza1RhZyA9IHRhc2tUYWcpO1xuICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgdGhpcy5mb3JtYXR0ZWREdWVEYXRlID0gZm9ybWF0dGVkRHVlRGF0ZTtcbiAgICAgIHRoaXMuaW1wb3J0YW50ID0gJyc7XG4gICAgfVxuICB9XG5cbiAgLy8gUE9QVVAgRVZFTlRTXG4gIHZpZXdDdHJsLnBvcHVwRXZlbnRzKCk7XG5cbiAgLy8gRk9STSBTVUJNSVQgRVZFTlQgTElTVEVORVJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBHRVQgVVNFUiBJTlBVVCBBTkQgU1RPUkUgSU4gU1RBVEVcbiAgICBjb25zdCBuZXdUYXNrID0gdmlld0N0cmwuZ2V0VXNlcklucHV0KFRhc2ssIHN0YXRlKTtcblxuICAgIC8vIFNPUlQgVEFTS1MgQlkgRFVFIERBVEVcbiAgICBtb2RlbEN0cmwuc29ydFRhc2tzQnlEYXRlKHN0YXRlLnRhc2tzKTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFVQREFURSBUQVNLIExJU1QgV0lUSCBORVcgVEFTS1xuICAgIC8vIHZpZXdDdHJsLnJlbmRlclRhc2soc3RhdGUudGFza3MpO1xuICAgIHBhZ2VOdW1iZXIgPSAxO1xuICAgIHRhc2tzID0gc3RhdGUudGFza3M7XG4gICAgdmlld0N0cmwuc2hvd1BhZ2VOdW1iZXJzKHN0YXRlLnRhc2tzLCBwYWdlTnVtYmVyKTtcbiAgICBtb2RlbEN0cmwucGFnZUN0cmwoc3RhdGUudGFza3MsIHZpZXdDdHJsLnJlbmRlclRhc2ssIHBhZ2VOdW1iZXIpO1xuXG4gICAgLy8gR0VUIFRBR1NcbiAgICB2aWV3Q3RybC5nZXRUYWdzKHN0YXRlLCBuZXdUYXNrLCBuZXdUYXNrLnRhc2tUYWcpO1xuXG4gICAgLy8gUkVOREVSIFRBR1NcbiAgICB2aWV3Q3RybC5yZW5kZXJUYWdzKHN0YXRlKTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHBlcnNpc3REYXRhKCk7XG4gIH0pO1xuXG4gIC8vIFRBU0sgTElTVCBFVkVOVCBMSVNURU5FUiAoRVZFTlQgQlVCQkxJTkcpXG4gIHRhc2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gZS50YXJnZXQuY2xhc3NOYW1lO1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IGUudGFyZ2V0LmNsYXNzTGlzdDtcblxuICAgIC8vIFRBU0sgTElTVCBFVkVOVFxuICAgIGlmIChjbGFzc05hbWUgPT09ICdjb3ZlcicpIHtcbiAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgIHZpZXdDdHJsLnJlbmRlclRhc2tEZXRhaWxzKHN0YXRlLCBpZCk7XG4gICAgfVxuXG4gICAgLy8gRE9ORSBJQ09OIEVWRU5UXG4gICAgaWYgKGNsYXNzTmFtZSA9PT0gJ2RvbmVfX2ljb24tZGl2Jykge1xuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgY29uc3QgdGFnID0gZS50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnJyk7XG5cbiAgICAgIC8vIE1PVkUgQ09NUExFVEVEIFRBU0tTIEZST00gVEFTS1MgTElTVCBUTyBET05FXG4gICAgICBtb2RlbEN0cmwucmVtb3ZlQ29tcGxldGVkKHN0YXRlLCBpZCwgdGFnKTtcblxuICAgICAgLy8gUkVOREVSIE5FVyBUQVNLIExJU1RcbiAgICAgIC8vIHZpZXdDdHJsLnJlbmRlclRhc2soc3RhdGUudGFza3MpO1xuXG4gICAgICBtb2RlbEN0cmwuc29ydFRhc2tzQnlEYXRlKHN0YXRlLnRhc2tzKTtcblxuICAgICAgcGFnZU51bWJlciA9IDE7XG4gICAgICB2aWV3Q3RybC5zaG93UGFnZU51bWJlcnModGFza3MsIHBhZ2VOdW1iZXIpO1xuICAgICAgbW9kZWxDdHJsLnBhZ2VDdHJsKHRhc2tzLCB2aWV3Q3RybC5yZW5kZXJUYXNrLCBwYWdlTnVtYmVyKTtcblxuICAgICAgdmlld0N0cmwuY2hhbmdlSGVhZGVyKCcnLCB0YXNrcywgc3RhdGUpO1xuXG4gICAgICAvLyBSRU5ERVIgVEFHU1xuICAgICAgdmlld0N0cmwucmVuZGVyVGFncyhzdGF0ZSk7XG5cbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgcGVyc2lzdERhdGEoKTtcbiAgICAgIGNoYW5nZUhlYWRlcjtcbiAgICB9XG5cbiAgICAvLyBTVEFSIElDT04gRVZFTlRcbiAgICBpZiAoY2xhc3NMaXN0WzFdID09PSAnc3Rhci1pY29uJykge1xuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgICBtb2RlbEN0cmwudG9nZ2xlSW1wb3J0YW50KHN0YXRlLCBpZCk7XG5cbiAgICAgIG1vZGVsQ3RybC5zb3J0VGFza3NCeURhdGUoc3RhdGUudGFza3MpO1xuXG4gICAgICBwYWdlTnVtYmVyID0gMTtcbiAgICAgIHZpZXdDdHJsLnNob3dQYWdlTnVtYmVycyh0YXNrcywgcGFnZU51bWJlcik7XG4gICAgICBtb2RlbEN0cmwucGFnZUN0cmwodGFza3MsIHZpZXdDdHJsLnJlbmRlclRhc2ssIHBhZ2VOdW1iZXIpO1xuXG4gICAgICB2aWV3Q3RybC5jaGFuZ2VIZWFkZXIoJycsIHRhc2tzLCBzdGF0ZSk7XG5cbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgcGVyc2lzdERhdGEoKTtcbiAgICB9XG5cbiAgICAvLyBERUxFVEUgQlVUVE9OIEVWRU5UXG4gICAgaWYgKGNsYXNzTmFtZSA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgIGNvbnN0IHRhZyA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRhZycpO1xuXG4gICAgICBtb2RlbEN0cmwuZGVsZXRlVGFzayhzdGF0ZSwgaWQsIHRhZyk7XG5cbiAgICAgIG1vZGVsQ3RybC5zb3J0VGFza3NCeURhdGUoc3RhdGUudGFza3MpO1xuXG4gICAgICBwYWdlTnVtYmVyID0gMTtcblxuICAgICAgdmlld0N0cmwuc2hvd1BhZ2VOdW1iZXJzKHRhc2tzLCBwYWdlTnVtYmVyKTtcbiAgICAgIG1vZGVsQ3RybC5wYWdlQ3RybCh0YXNrcywgdmlld0N0cmwucmVuZGVyVGFzaywgcGFnZU51bWJlcik7XG5cbiAgICAgIHZpZXdDdHJsLmNoYW5nZUhlYWRlcignJywgdGFza3MsIHN0YXRlKTtcblxuICAgICAgLy8gUkVOREVSIFRBR1NcbiAgICAgIHZpZXdDdHJsLnJlbmRlclRhZ3Moc3RhdGUpO1xuXG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIHBlcnNpc3REYXRhKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBUQUdTIExJU1QgRVZFTlQgTElTVEVORVJcbiAgdGFnTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGNvbnN0IFtpZCwgY2xhc3NOYW1lXSA9IGUudGFyZ2V0LmNsYXNzTGlzdDtcblxuICAgIGlmIChjbGFzc05hbWUgPT09ICdjb3ZlcicpIHtcbiAgICAgIHZpZXdDdHJsLnJlbmRlclRhc2tCeVRhZ3Moc3RhdGUudGFncywgaWQsIG1vZGVsQ3RybC5zb3J0VGFza3NCeURhdGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU0lERUJBUiBPVkVSVklFVyBFVkVOVCBMSVNURU5FUlxuICBzaWRlYmFyT3ZlcnZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBtb2RlbEN0cmwuc29ydFRhc2tzQnlEYXRlKHN0YXRlLnRhc2tzKTtcblxuICAgIHBhZ2VOdW1iZXIgPSAxO1xuICAgIHRhc2tzID0gc3RhdGUudGFza3M7XG4gICAgdmlld0N0cmwuc2hvd1BhZ2VOdW1iZXJzKHN0YXRlLnRhc2tzLCBwYWdlTnVtYmVyKTtcbiAgICAvLyB2aWV3Q3RybC5yZW5kZXJUYXNrKHN0YXRlLnRhc2tzKTtcbiAgICBtb2RlbEN0cmwucGFnZUN0cmwoc3RhdGUudGFza3MsIHZpZXdDdHJsLnJlbmRlclRhc2ssIHBhZ2VOdW1iZXIpO1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgcGVyc2lzdERhdGEoKTtcbiAgfSk7XG5cbiAgLy8gU0lERUJBUiBET05FIEVWRU5UIExJU1RFTkVSXG4gIHNpZGViYXJEb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgbW9kZWxDdHJsLnNvcnRUYXNrc0J5RGF0ZShzdGF0ZS5jb21wbGV0ZWQpO1xuXG4gICAgcGFnZU51bWJlciA9IDE7XG4gICAgdGFza3MgPSBzdGF0ZS5jb21wbGV0ZWQ7XG4gICAgdmlld0N0cmwuc2hvd1BhZ2VOdW1iZXJzKHN0YXRlLmNvbXBsZXRlZCwgcGFnZU51bWJlcik7XG4gICAgLy8gdmlld0N0cmwucmVuZGVyVGFzayhzdGF0ZS5jb21wbGV0ZWQsICdzaG93Jyk7XG4gICAgbW9kZWxDdHJsLnBhZ2VDdHJsKFxuICAgICAgc3RhdGUuY29tcGxldGVkLFxuICAgICAgdmlld0N0cmwucmVuZGVyVGFzayxcbiAgICAgIHBhZ2VOdW1iZXIsXG4gICAgICAnc2hvdydcbiAgICApO1xuICAgIHZpZXdDdHJsLmNoYW5nZUhlYWRlcignQ29tcGxldGVkJyk7XG4gIH0pO1xuXG4gIC8vIFNJREVCQVIgSU1QT1JUQU5UIEVWRU5UIExJU1RFTkVSXG4gIHNpZGViYXJJbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBtb2RlbEN0cmwuc29ydFRhc2tzQnlEYXRlKHN0YXRlLmltcG9ydGFudCk7XG5cbiAgICBwYWdlTnVtYmVyID0gMTtcbiAgICB0YXNrcyA9IHN0YXRlLmltcG9ydGFudDtcbiAgICB2aWV3Q3RybC5zaG93UGFnZU51bWJlcnMoc3RhdGUuaW1wb3J0YW50LCBwYWdlTnVtYmVyKTtcbiAgICAvLyB2aWV3Q3RybC5yZW5kZXJUYXNrKHN0YXRlLmltcG9ydGFudCk7XG4gICAgbW9kZWxDdHJsLnBhZ2VDdHJsKHN0YXRlLmltcG9ydGFudCwgdmlld0N0cmwucmVuZGVyVGFzaywgcGFnZU51bWJlcik7XG4gICAgdmlld0N0cmwuY2hhbmdlSGVhZGVyKCdJbXBvcnRhbnQnKTtcbiAgfSk7XG5cbiAgLy8gU0lERUJBUiBUT0RBWSBFVkVOVCBMSVNURU5FUlxuICBzaWRlYmFyVG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICB2aWV3Q3RybC5yZW5kZXJUb2RheShzdGF0ZSk7XG4gIH0pO1xuXG4gIC8vIFNFQVJDSCBJTlBVVCBFVkVOVCBMSVNURU5FUlxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgbW9kZWxDdHJsLnNlYXJjaFRhc2soc3RhdGUsIHZhbHVlLCB2aWV3Q3RybC5yZW5kZXJUYXNrKTtcbiAgfSk7XG5cbiAgLy8gUEFHRVNcbiAgcGFnZU5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBwYWdlTnVtYmVyICs9IDE7XG4gICAgbGV0IHNob3cgPSAnJztcblxuICAgIGlmICh0YXNrcyA9PT0gc3RhdGUuY29tcGxldGVkKSB7XG4gICAgICBzaG93ID0gJ3Nob3cnO1xuICAgIH1cblxuICAgIHZpZXdDdHJsLnNob3dQYWdlTnVtYmVycyh0YXNrcywgcGFnZU51bWJlcik7XG4gICAgbW9kZWxDdHJsLnBhZ2VDdHJsKHRhc2tzLCB2aWV3Q3RybC5yZW5kZXJUYXNrLCBwYWdlTnVtYmVyLCBzaG93KTtcbiAgfSk7XG4gIHBhZ2VQcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgcGFnZU51bWJlciAtPSAxO1xuICAgIGxldCBzaG93ID0gJyc7XG5cbiAgICBpZiAodGFza3MgPT09IHN0YXRlLmNvbXBsZXRlZCkge1xuICAgICAgc2hvdyA9ICdzaG93JztcbiAgICB9XG5cbiAgICB2aWV3Q3RybC5zaG93UGFnZU51bWJlcnModGFza3MsIHBhZ2VOdW1iZXIpO1xuICAgIG1vZGVsQ3RybC5wYWdlQ3RybCh0YXNrcywgdmlld0N0cmwucmVuZGVyVGFzaywgcGFnZU51bWJlciwgc2hvdyk7XG4gIH0pO1xuXG4gIC8vIFBBR0UgTE9BRFxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25sb2FkJywgZSA9PiB7fSk7XG59KSh2aWV3Q29udHJvbGxlciwgbW9kZWxDb250cm9sbGVyKTtcbiIsImNvbnN0IHNvcnRGdW5jdGlvbiA9IChhLCBiKSA9PiB7XG4gIGlmIChhLnRhc2tEdWVEYXRlIDwgYi50YXNrRHVlRGF0ZSkgcmV0dXJuIC0xO1xuICBpZiAoYS50YXNrRHVlRGF0ZSA+IGIudGFza0R1ZURhdGUpIHJldHVybiAxO1xuICByZXR1cm4gMDtcbn07XG5cbmNvbnN0IHNvcnRUYXNrc0J5RGF0ZSA9IHRhc2tzID0+IHtcbiAgLy8gU09SVCBUQVNLUyBCQVNFRCBPTiBEVUUgREFURVxuICB0YXNrcy5zb3J0KHNvcnRGdW5jdGlvbik7XG59O1xuXG5jb25zdCByZW1vdmVDb21wbGV0ZWQgPSAoc3RhdGUsIGlkLCB0YWcpID0+IHtcbiAgLy8gTE9PUCBUSFJPVUdIIEFMTCBUQVNLUyBBTkQgUkVNT1ZFIENPTVBMRVRFRFxuICBzdGF0ZS50YXNrcy5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgaWYgKHRhc2suaWQgPT09IGlkKSB7XG4gICAgICAvLyBBZGQgdGFzayB0byBjb21wbGV0ZWQgYXJyYXlcbiAgICAgIHN0YXRlLmNvbXBsZXRlZC5wdXNoKHRhc2spO1xuXG4gICAgICAvLyBSZW1vdmUgdGFza3MgZnJvbSB0YXNrcyBsaXN0IGFycmF5XG4gICAgICBzdGF0ZS50YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBzdGF0ZS5pbXBvcnRhbnQuc3BsaWNlKGksIDEpO1xuXG4gICAgICAvLyBDbGVhciBkZXRhaWwgc2VjdGlvblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbCcpLmlubmVySFRNTCA9ICcnO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gTE9PUCBUSFJPVUdIIFRBR1MgQU5EIFJFTU9WRSBDT01QTEVURURcbiAgc3RhdGUudGFnc1t0YWddLmZvckVhY2goKHRhc2ssIGkpID0+IHtcbiAgICBpZiAodGFzay5pZCA9PT0gaWQpIHtcbiAgICAgIC8vIFJlbW92ZSB0YXNrcyBmcm9tIHRhZ3NcbiAgICAgIHN0YXRlLnRhZ3NbdGFnXS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHRvZ2dsZUltcG9ydGFudCA9IChzdGF0ZSwgaWQpID0+IHtcbiAgLy8gTE9PUCBUSFJPVUdIIEFMTCBUQVNLUyBBTkQgQUREIElNUE9SVEFOVCBUQVNLUyBUTyBJTVBPUlRBTlQgQVJSQVkgSU4gU1RBVEVcbiAgc3RhdGUudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICBpZiAodGFzay5pZCA9PT0gaWQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgc3RhdGUuaW1wb3J0YW50LmluZGV4T2YodGFzaykgPCAwICYmXG4gICAgICAgIHN0YXRlLmNvbXBsZXRlZC5pbmRleE9mKHRhc2spIDwgMFxuICAgICAgKSB7XG4gICAgICAgIHRhc2tbJ2ltcG9ydGFudCddID0gJ3llcyc7XG4gICAgICAgIHN0YXRlLmltcG9ydGFudC5wdXNoKHRhc2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTE9PUCBUSFJPVUdIIEFMTCBUQVNLUyBBTkQgUkVNT1ZFIElNUE9SVEFOVCBUQVNLUyBUTyBJTVBPUlRBTlQgQVJSQVkgSU4gU1RBVEVcbiAgICAgICAgdGFza1snaW1wb3J0YW50J10gPSAnJztcbiAgICAgICAgc3RhdGUuaW1wb3J0YW50LmZvckVhY2goKGFyciwgaSkgPT4ge1xuICAgICAgICAgIGlmIChhcnIuaWQgPT09IGlkKSBzdGF0ZS5pbXBvcnRhbnQuc3BsaWNlKGksIDEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3Qgc2VhcmNoVGFzayA9IChzdGF0ZSwgdmFsdWUsIHJlbmRlclRhc2tzKSA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkQXJyID0gc3RhdGUudGFza3MuZmlsdGVyKHRhc2sgPT4ge1xuICAgIHJldHVybiB0YXNrLnRhc2tUaXRsZS5pbmNsdWRlcyh2YWx1ZSk7XG4gIH0pO1xuXG4gIHJlbmRlclRhc2tzKGZpbHRlcmVkQXJyKTtcbn07XG5cbmNvbnN0IHBhZ2VDdHJsID0gKHRhc2tzLCByZW5kZXJUYXNrcywgcGFnZU51bWJlciwgc2hvdykgPT4ge1xuICBjb25zdCB0YXNrTnVtYmVyID0gNjtcbiAgY29uc3Qgc3RhcnQgPSAocGFnZU51bWJlciAtIDEpICogdGFza051bWJlcjtcbiAgY29uc3QgZW5kID0gcGFnZU51bWJlciAqIHRhc2tOdW1iZXI7XG5cbiAgY29uc3QgbmV3VGFza0xpc3QgPSB0YXNrcy5zbGljZShzdGFydCwgZW5kKTtcblxuICAvKlxuICBuZXdUYXNrTGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgIGlmIChuZXdUYXNrTGlzdC5pbmRleE9mKHRhc2spID49IHBhZ2VOdW1iZXIgKiB0YXNrTnVtYmVyKSB7XG4gICAgICBwYWdlTnVtYmVyICs9IDE7XG4gICAgfVxuICB9KTtcbiAgKi9cbiAgcmVuZGVyVGFza3MobmV3VGFza0xpc3QsIHNob3cpO1xufTtcblxuY29uc3QgbG9vcERlbGV0ZSA9IChhcnIsIGlkKSA9PiB7XG4gIGFyci5mb3JFYWNoKChjLCBpLCBhKSA9PiB7XG4gICAgaWYgKGMuaWQgPT09IGlkKSB7XG4gICAgICBhLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgZGVsZXRlVGFzayA9IChzdGF0ZSwgaWQsIHRhZykgPT4ge1xuICAvLyBMT09QIFRIUk9VR0ggQUxMIFRBU0tTIEFORCBSRU1PVkUgQ09NUExFVEVEXG4gIGxvb3BEZWxldGUoc3RhdGUudGFza3MsIGlkKTtcblxuICBsb29wRGVsZXRlKHN0YXRlLmltcG9ydGFudCwgaWQpO1xuXG4gIGxvb3BEZWxldGUoc3RhdGUuY29tcGxldGVkLCBpZCk7XG5cbiAgLy8gQ2xlYXIgZGV0YWlsIHNlY3Rpb25cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbCcpLmlubmVySFRNTCA9ICcnO1xuXG4gIC8vIExPT1AgVEhST1VHSCBUQUdTIEFORCBSRU1PVkUgQ09NUExFVEVEXG4gIHN0YXRlLnRhZ3NbdGFnXS5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgaWYgKHRhc2suaWQgPT09IGlkKSB7XG4gICAgICAvLyBSZW1vdmUgdGFza3MgZnJvbSB0YWdzXG4gICAgICBzdGF0ZS50YWdzW3RhZ10uc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBtb2RlbENvbnRyb2xsZXIgPSAoKCkgPT4gKHtcbiAgc29ydFRhc2tzQnlEYXRlLFxuICByZW1vdmVDb21wbGV0ZWQsXG4gIHRvZ2dsZUltcG9ydGFudCxcbiAgc2VhcmNoVGFzayxcbiAgcGFnZUN0cmwsXG4gIGRlbGV0ZVRhc2ssXG59KSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kZWxDb250cm9sbGVyO1xuIiwiaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmltcG9ydCB7IGRldGFpbEhUTUwsIHRhc2tIVE1MLCB0YWdIVE1MIH0gZnJvbSAnLi9odG1sJztcblxuY29uc3QgRE9NID0ge1xuICBhZGRUYXNrQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fYWRkJyksXG4gIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyksXG4gIHBvcHVwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXBvcHVwJyksXG4gIHBvcHVwQ2xvc2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wb3B1cCcpLFxuICB0YXNrVGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLFxuICB0YXNrRGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLFxuICB0YXNrRHVlRGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlYWRsaW5lJyksXG4gIHRhc2tUYWc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWcnKSxcbiAgdGFza1N1Ym1pdEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idG4nKSxcbiAgdGFza0xpc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X19jb250ZW50JyksXG4gIGRldGFpbFNlY3Rpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWwnKSxcbiAgdGFnTGlzdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3RhZycpLFxuICB0YXNrTGlzdEhlYWRlclRleHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X19oZWFkZXItLXRleHQnKSxcbiAgc2lkZWJhck92ZXJ2aWV3OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fb3ZlcnZpZXcnKSxcbiAgc2lkZWJhckRvbmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19kb25lJyksXG4gIHNpZGViYXJJbXBvcnRhbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19pbXBvcnRhbnQnKSxcbiAgc2lkZWJhclRvZGF5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdG9kYXknKSxcbiAgc2VhcmNoSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0JyksXG4gIHBhZ2VOZXh0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fbmV4dCcpLFxuICBwYWdlUHJldjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX3ByZXYnKSxcbiAgZGVsZXRlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyksXG59O1xuXG5jb25zdCBwb3B1cE9wZW4gPSAoKSA9PiB7XG4gIERPTS5mb3JtLnN0eWxlLm9wYWNpdHkgPSAxO1xuICBET00uZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gIERPTS5wb3B1cC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgRE9NLnBvcHVwLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG59O1xuXG5jb25zdCBwb3B1cENsb3NlID0gKCkgPT4ge1xuICBET00uZm9ybS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgRE9NLmZvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gIERPTS5wb3B1cC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgRE9NLnBvcHVwLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbn07XG5cbi8vRVZFTlQgTElTVEVSUyBUTyBQT1AgVVBcbmNvbnN0IHBvcHVwRXZlbnRzID0gKCkgPT4ge1xuICBET00uYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIHBvcHVwT3BlbigpO1xuICB9KTtcblxuICBET00ucG9wdXBDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIHBvcHVwQ2xvc2UoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjbGVhcklucHV0ID0gKCkgPT4ge1xuICBET00udGFza1RpdGxlLnZhbHVlID0gJyc7XG4gIERPTS50YXNrRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgRE9NLnRhc2tEdWVEYXRlLnZhbHVlID0gJyc7XG4gIERPTS50YXNrVGFnLnZhbHVlID0gJyc7XG59O1xuXG4vLyBHRVQgVVNFUiBJTlBVVFxuY29uc3QgZ2V0VXNlcklucHV0ID0gKHRhc2tDbGFzcywgc3RhdGUpID0+IHtcbiAgY29uc3QgdGFza1RpdGxlID0gRE9NLnRhc2tUaXRsZS52YWx1ZTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gRE9NLnRhc2tEZXNjcmlwdGlvbi52YWx1ZTtcbiAgY29uc3QgdGFza0R1ZURhdGUgPSBuZXcgRGF0ZShET00udGFza0R1ZURhdGUudmFsdWUpO1xuICBjb25zdCB0YXNrVGFnID0gRE9NLnRhc2tUYWcudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgaWQgPSB1dWlkdjQoKTtcbiAgY29uc3QgZm9ybWF0dGVkRHVlRGF0ZSA9IGZvcm1hdCh0YXNrRHVlRGF0ZSwgJ0VFRSwgZG8gTU1NIGB5eScpO1xuXG4gIGlmICh0YXNrVGl0bGUgJiYgZm9ybWF0dGVkRHVlRGF0ZSkge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHtcbiAgICAgIHRhc2tUaXRsZSxcbiAgICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICAgIHRhc2tEdWVEYXRlLFxuICAgICAgdGFza1RhZzogdGFza1RhZyA/IHRhc2tUYWcgOiAnUHJpbWFyeScsXG4gICAgICBpZCxcbiAgICAgIGZvcm1hdHRlZER1ZURhdGUsXG4gICAgfTtcblxuICAgIC8vIENSRUFURSBORVcgVEFTSyBPQkpFQ1QgQU5EIFNUT1JFIElOIFNUQVRFXG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyB0YXNrQ2xhc3ModXNlcklucHV0KTtcbiAgICBzdGF0ZS50YXNrcy5wdXNoKG5ld1Rhc2spO1xuXG4gICAgLy8gQ0xFQVIgVVNFUiBJTlBVVFxuICAgIGNsZWFySW5wdXQoKTtcblxuICAgIC8vIENMT1NFIFBPUFVQXG4gICAgcG9wdXBDbG9zZShET00uZm9ybSwgRE9NLmFkZFBvcHVwKTtcblxuICAgIHJldHVybiBuZXdUYXNrO1xuICB9XG59O1xuXG4vLyBBREQgVEFTS1MgQlkgVEFHU1xuY29uc3QgZ2V0VGFncyA9IChzdGF0ZSwgbmV3VGFzaywgdGFza1RhZykgPT4ge1xuICBpZiAoc3RhdGUudGFnc1t0YXNrVGFnXSkge1xuICAgIHN0YXRlLnRhZ3NbdGFza1RhZ10ucHVzaChuZXdUYXNrKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpZCA9IHV1aWR2NCgpO1xuXG4gICAgc3RhdGUudGFnc1t0YXNrVGFnXSA9IFtdO1xuICAgIHN0YXRlLnRhZ3NbdGFza1RhZ10ucHVzaChpZCk7XG4gICAgc3RhdGUudGFnc1t0YXNrVGFnXS5wdXNoKG5ld1Rhc2spO1xuICB9XG59O1xuXG4vLyBSRU5ERVIgVEFTSyBUTyBET01cbmNvbnN0IHJlbmRlclRhc2sgPSAodGFza3MsIHNob3cpID0+IHtcbiAgaWYgKHRhc2tzKSB7XG4gICAgbGV0IG5ld0hUTUw7XG5cbiAgICAvLyBDTEVBUiBUQVNLIExJU1RcbiAgICBET00udGFza0xpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAvLyBSRU5BTUUgVEFTSyBMSVNUIEhFQURFUlxuICAgIERPTS50YXNrTGlzdEhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnQWxsJztcblxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICBuZXdIVE1MID0gdGFza0hUTUw7XG5cbiAgICAgIGlmIChzaG93KSB7XG4gICAgICAgIC8vIEFERCBDTEFTUyBUTyBTSE9XIERPTkUgSUNPTlxuICAgICAgICBuZXdIVE1MID0gbmV3SFRNTC5yZXBsYWNlKCclJVNIT1clJScsICdzaG93Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBREQgQ0xBU1MgVE8gSElERSBET05FIElDT05cbiAgICAgICAgbmV3SFRNTCA9IG5ld0hUTUwucmVwbGFjZSgnJSVTSE9XJSUnLCAnaGlkZScpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFzay5pbXBvcnRhbnQgPT09ICd5ZXMnKSB7XG4gICAgICAgIG5ld0hUTUwgPSBuZXdIVE1MLnJlcGxhY2UoJyUlU1RBUklDT04lJScsICdyZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0hUTUwgPSBuZXdIVE1MLnJlcGxhY2UoJyUlU1RBUklDT04lJScsICdibGFjaycpO1xuICAgICAgfVxuXG4gICAgICAvLyBSRVBMQUNFIFBMQUNFSE9MREVSIFdJVEggQUNUVUFMIERBVEFcbiAgICAgIG5ld0hUTUwgPSBuZXdIVE1MLnJlcGxhY2UoJyUlVElUTEUlJScsIHRhc2sudGFza1RpdGxlKTtcbiAgICAgIG5ld0hUTUwgPSBuZXdIVE1MLnJlcGxhY2UoJyUlRFVFREFURSUlJywgdGFzay5mb3JtYXR0ZWREdWVEYXRlKTtcbiAgICAgIG5ld0hUTUwgPSBuZXdIVE1MLnJlcGxhY2UoJyUlSUQlJScsIHRhc2suaWQpO1xuICAgICAgbmV3SFRNTCA9IG5ld0hUTUwucmVwbGFjZSgnJSVUQUclJScsIHRhc2sudGFza1RhZyk7XG5cbiAgICAgIC8vIFVQREFURSBUQVNLIExJU1RcbiAgICAgIERPTS50YXNrTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG5ld0hUTUwpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vLyBSRU5ERVIgVEFTSyBERVRBSUxTXG5jb25zdCByZW5kZXJUYXNrRGV0YWlscyA9IChzdGF0ZSwgaWQpID0+IHtcbiAgbGV0IG5ld0hUTUwgPSBkZXRhaWxIVE1MO1xuXG4gIC8vIENMRUFSIERFVEFJTCBTRUNUSU9OXG4gIERPTS5kZXRhaWxTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuXG4gIHN0YXRlLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgaWYgKHRhc2suaWQgPT09IGlkKSB7XG4gICAgICAvLyBSRVBMQUNFIFBMQUNFSE9MREVSIFRFWFQgV0lUSCBBQ1RVQUwgREFUQVxuICAgICAgbmV3SFRNTCA9IG5ld0hUTUwucmVwbGFjZSgnJSVERVRBSUxUSVRMRSUlJywgdGFzay50YXNrVGl0bGUpO1xuICAgICAgbmV3SFRNTCA9IG5ld0hUTUwucmVwbGFjZSgnJSVERVRBSUxEVUVEQVRFJSUnLCB0YXNrLmZvcm1hdHRlZER1ZURhdGUpO1xuICAgICAgbmV3SFRNTCA9IG5ld0hUTUwucmVwbGFjZSgnJSVERVRBSUxERVNDUklQVElPTiUlJywgdGFzay50YXNrRGVzY3JpcHRpb24pO1xuXG4gICAgICAvLyBBUFBFTkQgVEFTSyBUTyBERVRBSUwgU0VDVElPTlxuICAgICAgRE9NLmRldGFpbFNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBuZXdIVE1MKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gUkVOREVSIFRBR1MgVE8gRE9NXG5jb25zdCByZW5kZXJUYWdzID0gc3RhdGUgPT4ge1xuICBsZXQgbmV3SFRNTDtcblxuICBjb25zdCB0YWdDb2xvdXIgPSBbJ2JsdWUnLCAneWVsbG93JywgJ2dyZWVuJywgJ3BpbmsnLCAncmVkJywgJ3B1cnBsZSddO1xuXG4gIC8vIENMRUFSIFRBR1NcbiAgRE9NLnRhZ0xpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgZm9yIChjb25zdCB0YWcgaW4gc3RhdGUudGFncykge1xuICAgIG5ld0hUTUwgPSB0YWdIVE1MO1xuICAgIG5ld0hUTUwgPSBuZXdIVE1MLnJlcGxhY2UoXG4gICAgICAnJSVUQUdUSVRMRSUlJyxcbiAgICAgIGAke3RhZ1swXS50b1VwcGVyQ2FzZSgpfSR7dGFnLnNsaWNlKDEpfWBcbiAgICApO1xuICAgIG5ld0hUTUwgPSBuZXdIVE1MLnJlcGxhY2UoJyUlSUQlJScsIHN0YXRlLnRhZ3NbdGFnXVswXSk7XG4gICAgbmV3SFRNTCA9IG5ld0hUTUwucmVwbGFjZSgnJSVUQUdOVU1CRVIlJScsIHN0YXRlLnRhZ3NbdGFnXS5sZW5ndGggLSAxKTtcbiAgICBuZXdIVE1MID0gbmV3SFRNTC5yZXBsYWNlKFxuICAgICAgJyUlVEFHQ09MT1VSJSUnLFxuICAgICAgdGFnQ29sb3VyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpXVxuICAgICk7XG5cbiAgICBET00udGFnTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG5ld0hUTUwpO1xuICB9XG59O1xuXG4vLyBSRU5ERVIgVEFTS1MgQkFTRUQgT04gVEFHXG5jb25zdCByZW5kZXJUYXNrQnlUYWdzID0gKHRhZ3MsIGlkLCBzb3J0VGFza3MpID0+IHtcbiAgbGV0IG5ld0hUTUw7XG4gIERPTS50YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcblxuICBmb3IgKGNvbnN0IHRhZyBpbiB0YWdzKSB7XG4gICAgaWYgKGlkID09PSB0YWdzW3RhZ11bMF0pIHtcbiAgICAgIC8vIFNFVCBUQVNLIExJU1QgSEVBREVSIFRFWFQgVE8gVEFHTkFNRVxuICAgICAgRE9NLnRhc2tMaXN0SGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IGAke1xuICAgICAgICB0YWdbMF0udG9VcHBlckNhc2UoKSArIHRhZy5zbGljZSgxKVxuICAgICAgfWA7XG5cbiAgICAgIC8vIFNPUlQgVEFTS1MgQlkgRFVFIERBVEVcbiAgICAgIHNvcnRUYXNrcyh0YWdzW3RhZ10pO1xuXG4gICAgICB0YWdzW3RhZ10uZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIG5ld0hUTUwgPSB0YXNrSFRNTDtcblxuICAgICAgICAgIC8vIFJFUExBQ0UgUExBQ0VIT0xERVIgV0lUSCBBQ1RVQUwgREFUQVxuICAgICAgICAgIG5ld0hUTUwgPSBuZXdIVE1MLnJlcGxhY2UoJyUlU0hPVyUlJywgJ2hpZGUnKTtcbiAgICAgICAgICBuZXdIVE1MID0gbmV3SFRNTC5yZXBsYWNlKCclJVRJVExFJSUnLCB0YXNrLnRhc2tUaXRsZSk7XG4gICAgICAgICAgbmV3SFRNTCA9IG5ld0hUTUwucmVwbGFjZSgnJSVEVUVEQVRFJSUnLCB0YXNrLmZvcm1hdHRlZER1ZURhdGUpO1xuICAgICAgICAgIG5ld0hUTUwgPSBuZXdIVE1MLnJlcGxhY2UoJyUlSUQlJScsIHRhc2suaWQpO1xuICAgICAgICAgIG5ld0hUTUwgPSBuZXdIVE1MLnJlcGxhY2UoJyUlVEFHJSUnLCB0YXNrLnRhc2tUYWcpO1xuXG4gICAgICAgICAgLy8gVVBEQVRFIFRBU0sgTElTVFxuICAgICAgICAgIERPTS50YXNrTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG5ld0hUTUwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNoYW5nZUhlYWRlciA9ICh0aXRsZSwgdGFza3MsIHN0YXRlKSA9PiB7XG4gIGlmICh0YXNrcyAmJiB0YXNrcykge1xuICAgIGlmICh0YXNrcyA9PT0gc3RhdGUudGFza3MpIHtcbiAgICAgIHRpdGxlID0gJ0FsbCc7XG4gICAgfSBlbHNlIGlmICh0YXNrcyA9PT0gc3RhdGUuaW1wb3J0YW50KSB7XG4gICAgICB0aXRsZSA9ICdJbXBvcnRhbnQnO1xuICAgIH0gZWxzZSBpZiAodGFza3MgPT09IHN0YXRlLmNvbXBsZXRlZCkge1xuICAgICAgdGl0bGUgPSAnQ29tcGxldGVkJztcbiAgICB9XG4gIH1cblxuICBET00udGFza0xpc3RIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gdGl0bGU7XG59O1xuXG5jb25zdCByZW5kZXJUb2RheSA9IHN0YXRlID0+IHtcbiAgbGV0IG5ld0hUTUw7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKTtcblxuICAvLyBDTEVBUiBUQVNLIExJU1RcbiAgRE9NLnRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xuXG4gIC8vIFJFTkFNRSBUQVNLIExJU1QgSEVBREVSXG4gIERPTS50YXNrTGlzdEhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuXG4gIHN0YXRlLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLnRhc2tEdWVEYXRlKS50b0RhdGVTdHJpbmcoKTtcbiAgICBpZiAodGFza0RhdGUgPT09IHRvZGF5KSB7XG4gICAgICBuZXdIVE1MID0gdGFza0hUTUw7XG5cbiAgICAgIGlmICh0YXNrLmltcG9ydGFudCA9PT0gJ3llcycpIHtcbiAgICAgICAgbmV3SFRNTCA9IG5ld0hUTUwucmVwbGFjZSgnJSVTVEFSSUNPTiUlJywgJ3JlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3SFRNTCA9IG5ld0hUTUwucmVwbGFjZSgnJSVTVEFSSUNPTiUlJywgJ2JsYWNrJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJFUExBQ0UgUExBQ0VIT0xERVIgV0lUSCBBQ1RVQUwgREFUQVxuICAgICAgbmV3SFRNTCA9IG5ld0hUTUwucmVwbGFjZSgnJSVTSE9XJSUnLCAnaGlkZScpO1xuICAgICAgbmV3SFRNTCA9IG5ld0hUTUwucmVwbGFjZSgnJSVUSVRMRSUlJywgdGFzay50YXNrVGl0bGUpO1xuICAgICAgbmV3SFRNTCA9IG5ld0hUTUwucmVwbGFjZSgnJSVEVUVEQVRFJSUnLCB0YXNrLmZvcm1hdHRlZER1ZURhdGUpO1xuICAgICAgbmV3SFRNTCA9IG5ld0hUTUwucmVwbGFjZSgnJSVJRCUlJywgdGFzay5pZCk7XG4gICAgICBuZXdIVE1MID0gbmV3SFRNTC5yZXBsYWNlKCclJVRBRyUlJywgdGFzay50YXNrVGFnKTtcblxuICAgICAgLy8gVVBEQVRFIFRBU0sgTElTVFxuICAgICAgRE9NLnRhc2tMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbmV3SFRNTCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHNob3dQYWdlTnVtYmVycyA9ICh0YXNrcywgcGFnZU51bWJlcikgPT4ge1xuICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbCh0YXNrcy5sZW5ndGggLyA2KTtcblxuICBpZiAocGFnZU51bWJlciA9PT0gMSAmJiBwYWdlcyA+IDEpIHtcbiAgICBET00ucGFnZU5leHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgRE9NLnBhZ2VQcmV2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0gZWxzZSBpZiAocGFnZU51bWJlciA8IHBhZ2VzKSB7XG4gICAgRE9NLnBhZ2VQcmV2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIERPTS5wYWdlTmV4dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSBlbHNlIGlmIChwYWdlcyA9PT0gcGFnZU51bWJlciAmJiBwYWdlcyA+IDEpIHtcbiAgICBET00ucGFnZVByZXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgRE9NLnBhZ2VOZXh0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0gZWxzZSB7XG4gICAgRE9NLnBhZ2VQcmV2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgRE9NLnBhZ2VOZXh0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn07XG5cbmNvbnN0IHZpZXdDb250cm9sbGVyID0gKCgpID0+ICh7XG4gIERPTSxcbiAgcG9wdXBPcGVuLFxuICBwb3B1cENsb3NlLFxuICBwb3B1cEV2ZW50cyxcbiAgZ2V0VXNlcklucHV0LFxuICByZW5kZXJUYXNrLFxuICByZW5kZXJUYXNrRGV0YWlscyxcbiAgZ2V0VGFncyxcbiAgcmVuZGVyVGFncyxcbiAgcmVuZGVyVGFza0J5VGFncyxcbiAgY2hhbmdlSGVhZGVyLFxuICByZW5kZXJUb2RheSxcbiAgc2hvd1BhZ2VOdW1iZXJzLFxufSkpKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXdDb250cm9sbGVyO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsIHJnYmEoMzAsIDM5LCA0NiwgMC44KSwgIzFlMjcyZSk7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gMWZyO1xcbiAgbWF4LXdpZHRoOiA5NXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDU1cmVtO1xcbiAgbWFyZ2luOiA4cmVtIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMnJlbSA2cmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2Mi41ZW0pIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMiUgNzglOyB9IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDYwJTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMXJlbTsgfVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAyLy0xO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLXJvdzogMS8tMTtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi53YXJuaW5nIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLndhcm5pbmcge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgIHBhZGRpbmc6IDEwcmVtO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9IH1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDsgfVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2Mi41ZW0pIHtcXG4gICAgaHRtbCB7XFxuICAgICAgZm9udC1zaXplOiA1Ni4yNSU7IH0gfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XFxuICAgIGh0bWwge1xcbiAgICAgIGZvbnQtc2l6ZTogNTAlOyB9IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTBlbSkge1xcbiAgICBodG1sIHtcXG4gICAgICBmb250LXNpemU6IDQzLjc1JTsgfSB9XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCIgTGF0byBcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGNvbG9yOiAjMjAyMTI0OyB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGxkaW8tbjZ4MTdwZ294NCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBsZGlvLW42eDE3cGdveDQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbi5sZGlvLW42eDE3cGdveDQgPiBkaXYgPiBkaXYge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGxkaW8tbjZ4MTdwZ294NCAzLjAzMDMwMzAzMDMwMzAzMDNzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBsZGlvLW42eDE3cGdveDQgMy4wMzAzMDMwMzAzMDMwMzAzcyBsaW5lYXIgaW5maW5pdGU7XFxuICBvcGFjaXR5OiAwLjg7IH1cXG5cXG4ubGRpby1uNngxN3Bnb3g0ID4gZGl2ID4gZGl2ID4gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDMwcHg7XFxuICB0b3A6IDMwcHg7XFxuICB3aWR0aDogNzBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDcwcHggMCAwIDA7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDBweCAxMDBweDsgfVxcblxcbi5sZGlvLW42eDE3cGdveDQgPiBkaXYgZGl2Om50aC1jaGlsZCgxKSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC43NTc1NzU3NTc1NzU3NTc2cztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjc1NzU3NTc1NzU3NTc1NzZzOyB9XFxuXFxuLmxkaW8tbjZ4MTdwZ294NCA+IGRpdiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2IHtcXG4gIGJhY2tncm91bmQ6ICNlMTViNjQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcblxcbi5sZGlvLW42eDE3cGdveDQgPiBkaXYgZGl2Om50aC1jaGlsZCgyKSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS4wMTAxMDEwMTAxMDEwMTAycztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjAxMDEwMTAxMDEwMTAxMDJzOyB9XFxuXFxuLmxkaW8tbjZ4MTdwZ294NCA+IGRpdiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2IHtcXG4gIGJhY2tncm91bmQ6ICNmNDdlNjA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcblxcbi5sZGlvLW42eDE3cGdveDQgPiBkaXYgZGl2Om50aC1jaGlsZCgzKSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41MTUxNTE1MTUxNTE1MTUxcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjUxNTE1MTUxNTE1MTUxNTFzOyB9XFxuXFxuLmxkaW8tbjZ4MTdwZ294NCA+IGRpdiBkaXY6bnRoLWNoaWxkKDMpID4gZGl2IHtcXG4gIGJhY2tncm91bmQ6ICNmOGIyNmE7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcblxcbi5sZGlvLW42eDE3cGdveDQgPiBkaXYgZGl2Om50aC1jaGlsZCg0KSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMy4wMzAzMDMwMzAzMDMwMzAzcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzLjAzMDMwMzAzMDMwMzAzMDNzOyB9XFxuXFxuLmxkaW8tbjZ4MTdwZ294NCA+IGRpdiBkaXY6bnRoLWNoaWxkKDQpID4gZGl2IHtcXG4gIGJhY2tncm91bmQ6ICNhYmJkODE7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcblxcbi8qXFxuLmxvYWRpbmdpby1zcGlubmVyLXdlZGdlcy1jcXloampxOGIyNCB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxufVxcbiovXFxuLmxkaW8tbjZ4MTdwZ294NCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSgxKTtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAvKiBzZWUgbm90ZSBhYm92ZSAqLyB9XFxuXFxuLmxkaW8tbjZ4MTdwZ294NCBkaXYge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cXG5cXG4ubG9hZGluZ2lvLXNwaW5uZXItd2VkZ2VzLWNxeWhqanE4YjI0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICB6LWluZGV4OiAxMDAwMDAwMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjMWUyNzJlO1xcbiAgbWFyZ2luOiAwIGF1dG87IH1cXG5cXG4uaWNvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgZmlsbDogIzIwMjEyNDsgfVxcblxcbmlucHV0LFxcbmlucHV0OmFjdGl2ZSxcXG5pbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lOyB9XFxuXFxuLmNvdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi5jdXJzb3Ige1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiOWNmYzsgfVxcblxcbi55ZWxsb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhYjA0YzsgfVxcblxcbi5ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUzYjU3OyB9XFxuXFxuLnBpbmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjcyZTsgfVxcblxcbi5yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViNGQ0YjsgfVxcblxcbi5wdXJwbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlMmVkZDsgfVxcblxcbi5zaG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuXFxuLmhpZGUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAwLjYpOyB9XFxuXFxuLnBvcHVwIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAwLjMpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7IH1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4cmVtIDE4cmVtO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAxOTYsIDIwNiwgMC4xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjRkNGI7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmhlYWRlciAuaWNvbiB7XFxuICAgIGZpbGw6ICNmZmY7IH1cXG4gIC5oZWFkZXJfX3NlYXJjaCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgLmhlYWRlcl9fc2VhcmNoIGlucHV0IHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDRyZW07XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgICAgLmhlYWRlcl9fc2VhcmNoIGlucHV0OmFjdGl2ZSwgLmhlYWRlcl9fc2VhcmNoIGlucHV0OmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLmhlYWRlcl9fc2VhcmNoIC5zZWFyY2gtaWNvbiB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgICAgaGVpZ2h0OiAxLjVyZW07IH1cXG4gIC5oZWFkZXJfX25vdGlmIC5ub3RpZi1pY29uIHtcXG4gICAgZmlsbDogI2Q0ZDRkNDsgfVxcbiAgLmhlYWRlcl9fdXNlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAuaGVhZGVyX191c2VyLS1pbWcge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgICB3aWR0aDogMnJlbTtcXG4gICAgICBoZWlnaHQ6IDJyZW07IH1cXG4gICAgICAuaGVhZGVyX191c2VyLS1pbWcgLmltYWdlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtOyB9XFxuICAgIC5oZWFkZXJfX3VzZXItLW5hbWUge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG4gICAgLmhlYWRlcl9fdXNlci0tbWVudSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07IH1cXG5cXG4uc2lkZWJhciB7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBib3JkZXItcmlnaHQ6IDEuNXB4ICNiZWJlYmUgc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgLXdlYmtpdC1taW4tY29udGVudCAxZnIgLXdlYmtpdC1taW4tY29udGVudDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcXG4gIGdyaWQtcm93LWdhcDogNHJlbTsgfVxcbiAgLnNpZGViYXJfX2xvZ28ge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzFlMjcyZSwgI2ViNGQ0Yik7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDsgfVxcbiAgLnNpZGViYXJfX25hdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIC13ZWJraXQtbWluLWNvbnRlbnQpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBtaW4tY29udGVudCk7XFxuICAgIGdyaWQtcm93LWdhcDogMnJlbTsgfVxcbiAgICAuc2lkZWJhcl9fbmF2IC5pY29uIHtcXG4gICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICB3aWR0aDogMS41cmVtOyB9XFxuICAgIC5zaWRlYmFyX19uYXYgPiBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgOTAlO1xcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogMS41cmVtO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cXG4gIC5zaWRlYmFyX19vdmVydmlldyAuaWNvbiB7XFxuICAgIGZpbGw6ICMxYjljZmM7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07IH1cXG4gIC5zaWRlYmFyX190b2RheSAuaWNvbiB7XFxuICAgIGZpbGw6ICM2YWIwNGM7IH1cXG4gIC5zaWRlYmFyX19pbXBvcnRhbnQgLmljb24ge1xcbiAgICBmaWxsOiAjZjUzYjU3OyB9XFxuICAuc2lkZWJhcl9fc2NoZWR1bGVkIC5pY29uIHtcXG4gICAgZmlsbDogIzFlMjcyZTsgfVxcbiAgLnNpZGViYXJfX2RvbmUgLmljb24ge1xcbiAgICBmaWxsOiAjYmUyZWRkOyB9XFxuICAuc2lkZWJhcl9fdGFnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAuc2lkZWJhcl9fdGFnLS1pdGVtIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLXdlYmtpdC1taW4tY29udGVudCAxZnIgLXdlYmtpdC1taW4tY29udGVudDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAuc2lkZWJhcl9fdGFnLS1pdGVtIC50YWctY29sb3Ige1xcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07IH1cXG4gICAgICAuc2lkZWJhcl9fdGFnLS1pdGVtIC50YWctY291bnQge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICB6LWluZGV4OiAxMDA7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07IH1cXG4gICAgICAgIC5zaWRlYmFyX190YWctLWl0ZW0gLnRhZy1jb3VudDo6YWZ0ZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlLCAtNSUpO1xcbiAgICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDM5LCA0NiwgMC41KTsgfVxcbiAgLnNpZGViYXJfX2FkZCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtNnJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjRkNGI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSg1MSwgNTEsIDUxLCAwLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnNpZGViYXJfX2FkZC1idG4ge1xcbiAgICAgIGZpbGw6ICNmZmY7IH1cXG5cXG4uYmx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5Y2ZjOyB9XFxuXFxuLnllbGxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFiMDRjOyB9XFxuXFxuLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUzYjU3OyB9XFxuXFxuLmZvcm0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDEwMDAwOyB9XFxuICAuZm9ybV9faW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogcmdiYSgzMCwgMzksIDQ2LCAwLjcpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHdpZHRoOiAyNXJlbTsgfVxcbiAgICAuZm9ybV9faW5wdXQ6aG92ZXIge1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSg1MSwgNTEsIDUxLCAwLjEpOyB9XFxuICAuZm9ybV9fbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgY29sb3I6ICMxZTI3MmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gIC5mb3JtX19kZXNjIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lOyB9XFxuICAgIC5mb3JtX19kZXNjOmFjdGl2ZSwgLmZvcm1fX2Rlc2M6Zm9jdXMge1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgYm9yZGVyOiBub25lOyB9XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDUxLCA1MSwgNTEsIDAuMSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ViNGQ0YiwgI2E3MzUzMyk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzOyB9XFxuICAuc3VibWl0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyMzUsIDc3LCA3NSwgMC43KSwgcmdiYSgxNjcsIDUzLCA1MSwgMC44KSk7IH1cXG4gICAgLnN1Ym1pdC1idG46aG92ZXI6YWN0aXZlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTsgfVxcblxcbi5jbG9zZS1wb3B1cCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0ycmVtO1xcbiAgcmlnaHQ6IC0ycmVtO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHJlZDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5saXN0IHtcXG4gIGJvcmRlci1yaWdodDogMS41cHggI2JlYmViZSBzb2xpZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmxpc3RfX2hlYWRlciB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxYjljZmM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgLmxpc3RfX2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDkwJTsgfVxcbiAgLmxpc3RfX2l0ZW0ge1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMS41cHggcmdiYSgxOTAsIDE5MCwgMTkwLCAwLjMpIHNvbGlkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gMWZyIDFyZW0gMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgIC5saXN0X19pdGVtOmhvdmVyIHtcXG4gICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoNTEsIDUxLCA1MSwgMC4xKTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmxpc3RfX2l0ZW0gLmljb24ge1xcbiAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICB3aWR0aDogMXJlbTsgfVxcbiAgICAubGlzdF9faXRlbSAuc3Rhci1pY29uIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgei1pbmRleDogMTAwMDA7IH1cXG4gICAgLmxpc3RfX2l0ZW0gLmRlbGV0ZSB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHotaW5kZXg6IDEwMDAwO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICAgIGNvbG9yOiAjMjAyMTI0OyB9XFxuICAgIC5saXN0X19pdGVtLS1kZXNjcmlwdGlvbiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtOyB9XFxuICAgICAgLmxpc3RfX2l0ZW0tLWRlc2NyaXB0aW9uIC5ib3R0b20ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtOyB9XFxuICAgICAgICAubGlzdF9faXRlbS0tZGVzY3JpcHRpb24gLmJvdHRvbSA+IC5pY29uIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07IH1cXG4gICAgICAgIC5saXN0X19pdGVtLS1kZXNjcmlwdGlvbiAuYm90dG9tID4gc3BhbiB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTsgfVxcbiAgICAgICAgLmxpc3RfX2l0ZW0tLWRlc2NyaXB0aW9uIC5ib3R0b20gLnRpbWUtaWNvbiB7XFxuICAgICAgICAgIGZpbGw6ICNmNTNiNTc7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgei1pbmRleDogMTAwMDA7IH1cXG4gICAgICAgIC5saXN0X19pdGVtLS1kZXNjcmlwdGlvbiAuYm90dG9tIC5ub3RpZi1pY29uIHtcXG4gICAgICAgICAgZmlsbDogIzFiOWNmYztcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICB6LWluZGV4OiAxMDAwMDsgfVxcbiAgICAubGlzdF9faXRlbSAuZG9uZV9faWNvbi1kaXYge1xcbiAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICB3aWR0aDogMnJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGJvcmRlcjogMS41cHggcmdiYSgxOTAsIDE5MCwgMTkwLCAwLjMpIHNvbGlkO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgei1pbmRleDogMTAwMDA7IH1cXG4gICAgICAubGlzdF9faXRlbSAuZG9uZV9faWNvbi1kaXYgLmljb24ge1xcbiAgICAgICAgZmlsbDogIzI3YWU2MDtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzOyB9XFxuXFxuI3JlZCB7XFxuICBmaWxsOiAjZWI0ZDRiOyB9XFxuXFxuI2JsYWNrIHtcXG4gIGZpbGw6ICMyMDIxMjQ7IH1cXG5cXG4ucGFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDFyZW07XFxuICByaWdodDogM3JlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAtd2Via2l0LW1pbi1jb250ZW50KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbi1jb250ZW50KTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMnJlbTsgfVxcbiAgLnBhZ2UgPiBhIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogI2ViNGQ0YjsgfVxcbiAgICAucGFnZSA+IGE6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjMDAwOyB9XFxuXFxuLmRldGFpbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0cmVtIDFmcjtcXG4gIGdyaWQtY29sdW1uLWdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07IH1cXG4gIC5kZXRhaWxfX2ljb24ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAuZGV0YWlsX19pY29uIC5pY29uIHtcXG4gICAgICBmaWxsOiAjZmZmO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzOyB9XFxuICAuZGV0YWlsX19oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1MCUpO1xcbiAgICBncmlkLXJvdy1nYXA6IDAuNXJlbTsgfVxcbiAgICAuZGV0YWlsX19oZWFkZXIgLnRvcCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICBmb250LXdlaWdodDogNzAwOyB9XFxuICAgICAgLmRldGFpbF9faGVhZGVyIC50b3AgLmljb24tZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtOyB9XFxuICAgICAgICAuZGV0YWlsX19oZWFkZXIgLnRvcCAuaWNvbi1kaXYgLmljb24ge1xcbiAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICAgICAgd2lkdGg6IDEuNXJlbTsgfVxcbiAgICAuZGV0YWlsX19oZWFkZXIgLmJvdHRvbSB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwcmVtIDIwcmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICBjb2xvcjogI2ViNGQ0YjsgfVxcbiAgICAgIC5kZXRhaWxfX2hlYWRlciAuYm90dG9tID4gZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgICAuZGV0YWlsX19oZWFkZXIgLmJvdHRvbSA+IGRpdiAuaWNvbiB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gICAgICAgICAgd2lkdGg6IDEuMnJlbTtcXG4gICAgICAgICAgZmlsbDogI2ViNGQ0YjsgfVxcbiAgICAgIC5kZXRhaWxfX2hlYWRlciAuYm90dG9tIC5kYXRlIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTEwcmVtOyB9XFxuICAuZGV0YWlsX190ZXh0IHtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtOyB9XFxuICAuZGV0YWlsX19zdGVwIHtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07IH1cXG4gICAgLmRldGFpbF9fc3RlcC0tYWRkIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICAgIGNvbG9yOiAjMWI5Y2ZjO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuZGV0YWlsX19zdGVwLS1pdGVtIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAtd2Via2l0LW1heC1jb250ZW50KTtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtYXgtY29udGVudCk7XFxuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4ubG9naW5fX2Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBwYWRkaW5nOiAxMHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogcmdiYSgzMCwgMzksIDQ2LCAwLjcpOyB9XFxuXFxuLmxvZ2luX19pbWcge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTsgfVxcblxcbi5sb2dpbl9fdGV4dCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtOyB9XFxuXFxuLmxvZ2luX19idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSg1MSwgNTEsIDUxLCAwLjEpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk3ZTY7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzOyB9XFxuICAubG9naW5fX2J0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTY2OTk7IH1cXG4gICAgLmxvZ2luX19idG46aG92ZXI6YWN0aXZlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL19sYXlvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL191dGlscy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL19zaWRlYmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL19saXN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL19kZXRhaWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvX2xvZ2luLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFFRSx5RUFJ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QjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsY0FBYztFQUVkLHNCQUFzQjtFQUN0Qiw0QlJWbUMsRUFBQTs7QVFhckM7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUViLGtCQUFrQjtFQUNsQiwrQ1JIa0M7RVFJbEMsZ0JBQWdCO0VBRWhCLHlCUmxCOEI7RVFtQjlCLFdBQVc7RUFFWCxlQUFlO0VBRWYsb0JBQW9CLEVBQUE7RUFickI7SUFnQkcseUJSekJ3QixFQUFBO0lRUzNCO01BbUJLLDBCQUEwQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgLy8gaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQgdG9wLFxcbiAgICByZ2JhKCRjb2xvci1zZWNvbmRhcnktNCwgMC44KSxcXG4gICAgcmdiYSgkY29sb3Itc2Vjb25kYXJ5LTQsIDEpXFxuICApO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gMWZyO1xcblxcbiAgbWF4LXdpZHRoOiA5NXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDU1cmVtO1xcblxcbiAgbWFyZ2luOiA4cmVtIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3gtc2hhZG93OiAkc2hhZG93O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbGFyZ2UpIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMiUgNzglO1xcbiAgfVxcblxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNjAlO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xcblxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbGFyZ2UpIHtcXG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NSUgNTUlO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMi8tMTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2lkZWJhciB7XFxuICBncmlkLXJvdzogMS8tMTtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLndhcm5pbmcge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBwYWRkaW5nOiAxMHJlbTtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXCIsXCIvL0NPTE9SU1xcbiRjb2xvci1wcmltYXJ5OiByZ2JhKDIzNSwgNzcsIDc1LCAxKTtcXG4kY29sb3Itc2Vjb25kYXJ5LTE6IHJnYmEoMjcsIDE1NiwgMjUyLCAxKTtcXG4kY29sb3Itc2Vjb25kYXJ5LTI6IHJnYmEoMTA2LCAxNzYsIDc2LCAxKTtcXG4kY29sb3Itc2Vjb25kYXJ5LTM6IHJnYmEoMjQ1LCA1OSwgODcsIDEpO1xcbiRjb2xvci1zZWNvbmRhcnktNDogcmdiYSgzMCwgMzksIDQ2LCAxKTtcXG4kY29sb3Itc2Vjb25kYXJ5LTU6IHJnYmEoMTkwLCA0NiwgMjIxLCAxKTtcXG4kY29sb3Itc2Vjb25kYXJ5LTY6IHJnYmEoMzksIDE3NCwgOTYsIDEpO1xcblxcbi8vICRjb2xvci1ncmV5LWxpZ2h0LTE6IHJnYmEoMTgwLCAxOTYsIDIwNiwgMC4yMik7XFxuJGNvbG9yLWdyZXktbGlnaHQtMTogcmdiYSgxODAsIDE5NiwgMjA2LCAwLjEpO1xcbiRjb2xvci1ncmV5LWxpZ2h0LTI6IHJnYmEoOTcsIDExNiwgMTQxLCAxKTtcXG4kY29sb3ItZ3JleS1kYXJrOiByZ2JhKDMyLCAzMywgMzYsIDEpO1xcblxcbiRjb2xvci1ibHVlMjogcmdiYSgwLCAxNTEsIDIzMCwgMSk7XFxuJGNvbG9yLWJsdWUzOiByZ2IoMSwgMTAyLCAxNTMpO1xcblxcbi8vRk9OVFNcXG4kZm9udC1wcmltYXJ5OiAnIExhdG8gJywgc2Fucy1zZXJpZjtcXG5cXG4vL09VVExJTkVTXFxuJG91dGxpbmU6IDEuNXB4IHJnYigxOTAsIDE5MCwgMTkwKSBzb2xpZDtcXG4kb3V0bGluZS1saWdodDogMS41cHggcmdiYSgxOTAsIDE5MCwgMTkwLCAwLjMpIHNvbGlkO1xcbiRvdXRsaW5lLWxpZ2h0LTI6IDFweCByZ2JhKCRjb2xvci1zZWNvbmRhcnktNiwgMSkgc29saWQ7XFxuXFxuJHNoYWRvdzogMCAycmVtIDZyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiRzaGFkb3ctbGlnaHQ6IDAgMC41cmVtIDFyZW0gcmdiYSgjMzMzLCAwLjEpO1xcblxcbi8vUkVTUE9OU0lWRSBCUkVBS1BPSU5UU1xcbiRicC1sYXJnZXN0OiA3NWVtOyAvLyAxMjAwcHhcXG4kYnAtbGFyZ2U6IDYyLjVlbTsgLy8gMTAwMHB4XFxuJGJwLW1lZGl1bTogNTYuMjVlbTsgLy8gOTAwcHg7XFxuJGJwLXNtYWxsOiAzNy41ZW07IC8vIDYwMHB4O1xcblwiLFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG5cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLWxhcmdlKSB7XFxuICAgIGZvbnQtc2l6ZTogNTYuMjUlO1xcbiAgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbWVkaXVtKSB7XFxuICAgIGZvbnQtc2l6ZTogNTAlO1xcbiAgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MGVtKSB7XFxuICAgIGZvbnQtc2l6ZTogNDMuNzUlO1xcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBjb2xvcjogJGNvbG9yLWdyZXktZGFyaztcXG59XFxuXFxuQGtleWZyYW1lcyBsZGlvLW42eDE3cGdveDQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4ubGRpby1uNngxN3Bnb3g0ID4gZGl2ID4gZGl2IHtcXG4gIC8vIHRyYW5zZm9ybS1vcmlnaW46IDEwcHggMTBweDtcXG4gIGFuaW1hdGlvbjogbGRpby1uNngxN3Bnb3g0IDMuMDMwMzAzMDMwMzAzMDMwM3MgbGluZWFyIGluZmluaXRlO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG4ubGRpby1uNngxN3Bnb3g0ID4gZGl2ID4gZGl2ID4gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDMwcHg7XFxuICB0b3A6IDMwcHg7XFxuICB3aWR0aDogNzBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDcwcHggMCAwIDA7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDBweCAxMDBweDtcXG59XFxuLmxkaW8tbjZ4MTdwZ294NCA+IGRpdiBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43NTc1NzU3NTc1NzU3NTc2cztcXG59XFxuLmxkaW8tbjZ4MTdwZ294NCA+IGRpdiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2IHtcXG4gIGJhY2tncm91bmQ6ICNlMTViNjQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuLmxkaW8tbjZ4MTdwZ294NCA+IGRpdiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4wMTAxMDEwMTAxMDEwMTAycztcXG59XFxuLmxkaW8tbjZ4MTdwZ294NCA+IGRpdiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2IHtcXG4gIGJhY2tncm91bmQ6ICNmNDdlNjA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuLmxkaW8tbjZ4MTdwZ294NCA+IGRpdiBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41MTUxNTE1MTUxNTE1MTUxcztcXG59XFxuLmxkaW8tbjZ4MTdwZ294NCA+IGRpdiBkaXY6bnRoLWNoaWxkKDMpID4gZGl2IHtcXG4gIGJhY2tncm91bmQ6ICNmOGIyNmE7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuLmxkaW8tbjZ4MTdwZ294NCA+IGRpdiBkaXY6bnRoLWNoaWxkKDQpIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMy4wMzAzMDMwMzAzMDMwMzAzcztcXG59XFxuLmxkaW8tbjZ4MTdwZ294NCA+IGRpdiBkaXY6bnRoLWNoaWxkKDQpID4gZGl2IHtcXG4gIGJhY2tncm91bmQ6ICNhYmJkODE7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuLypcXG4ubG9hZGluZ2lvLXNwaW5uZXItd2VkZ2VzLWNxeWhqanE4YjI0IHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG59XFxuKi9cXG5cXG4ubGRpby1uNngxN3Bnb3g0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDEpO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwOyAvKiBzZWUgbm90ZSBhYm92ZSAqL1xcbn1cXG5cXG4ubGRpby1uNngxN3Bnb3g0IGRpdiB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLmxvYWRpbmdpby1zcGlubmVyLXdlZGdlcy1jcXloampxOGIyNCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcblxcbiAgLy8gcGFkZGluZzogMCBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcblxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcblxcbiAgei1pbmRleDogMTAwMDAwMDA7XFxuXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogJGNvbG9yLXNlY29uZGFyeS00O1xcblxcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblwiLFwiQGltcG9ydCAndmFyaWFibGVzJztcXG5AaW1wb3J0ICdsYXlvdXQnO1xcbkBpbXBvcnQgJ2Jhc2UnO1xcbkBpbXBvcnQgJ3V0aWxzJztcXG5AaW1wb3J0ICdoZWFkZXInO1xcbkBpbXBvcnQgJ3NpZGViYXInO1xcbkBpbXBvcnQgJ2xpc3QnO1xcbkBpbXBvcnQgJ2RldGFpbCc7XFxuQGltcG9ydCAnbG9naW4nO1xcblwiLFwiLmljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG5cXG4gIGZpbGw6ICRjb2xvci1ncmV5LWRhcms7XFxufVxcblxcbmlucHV0LFxcbmlucHV0OmFjdGl2ZSxcXG5pbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY292ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDEwMDA7XFxuXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY3Vyc29yIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeS0xO1xcbn1cXG5cXG4ueWVsbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnktMjtcXG59XFxuLmdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnktMztcXG59XFxuXFxuLnBpbmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeS00O1xcbn1cXG4ucmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbn1cXG4ucHVycGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnktNTtcXG59XFxuXFxuLnNob3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5oaWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSgjMzMzLCAwLjYpO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDAwO1xcblxcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMzMzMsIDAuMyk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG59XFxuXCIsXCIuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4cmVtIDE4cmVtO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0LTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gIGNvbG9yOiAjZmZmO1xcblxcbiAgLmljb24ge1xcbiAgICBmaWxsOiAjZmZmO1xcbiAgfVxcblxcbiAgJl9fc2VhcmNoIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgaW5wdXQge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogNHJlbTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuXFxuICAgICAgJjphY3RpdmUsXFxuICAgICAgJjpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuc2VhcmNoLWljb24ge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG5cXG4gICAgICB3aWR0aDogMS41cmVtO1xcbiAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICAmX19ub3RpZiB7XFxuICAgIC5ub3RpZi1pY29uIHtcXG4gICAgICBmaWxsOiByZ2IoMjEyLCAyMTIsIDIxMik7XFxuICAgIH1cXG4gIH1cXG5cXG4gICZfX3VzZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICYtLWltZyB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICAgIHdpZHRoOiAycmVtO1xcbiAgICAgIGhlaWdodDogMnJlbTtcXG5cXG4gICAgICAuaW1hZ2Uge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMnJlbTtcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLS1uYW1lIHtcXG4gICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB9XFxuXFxuICAgICYtLW1lbnUge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLnNpZGViYXIge1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYm9yZGVyLXJpZ2h0OiAkb3V0bGluZTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSBtaW4tY29udGVudCAxZnIgbWluLWNvbnRlbnQ7XFxuICBncmlkLXJvdy1nYXA6IDRyZW07XFxuXFxuICAmX19sb2dvIHtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byByaWdodCBib3R0b20sXFxuICAgICAgcmdiYSgkY29sb3Itc2Vjb25kYXJ5LTQsIDEpLFxcbiAgICAgIHJnYmEoJGNvbG9yLXByaW1hcnksIDEpXFxuICAgICk7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIH1cXG5cXG4gICZfX25hdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIG1pbi1jb250ZW50KTtcXG4gICAgZ3JpZC1yb3ctZ2FwOiAycmVtO1xcblxcbiAgICAuaWNvbiB7XFxuICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgfVxcblxcbiAgICAmID4gZGl2IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIDkwJTtcXG4gICAgICBncmlkLWNvbHVtbi1nYXA6IDEuNXJlbTtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICB9XFxuICB9XFxuICAmX19vdmVydmlldyB7XFxuICAgIC5pY29uIHtcXG4gICAgICBmaWxsOiAkY29sb3Itc2Vjb25kYXJ5LTE7XFxuICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgIHdpZHRoOiAycmVtO1xcbiAgICB9XFxuICB9XFxuICAmX190b2RheSB7XFxuICAgIC5pY29uIHtcXG4gICAgICBmaWxsOiAkY29sb3Itc2Vjb25kYXJ5LTI7XFxuICAgIH1cXG4gIH1cXG4gICZfX2ltcG9ydGFudCB7XFxuICAgIC5pY29uIHtcXG4gICAgICBmaWxsOiAkY29sb3Itc2Vjb25kYXJ5LTM7XFxuICAgIH1cXG4gIH1cXG4gICZfX3NjaGVkdWxlZCB7XFxuICAgIC5pY29uIHtcXG4gICAgICBmaWxsOiAkY29sb3Itc2Vjb25kYXJ5LTQ7XFxuICAgIH1cXG4gIH1cXG4gICZfX2RvbmUge1xcbiAgICAuaWNvbiB7XFxuICAgICAgZmlsbDogJGNvbG9yLXNlY29uZGFyeS01O1xcbiAgICB9XFxuICB9XFxuXFxuICAmX190YWcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAmLS1pdGVtIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyIG1pbi1jb250ZW50O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAudGFnIHtcXG4gICAgICAgICYtY29sb3Ige1xcbiAgICAgICAgICBoZWlnaHQ6IDFyZW07XFxuICAgICAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYtY291bnQge1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlLCAtNSUpO1xcblxcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xcblxcbiAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG5cXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1zZWNvbmRhcnktNCwgMC41KTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgJl9fYWRkIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC02cmVtO1xcblxcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuXFxuICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctbGlnaHQ7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgJi1idG4ge1xcbiAgICAgIGZpbGw6ICNmZmY7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeS0xO1xcbn1cXG5cXG4ueWVsbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnktMjtcXG59XFxuLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5LTM7XFxufVxcblxcbi5mb3JtIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAxMDAwMDtcXG5cXG4gICZfX2lucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgY29sb3I6IHJnYmEoJGNvbG9yLXNlY29uZGFyeS00LCAwLjcpO1xcblxcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHdpZHRoOiAyNXJlbTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1saWdodDtcXG4gICAgfVxcblxcbiAgICAvLyAmOmludmFsaWQge1xcbiAgICAvLyAgIG91dGxpbmU6IDAuMXB4IHNvbGlkIHJlZDtcXG4gICAgLy8gfVxcbiAgfVxcbiAgJl9fbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgY29sb3I6ICRjb2xvci1zZWNvbmRhcnktNDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIH1cXG5cXG4gICZfX2Rlc2Mge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxuICAgICY6YWN0aXZlLFxcbiAgICAmOmZvY3VzIHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBib3gtc2hhZG93OiAkc2hhZG93LWxpZ2h0O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjM1LCA3NywgNzUsIDEpLCByZ2IoMTY3LCA1MywgNTEpKTtcXG4gIGNvbG9yOiAjZmZmO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHRvIHJpZ2h0LFxcbiAgICAgIHJnYmEoMjM1LCA3NywgNzUsIDAuNyksXFxuICAgICAgcmdiYSgxNjcsIDUzLCA1MSwgMC44KVxcbiAgICApO1xcblxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmNsb3NlLXBvcHVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTJyZW07XFxuICByaWdodDogLTJyZW07XFxuXFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLFwiLmxpc3Qge1xcbiAgYm9yZGVyLXJpZ2h0OiAkb3V0bGluZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICZfX2hlYWRlciB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjb2xvci1zZWNvbmRhcnktMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbiAgJl9fY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGhlaWdodDogOTAlO1xcbiAgfVxcbiAgJl9faXRlbSB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAkb3V0bGluZS1saWdodDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIDFmciAxcmVtIDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktbGlnaHQtMTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1saWdodDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmljb24ge1xcbiAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICB3aWR0aDogMXJlbTtcXG4gICAgfVxcblxcbiAgICAuc3Rhci1pY29uIHtcXG4gICAgICAvLyAgIGZpbGw6ICRjb2xvci1wcmltYXJ5O1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB6LWluZGV4OiAxMDAwMDtcXG4gICAgfVxcblxcbiAgICAuZGVsZXRlIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgei1pbmRleDogMTAwMDA7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuXFxuICAgICAgY29sb3I6ICRjb2xvci1ncmV5LWRhcms7XFxuICAgIH1cXG5cXG4gICAgJi0tZGVzY3JpcHRpb24ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG5cXG4gICAgICAuYm90dG9tIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG5cXG4gICAgICAgICYgPiAuaWNvbiB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiA+IHNwYW4ge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGltZS1pY29uIHtcXG4gICAgICAgICAgZmlsbDogJGNvbG9yLXNlY29uZGFyeS0zO1xcblxcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm5vdGlmLWljb24ge1xcbiAgICAgICAgICBmaWxsOiAkY29sb3Itc2Vjb25kYXJ5LTE7XFxuXFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgei1pbmRleDogMTAwMDA7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5kb25lX19pY29uLWRpdiB7XFxuICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgIHdpZHRoOiAycmVtO1xcblxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgYm9yZGVyOiAkb3V0bGluZS1saWdodDtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHotaW5kZXg6IDEwMDAwO1xcblxcbiAgICAgIC5pY29uIHtcXG4gICAgICAgIGZpbGw6ICRjb2xvci1zZWNvbmRhcnktNjtcXG4gICAgICAgIC8vIG9wYWNpdHk6IDA7XFxuICAgICAgICAvLyB2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuI3JlZCB7XFxuICBmaWxsOiAkY29sb3ItcHJpbWFyeTtcXG59XFxuXFxuI2JsYWNrIHtcXG4gIGZpbGw6ICRjb2xvci1ncmV5LWRhcms7XFxufVxcblxcbi5wYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMXJlbTtcXG4gIHJpZ2h0OiAzcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbi1jb250ZW50KTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMnJlbTtcXG5cXG4gICYgPiBhIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjMDAwO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLmRldGFpbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0cmVtIDFmcjtcXG4gIGdyaWQtY29sdW1uLWdhcDogMXJlbTtcXG5cXG4gIHBhZGRpbmc6IDFyZW07XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxuXFxuICAmX19pY29uIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgLy8gYm9yZGVyOiAkb3V0bGluZS1saWdodDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnktNjtcXG5cXG4gICAgLmljb24ge1xcbiAgICAgIGZpbGw6ICNmZmY7XFxuICAgICAgLy8gb3BhY2l0eTogMTtcXG4gICAgICAvLyB2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAgIH1cXG4gIH1cXG4gICZfX2NvbnRlbnQge1xcbiAgfVxcbiAgJl9faGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNTAlKTtcXG4gICAgZ3JpZC1yb3ctZ2FwOiAwLjVyZW07XFxuXFxuICAgIC50b3Age1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgICAuaWNvbi1kaXYge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XFxuXFxuICAgICAgICAuaWNvbiB7XFxuICAgICAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICAgICAgICB3aWR0aDogMS41cmVtO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuYm90dG9tIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTByZW0gMjByZW07XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG5cXG4gICAgICAmID4gZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgLmljb24ge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgICAgICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgICAgICAgIHdpZHRoOiAxLjJyZW07XFxuICAgICAgICAgIGZpbGw6ICRjb2xvci1wcmltYXJ5O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAuZGF0ZSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xMHJlbTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG4gICZfX3RleHQge1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICAmX19zdGVwIHtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuXFxuICAgICYtLWFkZCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG5cXG4gICAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeS0xO1xcblxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAmLS1pdGVtIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtYXgtY29udGVudCk7XFxuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIubG9naW4ge1xcbiAgJl9fZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAxMDAwMDtcXG4gICAgcGFkZGluZzogMTByZW07XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGNvbG9yOiByZ2JhKCRjb2xvci1zZWNvbmRhcnktNCwgMC43KTtcXG4gIH1cXG5cXG4gICZfX2ltZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB9XFxuICAmX190ZXh0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIH1cXG4gICZfX2J0biB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG5cXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LWxpZ2h0O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZTI7XFxuICAgIGNvbG9yOiAjZmZmO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZTM7XFxuXFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tICcuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanMnO1xuaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tICcuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyc7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tICcuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMnO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gJy4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMnO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSAnLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzJztcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tICcuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzJztcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSAnLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzJztcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xuICAvKlxuICAgKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAgICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICAgKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gICAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAgICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAgICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAgICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICAgKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAgICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICAgKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAgICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICAgKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gICAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICAgKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAgICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICAgKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gICAqXG4gICAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAgICpcbiAgICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gICAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gICAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAgICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gICAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAgICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gICAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICAgKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAgICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gICAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAgICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAgICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAgICovXG5cbn07XG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tICcuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMnO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn1cblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwidmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSA2MDAwMDtcblxuZnVuY3Rpb24gZ2V0RGF0ZU1pbGxpc2Vjb25kc1BhcnQoZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgJSBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFO1xufVxuLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZShkaXJ0eURhdGUuZ2V0VGltZSgpKTtcbiAgdmFyIGJhc2VUaW1lem9uZU9mZnNldCA9IE1hdGguY2VpbChkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuICBkYXRlLnNldFNlY29uZHMoMCwgMCk7XG4gIHZhciBoYXNOZWdhdGl2ZVVUQ09mZnNldCA9IGJhc2VUaW1lem9uZU9mZnNldCA+IDA7XG4gIHZhciBtaWxsaXNlY29uZHNQYXJ0T2ZUaW1lem9uZU9mZnNldCA9IGhhc05lZ2F0aXZlVVRDT2Zmc2V0ID8gKE1JTExJU0VDT05EU19JTl9NSU5VVEUgKyBnZXREYXRlTWlsbGlzZWNvbmRzUGFydChkYXRlKSkgJSBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFIDogZ2V0RGF0ZU1pbGxpc2Vjb25kc1BhcnQoZGF0ZSk7XG4gIHJldHVybiBiYXNlVGltZXpvbmVPZmZzZXQgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFICsgbWlsbGlzZWNvbmRzUGFydE9mVGltZXpvbmVPZmZzZXQ7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tICcuLi8uLi90b0RhdGUvaW5kZXguanMnO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tICcuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanMnO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tICcuLi8uLi90b0RhdGUvaW5kZXguanMnO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gJy4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzJztcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSAnLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzJztcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSAnLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzJztcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tICcuLi8uLi90b0RhdGUvaW5kZXguanMnO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gJy4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzJztcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSAnLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzJzsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tICcuLi8uLi90b0RhdGUvaW5kZXguanMnO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gJy4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzJztcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSAnLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzJztcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSAnLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzJztcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tICcuLi90b0ludGVnZXIvaW5kZXguanMnO1xuaW1wb3J0IHRvRGF0ZSBmcm9tICcuLi8uLi90b0RhdGUvaW5kZXguanMnO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gJy4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzJztcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSAnLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzJzsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgZGlydHlPcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gJy4uLy4uL3RvRGF0ZS9pbmRleC5qcyc7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gJy4uL3JlcXVpcmVkQXJncy9pbmRleC5qcyc7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gJy4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzJztcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tICcuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyc7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gJy4uL3JlcXVpcmVkQXJncy9pbmRleC5qcyc7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tICcuLi90b0ludGVnZXIvaW5kZXguanMnO1xuaW1wb3J0IHRvRGF0ZSBmcm9tICcuLi8uLi90b0RhdGUvaW5kZXguanMnO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tICcuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanMnOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gJy4uL3RvSW50ZWdlci9pbmRleC5qcyc7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSAnLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanMnO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gJy4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzJztcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSAnLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzJzsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSAnLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanMnO1xuaW1wb3J0IHRvRGF0ZSBmcm9tICcuLi90b0RhdGUvaW5kZXguanMnO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tICcuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyc7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIHZhciByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gJy4uL2lzVmFsaWQvaW5kZXguanMnO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSAnLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzJztcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSAnLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzJztcbmltcG9ydCB0b0RhdGUgZnJvbSAnLi4vdG9EYXRlL2luZGV4LmpzJztcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gJy4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMnO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gJy4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzJztcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gJy4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyc7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tICcuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyc7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gJy4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzJztcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSAnLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMnOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFN1LCBTYSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTdSwgU2EgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDUvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IE1heSAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBNYXkgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgU3VuZGF5LCBNYXkgMjl0aCwgMTQ1MyAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNS8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgTWF5IDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IE1heSAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBTdW5kYXksIE1heSAyOXRoLCAxNDUzIGF0IC4uLiAgICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGhlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHNlY29uZCBhcmd1bWVudCBpcyBub3cgcmVxdWlyZWQgZm9yIHRoZSBzYWtlIG9mIGV4cGxpY2l0bmVzcy5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSkpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSwgXCJ5eXl5LU1NLWRkJ1QnSEg6bW06c3MuU1NTeHh4XCIpXG4gKiAgIGBgYFxuICpcbiAqIC0gTmV3IGZvcm1hdCBzdHJpbmcgQVBJIGZvciBgZm9ybWF0YCBmdW5jdGlvblxuICogICB3aGljaCBpcyBiYXNlZCBvbiBbVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1XShodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlKS5cbiAqICAgU2VlIFt0aGlzIHBvc3RdKGh0dHBzOi8vYmxvZy5kYXRlLWZucy5vcmcvcG9zdC91bmljb2RlLXRva2Vucy1pbi1kYXRlLWZucy12Mi1zcmVhdHlraTkxamcpIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogLSBDaGFyYWN0ZXJzIGFyZSBub3cgZXNjYXBlZCB1c2luZyBzaW5nbGUgcXVvdGUgc3ltYm9scyAoYCdgKSBpbnN0ZWFkIG9mIHNxdWFyZSBicmFja2V0cy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKVsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tICcuLi90b0RhdGUvaW5kZXguanMnO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tICcuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyc7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oZGF0ZSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5U3RyaW5nLCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKGRpcnR5U3RyaW5nKTtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIgdmFsdWU7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHBhcnNlUGF0dGVybnMpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICB2YWx1ZSA9IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aClcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlTdHJpbmcsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcoZGlydHlTdHJpbmcpO1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG5cbiAgICBpZiAoIXBhcnNlUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aClcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcmVzdWx0O1xuXG4gIGlmICh0eXBlb2YgZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSAnLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyc7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tICcuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyc7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXSAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbiAgLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4gIC8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuICAvLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG5mdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfZGlydHlPcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGA6XG4gIC8vXG4gIC8vICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge31cbiAgLy8gICB2YXIgdW5pdCA9IFN0cmluZyhvcHRpb25zLnVuaXQpXG4gIC8vXG4gIC8vIHdoZXJlIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufVxuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBOdW1iZXIocXVhcnRlcikgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSAnLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzJztcbmltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSAnLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMnO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSAnLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzJztcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gJy4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzJztcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tICcuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMnO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gJy4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyc7XG5pbXBvcnQgbWF0Y2ggZnJvbSAnLi9fbGliL21hdGNoL2luZGV4LmpzJztcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG5cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gJy4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzJztcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSAnLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzJztcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSAnLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMnO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogdmFyIHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSAnLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMnO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciB2MSA9IHJlcXVpcmUoJy4vdjEnKTtcbnZhciB2NCA9IHJlcXVpcmUoJy4vdjQnKTtcblxudmFyIHV1aWQgPSB2NDtcbnV1aWQudjEgPSB2MTtcbnV1aWQudjQgPSB2NDtcblxubW9kdWxlLmV4cG9ydHMgPSB1dWlkO1xuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW1xuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXG4gIF0pLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvXG4vLyBpbXBsZW1lbnRhdGlvbi4gQWxzbywgZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuXG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG52YXIgX2Nsb2Nrc2VxO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IHJuZygpO1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbXG4gICAgICAgIHNlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgICAgIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH1cblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiBieXRlc1RvVXVpZChiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2MTtcbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICBidWYgPSBvcHRpb25zID09PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9