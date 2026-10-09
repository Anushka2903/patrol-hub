import { StatusCodes } from "http-status-codes";
import { arrestedpersons } from "../Schema/CitizenSchemas.js";
import { Department } from "../Schema/DepartmentSchema.js";

function getFileUrl(req, filename) {
    const serverUrl = process.env.SERVER_URL || `${req.protocol}://${req.get("host")}`;
    return `${serverUrl}/${filename}`;
}

export async function saveArrestedPersonData(req,res)
{
    try 
    {
        if (req.file) {
            const image = getFileUrl(req, req.file.filename);
            req.body['img'] = image;
        }
        const data = new arrestedpersons(req.body);
        const response = await data.save();
        res.status(StatusCodes.OK).json(response);
        
    }
     catch (error) 
     {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
        
    }
}
export async function updatearrestedPersonToDepart(req,res)
{
    try 
    {
        await Department.findByIdAndUpdate(req.params.id,{$push:{arrestedpersons:req.params.obj}})
        res.status(StatusCodes.OK).json();
        
    } 
    catch (error)
     {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
        
    }
}
