import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from '../model/contributor';
import { ContributorService } from '../service/contributor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  contributors$: Observable<Contributor[]> = this.contributorService.getAll();

  constructor(
    private contributorService: ContributorService,
  ) { }

  ngOnInit(): void {
  }

}
