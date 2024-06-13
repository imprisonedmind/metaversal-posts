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
  * modals use same service but change location based on state & input

## Speed Insights
```bash
❯ httpstat https://metaversal-take-home.vercel.app/
Connected to 76.76.21.98:443 from 192.168.10.181:49501

HTTP/2 200
accept-ranges: bytes
access-control-allow-origin: *
age: 14
cache-control: public, max-age=0, must-revalidate
content-disposition: inline
content-type: text/html; charset=utf-8
date: Thu, 13 Jun 2024 20:31:52 GMT
etag: "71f7336c182a687ce0209baed8f414e6"
server: Vercel
strict-transport-security: max-age=63072000; includeSubDomains; preload
vary: RSC, Next-Router-State-Tree, Next-Router-Prefetch
x-matched-path: /
x-vercel-cache: HIT
x-vercel-id: cpt1::p25nl-1718310712782-b19bd768f508
content-length: 27971


  DNS Lookup   TCP Connection   TLS Handshake   Server Processing   Content Transfer
[     7ms    |      48ms      |     60ms      |       75ms        |        9ms       ]
             |                |               |                   |                  |
    namelookup:7ms            |               |                   |                  |
                        connect:55ms          |                   |                  |
                                    pretransfer:115ms             |                  |
                                                      starttransfer:190ms            |
                                                                                 total:199ms

speed_download: 136.7 KiB/s, speed_upload: 0.0 KiB/s
```


