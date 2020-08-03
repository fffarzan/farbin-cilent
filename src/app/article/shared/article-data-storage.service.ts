import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtcileDataStorageService {
  constructor(

  ) { }

  handleError(err: object) {
    console.error(err);

    return throwError('An error occured' + err);
  }

}