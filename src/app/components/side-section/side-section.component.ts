import {Component, OnInit} from '@angular/core';
import {DataBaseService} from '../../services/data-base.service';

@Component({
  selector: 'app-side-section',
  templateUrl: './side-section.component.html',
  styleUrls: ['./side-section.component.scss']
})
export class SideSectionComponent implements OnInit {

  constructor(public db: DataBaseService) {
  }

  ngOnInit(): void {
  }
}
