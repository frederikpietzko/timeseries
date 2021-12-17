import { NgModule } from '@angular/core';
import { BaseComponentsModule } from '@timeseries/base-components';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [BaseComponentsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
