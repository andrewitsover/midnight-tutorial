# 🌒 Midnight Tutorial
This is a sample project that shows how you might setup your own project using Midnight. 

```src/db.ts```: the path to the database. 

```src/schema.ts```: the table definitions.

```src/main.ts```: the program that is run.

```src/migrate.ts```: a simple migration system.

```app.db```: the SQLite database

```schema.json```: the current schema saved in JSON format.

After you change the schema, you can run ```npm run migrate``` to see the SQL that will be used to change the database.

If this looks correct, you can run ```npm run migrate run``` to apply the migration to the database.
