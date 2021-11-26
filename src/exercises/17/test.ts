import {typeAssert, IsTypeEqual} from 'type-assertions';
import {ReturnTypeOf} from './index'

const foo = () => 42

// This should equal "number"
type FooReturn = ReturnTypeOf<typeof foo>
typeAssert<IsTypeEqual<FooReturn, number>>()

// This should equal "string"
type StringReturning = ReturnTypeOf<() => string>
typeAssert<IsTypeEqual<StringReturning, string>>()

// @ts-expect-error This should throw a type error
type HelloWorldReturn = ReturnTypeOf<"hello world">
