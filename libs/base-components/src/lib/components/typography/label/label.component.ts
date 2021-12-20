import { Component, Input, OnInit } from '@angular/core';
import { StyleProvider } from '../../styling/styling.provider';

@Component({
  selector: 'pie-label',
  templateUrl: './label.component.html',
})
export class LabelComponent implements OnInit {
  @Input() label!: string;
  @Input() for!: string;

  constructor(readonly styleProvider: StyleProvider) {}

  ngOnInit(): void {}
}
