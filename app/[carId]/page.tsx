"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Car from "@/types/Car"
import { useRouter } from "next/navigation";
import MyButton from "@/components/button";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from "@/components/center";
export default function Detail({ params}: PageProps) {

  const router = useRouter();
  const RedirectToPage = (page: string) => {
  router.push(page);}

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
      <Container>
      <h1 style={{ color: "red" }}>{error}</h1>
      <br></br>
      <MyButton color="black" size="large" type="button" onClick={()=> RedirectToPage("/")}>Go Back</MyButton> 
      </Container>
    )
    if(car == null)
    return(
      <Container>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>    
    </Container>
        )
  return (
    <Container>
      <h1>Car</h1>
        <div>
          <p>Brand: {car.brand}</p>
          <p>Model: {car.model}</p>
          <p>Year: {car.year}</p>
          <p>Description: {car.description}</p>
        </div>
        <MyButton color="black" size="large" type="button" onClick={()=> RedirectToPage("/")}>Main menu</MyButton> 
    </Container>
    )
    }