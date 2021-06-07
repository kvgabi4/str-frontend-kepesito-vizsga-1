import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { fromEvent, Observable } from 'rxjs';
import { Contributor } from '../model/contributor';
import { ContributorService } from '../service/contributor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  page: number = 1
  actualContributors: number = 25;

  // contributors$: Observable<Contributor[]> = this.contributorService.getAll(this.page, this.actualContributors);
  contributors: Contributor[] = [];

  eventSubscription = fromEvent(window, "scroll").subscribe(() => {
    if (this.bottomReached()) {
      this.contributorService.getAll(this.page, this.actualContributors).subscribe(
        response => this.contributors = response
        );
      this.actualContributors += 25;
      // this.contributors$ = this.contributorService.getAll(this.page, this.actualContributors);
    }
  }, error => {
    this.toastrService.error('Error loading contributors', 'Major Error');
  });

  constructor(
    private contributorService: ContributorService,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.contributorService.getAll(this.page, this.actualContributors).subscribe(
      response => {
        this.contributors = response;
        window.scroll();
      }, error => {
        this.toastrService.error('Error loading contributors', 'Major Error');
      }
    );
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }

  // onScroll() {
  //   this.actualContributors += 25;
  //   this.contributors$ = this.contributorService.getAll(this.page, this.actualContributors);
  // }

}
