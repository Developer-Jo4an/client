import {
	HandPlatter,
	Salad,
	UtensilsCrossed,
	Pizza,
	Coffee,
	ShoppingCart,
	ShoppingBag,
	Truck,
	HandHelping,
	Shirt,
	Footprints,
	Cable,
	AirVent,
	PawPrint,
	Navigation,
	Hotel,
	Ticket,
	PlaneLanding,
	GraduationCap,
	LibraryBig,
	School,
	BookOpenText,
	Eclipse,
	Medal,
	Gamepad2,
	RollerCoaster,
	Menu,
	Gift,
	HandCoins,
	Undo2
} from 'lucide-react-native'

export const categoryIcons = (key, props) => {
	const categoryIconsObject = {
		'Restaurants and cafes' : <HandPlatter { ...props } />,
		'Cafe' : <Salad { ...props } />,
		'Restaurants' : <UtensilsCrossed { ...props } />,
		'Fast food' : <Pizza { ...props } />,
		'Coffee houses' : <Coffee { ...props } />,
		'Products' : <ShoppingCart { ...props } />,
		'Stores' : <ShoppingBag { ...props } />,
		'Delivery' : <Truck { ...props } />,
		'Charity' : <HandHelping { ...props } />,
		'Shopping' : <Shirt { ...props } />,
		'Clothes and Shoes' : <Footprints { ...props } />,
		'Electronics' : <Cable { ...props } />,
		'For home' : <AirVent { ...props } />,
		'Travels' : <Navigation { ...props } />,
		'Hotels' : <Hotel { ...props } />,
		'Tickets' : <Ticket { ...props } />,
		'Excursions' : <PlaneLanding { ...props } />,
		'Education' : <GraduationCap { ...props } />,
		'Courses' : <LibraryBig { ...props } />,
		'Tutors' : <School { ...props } />,
		'Educational materials' : <BookOpenText { ...props } />,
		'Lifestyle' : <Eclipse { ...props } />,
		'Sport' : <Medal { ...props } />,
		'Hobbies' : <Gamepad2 { ...props } />,
		'Entertainment' : <RollerCoaster { ...props } />,
		'Other' : <Menu { ...props } />,
		'Gifts' :<Gift { ...props } />,
		'Salary' : <HandCoins { ...props } />,
		'Refunds' : <Undo2 { ...props } />,
	}
	return categoryIconsObject[key]
}