import Banner from "../../component/Home/Banner/Banner";
import Call from "../../component/Home/Call/Call";

const Home = () => {
	return (
		<div>
			<div className="w-full bg-white px-5 pt-3">
				<Banner></Banner>
			</div>
			<div>
				<Call></Call>
			</div>
		</div>
	);
};

export default Home;
