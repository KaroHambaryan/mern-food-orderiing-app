import { Menu } from 'lucide-react'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from './ui/sheet'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className='text-orange-500' />
			</SheetTrigger>
			<SheetContent>
				<SheetTitle>
					<span> Welcome to MernEats.com </span>
				</SheetTitle>
				<Separator />
				<SheetDescription>
					<Button className='flex-1 front-bold bg-orange-500'> Log In </Button>
				</SheetDescription>
			</SheetContent>
		</Sheet>
	)
}

export default MobileNav
