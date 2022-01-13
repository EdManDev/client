import React, { useState } from "react";

const Facturar = () => {
	const [isvisible, setisVisible] = useState(false);
	const [isActive, setisActive] = useState(true);

	const handleChange = (e) => {
		e.target.value !== "consumidor Final"
			? setisVisible(true)
			: setisVisible(false);
	};

	const AreaAdicional = () => {
		return (
			<div>
				<div>
					<input className="rnd" type="number" placeholder="RNC" min="1" />
				</div>
				<div>
					<input
						className="razon Social"
						type="text"
						placeholder="Razon social"
						min="1"
					/>
				</div>
			</div>
		);
	};

	return (
		<>
			<span>Tipo de Comprobante</span>
			<div onChange={handleChange}>
				<select>
					<option value="Consumidor Final"> Consumidor Final</option>
					<option value="Comprobante Fiscal"> Comprobante Fiscal</option>
					<option value="Compobante Gubernamental">
						Compobante Gubernamental
					</option>
					<option value="Compobante Regimen Especial">
						Compobante Regimen Especial
					</option>
				</select>
			</div>

			<br />
			<br />
			<br />
			<br />
			<br />
			{isvisible ? <AreaAdicional /> : ""}

			<div>
				<button
					onClick={() => setisActive(true)}
					className={isActive ? "active" : ""}
				>
					All Contado
				</button>
				<button
					onClick={() => setisActive(false)}
					className={isActive ? "" : "active"}
				>
					Al Credito
				</button>
			</div>

			<span>pagar con</span>
			<div>
				<input
					type="number"
					placeholder="Envio"
					min="1"
					disable={isActive ? false : true}
				/>
				<input
					type="number"
					placeholder="Tarjeta"
					min="1"
					disable={isActive ? false : true}
				/>
				<input
					type="number"
					placeholder="transferencia Local"
					min="1"
					disable={isActive ? false : true}
				/>
				<input
					type="number"
					placeholder="transferencia international"
					min="1"
					disable={isActive ? false : true}
				/>
			</div>
		</>
	);
};

export default Facturar;
