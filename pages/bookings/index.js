import { Box } from "@chakra-ui/react";
import DataTable from '../../components/DataTable';
import {db} from '../../db/firebase';

export default  function Bookings( {columns,bookings}) {

  return (
    <Box  borderColor="gray.200"  w="80vw" my="32" mx="auto">
     <DataTable data={bookings} columns ={columns} />
    </Box>
  );
}

export async function getServerSideProps() {
    console.log(" -- getServerSideProps -- ")
    const dataSnapshot = await db.collection('bookings').get();
    let data = [];
    dataSnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    
    const columnsSnapshot = await db.collection('columns').get();
    let columnsD = [];
    columnsSnapshot.forEach((doc) => {
      console.log(doc.id,doc.data());
      columnsD.push(doc.data());
    });

    let columns = []
    Object.entries(columnsD[0]).map(([key, value]) => {
      columns.push( {
        Header: value,
        accessor:key
      })
    })
     
    /*
    {
        Header: "To convert",
        accessor: "fromUnit",
      },
      {
        Header: "Into",
        accessor: "toUnit",
      },
      {
        Header: "Multiply by",
        accessor: "factor",
        isNumeric: true,
      },*/
    return {
      props:{ 
        bookings:data,
        columns:columns
      }
    }
}