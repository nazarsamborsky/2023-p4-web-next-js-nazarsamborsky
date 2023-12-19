"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import Car from "@/types/Car"

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [cars, setCars] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
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
  <>
    <div className={styles.loader}>
      <div className={styles.loaderInner}>
        <div className={styles.loaderLineWrap}>
          <div className={styles.loaderLine}></div>
        </div>
        <div className={styles.loaderLineWrap}>
          <div className={styles.loaderLine}></div>
        </div>
        <div className={styles.loaderLineWrap}>
          <div className={styles.loaderLine}></div>
        </div>
        <div className={styles.loaderLineWrap}>
          <div className={styles.loaderLine}></div>
        </div>
        <div className={styles.loaderLineWrap}>
          <div className={styles.loaderLine}></div>
        </div>
      </div>
    </div>
  </>
)
if(error != null)
      return(
        <>
        <h1 style={{ color: "red" }}>{error}</h1>
        <br></br>
        </>
    )
    if(cars.length == 0)
    return(
        <>
        <h1>There aren&apos;t any cars yet</h1>
        <br></br>
        <Link href="/add">
          Add some!
        </Link>
        </>
        )
    return(
        <>
        <h1>My ReadList</h1>


          {cars.map((car) => (
            <div key={car.id}>


                <p>{car.brand} {car.model}</p>
                <button onClick={() => Detail(car.id)} >Details</button>
                <button onClick={() => deleteCar(car.id)} >Delete</button>
            </div>
          ))}

        <br></br>
        <Link href="/add">
          Add some more!
        </Link>
        </>
    )
}
