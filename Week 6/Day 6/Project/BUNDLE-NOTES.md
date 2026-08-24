# Bundle Analysis

## Before Optimization

Before implementing route-level code splitting, the production build generated:

* Main JavaScript bundle: **499.70 kB**
* Main JavaScript gzip: **160.26 kB**
* CSS: **24.57 kB**
* CSS gzip: **5.43 kB**
* Modules transformed: **636**

The application was mainly bundled into a single large JavaScript file:

```text
dist/assets/index-Dr-9JhJJ.js
499.70 kB │ gzip: 160.26 kB
```

---

## After Optimization

After implementing route-level code splitting with `React.lazy()` and `Suspense`, the main JavaScript bundle became:

* Main JavaScript bundle: **434.54 kB**
* Main JavaScript gzip: **137.07 kB**
* CSS: **24.89 kB**
* CSS gzip: **5.48 kB**
* Modules transformed: **639**

The main bundle is now:

```text
dist/assets/index-rXEJy-I9.js
434.54 kB │ gzip: 137.07 kB
```

Page-specific JavaScript is now split into separate chunks:

```text
Home                 0.76 kB │ gzip: 0.48 kB
FavouritesPage       0.77 kB │ gzip: 0.41 kB
MovieDetail          3.97 kB │ gzip: 1.47 kB
SearchPage           5.93 kB │ gzip: 2.62 kB
NotFound             0.54 kB │ gzip: 0.36 kB
```

Other generated chunks include:

```text
useSuspenseQuery     0.17 kB │ gzip: 0.16 kB
MovieGrid             0.37 kB │ gzip: 0.26 kB
MovieCard             2.11 kB │ gzip: 1.04 kB
movieService         54.05 kB │ gzip: 20.18 kB
```

---

## Bundle Size Comparison

| Metric       |    Before |     After |    Difference |
| ------------ | --------: | --------: | ------------: |
| Main JS      | 499.70 kB | 434.54 kB | **-65.16 kB** |
| Main JS gzip | 160.26 kB | 137.07 kB | **-23.19 kB** |
| CSS          |  24.57 kB |  24.89 kB |      +0.32 kB |
| CSS gzip     |   5.43 kB |   5.48 kB |      +0.05 kB |

### Main Bundle Reduction

The main JavaScript bundle decreased by:

```text
499.70 kB - 434.54 kB = 65.16 kB
```

This is approximately:

```text
13.0% smaller
```

The gzipped main JavaScript decreased by:

```text
160.26 kB - 137.07 kB = 23.19 kB
```

This is approximately:

```text
14.5% smaller
```

---

## Why Did the Main Bundle Become Smaller?

Before optimization, page code was included in the main JavaScript bundle.

After using:

```tsx
const Home = lazy(() => import("../pages/Home"))
const MovieDetail = lazy(() => import("../pages/MovieDetail"))
const SearchPage = lazy(() => import("../pages/SearchPage"))
const FavouritesPage = lazy(() => import("../pages/FavouritesPage"))
const NotFound = lazy(() => import("../pages/NotFound"))
```

Vite/Rollup can create separate chunks for these pages.

Therefore, the browser does not need to download all page-specific code as part of the initial main bundle.

---

## Route-Level Code Splitting

The application now uses route-level code splitting.

The main bundle contains the shared application code, while individual pages are downloaded when required.

Conceptually:

```text
Initial Load
    │
    └── Main Bundle
          │
          ├── Home chunk
          ├── Search chunk
          ├── Movie Detail chunk
          ├── Favourites chunk
          └── NotFound chunk
```

This reduces the amount of JavaScript that needs to be downloaded initially.

---

## Bundle Visualization

Rollup Visualizer was used to inspect the generated bundle.

The largest dependencies visible in the treemap include:

1. **React DOM**
2. **Motion / Framer Motion**
3. **TanStack Query**

Other dependencies include React Router, React Toastify, and Axios.

These dependencies contribute significantly to the main bundle and were inspected to understand where bundle size comes from.

---

## Conclusion

Route-level code splitting successfully reduced the main JavaScript bundle from **499.70 kB to 434.54 kB**.

The gzipped main bundle decreased from **160.26 kB to 137.07 kB**.

The application now loads page-specific JavaScript as separate chunks instead of putting all pages into one main bundle.

Route prefetching can further improve the navigation experience by starting the download of a page chunk before the user actually navigates to that page.
