import { compareAsc } from 'date-fns';

const sortFunction = (a, b) => {
  if (a.taskDueDate < b.taskDueDate) return -1;
  if (a.taskDueDate > b.taskDueDate) return 1;
  return 0;
};

const sortTasksByDate = state => {
  // SORT DATES IN DATE ARRAY
  state.dates = state.dates.sort(compareAsc);

  // SORT TASKS BASED ON DUE DATE
  state.tasks.sort(sortFunction);
};

const sortTasksByTag = state => {
  // ADD TAGS
};

const modelController = (() => ({
  sortTasksByDate,
}))();

export default modelController;
