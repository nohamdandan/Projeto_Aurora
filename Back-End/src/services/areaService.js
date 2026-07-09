import {createArea} from '../repositories/areaRepositories.js'

export async function createAreaService(data) {
    const {nome, tamanho, tipo} = data 

    if(!nome) {
        throw new Error('Nome é obrigatório')
    }

    return await createArea(nome, tamanho, tipo)
}