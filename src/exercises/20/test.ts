import {typeAssert, IsTypeEqual} from 'type-assertions';
import {DaysWith, IngredientsOn} from './index'

type Menu = {
  Monday: ["Steak and lettuce", "Codd and tomatoes"]
  Tuesday: ["Chicken and carrots", "Peas and carrots"]
  Wednesday: ["Fish and chips", "Turkey and stuffing"]
  Thursday: ["Sushi and rice", "Wok and noodles"]
  Friday: ["Lamb and tomatoes", "Salmon and cheese"]
  Saturday: ["Spaghetti and pesto", "Penne and arrabiata"]
  Sunday: ["Fries and ketchup", "Fries and mayonnaise"]
}
// type IngredientsOnMonday = "Steak" | "lettuce" | "Codd" | "tomatoes"
type IngredientsOnMonday = IngredientsOn<"Monday">
typeAssert<IsTypeEqual<IngredientsOnMonday, "Steak" | "lettuce" | "Codd" | "tomatoes">>();

// type IngredientsOnSunday = "Fries" | "ketchup" | "mayonnaise"
type IngredientsOnSunday = IngredientsOn<"Sunday">
typeAssert<IsTypeEqual<IngredientsOnSunday, "Fries" | "ketchup" | "mayonnaise">>();

/*
 *
 *
 *
 */

// type DaysWithSteak = "Monday"
type DaysWithSteak = DaysWith<"Steak">
typeAssert<IsTypeEqual<DaysWithSteak, "Monday">>();

// type DaysWithFries = "Sunday"
type DaysWithFries = DaysWith<"Fries">
typeAssert<IsTypeEqual<DaysWithFries, "Sunday">>();

// type DaysWithTomatoes = "Monday" | "Friday"
type DaysWithTomatoes = DaysWith<"tomatoes">
typeAssert<IsTypeEqual<DaysWithTomatoes, "Monday" | "Friday">>();

// type DaysWithHummus = never
type DaysWithHummus = DaysWith<"hummus">
typeAssert<IsTypeEqual<DaysWithHummus, never>>();

