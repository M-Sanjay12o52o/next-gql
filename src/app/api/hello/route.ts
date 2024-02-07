import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export function GET(req: Request) {
  // redirecting requests
  // redirect("thisurldoesnotexist.com");
  redirect("http://localhost:3000");

  // return new Response("Sanjay");
}

export async function POST(req: NextRequest) {
  // const body = req.body;
  const body = await req.json();
  console.log("body: ", body);

  // accesing headers
  req.headers.get("Authorization");

  // accessing cookies in the new api
  console.log(req.cookies.get("cookie"));
  console.log(req.cookies.get("cookie")?.name);
  console.log(req.cookies.get("cookie")?.value);

  // sending json
  // return new Response(JSON.stringify({ hello: "world" }));

  return new Response("OK", {
    // can send status or anything else from here
  });
}
