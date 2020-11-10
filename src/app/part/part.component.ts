import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {
  @Output() paste = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit() {
  }

}