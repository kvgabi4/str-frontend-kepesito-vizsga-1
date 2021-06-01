import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contributor } from '../model/contributor';
import { Repo } from '../model/repo';

@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  api_url: string = 'https://api.github.com/repos/angular/angular/contributors?page=1&per_page=25';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(this.api_url);
  }

  get(login: string): Observable<Contributor> {
    return this.http.get<Contributor>(`${this.api_url}/${login}`);
  }

}
