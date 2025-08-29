import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  filename: String,
  filepath: String,
  filetype: String,
  size: Number,
  uploadedAt: {
    type: Date,
    default: Date.now
  },
  userId: String // for future: tie with user auth
});

export default mongoose.model('Media', mediaSchema);
