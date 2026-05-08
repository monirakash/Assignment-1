

# How Pick and Omit Utility Types Keep  Code DRY in TypeScript

## Introduction

Whilr you are working with TypeScript, developers often create large interfaces that contain many properties. But sometimes, we only need a few properties from that interface.

Writing new interfaces again and again can create redundant code.

To solve this problem, TypeScript provides two very useful utility types:

- `Pick`
- `Omit`


In this blog, we will learn how `Pick` and `Omit` work and how they help keep our code DRY (Don't Repeat Yourself).


---

 # Creating a Master Interface

Suppose we are building a dormitory management system.

We may have a large interface for a resident.

```ts
interface Resident {
    id: number;
    name: string;
    age: number;
    roomNumber: string;
    phone: string;
    guardianName: string;
    monthlyFee: number;
}
```

This is our master interface.

---

# Problem Without Pick and Omit

Different sections of the dormitory system may need different resident information.

For example:

- Security section needs only `name` and `roomNumber`
- Billing section needs `name` and `monthlyFee`

Without utility types, we may write:

```ts
interface SecurityResident {
    name: string;
    roomNumber: string;
}
```

And again:

```ts
interface BillingResident {
    name: string;
    monthlyFee: number;
}
```

This creates duplicate code.

---

# Using Pick

`Pick` allows us to select specific properties from an existing interface.

## Syntax

```ts
Pick<Type, Keys>
```

## Example

```ts
type SecurityResident = Pick<Resident, "name" | "roomNumber">;
```

This will create:

```ts
{
   name: string;
   roomNumber: string;
}
```

We reused the original interface instead of writing everything again.

---

# Using Omit

`Omit` removes specific properties from an interface.

## Syntax

```ts
Omit<Type, Keys>
```

## Example

```ts
type ResidentWithoutGuardian = Omit<Resident, "guardianName">;
```

This creates:

```ts
{
   id: number;
   name: string;
   age: number;
   roomNumber: string;
   phone: string;
   monthlyFee: number;
}
```

Everything stays except `guardianName`.

---

# Why Pick and Omit Are Useful

These utility types help developers:

- avoid duplicate code
- create reusable structures
- manage large systems easily
- update data faster

---


# How This Keeps Code DRY

Without `Pick` and `Omit`:

- same fields are written multiple times
- code becomes repetitive
- updating becomes difficult

With `Pick` and `Omit`:

- one master interface controls everything
- smaller interfaces are created easily
- code stays clean and reusable

This follows the DRY (Don't Repeat Yourself) principle perfectly.
---

# Conclusion

`Pick` and `Omit` are powerful utility types in TypeScript.
---

They help developers create smaller and specialized versions of a large interface without rewriting code.

- `Pick` selects needed properties
- `Omit` removes unwanted properties



That is why modern TypeScript developers use `Pick` and `Omit` very often in real projects.
