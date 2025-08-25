// import { NextResponse } from "next/server";
// import { adminDb } from "../../../lib/firebaseAdmin";

// export async function GET() {
//   try {
//     const docRef = await adminDb.collection("testCollection").add({
//       message: "Hello from Admin SDK 🚀",
//       createdAt: new Date().toISOString(),
//     });

//     const snapshot = await adminDb.collection("testCollection").get();
//     const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

//     return NextResponse.json({ success: true, addedId: docRef.id, allDocs: data });
//   } catch (error: any) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }
// // 

// src/app/api/test/route.ts

export async function GET() {
  return Response.json({ message: "API is working 🚀" });
}
