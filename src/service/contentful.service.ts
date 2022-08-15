import { Injectable } from '@angular/core';
import { from } from "rxjs";
import { createClient } from "contentful";


const CONFIG = {
  space: '3z392wln8jjc',
  accessToken: 'LexQP5EP23jRJ0RhN7819AVk9kzoJI_60WgGO2DTbo4',
  contentTypeIds: {lolChampions:'lolChampions',},
}

@Injectable({
  providedIn: 'root'
})


export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  getAllEntries() {
    const promise = this.client.getEntries();
    return from(promise);
  }
  
}
