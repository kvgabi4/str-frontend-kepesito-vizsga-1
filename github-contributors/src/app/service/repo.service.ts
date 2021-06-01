import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from '../model/contributor';
import { Repo } from '../model/repo';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  user_url: string = 'https://api.github.com/users/';

  constructor(
    private http: HttpClient
  ) { }

  getAllRepos(login: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.user_url}${login}/repos`);
  }
}
