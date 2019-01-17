import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeComponent } from './heroe/heroe.component';
import { SearchHeroeComponent } from './search-heroe/search-heroe.component';
import { TemplateComponent } from '../formularios/components/template/template.component';

// Services

const routes: Routes = [
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'search/:termino', component: SearchHeroeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'formTemplate', component: TemplateComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
