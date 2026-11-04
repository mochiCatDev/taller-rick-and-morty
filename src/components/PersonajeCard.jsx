function PersonajeCard({ personaje }) {
	return(
		<div className="personaje-card">
			<h1>{personaje.name}</h1>
			<img src={personaje.image} alt={personaje.name}/>
			<div>
				<ul>
					<li><span>Estado: </span>{personaje.status}</li>
					<li><span>Especie: </span>{personaje.species}</li>
					<li><span>Genero: </span>{personaje.gender}</li>
					<li><span>Origen: </span>{personaje.origin.name}</li>
					<li><span>Localidad: </span>{personaje.location.name}</li>
				</ul>
			</div>
		</div>
	)
}

export default PersonajeCard;
