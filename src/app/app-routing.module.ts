 import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: AppComponent },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule' 
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
]; 

// const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, useHash: true });

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
