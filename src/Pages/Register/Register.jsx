import shape from "../../assets/images/delimiter.png"
const Register = () => {
	return (
		<div className="py-12">
			<div className="max-w-screen-xl mx-auto px-5">
				<div className="title-section">
					<h2 className="text-center text-[#333] text-4xl roboto-bold">Register</h2>
                    <img src={shape} alt="" className="mx-auto" />
				</div>

				<div className="form-area">
					<form action="" className="grid grid-cols-2 gap-5">
						<div className="single-input">
							<label htmlFor="name">Your Name</label>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Enter Your Name"
							/>
						</div>
						<div className="single-input">
							<label htmlFor="email">Your Email</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Enter Your Email"
							/>
						</div>
                        <div className="single-input">
							<label htmlFor="password">Your Password</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Enter Your Password"
							/>
						</div>
                        <div className="single-input">
							<label htmlFor="role">Join As</label>
							<select name="role" id="role">
								<option value="renter">Renter</option>
								<option value="owner">Owner</option>
							</select>
						</div>
						<div className="single-input col-span-2">
							<label htmlFor="image">Your Image URL</label>
							<input
								type="text"
								name="image"
								id="image"
								placeholder="Enter Image URL"
							/>
						</div>
						<div className="single-input col-span-2">
                            <button className="btn w-full" type="submit">Register</button>
                        </div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
