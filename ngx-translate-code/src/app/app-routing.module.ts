import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
const routes: Routes = [
  
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
