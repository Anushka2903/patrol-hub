import { StatusCodes } from "http-status-codes";
import { Department, News, Officers, actSchema, district,  notices, policeStation } from "../Schema/DepartmentSchema.js";

const liveNewsFeedUrl = "https://news.google.com/rss/search?q=Indore%20police%20OR%20Madhya%20Pradesh%20police%20OR%20India%20police&hl=en-IN&gl=IN&ceid=IN:en";

function getFileUrl(req, filename) {
    const serverUrl = process.env.SERVER_URL || `${req.protocol}://${req.get("host")}`;
    return `${serverUrl}/${filename}`;
}

function decodeHtml(value = "") {
    return value
        .replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/<[^>]*>/g, "")
        .trim();
}

function readXmlTag(item, tagName) {
    const match = item.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i"));
    return decodeHtml(match?.[1]);
}

function parseGoogleNewsRss(xml) {
    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 12).map((match, index) => {
        const item = match[1];
        const title = readXmlTag(item, "title");
        const source = readXmlTag(item, "source") || "Live News";
        const pubDate = readXmlTag(item, "pubDate");

        return {
            _id: `live-news-${index}`,
            type: source,
            date: pubDate ? new Date(pubDate).toLocaleDateString("en-IN") : "Latest",
            heading: title,
            description: readXmlTag(item, "description") || title,
            image: "",
            sourceUrl: readXmlTag(item, "link"),
        };
    }).filter((news) => news.heading);
}

export async function saveDepartData(req, res) {
    try {
        if (req.file) {
            const image = getFileUrl(req, req.file.filename);
            req.body['image'] = image;
        }
        const data = new Department(req.body);
        const response = await data.save();
        res.status(StatusCodes.CREATED).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

export async function getDepartData(req, res) {
    try {
        const response = await Department.find()
  
        .populate({
            path: "policestations",
            populate: [
                { path: "officers" },
                {
                    path: "user",
                    populate: [
                        { path: "vehiclecomplaints" },
                        { path: "kidnappingReport" },
                        {path:"generalThefts"}
                    ]
                }
            ]
        }).populate('notices')
          .populate('district')
          .populate('arrestedpersons')
          .populate('act');
    

        res.status(StatusCodes.OK).json(response);

    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();

    }
}

export async function savePoliceStationData(req, res) {
    try {
        if (req.file) {
            const image = getFileUrl(req, req.file.filename);
            req.body['image'] = image;
        }
        const data = new policeStation(req.body);
        const response = await data.save();
        res.status(StatusCodes.CREATED).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();

    }
}

export async function updatePoliceStationDataToDepart(req, res) {
    try {
        await Department.findByIdAndUpdate(req.params.id, { $push: { policestations: req.params.obj } });
        res.status(StatusCodes.OK).json();

    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();

    }
}
//officers data store..

export async function saveofficerData(req, res) {
    try {
        if (req.file) {
            const image = getFileUrl(req, req.file.filename);
            req.body['image'] = image;
        }
        const data = new Officers(req.body);
        const response = await data.save();
        res.status(StatusCodes.CREATED).json(response);


    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();

    }
}

//delete officers data

export async function deleteOfficer(req,res)
{
    try {
        await Officers.findByIdAndDelete(req.params.id);
            res.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error in deleting officer'});
    }
}

//update officers in policeStations

export async function updateOfficersDataTOPoliceS(req, res) {
    try {
        await policeStation.findByIdAndUpdate(req.params.id, { $push: { officers: req.params.obj } });
        res.status(StatusCodes.OK).json();

    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();

    }
}

//update users in policestation
export async function updateUserToPoliceStations(req, res) {
    try {
        await policeStation.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { user: req.params.obj } }
        );
        res.status(StatusCodes.OK).json();
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

//about district 
export async function savedistrictData(req, res) {
    try {
        const data = new district(req.body);
        const response = await data.save();
        res.status(StatusCodes.CREATED).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}
export async function updatedistrict(req,res){
       try
        {
           const response=  await Department.findByIdAndUpdate(req.params.id,{$push:{district:req.params.obj}});
             res.status(StatusCodes.OK).json(response);
        
       }
      catch(error) 
        {
              console.log(error);
              res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
        
       }
}
//save notice
  export async function saveNoticeData(req,res)
  {
    try
     {
         if (req.file) {
            const file = getFileUrl(req, req.file.filename);
            req.body['file'] = file;
         }
         const data = new notices(req.body);
         const response = await data.save();
         res.status(StatusCodes.OK).json(response);     
     } 
     catch (error)
      {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
     }
  }
  export async function updateNoticeDepart(req,res)
  {
     try 
     {
         await Department.findByIdAndUpdate(req.params.id,{$push:{notices:req.params.obj}});
         res.status(StatusCodes.OK).json();
        
     } 
     catch (error)
      {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
        
     }
  }
//update department
export async function updateDepartment(req,res){
    try {
        // console.log("Request Body:", req.body);
        // console.log("Request File:", req.file);
        const updateData = { ...req.body };
        if (req.file) {   
          const image = getFileUrl(req, req.file.filename);
        //   console.log("Updated Image:", image);
          updateData.image = image;
        }
        const response = await Department.findByIdAndUpdate(req.params.id, updateData, { new: true });
        // console.log("Response:", response);
        if (!response) {
          return res.status(StatusCodes.NOT_FOUND).json({ error: "Document not found" });
        }
        res.status(StatusCodes.OK).json(response);
      } catch (error) {
        console.error("Error:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
      }
    }


// saveRules
export async function saveActData(req,res)
{
    try 
    {
        if (req.file) {
            const image = getFileUrl(req, req.file.filename);
            req.body['image'] = image;
        }
        const data = new actSchema(req.body);
        const response = await data.save();
        res.status(StatusCodes.OK).json(response);
        
    }
     catch (error) 
     {
        console.error("Error:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
}

export async function updateDepartmentToAct(req,res){
      try 
      {
          await Department.findByIdAndUpdate(req.params.id,{$push:{act:req.params.obj}});
          await actSchema.findByIdAndUpdate(req.params.obj,{department:req.params.id});
          res.status(StatusCodes.OK).json();
        
      } 
      catch (error) 
      {
        console.error("Error:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
      }
}

export async function saveNews(req, res)
{
    try {
        if (req.file) {
            const image = getFileUrl(req, req.file.filename);
            req.body['image'] = image;
        }
        const data = new News(req.body);
        const response = await data.save();
        res.status(StatusCodes.CREATED).json(response);
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}
export async function getFullNews(req,res)
{
    try {
        const response = await News.find();
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}
export async function getLiveNews(req,res)
{
    try {
        const response = await fetch(liveNewsFeedUrl);
        if (!response.ok) {
            return res.status(StatusCodes.BAD_GATEWAY).json({ message: "Live news feed is unavailable" });
        }

        const xml = await response.text();
        const news = parseGoogleNewsRss(xml);
        res.status(StatusCodes.OK).json(news);
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Unable to fetch live news" });
    }
}
export async function fetchOfficers(req,res)
{
    try {
        const response = await Officers.find();
        res.status(StatusCodes.OK).json(response);
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}
