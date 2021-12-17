import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  LabelComponent,
  ErrorLabelComponent,
  TextInputComponent,
  PasswordInputComponent,
  SelectComponent,
  ButtonComponent,
} from './components';

const components = [
  LabelComponent,
  ErrorLabelComponent,
  TextInputComponent,
  PasswordInputComponent,
  SelectComponent,
  ButtonComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...components],
  exports: [...components],
})
export class BaseComponentsModule {}
