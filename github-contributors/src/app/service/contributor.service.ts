import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contributor } from '../model/contributor';
import { Repo } from '../model/repo';

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


      // contributors.subscribe(
      //   response => {
      //     console.log(response.length)
      //     if (!response.length) {
      //       throw 'Invalid url';
      //     }
      //   }
      // );


      // if (contributors.length === undefined) {
      //   throw 'Invalid url';
      // }
    // } catch (error) {
    //   contributors = new Observable<Contributor[]>();
    //   // console.error('error', error);
    //   alert(error);
    // } finally {
    //   return contributors;
    // }
  }

  get(login: string): Observable<Contributor> {
    return this.http.get<Contributor>(`${this.api_url}/${login}`);
  }

}
