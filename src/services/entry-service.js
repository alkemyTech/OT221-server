
const entryRepository = require('../repositories/entry-repository')



const updateEntry = async (newContent) =>{
   
   const entry = await entryRepository.updateEntry(newContent)
    
    if( entry ){
        throw new Error (`La entrada que desea modificar no existe !!!`);
    }
        return entry
    
}


const getModifiedNewsEntries = async() => {
  const entries = await findAllNews();

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

const getNewsById=async(id)=>{
  return await findById(id)
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
}
