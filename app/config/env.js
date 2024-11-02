

const env = {
  database: 'bdexamenfinaldm',
  username: 'bdexamenfinaldm_user',
  password: 'NmdzszMfXoVUg3ZonpuRyRMCRhdGWFmP',
//  host: 'dpg-crngd5d6l47c73afrsug-a.oregon-postgres.render.com',
  host: 'dpg-csijg0jqf0us738qrqbg-a',
  
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;