import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseComponentsModule } from '@timeseries/base-components';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [CommonModule, BaseComponentsModule],
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent],
})
export class FeatureAuthModule {}
