import React from 'react';

class ViewBuilding extends React.Component {
	render() {

		const { selectedBuilding, data } = this.props;

		const namesList = selectedBuilding.map(id => {
			const { name, code, address } = data[id]


			return (

				
				//<li key={id} className={code}>{name}</li>
				<div class="card">
				<ul key={id}>
					<li><b>{name}</b></li> 
					<ul class="container">
					<li>The Building code is {code}</li>
					<li>The Address is {address}</li>
					</ul>
					
					
					
				</ul>

				</div>

			)
		})

		return (
			<main>
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>

				
			</div>
			<div>{namesList}</div>
		
		

		</main>


		);
	}
}
export default ViewBuilding;
