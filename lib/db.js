import mysql from 'mysql2/promise'

export const db = mysql.createPool({
        connectionLimit:2,
        host:process.env.DB_SERVER,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE,
        multipleStatements:true
}
)