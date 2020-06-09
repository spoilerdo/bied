module.exports = {
    type: 'mysql',
    database: 'data-operator',
    host: 'localhost',
    username: 'root',
    password: '6q8u_2jMOW-OOZXk',
    timezone: 'UTC',
    connectTimeout: 2000,
    entities: ['src/database/entities/**/**.ts'],
    migrations: ['src/database/migrations/**/**.ts'],
    cli: {
        migrationsDir: 'src/database/migrations',
    },
};