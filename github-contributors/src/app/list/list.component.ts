import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
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

  contributors$: Observable<Contributor[]> = this.contributorService.getAll(this.page, this.actualContributors);


  constructor(
    private contributorService: ContributorService,
    private spinner: NgxSpinnerService,
    private router: Router,
  ) { }

  ngOnInit(): void {}

  onScroll() {
    // console.log('scrolled!!');
    this.actualContributors += 25;
    this.contributors$ = this.contributorService.getAll(this.page, this.actualContributors)
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate([this.router.url]);
    // this.contributors$.subscribe(
    //   contribs => {
    //     this.contributors = contribs
    //   },

    // /** spinner starts on init */
      // this.spinner.show();

      // setTimeout(() => {
      //   /** spinner ends after 5 seconds */
      //   this.spinner.hide();
      // }, 1000);
  }

}
