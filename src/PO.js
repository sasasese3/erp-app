import Container from '@mui/material/Container';
import { Grid, Typography } from "@mui/material";
import SearchAppBar from "./components/Appbar";
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TableMenu from "./components/Table"
import MenuData from "./MenuData";





function PO() {

  const [productTable, setProductTable] = React.useState([]);

  const handleClickAddButton = ()=>{
    setProductTable([...productTable,{...MenuData['โต๊ะ'],user_amount:0}])
  }

  const handleAmountChange = (event,index)=>{
    event.preventDefault()
    const new_product = [...productTable]
    new_product[index].user_amount = event.target.value
    setProductTable(new_product);
    console.log(productTable);
  }

  const handleProductChange = (event,index)=> {
    event.preventDefault()
    const category = event.target.value
    const result = MenuData[category]
    const new_product = [...productTable]
    new_product[index] = {...result,user_amount:new_product[index].user_amount}
    setProductTable(new_product);
  }

  return (
  <div className="PO">
    <SearchAppBar />
    
    <Container md={{marginY: 5}} 
    >
      
     
        <>
          <Typography
          variant="h4"
          component="h2"
          marginTop={5}
          marginBottom={3}
        >
          ใบสำคัญสั่งซื้อ PO
          </Typography>
        <Box sx={{ flexGrow: 1 }}  >
            
        <Grid container spacing={2}>
             <Grid item xs={4} >
             
                <TextField
                    
                  name="PO_DATE"
                  
                  required
                  id="PO_DATE"
                  label="วันที่จัดทำ"
                  
                />
              </Grid>
              <Grid item xs={4} >
                <TextField
                  name="PO_DATE"
                  
                  required
                  id="PO_DATE"
                  label="เดือนที่จัดทำ"
                  
                />
              </Grid>
             <Grid item xs={4} >
                <TextField
                  name="PO_DATE"
                  
                  required
                  id="PO_DATE"
                  label="ปีที่จัดทำ"
                  
                />
              </Grid>
                <Grid item xs={6} >
                <TextField
                  name="PO_CREATOR"
                  fullWidth
                  required
                  id="PO_CREATOR"
                  label="ชื่อผู้จัดทำ"
                  
                />
              </Grid>
              <Grid item xs={6} >
                <TextField
                  required
                  fullWidth 
                  id="EMPLOYEE_ID_CREATOR"
                  label="ชื่อพนักงานขาย"
                  name="EMPLOYEE_ID_CREATOR"
                  
                />
              </Grid>
              <Grid item xs={6} >
                <TextField
                  required
                  fullWidth
                  id="accountname"
                  label="ชื่อบัญชี"
                  name="accountname"
                  
                />
              </Grid>
              <Grid item xs={6} >
                <TextField
                  required
                  fullWidth
                  id="SUPPLIER_ID"
                  label="ผู้ผลิต"
                  name="SUPPLIER_ID"
                  
                />
              </Grid>
              <Grid item xs={6} >
                <TextField
                  required
                  
                  id="PO_PRICETOTAL"
                  label="จำนวนเงิน"
                  name="PO_PRICETOTAL"
                  
                />
              </Grid>
                
              <Grid item xs ={12}>
              {productTable.map((data,index) =>{
                return <TableMenu key={index} index={index} data={data} handleAmountChange={handleAmountChange} handleProductChange={handleProductChange}/>
              })}
              <Button onClick={handleClickAddButton}> Click to add product</Button>
              </Grid>

              <Grid item xs={6}>
              <Link href="/App">
                <Button 
                type="back"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
              ย้อนกลับ
                </Button>
              </Link>

                </Grid>
                <Grid item xs={6}>
                <Link href="/Inspector">
                <Button 
                type="submid"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
              บันทึกเอกสาร
                </Button>
                </Link>
                </Grid>
             
        </Grid>
        
      
        </Box>
        </>

        
      
    </Container>
  </div>
  );
}
export default PO;
