
const entryRepository = require('../repositories/entry-repository')

const deleteEntry = async (id) =>{

  const deletedEntry = await entryRepository.deleteEntry(id)

  if(!deletedEntry)
  {
    throw new Error('La entrada no existe !!!')
  }
return deletedEntry


}

const updateEntry = async (newContent) =>{
   
   const entry = await entryRepository.updateEntry(newContent)
    
    if( entry ){
        throw new Error (`La entrada que desea modificar no existe !!!`);
    }
        return entry
    
}


const getModifiedNewsEntries = async() => {
  const entries = await entryRepository.findAllNews();

  const modifiedEntries = entries.map( ({id, name, image, createdAt }) => (
      {
        id,
        name,
        image, 
        createdAt
      }
    ) 
  )

  return modifiedEntries;
}

const getNewsById = async ( id )=>{
  return await entryRepository.findById(id)
}

const createEntry = async( entry ) =>{
  const entryStored = await entryRepository.createEntry( entry );
  return entryStored;
}

module.exports ={
  getModifiedNewsEntries,
  getNewsById,
  createEntry,
  updateEntry,
  deleteEntry
}
