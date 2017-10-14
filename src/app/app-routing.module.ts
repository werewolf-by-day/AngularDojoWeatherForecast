import { AppComponent } from './app.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DcComponent } from './dc/dc.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: 'burbank', component: BurbankComponent },
    { path: 'chicago', component: ChicagoComponent },
    { path: 'dallas', component: DallasComponent },
    { path: 'dc', component: DcComponent },
    { path: 'sanjose', component: SanjoseComponent },
    { path: 'seattle', component: SeattleComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);