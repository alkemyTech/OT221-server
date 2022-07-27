const { EntryValidationError } = require("../errors/entry-errors");
const entryService = require("../services/entry-service");
const { checkFileAndUpload } = require("../services/fileServices");
const { uploadFile } = require("../services/s3-service");

class EntryDto {
  //id property can be null because received data can be a new record
  constructor({ id, title, image, content, category, type }) {
    (this.id = id),
      (this.name = title),
      (this.image = image),
      (this.content = content),
      (this.categoryId = category);
    this.type = type;
  }

  validate() {
    let msg = "";

    if (!this.name) msg = msg + " Título,";

    if (!this.image) msg = msg + " Imagen,";

    if (!this.content) msg = msg + " Contenido,";

    if (!this.categoryId) msg = msg + " Categoría,";

    if (msg !== "") {
      const finalMsg = msg.slice(0, -1);
      throw new EntryValidationError(`Llenar campos vacíos:${finalMsg}.`);
    }
  }
}

const deleteEntry = async (req, res, next) => {
const entryId = Number(req.params.id);

 

  try {
    const deletedEntry = await entryService.deleteEntryById(entryId);
    res.status(200).json({ deleted: deletedEntry });
      
  } catch (err) {
    next(err);
  }
};

const updateNewsEntry = async (req, res, next) => {
  console.log(req.body)
  if (req.file) {
    var image = await checkFileAndUpload(req.file);
  }else{
    var image = req.body.image
  }
  console.log(image);

  const newsEntryDto = {
    ...req.body,
    id: req.params.id,
    image: image,
    type: "news",
  };

  try {
    //newsEntryDto.validate();
    const entry = await entryService.updateEntry(newsEntryDto);
    res.json({ entry: entry });
  } catch (err) {
    next(err);
  }
};

const getNewsEntries = async (req, res, next) => {

  let page, limit;

  if( req.params.page && req.params.limit ){
    page = Number(req.params.page)
    limit = Number(req.params.limit)
  }
  try {
    const entries = await entryService.getModifiedNewsEntries(limit, page);
      res.status(200).json({ entries });
  } catch (err) {
    next(err);
  }
};

const getNewsEntryById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const entries = await entryService.getNewsById(id);
    res.status(200).json({
      status: true,
      message: "Request result",
      payload: entries,
    });
  } catch (err) {
    next(err);
  }
};

const createNewEntry = async (req, res, next) => {
  console.log(req.file)

  //const key = "59590b6bc1614a14e4c0b129dbf62346"

  // Uploads image to AWS S3 service and extract de key value
  const { key } = await uploadFile(req.file);

  // const key = 'dfe64q3jhasd3jjafrdkj';

  const entrySaved = await entryService.createEntry({
    ...req.body,
    image: key,
    type: "news",
    categoryId: "1"
  });

  res.status(201).json({
    ok: true,
    entry: entrySaved,
  });
};

module.exports = {
  getNewsEntries,
  getNewsEntryById,
  updateNewsEntry,
  createNewEntry,
  deleteEntry,
};
