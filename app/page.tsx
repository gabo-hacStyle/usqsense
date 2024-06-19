import React from "react";
import { getMotos } from "../services/motos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consigue tu moto!",
  description: "A buen precio mi pana!",
  icons: ['/vercel.svg']
};
const page = async () =>{

  const moviesData = await fetch('http://localhost:3000/api/', 
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'force-cache'
  });
  const data = await moviesData.json();

  const movies = data.movies;

  return (
    <div className="container">
      

      <main>
        <h1 className="title">
          Bienvenido a la pagina principal
        </h1>

        <p className="description">
          Aqui podras ver las moto disponibles
        </p>

        <div className="grid">
          
          {movies.map((movie: any, index: number) => (
            <a key={index} className="card">
              <h3>{movie.title} &rarr;</h3>
              <p>{movie.fullplot}</p>
            </a>
          ))}
        </div>
      </main>
   
    </div>
  );
}

export default page;