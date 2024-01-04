import { pool } from "../../config/db";

export default async function handler(req, res) {
    const result = await pool.query("SELECT NOW()");
    res.status(200).json({ result: result[0] ["NOW()"] });
}