import React, { useEffect, useState } from 'react'

function UseState({ name }) {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    if (!!loading) {
        useEffect(() => {
            console.log("Empezando el efecto")
            setTimeout(() => {
                console.log("Haciendo la validacion")
                setLoading(false)
                console.log("terminando la validacion")
            }, 3000);
            console.log("Terminando el efecto")
        }, [])
    }

    // video 5

    return (
        <div>
            <h2>Eliminar {name}</h2>

            <p>Por Favor, escribe el código de seguridad</p>

            {error && (
                <p>Error: El codigo es incorrecto</p>
            )}

            {loading && (
                <p>Cargando...</p>
            )}

            <input placeholder='Codigo de Seguridad' />
            <button onClick={() => setLoading(!loading)}>Comprobar</button>
        </div>
    )
}

export { UseState };
