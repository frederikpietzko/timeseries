import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseComponentsModule } from '@timeseries/base-components';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, BaseComponentsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class FeatureAuthModule {}
