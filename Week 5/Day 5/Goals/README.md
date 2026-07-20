# State Management Decision Flowchart



```text

Need State?

      │

      ▼

Is the state used by only one component?

      │

 ┌────┴────┐

 │         │

Yes       No

 │         │

 ▼         ▼

useState   Is it shared between components?

               │

               ▼

        Is it simple client state?

               │

         ┌─────┴─────┐

         │           │

        Yes         No

         │           │

         ▼           ▼

   Zustand/Jotai   Is the app large or enterprise?

                       │

                 ┌─────┴─────┐

                 │           │

                Yes         No

                 │           │

                 ▼           ▼

          Redux Toolkit   Is it server/API data?

                               │

                         ┌─────┴─────┐

                         │           │

                        Yes         No

                         │

                         ▼

              RTK Query / TanStack Query



Need persistence after refresh?



↓



Persist Middleware

```