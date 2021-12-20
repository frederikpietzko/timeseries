import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
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
  imports: [CommonModule, TranslateModule],
  declarations: [...components],
  exports: [...components, CommonModule, TranslateModule],
})
export class BaseComponentsModule {}
