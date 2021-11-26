// Let's implement "ReturnType"
// The goal is to infer the return type of the function
const foo = () => 42

export type ReturnTypeOf<T> = any

// This should equal "number"
type FooReturn = ReturnTypeOf<typeof foo>

// This should equal "string"
type StringReturningFunction = ReturnTypeOf<() => string>

// @ts-expect-error This should throw a type error
type HelloWorldReturn = ReturnTypeOf<"hello world">
