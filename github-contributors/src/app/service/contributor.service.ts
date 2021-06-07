import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contributor } from '../model/contributor';

@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  api_url: string = 'https://api.github.com/repos/angular/angular/contributors';

  constructor(
    private http: HttpClient
  ) { }

  getAll(page: number, actualContributors: number): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(`${this.api_url}?page=${page}&per_page=${actualContributors}`);
  }

  get(login: string): Observable<Contributor> {
    return this.http.get<Contributor>(`${this.api_url}/${login}`);
  }

}
