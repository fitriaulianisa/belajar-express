const express = require("express");

const router= express.Router();

const fakultasController = require("../controllers/fakultasController");

// impor middleware auth dan role
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
router.get("/", authMiddleware, fakultasController.getAllFakultas);
router.post("/", authMiddleware, roleMiddleware('admin','user'), fakultasController.createFakultas);
router.get("/:id", authMiddleware, fakultasController.getFakultasById);
router.put("/:id", authMiddleware, roleMiddleware("admin","user"), fakultasController.updateFakultas);
router.delete("/:id", authMiddleware, roleMiddleware("admin","user"),fakultasController.deleteFakultas);

module.exports = router;