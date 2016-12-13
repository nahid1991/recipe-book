import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredients } from '../ingredients';


@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Lionel', 'Messi', 'http://images.performgroup.com/di/library/omnisport/93/cb/lionelmessi-cropped_3j5uvqz4fz931s3bp3gowhsrh.jpg?t=2095907586&w=620&h=430', [
      new Ingredients('Appearance', 500),
      new Ingredients('Goals', 600)
    ]),
    new Recipe('Cristiano', 'Ronaldo', 'http://a.fssta.com/content/dam/fsdigital/fscom/Soccer/images/2015/02/08/020815-Soccer-Real-Madrid-Ronaldo-JW-PI.vadapt.980.high.69.jpg', [
      new Ingredients('Appearance', 400),
      new Ingredients('Goals', 650)
    ])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe:Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }
}
