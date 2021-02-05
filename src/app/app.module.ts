import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TimetableComponent } from './timetable/timetable.component';
import { HttpClientModule } from '@angular/common/http';
import { TopicListComponent } from './topic-list/topic-list.component';
import { ToastrModule } from 'ngx-toastr';
import { MatTreeModule } from '@angular/material/tree';
import { ArchiveMeetingsComponent } from './archive-meetings/archive-meetings.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponentComponent } from './auth-button-component/auth-button-component.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ExtendedModule, FlexLayoutModule} from '@angular/flex-layout';
import { FlexTestComponent } from './flex-test/flex-test.component';
import { MojeComponent } from './moje/moje.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NavigationBarComponent,
    TimetableComponent,
    TopicListComponent,
    ArchiveMeetingsComponent,
    AuthButtonComponentComponent,
    AccountDetailsComponent,
    PageNotFoundComponent,
    FlexTestComponent,
    MojeComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    LayoutModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-center-center',
      preventDuplicates: true,
    }),
    MatTreeModule,
    AuthModule.forRoot({
      domain: 'meet-up.eu.auth0.com',
      clientId: 'tym08cl1aS817s4gowKeKvbSWmEyzUbO',
    }),
    ExtendedModule,
    FlexLayoutModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
