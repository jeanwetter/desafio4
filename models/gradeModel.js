export default (mongoose) => {
  const gradesSchema = mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    value: {
      type: Number,
      require: true,
      min: 0,
    },
    lastModified: {
      type: String,
    },
  });

  gradesSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;

    return object;
  });

  const gradeModel = mongoose.model('grade', gradesSchema, 'grade');

  return gradeModel;
};
