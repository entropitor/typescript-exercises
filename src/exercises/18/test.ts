
import {typeAssert, IsTypeEqual} from 'type-assertions';
import {TransformMeal, TransformedMenu} from './index'

// type StructuredSteak = {
//   main: "Steak";
//   side: "lettuce";
// }
type StructuredSteak = TransformMeal<"Steak and lettuce">
typeAssert<IsTypeEqual<StructuredSteak, {
  main: "Steak";
  side: "lettuce";
}>>();


type ExpectedTransformedMenu = {
  Monday: {
      main: "Steak";
      side: "lettuce";
  } | {
      main: "Codd";
      side: "tomatoes";
  },
  Tuesday: {
      main: "Chicken";
      side: "carrots";
  } | {
      main: "Peas";
      side: "carrots";
  },
  Wednesday: {
      main: "Fish";
      side: "chips";
  } | {
      main: "Turkey";
      side: "stuffing";
  },
  Thursday: {
      main: "Sushi";
      side: "rice";
  } | {
      main: "Wok";
      side: "noodles";
  },
  Friday: {
      main: "Lamb";
      side: "tomatoes";
  } | {
      main: "Salmon";
      side: "cheese";
  },
  Saturday: {
      main: "Spaghetti";
      side: "pesto";
  } | {
      main: "Penne";
      side: "arrabiata";
  },
  Sunday: {
      main: "Fries";
      side: "ketchup";
  } | {
      main: "Fries";
      side: "mayonnaise";
  }
}
typeAssert<IsTypeEqual<ExpectedTransformedMenu, TransformedMenu>>();
