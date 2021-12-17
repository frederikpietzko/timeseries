import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { StyleProvider } from '../../../styling/styling.provider';
import { BaseInput } from '../../base-input.component';

@Component({
  selector: 'pie-text-input',
  templateUrl: './text-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent extends BaseInput implements OnInit {
  @Input() type: 'text' | 'email' = 'text';
  constructor(readonly styleProvider: StyleProvider) {
    super();
  }

  ngOnInit(): void {}
}
