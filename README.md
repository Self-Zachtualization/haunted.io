# Haunted.io

Using Express and PSQL to create a production-functional API that lets ghost hunters register the entities they've found and see the information their fellows have shared.

## Requirements

-dotenv
-express
-nodemon
-pg
-psql (or your preferred SQL interface, if any)
(Note: you may find that postgres has also been listed as a dependency in package.json. This is due to discovering how useful that library is but not having the time to implement it yet.)

## How to Use Haunted.io

1. Install dependencies
2. Create the database for your API, then run the `migration.sql` and `seed.sql` files, respectively.
3. The `.env.template` file should be renamed to just `.env`, and you should then assign the relevant values to the `PORT` and `DATABASE_URL` keys listed. As examples, I used `PORT=3000` and `DATABASE_URL=postgres://localhost:5432/haunted`, with "haunted" being the name of my database.
4. Host the server, which can be done with `npm run dev` for your developer environment, which makes use of `nodemon`. I deployed this to Heroku, which performs `npm run start` to achieve the same practical result.
5. At this point, you should be able to see HAUNTED.io running on your specified port.

### CONCERNING PSQL and PG

For my own dev environment, I have set user env variables to allow bypassing anything else pg/psql may require from you, such as PGUSER and PGPASSWORD. If you haven't done the same, or used another resolution to that problem to the same effect, then
**you will need** to declare and assign those variables within `pool` declaration statement within `server.js`, such that it will read:

```
const pool = new pg.Pool({connectionString: process.env.DATABASE_URL,
  PGUSER: "your_username",
  PGPASSWORD: "you_get_the_idea",
  ...(process.env.NODE_ENV === "production" ? { ssl: { rejectUnauthorized: false } } : {}),
});
```
