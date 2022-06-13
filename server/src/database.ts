
import mysql from 'mysql2/promise';
import keys from './keys';

const pool = mysql.createPool(keys.database);

 pool.getConnection()
    .then(get =>{
       //pool.releaseConnection(conn);
        console.log('CONEXION EXITOSA')
    })
export default pool;