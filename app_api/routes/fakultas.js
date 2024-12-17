const express = require("express");

const router= express.Router();

const fakultasController = require("../controllers/fakultasController");

// impor middleware auth dan role
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
router.get("/", fakultasController.getAllFakultas);
router.post("/", authMiddleware, roleMiddleware('admin',), fakultasController.createFakultas);
router.get("/:id", fakultasController.getFakultasById);
router.put("/:id", authMiddleware, roleMiddleware("admin"), fakultasController.updateFakultas);
router.delete("/:id", authMiddleware, roleMiddleware("admin"),fakultasController.deleteFakultas);

module.exports = router;