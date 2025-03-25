import {getList} from '../../models/propertyModel.js'

export default async function getPropertyController(req, res) {
    
    const result = await getList()
    
    return res.json(result)
}