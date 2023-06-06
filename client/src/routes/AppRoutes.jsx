import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Nuevos from '../components/Nuevos';
import Otros from '../components/Otros';
import Personas from '../components/Personas';
import Perros from '../components/Perros';


const AppRoutes = () => {
	return(
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<App />}
					
				/>
				<Route 
					path="/nuevos"
					element={<Nuevos />}
				/>
				<Route 
					path="/otros"
					element={<Otros />}
				/>
				<Route 
					path="/personas"
					element={<Personas />}
				/>
				<Route 
					path="/perros"
					element={<Perros />}
				/>
			
			</Routes>
		</BrowserRouter>
	);
	
	
	
	
}


export default AppRoutes;