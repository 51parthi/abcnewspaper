import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  api_key="234305a0b117425e80cb5cf9db2f7ae6";

  constructor(private http :HttpClient) { }

  initSources(){   //Observable:any
    return this.http.get(`https://newsapi.org/v2/sources?language=en&apiKey=`+ this.api_key);
     }
    //  getArticlesByid(Source : string){
    //   return this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=` + Source +`&apiKey=`+ this.api_key)
    //  }
     intiArticles(){
      return this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=` + this.api_key)
     }
     getArticlesByID(source: String) {
      return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
    }
   
}
