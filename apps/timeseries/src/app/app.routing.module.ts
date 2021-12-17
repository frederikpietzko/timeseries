import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponentsModule } from '@timeseries/base-components';
import { LoginComponent } from './pages/login/login.component';
import { LoginModule } from './pages/login/login.module';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
