

const { EntryNotFoundError } = require('../errors/entry-errors');
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
    
    if( !entry ){
        throw new EntryNotFoundError (newContent.type);
    }
        return entry
    
}


const getModifiedNewsEntries = async() => {
  
  const entries = await entryRepository.findAllNews();

  const modifiedEntries = entries.map( ({ name, image, createdAt }) => (
      {
        name,
        image, 
        createdAt
      }
    ) 
  )

  return modifiedEntries;
}

const getNewsById = async( id )=>{
  const entry =  await entryRepository.getEntryById(id)
    if( !entry ){
      throw new EntryNotFoundError ('news');
    }
  return entry
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
  deleteEntry,
}
