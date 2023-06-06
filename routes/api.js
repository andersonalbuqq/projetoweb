const express = require("express");
const router = express.Router();

const TasksController = require("../app/controllers/api/TasksController");
const AgendasController = require("../app/controllers/api/AgendasController");

// Rotas da Agenda
router.get('/contatos', AgendasController.list)
router.get('/contatos/:id', AgendasController.show)
router.post('/contatos', AgendasController.save)
router.delete('/contatos/:id', AgendasController.remove)
router.put('/contatos/:id', AgendasController.update)

// Rotas das Tarefas
router.get('/tasks', TasksController.list)
router.get('/tasks/:id', TasksController.show)
router.post('/tasks', TasksController.save)
router.delete('/tasks/:id', TasksController.remove)
router.put('/tasks/:id', TasksController.update)
router.put('/tasks/:id/update-status', TasksController.updateStatus)


module.exports = router;