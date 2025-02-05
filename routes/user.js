import express from "express";
import { getallusrs, getmyprofile, login, logout, register } from "../controllers/user.js"
import { isaunthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.get("/all", getallusrs);
router.post("/new", register);
router.post("/login", login);
router.get("/logout", logout);
// router.get("/userid/:id",getuserdetails );
// router.put("/userid/:id",updateuserdetails );
// router.delete("/userid/:id",deleteuserdetails );
router.get("/me", isaunthenticated, getmyprofile);

export default router;