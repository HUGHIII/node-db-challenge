const db = require("../data/dbConfig");
module.exports = {
  getProj,
  getResources,
  getTasks,
  addProj,
  addtask,
  addresc,
};

function getProj() {
  return db("projects");
}

function getResources() {
  return db("resources");
}

function getTasks() {
  return db("tasks");
}

function addProj(proj) {
  return db("projects")
    .insert(proj)
    .then(() => {
      return getProj();
    });
}
function addresc(resc) {
  return db("resources")
    .insert(resc)
    .then(() => {
      return getResources();
    });
}
function addtask(task) {
  return db("tasks")
    .insert(task)
    .then(() => {
      return getTasks();
    });
}
