import express from "express";
import { tailorList } from "../controllers/tailor.js";

const tailorRouter = express.Router()

tailorRouter.get('/list',tailorList)

export default tailorRouter