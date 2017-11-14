import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {WalletModule} from './wallet/wallet.module';
import {WalletService} from './services/wallet/wallet.service';
import {CoreService} from './services/core/core.service';
import {DashboardResolverService} from './services/resolvers/dashboard-resolver.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Application Modules
    DashboardModule,
    WalletModule,

    AppRoutingModule
  ],
  providers: [

    // SERVICES
    CoreService,
    WalletService,

    // RESOLVERS
    DashboardResolverService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
