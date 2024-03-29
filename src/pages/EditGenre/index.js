import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const API = process.env.REACT_APP_BASE_URL || '';


const EditGenre = ({ match }) => {
    const [name, setName] = useState('');
    const [sucess, setSucess] = useState(false)
    useEffect(() => {
        axios
            .get()
            .get(`${API}/api/genres${match.params.id}`)
            .then(res => {
                setName(res.data.name)
            })
    }, [match.params.id])

    const onChange = evt => {
        setName(evt.target.value)
    }
    const save = () => {
        axios
            .put(`${API}/api/genres${match.params.id}`, {
                name,
            }).then(res => {
                setSucess(true)
            })
    }
    if (sucess) {
        return <Redirect to='/generos' />
    }
    return (
        <div className='container'>
            <h1> Editar Genêro</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' value={name || ''} onChange={onChange} className='form-control' id='name' placeholder='Nome do Genêro' />
                </div>
                <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
            </form>
        </div>
    )

}

export default EditGenre