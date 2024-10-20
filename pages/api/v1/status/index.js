import database from "../../../../infra/database.js";

async function status(req, res) {
  const result = await database.query("SELECT 1+1 as Sum;");
  console.log(result.rows[0].message);
  res.status(200).json({ status: "ok" });
}
export default status;
