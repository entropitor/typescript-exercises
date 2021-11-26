import {typeAssert, IsTypeEqual} from 'type-assertions';
import {MealsWithIngredient, DaysWith} from './index'

type Menu = {
  Monday: ["Steak and lettuce", "Codd and tomatoes"],
  Tuesday: ["Chicken and carrots", "Peas and carrots"],
  Wednesday: ["Fish and chips", "Turkey and stuffing"],
  Thursday: ["Sushi and rice", "Wok and noodles"],
  Friday: ["Lamb and tomatoes", "Salmon and cheese"],
  Saturday: ["Spaghetti and pesto", "Penne and arrabiata"],
  Sunday: ["Fries and ketchup", "Fries and mayonnaise"],
}

type MealsWithSteak = MealsWithIngredient<"Steak">
typeAssert<IsTypeEqual<MealsWithSteak, "Steak and lettuce">>();

type MealsWithFries = MealsWithIngredient<"Fries">
typeAssert<IsTypeEqual<MealsWithFries, "Fries and ketchup" | "Fries and mayonnaise">>();

type MealsWithTomatoes = MealsWithIngredient<"tomatoes">
typeAssert<IsTypeEqual<MealsWithTomatoes,"Codd and tomatoes" | "Lamb and tomatoes">>();

type MealsWithHummus = MealsWithIngredient<"hummus">
typeAssert<IsTypeEqual<MealsWithHummus, never>>();

type DaysWithSteak = DaysWith<"Steak">
typeAssert<IsTypeEqual<DaysWithSteak, "Monday">>();

type DaysWithFries = DaysWith<"Fries">
typeAssert<IsTypeEqual<DaysWithFries, "Sunday">>();

type DaysWithTomatoes = DaysWith<"tomatoes">
typeAssert<IsTypeEqual<DaysWithTomatoes, "Monday" | "Friday">>();

type DaysWithHummus = DaysWith<"hummus">
typeAssert<IsTypeEqual<DaysWithHummus, never>>();
