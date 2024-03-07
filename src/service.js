
import axios from "axios";
const searchImages =async (term) => {
   const response=await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: 'Client-ID SyKN0E0vhvmss2SOVAUBgU2odOs1MyKnSyGIjX9I07Y',
      },
      params: { query: term },
    });
    return response.data.results;
  };


  export default searchImages;