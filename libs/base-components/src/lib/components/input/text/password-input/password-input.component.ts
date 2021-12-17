import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StyleProvider } from '../../../styling/styling.provider';
import { BaseInput } from '../../base-input.component';

@Component({
  selector: 'pie-password-input',
  templateUrl: './password-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordInputComponent extends BaseInput implements OnInit {
  constructor(readonly styleProvider: StyleProvider) {
    super();
  }

  ngOnInit(): void {}
}
