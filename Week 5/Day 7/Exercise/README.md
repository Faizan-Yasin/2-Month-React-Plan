# Week 5 Journal

## What I Learned

This week I learned different React state management solutions.

* Redux Toolkit
* RTK Query
* Redux Persist
* Zustand
* Jotai
* React Hook Form
* Zod Validation

I also learned when to use local state, Context API, Zustand, and Redux in real projects.

---

## Challenges

* Understanding Redux Persist middleware.
* Learning how RTK Query caching works.
* Understanding the difference between Redux, Zustand, and Jotai.

---

## Biggest Achievement

I built a portfolio-level e-commerce application using:

* Redux Toolkit
* RTK Query
* Redux Persist
* React Hook Form
* Zod
* React Router
* Tailwind CSS

The application supports product fetching, shopping cart, persistent cart, checkout validation, and order confirmation.

---

## What I Will Improve

Next week I want to improve:

* Performance optimization
* React.memo
* Code splitting
* Lazy loading
* Advanced RTK Query
* Testing

---

## Overall

Week 5 helped me understand modern React state management and how to choose the right tool for different application sizes. I now feel much more confident building scalable React applications.

# Week 5 Journal Reflection

## What was harder than expected?

The most difficult part was understanding how Redux Toolkit, RTK Query, Redux Persist, Zustand, and Jotai fit together. At first, they all looked like different ways to solve the same problem. I also found Redux Persist middleware and RTK Query's cache invalidation (`providesTags` and `invalidatesTags`) challenging because a lot of work happens automatically behind the scenes.

## What clicked faster?

Once I built the shopping cart project, the Redux data flow became much clearer. I understood that the UI dispatches an action, the reducer updates the store, and components automatically re-render through `useSelector`. RTK Query also became much easier to understand after seeing how it checks the cache before making a network request.

## What would I show a senior developer to prove I understand state management?

I would demonstrate my e-commerce project because it combines several state management techniques in one application:

* Redux Toolkit for global application state.
* RTK Query for server data fetching and caching.
* Redux Persist to keep the cart and theme after refresh.
* React Hook Form with Zod for checkout validation.
* `createSelector` for memoized derived state.
* Clear separation between local UI state, global state, and server state.

I would also explain why different tools were chosen instead of using one solution everywhere. For example, I would explain that server data belongs in RTK Query, user preferences like the theme belong in persisted Redux state, and temporary local component state should remain in `useState` when it does not need to be shared.

