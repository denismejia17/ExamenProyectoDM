module.exports = (sequelize, Sequelize) => {
	
	const Proyecto = sequelize.define('proyecto', {	
		id_proyecto: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		titulo: {
			type: Sequelize.STRING,
			allowNull: false // obligatorio
		},
		descripcion: {
			type: Sequelize.TEXT,
			allowNull: true // opcional
		},
		completada: {
			type: Sequelize.BOOLEAN,
			defaultValue: false // por defecto false
		},
		fecha_creacion: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW // fecha actual por defecto
		},
		fecha_vencimiento: {
			type: Sequelize.DATE,
			allowNull: true // opcional
		},
		prioridad: {
			type: Sequelize.ENUM('baja', 'media', 'alta'), // niveles de prioridad
			defaultValue: 'media' // por defecto media
		},
		asignado_a: {
			type: Sequelize.STRING,
			allowNull: true // opcional
		},
		categoria: {
			type: Sequelize.STRING,
			allowNull: true // opcional
		},
		costo_proyecto: {
			type: Sequelize.DECIMAL(10, 2), // monto del proyecto
			allowNull: false // deberías decidir si es obligatorio o no
		},
		pagado: {
			type: Sequelize.BOOLEAN,
			defaultValue: false // estado de pago, por defecto false
		}
	});
    
	return Proyecto;
}
