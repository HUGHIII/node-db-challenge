const express = require("express");
const model = require("./projectsModel");
const router = express.Router();

router.post("/", (req, res) => {
  const newProj = req.body;

  model
    .addProj(newProj)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "server error" });
    });
});

router.post("/tasks", (req, res) => {
  const newTask = req.body;

  model
    .addtask(newTask)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "server error" });
    });
});

router.post("/resources", (req, res) => {
  const newresc = req.body;

  model
    .addresc(newresc)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "server error" });
    });
});

router.get("/", (req, res) => {
  model
    .getProj()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "server error" });
    });
});

module.exports = router;
