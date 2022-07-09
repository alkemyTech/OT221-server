const { Entry } = require('../models')

const getEntryById = async (id) =>{
    const entry = await Entry.findOne({where:{id: id}})
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
  console.log('adawdawdwad')
    const entries = await Entry.findAll({ where:{ type:"news" } });
    
    return entries;
  }
  const deleteEntry = async(id) => {
    const deletedEntry = await Entry.findById({ where:{ id : id } });
    await deletedEntry.destroy()
    return deletedEntry
   }

module.exports = {
  updateEntry,
  getEntryById,
  findAllNews,
  createEntry,
  deleteEntry
}