const express = require('express');
const router = express.Router();

// Importar el controlador de proyectos
const proyectoController = require('../controllers/proyectocontroller.js'); // Ruta al controlador de proyectos

// Rutas para Proyectos
router.post('/api/proyectos', proyectoController.createProyecto); // crea Proyecto
router.get('/api/proyectos', proyectoController.retrieveAllProyectos); // obtener todos los proyectos
router.get('/api/proyectos/:id', proyectoController.getProyectoById); // obtiene proyecto por id
router.put('/api/proyectos/:id', proyectoController.updateProyectoById); // modifica proyecto
router.delete('/api/proyectos/:id', proyectoController.deleteProyectoById); // elimina proyecto

module.exports = router;
