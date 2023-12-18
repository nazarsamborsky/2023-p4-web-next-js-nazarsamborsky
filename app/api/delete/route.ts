import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismaHelper";

//Type "NextApiRequest" is not a valid type for the function's first argument.
export async function DELETE(req: any) {
    try {
        const { id } = await req.json()

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

        const car = await prisma.car.delete({
            where: {
                id,
            },
        });

        return new Response(
            JSON.stringify({
                message: "Car deleted",
                car,
                status: 200,
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    } catch (error) {
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