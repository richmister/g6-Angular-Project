import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FooterComponent } from './footer/footer.component';
import { SearchMoviesFormComponent } from './search-movies-form/search-movies-form.component';
import { HeaderComponent } from './header/header.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    FooterComponent,
    SearchMoviesFormComponent,
    HeaderComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
