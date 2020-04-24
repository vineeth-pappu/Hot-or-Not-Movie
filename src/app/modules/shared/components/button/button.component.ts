import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {

  @Input() disabled: boolean = false;

  @Input() fullWidth: boolean = false;

  @Input() outline: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
