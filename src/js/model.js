const sortFunction = (a, b) => {
  if (a.taskDueDate < b.taskDueDate) return -1;
  if (a.taskDueDate > b.taskDueDate) return 1;
  return 0;
};

const sortTasksByDate = tasks => {
  // SORT TASKS BASED ON DUE DATE
  tasks.sort(sortFunction);
};

const removeCompleted = (state, id, tag) => {
  // LOOP THROUGH ALL TASKS AND REMOVE COMPLETED
  state.tasks.forEach((task, i) => {
    if (task.id === id) {
      // Add task to completed array
      state.completed.push(task);

      // Remove tasks from tasks list array
      state.tasks.splice(i, 1);
      state.important.splice(i, 1);

      // Clear detail section
      document.querySelector('.detail').innerHTML = '';
    }
  });

  // LOOP THROUGH TAGS AND REMOVE COMPLETED
  state.tags[tag].forEach((task, i) => {
    if (task.id === id) {
      // Remove tasks from tags
      state.tags[tag].splice(i, 1);
    }
  });
};

const toggleImportant = (state, id) => {
  // LOOP THROUGH ALL TASKS AND ADD IMPORTANT TASKS TO IMPORTANT ARRAY IN STATE
  state.tasks.forEach(task => {
    if (task.id === id) {
      if (
        state.important.indexOf(task) < 0 &&
        state.completed.indexOf(task) < 0
      ) {
        task['important'] = 'yes';
        state.important.push(task);
      } else {
        // LOOP THROUGH ALL TASKS AND REMOVE IMPORTANT TASKS TO IMPORTANT ARRAY IN STATE
        task['important'] = '';
        state.important.forEach((arr, i) => {
          if (arr.id === id) state.important.splice(i, 1);
        });
      }
    }
  });
};

const searchTask = (state, value, renderTasks) => {
  const filteredArr = state.tasks.filter(task => {
    return task.taskTitle.includes(value);
  });

  renderTasks(filteredArr);
};

const pageCtrl = (tasks, renderTasks, pageNumber, show) => {
  const taskNumber = 6;
  const start = (pageNumber - 1) * taskNumber;
  const end = pageNumber * taskNumber;

  const newTaskList = tasks.slice(start, end);

  /*
  newTaskList.forEach(task => {
    if (newTaskList.indexOf(task) >= pageNumber * taskNumber) {
      pageNumber += 1;
    }
  });
  */
  renderTasks(newTaskList, show);
};

const loopDelete = (arr, id) => {
  arr.forEach((c, i, a) => {
    if (c.id === id) {
      a.splice(i, 1);
    }
  });
};

const deleteTask = (state, id, tag) => {
  // LOOP THROUGH ALL TASKS AND REMOVE COMPLETED
  loopDelete(state.tasks, id);

  loopDelete(state.important, id);

  loopDelete(state.completed, id);

  // Clear detail section
  document.querySelector('.detail').innerHTML = '';

  // LOOP THROUGH TAGS AND REMOVE COMPLETED
  state.tags[tag].forEach((task, i) => {
    if (task.id === id) {
      // Remove tasks from tags
      state.tags[tag].splice(i, 1);
    }
  });
};

const modelController = (() => ({
  sortTasksByDate,
  removeCompleted,
  toggleImportant,
  searchTask,
  pageCtrl,
  deleteTask,
}))();

export default modelController;
