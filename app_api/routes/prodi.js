const express = require("express");

const router= express.Router();

const prodiController = require("../controllers/prodiController");

// Mengimpor middleware untuk autentikasi dan pengecekan peran
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
router.get("/", prodiController.getAllProdi);
router.post("/", authMiddleware, roleMiddleware('admin'),prodiController.createProdi);
router.get("/:id", prodiController.getProdiById);
router.put("/:id", authMiddleware, roleMiddleware('admin'),prodiController.updateProdi);
router.delete("/:id", authMiddleware, roleMiddleware('admin'),prodiController.deleteProdi);

module.exports = router;