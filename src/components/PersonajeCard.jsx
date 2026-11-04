import React from 'react';

function PersonajeCard({ personaje }) {
	return(
		<div className={`personaje-card ${personaje.status === 'Dead' ? 'death' : personaje.status === 'Alive' ? 'alive' : ''}`}>
			<h3 className="personaje-nombre">{personaje.name}</h3>
			<div className="imagen-contenedor">
				<img 
					className="personaje-imagen" 
					src={personaje.image} 
					alt={personaje.name}
				/>
			</div>
			<div className="personaje-details">
				<ul>
					<li><span>Estado:</span> {personaje.status}</li>
					<li><span>Especie:</span> {personaje.species}</li>
					<li><span>Género:</span> {personaje.gender}</li>
					<li><span>Origen:</span> {personaje.origin.name}</li>
					<li><span>Localidad:</span> {personaje.location.name}</li>
				</ul>
			</div>
		</div>
	)
}

export default PersonajeCard;
