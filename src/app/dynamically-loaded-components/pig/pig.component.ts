import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pig',
  templateUrl: './pig.component.html',
  styleUrls: ['./pig.component.scss']
})
export class PigComponent implements OnInit {

  public pigName: string = 'Piggie';

  constructor() { }

  ngOnInit(): void {
  }

}
