

const { EntryNotFoundError } = require('../errors/entry-errors');
const entryRepository = require('../repositories/entry-repository')

const deleteEntryById = async (id) =>{

  const deletedEntry = await entryRepository.deleteEntryById(id)
  
  if(!deletedEntry)
  {
    throw new EntryNotFoundError()
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

const getModifiedNewsEntries = async(limit, page) => {
  
  const entries = await entryRepository.findAllNews(limit, page);

  const modifiedEntries = entries.result.map( ({id, name, image,content,type, createdAt }) => (
      {
        id,
        name,
        image,
        content,
        type, 
        createdAt
      }
    ) 
  )


  if( !page && !limit )return modifiedEntries;

  return { result: modifiedEntries, ...entries };
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
  deleteEntryById
}
