import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseComponentsModule } from '@timeseries/base-components';
import { FeatureAuthModule } from '@timeseries/feature-auth';
import { LoginPage } from './login.page';

@NgModule({
  imports: [CommonModule, BaseComponentsModule, FeatureAuthModule],
  declarations: [LoginPage],
})
export class LoginModule {}
