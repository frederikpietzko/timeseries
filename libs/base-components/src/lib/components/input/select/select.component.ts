import { Component, OnInit } from '@angular/core';
import { StyleProvider } from '../../styling/styling.provider';
import { BaseInput } from '../base-input.component';

@Component({
  selector: 'pie-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent extends BaseInput implements OnInit {
  constructor(readonly styleProvider: StyleProvider) {
    super();
  }

  ngOnInit(): void {}
}
