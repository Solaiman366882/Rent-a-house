import { Outlet } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

const MainLayout = () => {
	return (
		<div>
			<div className="px-5">
				<Header></Header>
			</div>
			<div>
				<Outlet></Outlet>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default MainLayout;
