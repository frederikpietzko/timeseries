import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StyleProvider } from '../../../styling/styling.provider';
import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'pie-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends BaseButtonComponent implements OnInit {
  constructor(readonly styleProvider: StyleProvider) {
    super();
  }

  ngOnInit(): void {}
}
