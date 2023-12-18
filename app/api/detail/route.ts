import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaHelper";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url)
        const id = searchParams.get('id')
        if (!id) {
            return new Response(
                JSON.stringify({
                    message: "ID is required",
                    status: 400,
                }),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        }

        const car = await prisma.car.findUnique({
            where: {
                id: Number(id),
            },
            select: {
                id: true,
                brand: true,
                model: true,
                year: true,
                description: true,
            },
        });

        if (!car) {
            return new Response(
                JSON.stringify({
                    message: "Car not found",
                    status: 404,
                }),
                {
                    status: 404,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        }

        return new Response(JSON.stringify(car), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({
                message: "Server error",
                status: 500,
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}