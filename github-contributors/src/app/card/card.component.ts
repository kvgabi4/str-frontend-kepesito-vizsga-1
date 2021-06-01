import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from '../model/contributor';
import { Repo } from '../model/repo';
import { ContributorService } from '../service/contributor.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() contributor: Contributor = new Contributor;

  constructor() { }

  ngOnInit(): void {
  }

}
