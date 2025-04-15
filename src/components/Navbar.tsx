import Button from "./ui/Button";

function Navbar() {
	type navItem = {
		name: string;
		link: string;
	};

	const navItems: navItem[] = [
		{ name: "Home", link: "/" },
		{ name: "Blog", link: "/blog" },
		{ name: "Shop", link: "/shop" },
	];

	return (
		<header className="bg-blue-800">
			<nav className="flex justify-between mx-auto container">
				<ul className="flex">
					{navItems.map(({ name, link }) => (
						<li key={name}>
							<a
								href={link}
								className="px-6 py-4 text-xl block text-white font-medium"
							>
								{name}
							</a>
						</li>
					))}
				</ul>
				{/* Right Side */}
				<div className="flex gap-2 items-center">
					<Button href="/login">Login</Button>
					<Button href="/signin">Signin</Button>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
