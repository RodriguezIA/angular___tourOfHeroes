import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';


const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "heroes", component: HeroesComponent},
  {path: "dashboard", component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent },
  {path: "**", redirectTo: "/inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
