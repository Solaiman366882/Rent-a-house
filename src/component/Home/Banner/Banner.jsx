import { useState } from "react";
import InputRange from "react-input-range";
import "../../../../node_modules/react-input-range/lib/css/input-range/input-range.css";

const Banner = () => {
	const [rent, setRent] = useState({ min: 0, max: 10000 });

	return (
		<div className="w-full min-h-screen pb-6">
			<div className="banner-section">
				<div className="flex-1">
					<h1 className=" text-6xl roboto-bold text-white ">
						Rent properties with zero commission
					</h1>
				</div>
				<div className="banner-search flex-1">
					<div className="search-area">
						<form action="" className="grid grid-cols-2 gap-5">
							<div className="single-input">
								<label htmlFor="city">Select City</label>
								<select name="city" id="city">
									<option value="dhaka">Dhaka</option>
									<option value="khulna">khulna</option>
									<option value="khulna">khulna</option>
									<option value="khulna">khulna</option>
									<option value="khulna">khulna</option>
								</select>
							</div>
							<div className="single-input">
								<label htmlFor="room">room</label>
								<select name="room" id="room">
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="1">Single Room</option>
								</select>
							</div>
							<div className="single-input">
								<label htmlFor="bed">bed</label>
								<select name="bed" id="bed">
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="1">1</option>
								</select>
							</div>
							<div className="single-input">
								<label htmlFor="bath">bath rooms</label>
								<select name="bath" id="bath">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>
							<div className="single-input col-span-2">
								<label htmlFor="availability" className="mb-3">
									Availability
								</label>
								<div className="flex items-center gap-10">
									<div className="flex gap-3 items-center">
										<input
											type="radio"
											name="availability"
											id="all"
										/>
										<label
											htmlFor="all"
											className=" inline-block"
										>
											all
										</label>
									</div>
									<div className="flex gap-3 items-center">
										<input
											type="radio"
											name="availability"
											id="only_available"
										/>
										<label
											htmlFor="only_available"
											className=" inline-block"
										>
											only available
										</label>
									</div>
								</div>
							</div>
							<div className="">
								<label htmlFor="rent">rent per month</label>
								<div className="p-5">
									<InputRange
										formatLabel={(value) => `$ ${value}`}
										maxValue={1000}
										minValue={0}
										value={rent}
										onChange={(value) => setRent(value)}
									/>
								</div>
							</div>
							<div className="">
								<label htmlFor="rent">rent per month</label>
								<div className="p-5">
									<InputRange
										formatLabel={(value) => `$ ${value}`}
										maxValue={1000}
										minValue={0}
										value={rent}
										onChange={(value) => setRent(value)}
									/>
								</div>
							</div>
						</form>
						<div className="mt-5">
							<button className="btn w-full">Find</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
