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
  if(!updatedEntry){
  
    return null
  }
  updatedEntry.set(newContent)
  await updatedEntry.save()
  return updatedEntry
}

const findAllNews = async(limit, page) => {

    if( !limit && !page ){
      const entries = await Entry.findAndCountAll({ where:{ type:"news" },order: [
        ['createdAt', 'DESC'],
    ], });
      return { result: entries.rows };
    }

    const offset = limit * (page - 1);
    const entries = await Entry.findAndCountAll({ where:{ type:"news" }, offset, limit, order: [
      ['createdAt', 'DESC'],
  ]});
    
    const pages = Math.ceil(entries.count / limit);
    
    return { result: entries.rows, count: entries.count, pages };
  }

const deleteEntryById = async(id) => {
  
  const deletedEntry = await Entry.findOne({ where:{ id : id } });
  if(!deletedEntry){
    return null
  }
  await deletedEntry.destroy()
  return deletedEntry
  }

module.exports = {
  updateEntry,
  getEntryById,
  findAllNews,
  createEntry,
  deleteEntryById,
  findById
}
