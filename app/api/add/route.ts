import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismaHelper";

export  async function POST(req: any) {
    try {
      const { brand, model, year, description } = await req.json()

      if (!brand || !model || !year || !description) {
        return new Response(
          JSON.stringify({
            message: "All fields are required",
            status: 400,
          })
        );
      }
      const car = await prisma.car.create({
        data: {
          brand,
          model,
          year: parseInt(year, 10),
          description,
        },
      });

      return new Response(
        JSON.stringify({
          message: "Car added",
          car,
          status: 200,
        })
      );
    } catch (error) {
      console.error(error);
      return new Response(
        JSON.stringify({
          message: "Server error",
          status: 500,
        })
      );
    }
  }