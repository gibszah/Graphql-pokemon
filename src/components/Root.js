import { Outlet } from "react-router-dom";

import "./MainNavigation.css";
import MainNavigations from "./MainNavigations";

function Root() {
	// const navigation = useNavigation();

	return (
		<>
			<header>
				<MainNavigations />
			</header>
			<main>
				{/* {navigation.state === 'loading' && <p>Loading...</p>} */}
				<Outlet />
			</main>
		</>
	);
}

export default Root;
