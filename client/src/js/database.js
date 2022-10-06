import { openDB } from "idb";

// create database using version 1 named 'jate'
const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      // db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      db.createObjectStore("jate", { keyPath: "id" });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // create a connection to the db using version 1
  const jateDb = await openDB("jate", 1);
  // initialize a transaction w/ privledges set to readWrtie so you can edit
  const tx = jateDb.transaction("jate", "readwrite");
  // open up the desired object store
  const store = tx.objectStore("jate");

  // using .put() method to update contents
  const request = store.put({ content: content, id: 1 });

  // request confirmation
  const result = await request;
  console.log("Data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // create the connection to the db and set to use version 1
  const jateDb = await openDB("jate", 1);
  // initialize a transaction and set priviledges to readonly since we are only trying to get this db data
  const tx = jateDb.transaction("jate", "readonly");
  const store = tx.objectStore("jate");

  // use .getAll() to retrieve all data
  const request = store.getAll();

  // request confirmation
  const result = await request;
  return result;
};

initdb();
