import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<Navbar fluid rounded>
				<Navbar.Brand>
					<img
						src={logo}
						className="mr-3 h-6 sm:h-9"
						alt="Flowbite React Logo"
					/>
				</Navbar.Brand>
				<div className="flex md:order-2">
					<Dropdown
						arrowIcon={false}
						inline
						label={
							<Avatar
								alt="User settings"
								img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								rounded
							/>
						}
					>
						<Dropdown.Header>
							<span className="block text-sm">Bonnie Green</span>
							<span className="block truncate text-sm font-medium">
								name@flowbite.com
							</span>
						</Dropdown.Header>
						<Dropdown.Item>Dashboard</Dropdown.Item>
						<Dropdown.Item>Settings</Dropdown.Item>
						<Dropdown.Item>Earnings</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item>Sign out</Dropdown.Item>
					</Dropdown>
					<Navbar.Toggle />
				</div>
				<Navbar.Collapse>
					<Navbar.Link  active>
						<Link to='/'>Home</Link>
						
					</Navbar.Link>
					<Navbar.Link >
						<Link to="/dashboard">DashBoard</Link>
						</Navbar.Link>
					<Navbar.Link >
						<Link to="/login">Login</Link>
						</Navbar.Link>
					<Navbar.Link >
						<Link to="/register">Register</Link></Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
