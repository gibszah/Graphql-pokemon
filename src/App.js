import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";

import LoginPage from "./components/pages/LoginPage";
import Root from "./components/Root";
import PokemonList from "./components/pages/PokemonList.tsx";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			children: [
				{ index: true, element: <PokemonList /> },

				{
					path: "about",
					element: <AboutUs />,
				},
				{
					path: "login",
					element: <LoginPage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
