import { useForm } from "react-hook-form";
import styles from '../../styles/Home.module.css';
import { Icon,useToast } from "@chakra-ui/react";
import { RiLoginCircleLine } from "react-icons/ri";
import {
  Box,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Center,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from "@chakra-ui/react";
import {db} from '../../db/firebase';

export default  function Book() {
	const { handleSubmit, errors, register, formState } = useForm();
	const toast = useToast();

	function validateName(value) {
		console.log("value passed ",value);
	  if (!value) {
	    return "Name is required";
	  } else return true;
	}

	const registerBooking = async event => {
    event.preventDefault();
    
    let data = {
      name:event.target.name.value,
      apartment:event.target.apt.value,
      activity:event.target.activityName.value,
      building:event.target.building.value,
      date:event.target.date.value,
      time:`${event.target.from.value} - ${event.target.to.value}`
    };
    const newBooking = db.collection('bookings').doc();
    const res = await newBooking.set(data);

    toast({
          title: "Booking created.",
          description: `We've created a booking for ${event.target.activityName.value} at ${event.target.from.value}`,
          status: "success",
          position: "bottom-right",
          duration: 9000,
          isClosable: true,
      });
  }
  return (
    <Center mt={12}>
     <Box w={["90vw","30vw","40vw","30vw"]} bg="gray.50" p={10} borderRadius="lg" overflow="hidden"  boxShadow="xs">
        <form onSubmit={registerBooking}>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              name="name"
              placeholder="name"
            />
          </FormControl>

          <FormControl isRequired>
          	<FormLabel htmlFor="activityName">Activity name</FormLabel>
    				<Select name="activityName" placeholder="Select activity">
    				  <option value="BBQ1">BBQ1</option>
    				  <option value="BBQ2">BBQ2</option>
    				  <option value="Hammock">Hammock</option>
    				  <option value="Gym">Gym</option>
              <option value="Conference room">Conference room</option>
              <option value="Fire place">Fire place</option>
    				</Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="apt">Apartment#</FormLabel>
            <Input
              type="number"
              name="apt"
              placeholder="Apartment number"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="building">Building#</FormLabel>
            <NumberInput name="building" min={0} max={20}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="date">Date</FormLabel>
            <Input
              type="date"
              name="date"
              placeholder="Booking date"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="from">From</FormLabel>
            <Input
              type="time"
              name="from"
              placeholder="From time"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="to">To</FormLabel>
            <Input
              type="time"
              name="to"
              placeholder="To time"
            />
          </FormControl>
          <Button mt={4} colorScheme="gray" isLoading={formState.isSubmitting} leftIcon={<Icon as={RiLoginCircleLine} />}  type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Center>
  );
}