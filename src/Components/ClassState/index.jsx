import React from 'react'

class ClassState extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            error: false,
            loading: false,
        }
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentWillUnmount() {
        console.log("componentWillUncount")
    }

    componenteDidMount() {
        console.log("componentDidMount")
    }

    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p>Por Favor, escribe el código de seguridad</p>

                {this.state.error && (
                    <p>Error: el codigó es incorrecto</p>
                )}

                {(this.state.loading && (
                    <p>Cargando...</p>
                ))}

                <input placeholder='Codigo de Seguridad'/>

                <button onClick={() => 
                    this.setState({loading: true})}>Comprobar
                </button>
            </div>
        )
    }
}

export { ClassState }