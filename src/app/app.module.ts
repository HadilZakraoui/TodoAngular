import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavComponent,
    FooterComponent,
    OffresEmploiComponentComponent,
    ArticlesComponentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule ,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
