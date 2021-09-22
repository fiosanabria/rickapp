import React from 'react'
import Tarjeta from './Tarjeta'

const infoPersonaje = [
    {
        nombre: 'Rick',
        urlimagen: "https://rickandmortyapi.com/api/character/avatar/238.jpeg"
    },
    {
        nombre: 'Morty Smith',
        urlimagen: "https://rickandmortyapi.com/api/character/avatar/268.jpeg"
    }
]

const transformarInfoPersonaje = ({ nombre, urlimagen }) => {
    return <tarjeta urlimagen={urlimagen} nombrePersonaje={nombre} />
}

const tarjetas = infoPersonaje.map(transformarInfoPersonaje);

const SeccionPrincipal = () => {
    return (
        <main>
            <div>
                <h1>The Rick And Morty API</h1>
            </div>
            <div className="Tarjetero">{tarjetas}</div>
        </main>
    )
}



export default SeccionPrincipal
