import { sql } from 'drizzle-orm'
import { Database } from 'bun:sqlite'
import { STORAGE_PATH } from '../dir'
import { drizzle } from 'drizzle-orm/bun-sqlite'

const DB_NAME = 'main.sqlite'
const INMEMORY_DB_NAME = 'mem.sqlite'

const sqlite = new Database(STORAGE_PATH + DB_NAME, {
    create: true,
})

const inmemory_sqlite = new Database(':memory')

const orm = drizzle(sqlite)

export { sqlite as db, inmemory_sqlite as vdb, orm }
