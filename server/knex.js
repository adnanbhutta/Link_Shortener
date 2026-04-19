const knex = require("knex");

const env = require("./env");

const isSQLite = env.DB_CLIENT === "sqlite3" || env.DB_CLIENT === "better-sqlite3";
const isPostgres = env.DB_CLIENT === "pg" || env.DB_CLIENT === "pg-native";
const isMySQL = env.DB_CLIENT === "mysql" || env.DB_CLIENT === "mysql2";

let connection = env.DATABASE_URL || {
  ...(isSQLite && { filename: env.DB_FILENAME }),
  host: env.DB_HOST,
  port: env.DB_PORT,
  database: env.DB_NAME,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
};

if (typeof connection === "string") {
  connection = {
    connectionString: connection,
    ssl: env.DB_SSL ? { rejectUnauthorized: false } : false,
  };
} else if (typeof connection === "object" && !isSQLite) {
  connection.ssl = env.DB_SSL ? { rejectUnauthorized: false } : false;
}

const db = knex({
  client: env.DB_CLIENT,
  connection,
  pool: {
    min: env.DB_POOL_MIN,
    max: env.DB_POOL_MAX
  },
  useNullAsDefault: true,
});

db.isPostgres = isPostgres;
db.isSQLite = isSQLite;
db.isMySQL = isMySQL;

db.compatibleILIKE = isPostgres ? "andWhereILike" : "andWhereLike";

module.exports = db;
