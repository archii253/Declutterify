import Media from '../models/Media.js';

export const uploadMedia = async (req, res) => {
  try {
    const savedFiles = await Promise.all(req.files.map(file => {
      const media = new Media({
        filename: file.originalname,
        filepath: file.path,
        filetype: file.mimetype,
        size: file.size
      });
      return media.save();
    }));
    res.status(201).json({ message: 'Files uploaded', data: savedFiles });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllMedia = async (req, res) => {
  try {
    const media = await Media.find().sort({ uploadedAt: -1 });
    res.status(200).json(media);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
