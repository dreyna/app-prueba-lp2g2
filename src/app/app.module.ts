import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterModule, ROUTES} from '@angular/router';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
        BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
