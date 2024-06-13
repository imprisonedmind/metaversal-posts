Check out the [Demo](https://metaversal-take-home.vercel.app/) hosted on Vercel.

## Getting Started
First, install required dependencies (_I like bun_)

```bash
bun install
```
Second, set the env variables:

```dotenv
NEXT_PUBLIC_USERS_API=https://jsonplaceholder.typicode.com/users
NEXT_PUBLIC_POSTS_API=https://jsonplaceholder.typicode.com/posts
```
Third, run the development server:

```bash
bun dev
npm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Production

```bash
bun prod
npm prod
bun start
npm start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the 
production build result. 

## Ideas and Explanation
* App Directory - Server first implementation
* Using Server Actions for api requests
* Posts paginated fetch @ 10 per page request
  * Initial fetch on server subsequent fetch on client
  * Re-fetched on useRef view handler
* User profile hero images use blurData optimizations
* Results cached by default using Next.js server + fetch
  * Ideally hidden or show under auth role
* Suspense boundaries are preferred over loading.tsx
  * loading.tsx tends to show even when cached
  * Suspense only loads on initial render
* Adjust _admin mode_ via the user icon menu
  * Components marked with red are _admin capabilities_
  * stored isAdmin variable in localStorage and context
* Modals & Menus using createPortal & context


