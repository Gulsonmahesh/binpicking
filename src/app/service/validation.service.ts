import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  checkEmpty = (input: string) => {
    return (input === undefined || input === '' || input === null)
  }
}
