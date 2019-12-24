export const config = {
  http: {
    host: process.env.HTTP_HOST || '0.0.0.0',
    port: process.env.VIRTUAL_PORT || process.env.PORT || 3000,
  },
  logLevel: process.env.LOG_LEVEL || 'debug',
  env: process.env.NODE_ENV || 'development',
  nodeClusterEnabled:
    (process.env.ENABLE_NODE_CLUSTER && process.env.ENABLE_NODE_CLUSTER.toLowerCase() === 'true') || false,
  knex: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || {
      port: process.env.DB_CONN_PORT || 5432,
      host: process.env.DB_CONN_HOST || 'localhost',
      database: process.env.DB_CONN_DATABASE || 'api-db',
      user: process.env.DB_CONN_USER || 'user',
      password: process.env.DB_CONN_PASSWORD || 'password',
      multipleStatements: true,
    },
    pool: {
      min: +process.env.DATABASE_POOL_MIN || 0,
      max: +process.env.DATABASE_POOL_MAX || 10,
    },
    migrations: {
      directory: `${__dirname}/../../db/pg/migrations`,
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: `${__dirname}/../../db/pg/seeds`,
    },
  },
}
