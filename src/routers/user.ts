import express from "express";
import { postUsers, getUserNum } from "../controller/user";

const router = express.Router();

router.post("/", postUsers);
router.get("/", getUserNum);
export default router;
