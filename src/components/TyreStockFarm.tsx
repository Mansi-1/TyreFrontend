import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Container } from "react-bootstrap";
import { MDBCard } from "mdb-react-ui-kit";
import { options } from "./tyrelist/farmTyrelist";

const TyreStockFarm = () => {
  const animatedComponents = makeAnimated();
  const [selectedValue, setSelecetedValue] = useState("");

  const handleChange = () => {
    
  };

  return (
    // <Container className="home-section" >
    <MDBCard style={{
      maxWidth: '500px', 
      margin: '300px',
      width: '250px',
    }}>
    {/* <MDBCardBody>
      <MDBCardTitle>12.00-24 20PR MINE LUG -D</MDBCardTitle>
      <MDBCardText>
      Tyre Billing @28%: 25919 <br/>
      Tube Description: 12.00-24 TUBE -D <br/>
      Tube Billing @28%: 2208 <br/>
      Flap Description: 24 RR FLAP -D <br/>
      Flap Billing @28%: 641 <br/>
      Total Bill Per Set: 28768 <br/>
      <div>
        In Stock: 10 tyres
      </div>
      </MDBCardText>
      <MDBBtn>Button</MDBBtn>
    </MDBCardBody> */}
<Select
  options={options}
  components={animatedComponents}
  styles={{}}
  value={options}
  onChange={handleChange}
/>
</MDBCard>
// {/* </Container> */}
  );
};

export default TyreStockFarm;