** When working with TypeScript, A question arises about the difference between types and interfaces. There are a lot of differences between types and interfaces. The basic difference will be

1)  Interfaces are extendable and can be merged, but type aliases cannot be merged; they can be extended using intersections.

2) Type will use both primitive and non primitive data, but interfaces use only non-primitive data.


** keyof is a keyword that is used to extend a data type to create a type literal. For example,

interface User {
  id: number;
  name: string;
  isActive: boolean;
}
type UserKeys = keyof User;  // "id" | "name" | "isActive"

If we hover on the UserKeys then we see that the all types of User will create a type literal same as the User.
