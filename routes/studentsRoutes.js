const express = require('express');
const router = express.Router();



// rutas get
router.get('/', (req, res) => {
    res.status(200).send('GET /students simple');
});

// Exportamos el router
module.exports = router;   