import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Lionel', 'Messi', 'http://images.performgroup.com/di/library/omnisport/93/cb/lionelmessi-cropped_3j5uvqz4fz931s3bp3gowhsrh.jpg?t=2095907586&w=620&h=430', []),
    new Recipe('Cristiano', 'Ronaldo', 'http://a.fssta.com/content/dam/fsdigital/fscom/Soccer/images/2015/02/08/020815-Soccer-Real-Madrid-Ronaldo-JW-PI.vadapt.980.high.69.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
