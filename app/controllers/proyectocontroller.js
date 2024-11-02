const db = require('../config/db.config.js');
const Proyecto = db.Proyecto; // Asegúrate de que el modelo se llama 'Proyecto'

exports.createProyecto = async (req, res) => {
    let proyecto = {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        completada: req.body.completada,
        fecha_creacion: new Date(), // asigna automáticamente la fecha actual
        fecha_vencimiento: req.body.fecha_vencimiento,
        prioridad: req.body.prioridad || 'media', // valor por defecto 'media'
        asignado_a: req.body.asignado_a,
        categoria: req.body.categoria,
        costo_proyecto: req.body.costo_proyecto,
        pagado: req.body.pagado || false // por defecto false
    };

    try {
        // Guardar el proyecto en la base de datos
        const result = await Proyecto.create(proyecto);
        res.status(200).json({
            message: "Proyecto creado exitosamente con id = " + result.id_proyecto,
            proyecto: result,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el proyecto!",
            error: error.message
        });
    }
};

exports.retrieveAllProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.findAll();
        res.status(200).json({
            message: "Todos los proyectos obtenidos exitosamente!",
            proyectos: proyectos
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los proyectos!",
            error: error.message
        });
    }
};

exports.getProyectoById = async (req, res) => {
    let proyectoId = req.params.id;
    try {
        const proyecto = await Proyecto.findByPk(proyectoId);
        if (!proyecto) {
            return res.status(404).json({
                message: "No se encontró el proyecto con id = " + proyectoId,
                error: "404"
            });
        }
        res.status(200).json({
            message: "Proyecto obtenido exitosamente con id = " + proyectoId,
            proyecto: proyecto
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el proyecto!",
            error: error.message
        });
    }
};

exports.updateProyectoById = async (req, res) => {
    try {
        let proyectoId = req.params.id;
        let proyecto = await Proyecto.findByPk(proyectoId);

        if (!proyecto) {
            return res.status(404).json({
                message: "No se encontró el proyecto con id = " + proyectoId,
                error: "404"
            });
        } else {
            let updatedObject = {
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                completada: req.body.completada,
                fecha_vencimiento: req.body.fecha_vencimiento,
                prioridad: req.body.prioridad,
                asignado_a: req.body.asignado_a,
                categoria: req.body.categoria,
                costo_proyecto: req.body.costo_proyecto,
                pagado: req.body.pagado // actualiza el estado de pagado
            };

            await Proyecto.update(updatedObject, { returning: true, where: { id_proyecto: proyectoId } });
            res.status(200).json({
                message: "Proyecto actualizado exitosamente con id = " + proyectoId,
                proyecto: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el proyecto con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deleteProyectoById = async (req, res) => {
    try {
        let proyectoId = req.params.id;
        let proyecto = await Proyecto.findByPk(proyectoId);

        if (!proyecto) {
            return res.status(404).json({
                message: "No existe un proyecto con id = " + proyectoId,
                error: "404",
            });
        } else {
            await proyecto.destroy();
            res.status(200).json({
                message: "Proyecto eliminado exitosamente con id = " + proyectoId,
                proyecto: proyecto,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el proyecto con id = " + req.params.id,
            error: error.message,
        });
    }
};
