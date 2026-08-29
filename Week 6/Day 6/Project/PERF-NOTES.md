# Performance Notes

## Profiling

I used the **React Developer Tools browser extension** and its Profiler to check the Movie Browser performance while typing in the search input.

The main rendering work was around:

* `SearchPage`
* `MovieGrid`
* `MovieCard`

These components re-rendered because the search text and movie results changed. This was expected behavior.

I did not find a major performance problem that required memoization.

## React.memo, useMemo and useCallback

I tested `React.memo` and `useMemo`, but they did not provide a meaningful performance improvement in the current application.

I also reviewed `useCallback`, but there was no clear callback-prop problem that required it.

Therefore, I decided not to keep these optimisations unnecessarily.

## Code Splitting and Lazy Loading

The application uses:

* `React.lazy`
* `Suspense`
* Route-level code splitting
* Skeleton loading states

This helps reduce the JavaScript loaded for the initial page.

## Route Prefetching

Route prefetching was added so important route code can start loading before navigation.

Movie detail code is also prefetched when hovering over a movie card, helping make navigation feel faster.

## Infinite Scrolling

Movie search uses **TanStack Query infinite queries**.

New pages are loaded when the user gets near the end of the current results.

However, infinite scrolling does not remove old movie cards from the DOM, so the number of DOM elements can continue to grow.

## List Virtualization

I tested the idea of using `react-window`, but I did not add it to the final application.

It would require changes to the existing responsive movie grid and scrolling behavior.

Since the current application did not have a performance problem that required virtualization, I chose not to add the extra complexity.

## Future Improvements

If the application grows and thousands of movie cards need to stay loaded, I could add **TanStack Virtual (`@tanstack/react-virtual`)**.

It could:

* Render only visible movie rows.
* Keep fewer elements in the DOM.
* Improve scrolling with very large lists.
* Work with the existing infinite-scroll approach.

Other future improvements could include better image optimisation and further bundle-size analysis.

## What I Chose Not To Optimise

I intentionally did not:

* Add `React.memo` everywhere.
* Add `useMemo` without an expensive calculation.
* Add `useCallback` without a real callback-reference problem.
* Add `react-window`.
* Add virtualization without a measured need.

This keeps the application simpler and follows a **profiling-first approach**.

## Conclusion

I used the **React Developer Tools Profiler** to investigate the application's actual rendering behavior instead of blindly adding optimisations.

The current application already benefits from lazy loading, code splitting, Suspense, route prefetching, debounced search, TanStack Query caching, and infinite scrolling.

For future scaling, **TanStack Virtual** would be a good option if the application needs to handle thousands of movie cards.
