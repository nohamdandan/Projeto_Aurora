import express from 'express';

import { createAreaService } from "../services/areaService";


export async function createAreaController(req, res) {
    try{
const area = await (createAreaService)(req.body)
res.json(area)
    }catch(error){
        res.status(400).json({ error: error.message})
    }
}