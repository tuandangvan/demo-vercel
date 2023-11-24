import express from "express";
import { StatusCodes } from "http-status-codes";
import { authRoute } from "./authRoute.js";
import { userRoute } from "./userRoute.js";
import { petRoute } from "./petRoute.js";
import { centerRoute } from "./centerRoute.js";
import { postRoute } from "./postRoute.js";

const router = express.Router();

// Check APIs v1/status
router.get("/status", (req, res) => {
  res.status(StatusCodes.OK).json({
    message: "API v1 are ready to use!",
    code: StatusCodes.OK
  });
});

router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/pet", petRoute);
router.use("/center", centerRoute);
router.use("/post", postRoute);

export const APIs_V1 = router;
