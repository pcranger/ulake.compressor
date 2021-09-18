import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllfilesComponent } from './allfiles/allfiles.component';
import { AuthGuard } from './auth.guard';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SpecialEventsComponent } from './special-events/special-events.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/allfiles',
    pathMatch:'full'
  },
  {
    path:'allfiles',
    component:AllfilesComponent
  },
  {
    path: 'search',
    component:SearchComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path:'special',
    component:SpecialEventsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
