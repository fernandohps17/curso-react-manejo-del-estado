import React, { useEffect, useState} from 'react'

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
// verificar error en la clase 6 y clase 5
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    console.log(value)

    if (!!loading) {
        useEffect(() => {
            setTimeout(() => {
                console.log("Haciendo la validacion")

                if(value === SECURITY_CODE) {
                    setLoading(false);
                } else {
                    setError(true)
                    setLoading(false)
                }
                console.log("terminando la validacion")
            }, 3000);
        }, [])
    }

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

            <input placeholder='Codigo de Seguridad' value={value} onChange={(event) => {setValue(event.target.value)}} />
            <button onClick={() => setLoading(!loading)}>Comprobar</button>
        </div>
    )
}

export { UseState };
