import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { AuthComponent } from './shared/components/auth/auth.component'
import { About } from './shared/components/about/index'
import { Home } from './shared/components/home/index'
import { AuthService } from './shared/services/auth.service'
import { MainComponent } from './main/main.components'

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthService],
    children: [
      {
        path: '',
        component: Home
      }, {
        path: 'about',
        component: About,
      }
    ]
  }, {
    path: 'auth',
    component: AuthComponent
  }, {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
