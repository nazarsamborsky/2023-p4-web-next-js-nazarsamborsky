"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Car from "@/types/Car"
export default function Detail({ params}: PageProps) {
    const [car, setCar] = useState<Car | null>(null);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        fetch(`/api/detail?id=${params.carId}`)
        .then((response) => response.json())
        .then((data) => {
            setCar(data)
            if (data.message) {
                setError(data.message);
              } else {
                setCar(data);
              }
        })
    }, []);
    if(error != null )
    return(
      <>
      <h1 style={{ color: "red" }}>{error}</h1>
      <br></br>
      <Link href="/">
        Go back
      </Link>
      </>
    )
    if(car == null)
    return(
        <>
        <h1>Loading</h1>

        <Link href="/">Main menu</Link>
      </>
        )
  return (
    <>
      <h1>Car</h1>
        <div>
          <p>Brand: {car.brand}</p>
          <p>Model: {car.model}</p>
          <p>Year: {car.year}</p>
          <p>Description: {car.description}</p>
        </div>
      <Link href="/">Main menu</Link>
    </>
    )
    }