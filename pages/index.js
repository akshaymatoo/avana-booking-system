import Head from 'next/head'
import { Box,Text,Button,Heading,Flex,Center } from "@chakra-ui/react"
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Center my={250} alignItems="center" overflow="hidden">
      <Head>
        <title>Avana Bookings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Heading mb={4}>Get access to Avana beautiful amenities</Heading>
        <Text fontSize="xl">
          Make use of the summer by booking a get together with family.
        </Text>
        <Flex justify="center" wrap="1">
          <Link href="/bookings">
            <Button size="lg" colorScheme="green" mt="6">
              Go to Listings
            </Button>
          </Link>
          <Link href="/book">
            <Button size="lg" colorScheme="green" ml="6" mt="6">
              Create a Booking
            </Button>
          </Link>
        </Flex>
      </Box>
    </Center>
  )
}
