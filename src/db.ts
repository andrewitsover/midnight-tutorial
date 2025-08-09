import { SQLiteDatabase } from "@andrewitsover/midnight";
import * as schema from './schema.js';

const database = new SQLiteDatabase('app.db');
const db = database.getClient(schema);

export default db;
