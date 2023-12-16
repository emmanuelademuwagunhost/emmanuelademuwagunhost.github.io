export default class BandSiteApi {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseUrl = "https://project-1-api.herokuapp.com";
    }

async getComment(){
    try{
        const url= `${this.baseUrl}/comments?api_key=${this.apiKey}}`
        const response = await axios.get(url);
        const data = response.data;
        data.sort((a, b) => b.timestamp - a.timestamp);
        return data;
        }
        catch(error){
        console.error(error)
        }
    }

async postComment(comment){
        try{
            const url= `${this.baseUrl}/comments?api_key=${this.apiKey}}`
            const response = await axios.post(url, comment);
            const data = response.data;
            return data;
            }
            catch(error){
                console.error(error)
            }
     }  
 async getShows(){
        try{
            const url= `${this.baseUrl}/showdates?api_key=${this.apiKey}}`
            const response = await axios.get(url);
            const data = response.data;
            return data;
            }
            catch(error){
            console.error(error)
            }
        }
        
}