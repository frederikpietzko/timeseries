import { NgModule } from '@angular/core';
import { LabelComponent } from './label/label.component';
import { ErrorLabelComponent } from './error-label/error-label.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [LabelComponent, ErrorLabelComponent],
  exports: [LabelComponent, ErrorLabelComponent],
})
export class TypographyModule {}
