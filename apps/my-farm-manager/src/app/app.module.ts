import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HeaderComponent } from '../../../../libs/header/src/lib/header/header.component';
import { ButtonComponent } from '../../../../libs/shared/ui/src/lib/button/button.component';
import { TasksComponent } from '../../../../libs/tasks/task/src/lib/tasks/tasks.component';
import { TaskItemComponent } from '../../../../libs/tasks/task-item/src/lib/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from '../../../../libs/tasks/add-task/src/lib/component/add-task/add-task.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AboutComponent } from '../../../../libs/about/src/lib/component/about/about.component';
import { FooterComponent } from '../../../../libs/about/src/lib/component/footer/footer.component';
import { SubscriptionComponent } from '../../../../libs/subscription/src/lib/component/subscription/subscription.component';
import { LoginComponent } from '../../../../libs/login/src/lib/component/login/login.component';

const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    SubscriptionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
