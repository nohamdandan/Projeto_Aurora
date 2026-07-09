import {pool} from '../config/db.js'


export async function  createArea(nome, tamanho, tipo) {
    const result = await pool.query(
        `INSERT INTO areas(nome, tamanho, tipo_cultivo)
        VALUES($!, $2, $3)
        RETURNING*`
        [nome, tamanho, tipo]
    )

    return result.rows[0]
}