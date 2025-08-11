import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScrunchiesService {

  constructor(private http: HttpClient) { }

  getScrunchies() {
    return this.http.get<any>('assets/scrunchies.json');
  }
}
