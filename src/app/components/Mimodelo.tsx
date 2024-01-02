'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

type MiModeloItem = {
    id: number;
    titulo: string;
    descripcion: string;
};

const MiModelo = () => {
    const [datos, setDatos] = useState<MiModeloItem[]>([]);

    useEffect(() => {
        axios.get<MiModeloItem[]>('http://localhost:8000/api/books/')
            .then(response => {
                setDatos(response.data);
            })
            .catch(error => console.error('Error al obtener los datos', error));
    }, []);

    return (
        <div>
            <h1>Datos de Mi Modelo</h1>
            <ul>
                {datos.map(item => (
                    <li key={item.id}>{item.titulo}: {item.descripcion}</li>
                ))}
            </ul>
        </div>
    );
};

export default MiModelo;
