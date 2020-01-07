import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  ui = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getRecords() {
    return this.http.get(`${this.ui}/records`);
  }

  getRecordById(id) {
    return this.http.get(`${this.ui}/records/${id}`);
  }

  addRecord(artist, title, genre, rating) {
    const record = {
      artist: artist,
      title: title,
      genre: genre,
      rating: rating
    }
    return this.http.post(`${this.ui}/records/add`, record);
  }

  updateRecord(id, artist, title, genre, rating) {
    const record = {
      id: id,
      artist: artist,
      title: title,
      genre: genre,
      rating: rating
    }
    this.http.post(`${this.ui}/records/update/id`, record);
  }

  deleteRecord(id) {
    return this.http.get(`${this.ui}/records/delete/${id}`);
  }

}
