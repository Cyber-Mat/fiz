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

      // Clear detail section
      document.querySelector('.detail').innerHTML = '';

      console.log(state);
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

const modelController = (() => ({
  sortTasksByDate,
  removeCompleted,
}))();

export default modelController;
