import { readFile, writeFile } from "fs/promises";
import db from "./db.js";

let saved;
try {
  const data = await readFile('schema.json', 'utf8');
  saved = JSON.parse(data);
}
catch {
  saved = null;
}
const sql = db.diff(saved);
if (!sql) {
  console.log('No changes detected');
  process.exit();
}
else {
  if (process.argv.at(2) === 'run') {
    await db.migrate(sql);
    const schema = db.getSchema();
    await writeFile('schema.json', JSON.stringify(schema));
    console.log('Migration successful');
  }
  else {
    console.log(sql);
  }
}
