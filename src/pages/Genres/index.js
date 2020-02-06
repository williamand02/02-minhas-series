import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Generos = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get('/api/genres')
            .then(res => {
                setData(res.data.data)
            })
    }, [])

    const deleteGenero = id => {
        axios
            .delete('/api/genres/' + id)
            .then(res => {
                const filtrado = data.filter(item => item.id !== id)
                setData(filtrado)
            })
    }
    const renderRow = record => {
        return (
            <tr key={record.id}>
                <th scope='row'>{record.id}</th>
                <td>{record.name}</td>
                <td>
                    <button onClick={() => deleteGenero(record.id)} className='btn btn-danger'>Remover</button>
                    <Link className='btn btn-light' to={'/generos/' + record.id}>Editar</Link>
                </td>
            </tr>

        )
    }
    if (data.length === 0) {
        return (
            <div className='container'>
                <h1>Genêro</h1>
                <div>
                    <Link className='btn btn-light' to='/generos/novo'>Novo Genêro</Link>
                </div>
                <div className='alert alert-warning text-uppercase ' role='alert'>
                    <span className='font-weight-bold' >
                        Warning
                    </span><hr />
                    Você não possui Genêros criados
                </div>
            </div>
        )
    }
    return (
        <div className='container'>
            <h1>Genêros</h1>
            <div>
                <Link className='btn btn-light' to='/generos/novo'>Novo Genêro</Link>
            </div>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderRow)}
                </tbody>
            </table>
        </div>
    )
}

export default Generos;