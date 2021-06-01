import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Contributor } from '../model/contributor';
import { Repo } from '../model/repo';
import { ContributorService } from '../service/contributor.service';
import { RepoService } from '../service/repo.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  contributor: Contributor = new Contributor;

  contributor$: Observable<Contributor> = this.activatedRoute.params.pipe(
    map(params => this.contributor = params.id)
  );

  repos$: Observable<Repo[]> = this.activatedRoute.params.pipe(
    switchMap(params => this.repoService.getAllRepos(params.id))
  );


  constructor(
    private contributorService: ContributorService,
    private repoService: RepoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.contributor$.subscribe(
      c => this.contributor = c
    )
  }

}
