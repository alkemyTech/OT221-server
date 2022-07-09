const { Entry } = require('../models')

const getEntryById = async (id) =>{
    const entry = await Entry.findOne({where:{id: id}})
    return entry
}

const findById=async (id)=>{
  const entry =await Entry.findOne({where:{ id:id }})
  if (!entry){
    return "Entry does not exist"
  }
  return entry
}

const createEntry = async( entry ) => {
  const entryStored = await Entry.create( entry );
  return entryStored
}

const updateEntry = async (newContent) =>{

  const updatedEntry = await Entry.findOne({ where: { id:newContent.id,
                                                    type:newContent.type }})
  if(updatedEntry){
    updatedEntry.set(newContent)
    await updatedEntry.save()
    return updatedEntry
  }
  else{
    return null
  }

}

const findAllNews = async() => {
    const entries = await Entry.findAll({ where:{ type:"news" } });
    return entries;
  }


module.exports = {
  findById,
  updateEntry,
  getEntryById,
  findAllNews,
  createEntry,
}