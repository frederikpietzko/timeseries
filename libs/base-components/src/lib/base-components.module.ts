import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TypographyModule } from './components';
import { ControlsModule } from './components/controls/controls.module';
import { InputModule } from './components/input/input.module';

@NgModule({
  imports: [CommonModule, InputModule, ControlsModule, TypographyModule],
  exports: [InputModule, ControlsModule, TypographyModule],
})
export class BaseComponentsModule {}
