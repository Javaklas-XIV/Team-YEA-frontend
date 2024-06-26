import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {OverzichtComponent} from "./components/overzicht/overzicht.component";
import {MedewerkerOverzichtComponent} from "./components/medewerker-overzicht/medewerker-overzicht.component";
import {AccountbeheerComponent} from "./components/accountbeheer/accountbeheer.component";
import {authGuardClient} from "./guards/authGuardClient";
import {authGuardMedewerker} from "./guards/authGuardMedewerker";
import {MedewerkerVragenlijstBeheerComponent} from "./components/medewerker-vragenlijst-beheer/medewerker-vragenlijst-beheer.component";
import {MedewerkerIngevuldeBeheerComponent} from "./components/medewerker-ingevulde-beheer/medewerker-ingevulde-beheer.component";
import {AccountsbeheerComponent} from "./components/accountsbeheer/accountsbeheer.component";
import {VragenlijstInvullenComponent} from "./components/vragenlijst-invullen/vragenlijst-invullen.component";
import {AppComponent} from "./app.component";
import {AccountbeheerClientComponent} from "./components/accountbeheer-client/accountbeheer-client.component";
import {
  VragenlijstenOverzichtClientComponent
} from "./components/vragenlijsten-overzicht-client/vragenlijsten-overzicht-client.component";
import {
  VragenlijstInvullenMedewerkerComponent
} from "./components/vragenlijst-invullen-medewerker/vragenlijst-invullen-medewerker.component";


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: OverzichtComponent, canActivate: [authGuardClient]},
  {path: 'admin/accountbeheer', component: AccountbeheerComponent, canActivate: [authGuardMedewerker]},
  {path: 'admin/accountbeheer/:ID', component: AccountsbeheerComponent, canActivate: [authGuardMedewerker]},
  {path: 'admin/vragenlijstbeheer', component: MedewerkerVragenlijstBeheerComponent, canActivate: [authGuardMedewerker]},
  {path: 'admin/ingevuldebeheer', component: MedewerkerIngevuldeBeheerComponent, canActivate: [authGuardMedewerker]},
  {path: 'admin', component: MedewerkerOverzichtComponent, canActivate: [authGuardMedewerker]},
  {path: 'account', component: AccountbeheerClientComponent, canActivate: [authGuardClient]},
  {path: 'uwvragenlijsten', component: VragenlijstenOverzichtClientComponent, canActivate: [authGuardClient]},
  {path: 'vragenlijst/:id', component: VragenlijstInvullenComponent},
  {path: 'vragenlijstMedewerker/:id', component: VragenlijstInvullenMedewerkerComponent}
];
``
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

