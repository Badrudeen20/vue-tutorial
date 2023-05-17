import { ref } from 'vue'
import axios from 'axios'

export default function useSong() {
  const url = "http://localhost:8000/api/song"
  const songData = ref([])
  const error = ref(null)
  // Get All Students Data
  const getAllSong = async () => {
    songData.value = []
    error.value = null
    try {
      const res = await axios(url)
     // console.log(res.data)
      songData.value = res.data
    } catch (err) {
      error.value = err
      
    }
  }

  return {
    songData,
    error,
    getAllSong
  }
}