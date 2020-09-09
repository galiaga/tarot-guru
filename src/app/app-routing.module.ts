import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cards', component: CardsComponent },
  { path: '**', component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
