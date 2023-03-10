import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food =>food.id)!;

  }


  getAllFoodByTag(tag:string):Foods[] {
    return tag == "All" ?
     this.getAll() : this.getAll().filter(food => food.tags?.
      includes(tag));
 }
 getAllTags():Tag[] {
  return [
    { name: 'All', count: 10 },
    { name: 'FastFood', count: 4 },
    { name: 'Lunch', count: 4 },
    { name: 'SlowFood', count: 3 },
    { name: 'Fries', count: 3 },
    { name: 'Spaggetis', count: 2 },
    { name: 'Eggs', count: 1 },
        
  ];
 
    
 }

  getAll(): Foods[] {
    return [
   {
    id:1,
    name:'sandwich',
    price:350.45,
    cookTime:'10-20min',
    favorite:true,
    origins:['Belguim','France'],
    star:5.0,
    imageUrl:'/assets/food-1.jpg',
    tags:['fastFood','fry'],
  },
  {
    id:9,
    name:'chicken fries',
    price:600.45,
    cookTime:'50-1hr',
    favorite:false,
    origins:['Kenya','Nyeri'],
    star:4.0,
    imageUrl:'/assets/food-9.jpg',
    tags:['fastFood','fry'],
  },
  {
    id:3,
    name:'michikaki & fries',
    price:400,
    cookTime:'40-55min',
    favorite:true,
    origins:['Mombasa','Kenya'],
    star:3.4,
    imageUrl:'/assets/food-3.jpg', 
    tags:['fastFood','fry'],
  },
  {
    id:4,
    name:'Eggs mixture',
    price:850,
    cookTime:'20-25min',
    favorite:true,
    origins:['States','France'],
    star:2.8,
    imageUrl:'/assets/food-4.jpg',
    tags:['fastFood','fry'],
  },
  {
    id:5,
    name:'Weed pork',
    price:600,
    cookTime:'50-1/30min',
    favorite:false,
    origins:['Egypt','home'],
    star:3.9,
    imageUrl:'/assets/food-5.jpg',
    tags:['fastFood','fry'],
  },
  {
    id:6,
    name:'veg & fries',
    price:300.50,
    cookTime:'40-1hr',
    favorite:true,
    origins:['Newyork','States'],
    star:2.1,
    imageUrl:'/assets/food-6.jpg',
    tags:['fastFood','fry'],
  },
  {
    id:7,
    name:'macoloni',
    price:350,
    cookTime:'30-35min',
    favorite:false,
    origins:['China','Huwai'],
    star:4.5,
    imageUrl:'/assets/food-7.jpg',
    tags:['fastFood','fry'],
  },
  {
    id:8,
    name:'spaggeti',
    price:200,
    cookTime:'25-30min',
    favorite:false,
    origins:['Nairobi','Kenya'],
    star:3.1,
    imageUrl:'/assets/food-8.jpg',
    tags:['fastFood','fry'],
  },
  {
    id:2,
    name:'scones $ lemonade',
    price:450,
    cookTime:'20min',
    favorite:true,
    origins:['Italy','France'],
    star:1.5,
    imageUrl:'/assets/food-2.jpg',
    tags:['fastFood','fry'],
  },
  {
    id:10,
    name:'deep fried meet',
    price:550,
    favorite:true,
    origins:['kenya','Kikuyu'],
    cookTime:'55-1hr',
    star:4.5,
    imageUrl:'/assets/food-10.jpg',
    tags:['fastFood','fry'],
  },
  
  
  
    ];
  }
}


// '/assets/food-1.jpg',
// '/assets/food-2.jpg',
// '/assets/food-3.jpg',
// '/assets/food-4.jpg',
// '/assets/food-5.jpg',
// '/assets/food-6.jpg',
// '/assets/food-7.jpg',
// '/assets/food-8.jpg'