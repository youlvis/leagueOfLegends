import { Injectable } from '@angular/core';
import { Observable, from, map } from "rxjs";
import { Entry, createClient } from "contentful";


const CONFIG = {
  space: '3z392wln8jjc',
  accessToken: 'LexQP5EP23jRJ0RhN7819AVk9kzoJI_60WgGO2DTbo4',
  contentTypeIds: {
    champions: 'lolChampions'
  }
}

@Injectable({
  providedIn: 'root'
})


export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getPosts(query?: object): Observable<Entry<any>[]> {
    return from(
      this.cdaClient.getEntries({
        ...Object,
        content_type: CONFIG.contentTypeIds.champions,
      })
    ).pipe(map(posts=> posts.items)) 
  }

}
