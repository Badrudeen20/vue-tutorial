import SongModel from "../model/song.js"


class SongController {
  static getAllDoc = async (req, res) => {
    try {
      const result = await SongModel.find()
      return res.json(result)
   
    } catch (error) {
      console.log(error)
    }
  }
  static postAllDoc = async (req, res) => {
    try {
      const {title,artist,duration,album} = req.body  
        const song = await SongModel.create({
            title,
            artist,
            duration,
            album,
        });

        if (song) {
          return res.status(201).json({
                    _id: song._id,
                    status:true
                });
          } else {
            res.status(400);
            throw new Error("User not found");
          }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
  }
}

export default SongController