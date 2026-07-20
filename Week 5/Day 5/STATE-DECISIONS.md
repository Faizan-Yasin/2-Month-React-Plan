# State Management Decisions



This document describes how our team chooses the right state management solution.



---



## Decision Flow



```text

Need State?

      │

      ▼



Used in only one component?



      │

 ┌────┴────┐

 │         │

Yes       No

 │         │

 ▼         ▼

useState   Shared only with nearby components?

               │

         ┌─────┴─────┐

         │           │

        Yes         No

         │           │

         ▼           ▼

 Lift State /     Complex state transitions?

 Context API            │

                  ┌─────┴─────┐

                  │           │

                 Yes         No

                  │           │

                  ▼           ▼

             useReducer    Server Data?

                                │

                          ┌─────┴─────┐

                          │           │

                         Yes         No

                          │

                          ▼

            TanStack Query / RTK Query

                                │

                                ▼

                  Large Global Client State?

                                │

                          ┌─────┴─────┐

                          │           │

                         Yes         No

                          │

                          ▼

              Redux Toolkit / Zustand

```



---



## Guidelines



### useState



Use for:



- Input fields

- Modal visibility

- Dropdown state

- Small local UI state



---



### Lift State / Context



Use when:



- A few nearby components need the same state.

- Avoid unnecessary global stores.



---



### useReducer



Use when:



- State transitions are complex.

- Many actions update the same state.



Examples:



- Multi-step forms

- Wizards

- Reducer-based business logic



---



### TanStack Query / RTK Query



Use for:



- API requests

- Server data

- Caching

- Background refetching



---



### Redux Toolkit / Zustand



Use for:



- Large global client state

- Authentication

- Shopping cart

- Permissions

- Application-wide settings



Redux Toolkit is preferred for enterprise-scale applications.



Zustand is preferred for lightweight global state with minimal boilerplate.


# State Management Anti-Patterns

## 1. Server Data in useState

Wrong:
- Fetching API data with useState + useEffect everywhere.

Correct:
- Use RTK Query or TanStack Query.

---

## 2. Everything in Global State

Wrong:
- Putting every UI state into Redux or Zustand.

Correct:
- Keep local UI state in useState.

---

## 3. Redundant Derived State

Wrong:
- Storing values that can be calculated from existing state.

Correct:
- Compute derived values when needed.

---

## 4. Calling setState Inside Render

Wrong:
- Updating state during rendering.

Correct:
- Update state in event handlers or useEffect.

---

## 5. Mutating State Directly

Wrong:
- Changing objects or arrays directly.

Correct:
- Create a new object/array or use Immer.

