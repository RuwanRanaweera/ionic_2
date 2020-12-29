import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [

    {
      id: 'r1',
      title: 'Launch',
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fblack%2520wallpaper%2F&psig=AOvVaw21hiJH0lAvAqFWqx_ZwQeq&ust=1596086323718000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjtpoTb8eoCFQAAAAAdAAAAABAD',
      ingredients: ['dfdf', 'dfdfddf', 'dfdfd df', 'dfdfddfdf'] },


    {
      id: 'r2',
      title: 'Dinner',
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fjoker&psig=AOvVaw21hiJH0lAvAqFWqx_ZwQeq&ust=1596086323718000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjtpoTb8eoCFQAAAAAdAAAAABAI',
      ingredients: ['dfdfjhj', 'dfdfddfjhj', 'dfdfd dfjh', 'dfdfddfdfthr']

    }
  ];


  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
}

getRecipe(recipeId: string) {
  return {
    ...this.recipes.find(recipe => {
    return recipe.id === recipeId;
  })
};
}
}
