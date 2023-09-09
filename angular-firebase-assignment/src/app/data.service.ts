import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/data.json'; // Update the path to your data file

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
}
