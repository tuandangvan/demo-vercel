import express from "express";
import { centerController } from "../../controllers/centerController.js";


const router = express.Router();
router.post("/add", centerController.createInfoForCenter);
router.post("/update", centerController.updateCenter);
export const centerRoute = router;
