import Head from 'next/head'
import { Box,Text,Button,Heading,Flex,Center,VStack } from "@chakra-ui/react"
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Center  overflow="hidden">
    <Flex h="90vh" justify="center" align="center">
      <Head>
        <title>Avana Bookings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Heading mb={4}>Get access to Avana beautiful amenities</Heading>
        <Text fontSize="xl">
          Make use of the summer by booking a get together with family.
        </Text>
        <Flex justify="center">
          <Link href="/bookings">
            <Button size="md" colorScheme="green" mt="6">
              Check all bookings
            </Button>
          </Link>
          <Link href="/book">
            <Button size="md" colorScheme="green" ml="6" mt="6">
              Create a Booking
            </Button>
          </Link>
        </Flex>
      </Box>
      </Flex>
    </Center>
  )
}
