import Link from 'next/link';
import { Button, Stack} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FcHome,FcList,FcAddRow } from "react-icons/fc";
export default function Header(){
	
	return(
		<Stack spacing="2" isInline justify="center" my="3">
			<Link href="/">
				<Button size="sm" leftIcon={<Icon as={FcHome} />} >Home</Button>
			</Link>
			<Link href="/book">
				<Button size="sm" leftIcon={<Icon as={FcAddRow} />} >Book</Button>
			</Link>
			<Link href="/bookings">
				<Button size="sm" leftIcon={<Icon as={FcList} />}>Bookings</Button>
			</Link>
		</Stack>
	)
}