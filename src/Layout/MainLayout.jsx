import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<div>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default MainLayout;
