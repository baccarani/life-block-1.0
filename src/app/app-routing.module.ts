import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HealthCareComponent } from "./health-care/health-care.component";
import { HomeComponent } from "./home/home.component";
import { InsuranceComponent } from "./insurance/insurance.component";
import { LoginComponent } from "./login/login.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent },
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'insurance', component: InsuranceComponent },
    { path: 'health-care', component: HealthCareComponent },
    { path: 'login', component: LoginComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}