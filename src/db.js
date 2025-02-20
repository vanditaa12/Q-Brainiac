import { openDB } from "idb";

const DB_NAME = "QuizDB";
const STORE_NAME = "Attempts";

const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
      }
    },
  });
};

export const saveQuizAttempt = async (question, selectedAnswer) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  tx.store.add({ question, selectedAnswer });
  await tx.done;
};

export const getQuizHistory = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};
