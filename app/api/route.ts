import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const { email, name } = await req.json();

  const newUser = await prisma?.user.create({
    data: {
      email,
      name,
    },
  });
  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const GET = async () => {
  const users = await prisma?.user.findMany();
  if (users && users.length > 0) {
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return new Response("No users found", {
    status: 404,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
