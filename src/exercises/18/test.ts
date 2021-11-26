
import {typeAssert, IsTypeEqual} from 'type-assertions';
import {TransformMeal, TransformedMenu} from './index'
import {TransformedMenu as TransformedMenuSolution} from './index.solution'

// type StructuredSteak = {
//   main: "Steak";
//   side: "lettuce";
// }
type StructuredSteak = TransformMeal<"Steak and lettuce">
typeAssert<IsTypeEqual<StructuredSteak, {
  main: "Steak";
  side: "lettuce";
}>>();


typeAssert<IsTypeEqual<TransformedMenuSolution, TransformedMenu>>();
