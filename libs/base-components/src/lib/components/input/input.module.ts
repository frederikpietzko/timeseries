import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TypographyModule } from '..';
import { PasswordInputComponent, TextInputComponent } from './text';
import { SelectComponent } from './select/select.component';

@NgModule({
  imports: [CommonModule, TypographyModule],
  declarations: [TextInputComponent, PasswordInputComponent, SelectComponent],
  exports: [TextInputComponent, PasswordInputComponent, SelectComponent],
})
export class InputModule {}
