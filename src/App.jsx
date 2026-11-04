import { useState, useEffect } from 'react';
import PersonajeCard from './components/PersonajeCard';
import './App.css';

function App() {
	const [personajes, setPersonajes] = useState([]);

	useEffect(() => {
		const obtenerPersonajes = async () => {
			const response = await fetch("https://rickandmortyapi.com/api/character");
			const datos = await response.json();
			setPersonajes(datos.results);
		}

		obtenerPersonajes();
	}, []);

	return (
    	<>
    		<h1>Rick and Morty</h1>
    		<h2>Personajes</h2>
    		<div className="cartas-personajes">
    			{personajes.map(p => (
    				<PersonajeCard personaje={p} />
    			))}
    		</div>
    	</>
  	)
}

export default App
