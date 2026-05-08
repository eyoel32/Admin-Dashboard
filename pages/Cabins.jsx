import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/Cabins/CabinTable";
import AddCabin from "../features/Cabins/AddCabin";
import CabinTableOperations from "../features/Cabins/CabinTableOperations";


function Cabins() {
 

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cabins</Heading>
        <CabinTableOperations/>

        {/* Filter dropdown */}
      

        {/* Sort dropdown */}
       
      </Row>

      <CabinTable />
      <AddCabin/>
     
    </>
  );
}

export default Cabins;