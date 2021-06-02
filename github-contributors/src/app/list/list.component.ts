import { Component, OnInit } from '@angular/core';
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

  contributors$: Observable<Contributor[]> = this.contributorService.getAll();

  // notEmptyPost = true;
  // notscrolly = true;

  constructor(
    private contributorService: ContributorService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    // /** spinner starts on init */
    //   this.spinner.show();

    //   setTimeout(() => {
    //     /** spinner ends after 5 seconds */
    //     this.spinner.hide();
    //   }, 5000);
  }

  onScroll() {
    // console.log('scrolled!!');
    // if (this.notscrolly && this.notEmptyPost) {
    //   this.spinner.show();
    //   setTimeout(() => {
    //     /** spinner ends after 5 seconds */
    //     this.spinner.hide();
    //   }, 2000);
    //   this.notscrolly = false;
    // }
      /** spinner starts on init */
      this.spinner.show();

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 1000);
  }

}
