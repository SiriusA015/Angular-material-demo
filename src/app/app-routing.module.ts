import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: HomeComponent },
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
// @NgModule({
//   imports: [
//     RouterModule.forRoot([{ path: 'welcome', component: HomeComponent }], {}),
//   ],
//   exports: [RouterModule],
// })
export class AppRoutingModule {}
