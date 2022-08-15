import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

import { from } from "rxjs";


const CONFIG = {
  space: '3z392wln8jjc',
  accessToken:
    'LexQP5EP23jRJ0RhN7819AVk9kzoJI_60WgGO2DTbo4',

  contentTypeIds: {
    lolChampions: 'lolChampions',
  },
};



@Injectable()
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });


  constructor() { }

  getChampions(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.lolChampions
    }, query))
    .then(res => res.items);
  }

}
