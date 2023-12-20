"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Car from "@/types/Car"
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from "@/components/center";
import MyButton from "@/components/button";

export default function Home() {

  const router = useRouter();
  const RedirectToPage = (page: string) => {
  router.push(page);}

  const [loading, setLoading] = useState<boolean>(true);
  const [cars, setCars] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);
  const Detail = (id: number) => {
    router.push(`/${id}`);
  };

  const deleteCar = async (id: number) => {
    await fetch("/api/delete", {
        method: "DELETE",
        body: JSON.stringify({
            id
        })
    })
    .then((res) => res.json())
    .then((data) => {
        alert(data.message)
        if(data.status == 200){
            setCars((Cars) => Cars.filter((car) => car.id !== id));
        }
    })
  };

  useEffect(() => {

    fetch("/api/getAll")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
        setCars(data)
        if(data.message){
            setError(data.message)
        }
        setLoading(false);
    })
}, []);
if(loading) return(
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
if(error != null)
      return(
      <Container>
      <h1 style={{ color: "red" }}>{error}</h1>
      <br></br>
      <MyButton color="black" size="large" type="button" onClick={()=> RedirectToPage("/")}>Go Back</MyButton> 
      </Container>
    )
    if(cars.length == 0)
    return(
      <Container>
        <h1>There aren&apos;t any cars yet</h1>
        <br></br>
        <MyButton color="green" size="large" type="button" onClick={()=> RedirectToPage("/add")}>Add car</MyButton> 
        </Container>
        )
    return(
      <Container>
        <h1>CarList</h1>


          {cars.map((car) => (
            <div key={car.id}>


                <p>{car.brand} {car.model}</p>
                <MyButton color="black" size="large" type="button" onClick={()=>  Detail(car.id)}>Detail</MyButton> 
                <MyButton color="red" size="large" type="button" onClick={()=>  deleteCar(car.id)}>Delete car</MyButton>
            </div>
          ))}

        <br></br>
        <MyButton color="green" size="large" type="button" onClick={()=> RedirectToPage("/add")}>Add car</MyButton> 
        </Container>
    )
}
