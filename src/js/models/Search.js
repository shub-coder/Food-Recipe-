import axios from 'axios';
import { url } from '../config';
export default class Search{//WE USE DEFAULT EXPORT WHEN IT IS TO BE USED MORE THAN ONCE
     constructor(query){//DEFAULT CLASS CONSTRUCTED IN THIS WAY
         this.query = query;
     }

       async getResults() {//IT MAY TAKE TIME TO FETCH DATA FROM THE SERVER SO NOT TO STOP THE PAGE FROM LOADING ATA PARTICULAR POINT, WE USE ASYNC FUNCTION
        try{
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            
            this.result = res.data.recipes;
             //console.log(this.result);
        }catch(error){
            alert(error);
        }
         
        } 
}
