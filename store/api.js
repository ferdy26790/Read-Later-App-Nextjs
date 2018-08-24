import axios from 'axios'
export const getData = async () => {
  try{
    const response =await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=5&apiKey=1bca106cc3d84b92ac87c437194ab5e6')
    const data = await response.data.articles
    return data;
  }catch(err){
    console.log(err)
  }
}