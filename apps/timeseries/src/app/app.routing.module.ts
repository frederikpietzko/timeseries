import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: '**',
    component: LoginPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
