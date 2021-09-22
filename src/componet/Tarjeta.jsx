import React from 'react'

const Tarjeta = () => {
    return (
        <div className="Tarjeta">
            <div className="ImagenTarjeta">
            <img src="https://rickandmortyapi.com/api/character/avatar/72.jpeg" alt="Cool Rick" />
            </div>
            <div className="DescripcionTarjeta">
                <h4> <a href="">Nombre de tarjeta</a></h4>
                <p className="Estado">Estado - Tipo de Criatura</p>

                <div className="LocacionTarjeta">
                    <h5>Ultima Locacion Conocida</h5>
                    <p>Localizacion</p>
                </div>
                <div className="LocacionTarjeta">
                    <h5>Primera localizacion conocida</h5>
                </div>

            </div>
        </div>

    )
}

export default Tarjeta
