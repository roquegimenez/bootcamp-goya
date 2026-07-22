const errorHandler = (err, req, res, next) => {
    console.error(`[ERROR] ${err.message}`);
    console.error(err.stack);

    if (err.name === 'ValidationError') {
        return res.status(400).json({
            success: false,
            timestamp: new Date().toISOString(),
            error: "Error de validación",
            message: err.message,
        });
    }

    if (err.name === 'CastError') {
        return res.status(400).json({
            success: false,
            timestamp: new Date().toISOString(),
            error: "ID inválido",
            message: "El ID proporcionado no tiene un formato válido",
        });
    }

    if (err.code === 11000) {
        return res.status(409).json({
            success: false,
            timestamp: new Date().toISOString(),
            error: "Conflicto",
            message: "El recurso ya existe en la base de datos",
        });
    }

    res.status(err.status || 500).json({
        success: false,
        timestamp: new Date().toISOString(),
        error: err.name || "Error interno del servidor",
        message: err.message || "Ocurrió un error inesperado",
    });
};

// Middleware para rutas no encontradas (404)
const rutaNoEncontrada = (req, res, next) => {
    res.status(404).json({
        success: false,
        timestamp: new Date().toISOString(),
        error: "Ruta No Encontrada (404)",
        message: `La ruta ${req.originalUrl} no existe en el servidor`,
    });
};

module.exports = { errorHandler, rutaNoEncontrada };
