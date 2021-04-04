import { Box,Center } from "@chakra-ui/react";
import DataTable from '../../components/DataTable';
import {db} from '../../db/firebase';

export default  function Bookings( {columns,bookings}) {

  return (
    <Center mt={12} overflowY="hidden">
    <Box w="80vw" my="32" mx="auto">
     <DataTable data={bookings} columns ={columns} /> 
    </Box>
    </Center>
  );
}

export async function getServerSideProps() {
    const dataSnapshot = await db.collection('bookings').get();
    let data = [];
    dataSnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    
    const columnsSnapshot = await db.collection('columns').get();
    let columnsD = [];
    columnsSnapshot.forEach((doc) => {
      columnsD.push(doc.data());
    });

    let columns = []
    Object.entries(columnsD[0]).map(([key, value]) => {
      columns.push( {
        Header: value,
        accessor:key
      })
    })
    return {
      props:{ 
        bookings:data,
        columns:columns
      }
    }
}