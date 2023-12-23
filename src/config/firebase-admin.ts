import "server-only";

import admin from "firebase-admin";
import serviceAccount from "./morrisseybr20xx-firebase-adminsdk-g4gt9-2b5e7c98a7.json";

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export default app;
