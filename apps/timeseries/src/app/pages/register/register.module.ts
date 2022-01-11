import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseComponentsModule } from '@timeseries/base-components';
import { FeatureAuthModule } from '@timeseries/feature-auth';
import { RegisterPage } from './register.page';

@NgModule({
  imports: [CommonModule, BaseComponentsModule, FeatureAuthModule],
  declarations: [RegisterPage],
})
export class RegisterModule {}
