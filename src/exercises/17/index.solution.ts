// Let's implement "ReturnType"
// The goal is to infer the return type of the function
const foo = () => 42

export type ReturnTypeOf<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never

// This should equal "number"
type FooReturn = ReturnTypeOf<typeof foo>

// This should equal "string"
type StringReturningFunction = ReturnTypeOf<() => string>

// @ts-expect-error This should throw a type error
type HelloWorldReturn = ReturnTypeOf<"hello world">

// This is so common so it just exists as "ReturnType":
type FooReturn2 = ReturnType<typeof foo>
type ReturnTypeOf2<T extends (...args: any[]) => any> = ReturnType<T>
