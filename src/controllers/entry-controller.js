
const entryService = require('../services/entry-service')
const { uploadFile } = require('../services/s3-service');
class EntryDto {

    //id property can be null because received data can be a new record

    constructor ({id,title, image, content, category, type}){
        this.id = id,
        this.name = title,
        this.image = image, 
        this.content = content,
        this.categoryId = category
        this.type = type
    }

    validate(){
      
        let msg = '';
       
        if(!this.name) msg = msg +' Título,';
          
        if(!this.image) msg = msg+' Imagen,';
          
        if(!this.content) msg = msg +' Contenido,';
         
        if(!this.categoryId) msg = msg +' Categoría,';
        
        if(msg!==''){
            const finalMsg = msg.slice(0, -1)
            throw new Error ( `Llenar campos vacíos:${finalMsg}.` );
        }
    }
}

const updateNewsEntry = async (req,res,next)=>{
   
    const newsEntryDto = new EntryDto ({...req.body, id: req.params.id, type: 'news'});
    
    try {

        newsEntryDto.validate();
        const entry = await entryService.updateEntry(newsEntryDto)
        res.json({entry:entry});

    } catch (err) {
        res.status(400)
        res.json({error:err.message});
    }
}

const getNewsEntries = async(req, res) => {
  try {
      const entries = await entryService.getModifiedNewsEntries();
      res.status(200).json({ entries });
  } catch (err) {
      console.log(err);
      res.status(500).json({err})
  }
  
}

const getNewsEntryById= async (req, res)=>{
  const {id}=req.params
  try{
    const entries= await entryService.getNewsById(id)
    res.status(200).json({
      status:true,
      message:"Request result",
      payload:entries
    })
  } catch (err) {
    console.log('err',err)
    res.status(500).json({err})
  }
}

const createNewEntry = async(req, res) => {

  const { image, ...rest } = req.body;

  // Uploads image to AWS S3 service and extract de key value
  const { key } = await uploadFile( req.files.file );

  // const key = 'dfe64q3jhasd3jjafrdkj';

  const entrySaved = await entryService.createEntry({
    ...rest,
    image: key,
    type: 'news'
  })

  res.status(201).json({
    ok: true,
    entry: entrySaved
  })
}

module.exports = {
  getNewsEntries,
  getNewsEntryById,
  updateNewsEntry,
  createNewEntry
}
