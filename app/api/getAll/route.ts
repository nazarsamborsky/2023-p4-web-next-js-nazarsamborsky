import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismaHelper";

export async function GET() {
  try {
    const cars = await prisma.car.findMany({
    select: {
        id: true,
        brand: true,
        model: true,
        year: true,
        description: true,
        },
    });

    return new Response(JSON.stringify(cars), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}