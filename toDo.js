const main = new Map();
//Add item
function addItem(id, taskName, isCompleted, importent, date = new Date()) {
  main.set(id, {
    taskName: taskName,
    isCompleted: isCompleted,
    importent: importent,
    date: date,
  });
}
addItem(1, "build a TODO app", false, true);
addItem(2, "talk to myself", true, false);
addItem(3, "go for a walk", false, true);
addItem(4, "think about weekend project", false, false);
addItem(
  5,
  "listen to pini and dont waste time on non importent bits of code",
  false,
  true
);

// TODO refactor helper function DRY

// function helper() {
//   if (main.has(this.id)) {
//     action;
//     return true;
//   }
//   return false;
// }
// console.log(helper(this.id, main.get(this.id)));

//delete
function deleteItem(id) {
  if (main.has(id)) {
    main.delete(id);
    return true;
  }
  return false;
}
// mark as done
function markAsDone(id) {
  if (main.has(id)) {
    main.get(id).isCompleted = true;
    return true;
  }
  return false;
}
// unmark as done
function unmarkAsDone(id) {
  if (main.has(id)) {
    main.get(id).isCompleted = false;
    return true;
  }
  return false;
}
//TODO check if sort by date works and add all sort method to one function
//list by complete completed on top!!
function listByCompleted() {
  let arr = [];
  for (let listItem of main.values()) {
    arr.push(listItem);
  }
  let temp = [...arr].sort(function (a, b) {
    return b.isCompleted - a.isCompleted;
  });
  return temp;
}
//list by importent,importent  on top!!
function listByImportence() {
  let arr = [];
  for (let listItem of main.values()) {
    arr.push(listItem);
  }
  let temp = [...arr].sort(function (a, b) {
    return b.importent - a.importent;
  });
  return temp;
}

function listByDate() {
  let arr = [];
  for (let listItem of main.values()) {
    arr.push(listItem);
  }
  let temp = [...arr].sort(function (a, b) {
    return b.date - a.date;
  });
  return temp;
}
