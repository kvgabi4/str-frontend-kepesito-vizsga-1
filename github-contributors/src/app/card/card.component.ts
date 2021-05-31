import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Contributor } from '../model/contributor';

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
