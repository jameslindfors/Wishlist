# Connect Engineering Apprenticeship 2022

## James Lindfors

---

### Relevant Files

| File                                                                 | Description                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [gql.ts](./client/src/utils/gql.ts)                                 | Contains code that uses graphql-request to talk to the graphql server. When storing to the database a copy is also stored to local storage. When a request for data is made it checks local storage before getting data from the server in an effort to reduce database reads. |
| [localStorageHandler.ts](./client/src/utils/localStorageHandler.ts) | Contains logic to interface with browsers local storage. Methods to add data to storage, request data back, and a method that runs on application load that checks to remove old data.                                                                                         |
| [wishlist.tsx](./client/src/components/list/wishlist.tsx)           | Main component that uses the methods from gql.ts. When the component mounts the useEffect hook runs and attempts to load a wishlist. If none is found it uses the navigate hook from React Router to navigate to an error page.                                                |

### Example

<http://localhost:8080/#/workfromhome/0yfay9SREdZCzJvqYao68>

The url is made up of three parts. The root (which when working locally is port 8080 of local host), the name of the wishlist, and a unique identifier. The identifier at the end is what is passed into the loadWishlist method in wishlist.tsx.

![Work From Home Wishlist](/_images/WorkFromHomeWishlist.png)

### Background

For this project I used MongoDB for my database. Because this is only a personal project I was interested in keeping my tools free and minimizing the amount of reads and writes to the database as possible. When creating the architecture for this application, I realized that this system would be very read heavy so I needed a way to reduce the amount of reads.

### Problem

How could I minimize the amount of reads to the database on a particular wishlist and serve content as fast as possible?

### Solution

My solution to this problem was implementing client-side caching of data in local storage. Since the amount of data per entry is only about 1.4KB, I felt that local storage would be a good solution over a server side option. When a user creates a wishlist, a copy of the data is stored to the database and to the local storage cache. When accessing the unique wishlist url for the first time, a copy of this data will be entered into the cache as well. Realistically, the viewer of the wishlist would only need to view the list for a few weeks, so I implemented logic to remove “stale” entries.

### What are the next steps?

The list data contains a link to an image and fetching it each time affects the "largest contentful paint". By implementing a similar caching concept or image pre-rendering, this slowdown might be alleviated.
