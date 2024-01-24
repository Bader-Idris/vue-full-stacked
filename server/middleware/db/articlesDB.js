const { Pool } = require("pg");
const {
  POSTGRES_USER,
  PSQL_HOST,
  PSQL_PORT,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = require("../../config/config");

const article = new Pool({
  connectionString: `postgres://${POSTGRES_USER}:${String(POSTGRES_PASSWORD)}@${PSQL_HOST}:${PSQL_PORT}/${POSTGRES_DB}`,
});
module.exports = { Pool, article };