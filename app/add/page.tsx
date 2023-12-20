"use client";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import Container from "@/components/center";
import MyButton from "@/components/button";
import MyForm from "@/components/MyForm";
export default function AddPage(){
    const router = useRouter();
    const RedirectToPage = (page: string) => {
    router.push(page);}

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
        <Container>
        <form onSubmit={add}>
            <MyForm>
                <input placeholder="Brand" type="text" name="brand" />
                <input placeholder="Model" type="text" name="model" />
                <input placeholder="Production Year" type="number" name="year" defaultValue={2001} max={currentYear}/>
                <textarea placeholder="Description" name="description" />
                <MyButton color="green" size="medium" type="submit" onClick={() => {}}>Add</MyButton>                
            </MyForm>
        </form>
        <MyButton color="black" size="large" type="button" onClick={()=> RedirectToPage("/")}>Main menu</MyButton>        
        </Container>
    )
    }