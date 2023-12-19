"use client";
import Link from "next/link";
export default function AddPage(){
    const currentYear = new Date().getFullYear();
    const add = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const brand = e.currentTarget.brand.value
        const model = e.currentTarget.model.value
        const year = e.currentTarget.year.value
        const description = e.currentTarget.description.value
        console.log(brand, model, year, description)

        await fetch("/api/add", {
            method: "POST",
            body: JSON.stringify({
                brand,
                model,
                year,
                description
            })
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message)
        })
    };
    return(
        <>
        <form onSubmit={add}>
            <input placeholder="Brand" type="text" name="brand" />
            <input placeholder="Model" type="text" name="model" />
            <input placeholder="Production Year" type="number" name="year" defaultValue={2001} max={currentYear}/>
            <textarea placeholder="Description" name="description" />
            <button type="submit">Add</button>
        </form>
        <Link href="/">Main menu</Link>        
        </>
    )
    }