import React, { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import { NavBar } from '../components/NavBar';

import {
    Button,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import { Delete, Edit, School } from '@mui/icons-material';
import CustomDialog from '../components/Dialog';
import { ConcourCard } from '../components/ConcourCard';
import {UpdateConcourCard} from "../components/UpdateConcourCard"
import { findAllConcours,deleteConcour } from '../services/concourService';

export const ConcourPage: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [Concours, setConcours] = useState([]);
 
    const retreiveData = async () => {
        const data = await findAllConcours();
        console.log(data);
        setConcours(data);
    };
    useEffect(() => {
        retreiveData();
    }, []);
    function refreshPage(id:any) {
        deleteConcour(id).then(()=>window.location.reload()).catch((erreur)=>console.log(erreur))
        

      }
    const handleDialog = () => setOpen(!open);
    return (
        <>
            <NavBar />
            <Container maxWidth="lg">
                <Stack direction={'row'} mt={5} justifyContent={'space-between'} sx={{ mb: 5 }}>
                    <Typography variant="h6" gutterBottom>
                        List Concours
                    </Typography>
                    <div>
                        <Button variant="contained" startIcon={<School />} onClick={handleDialog}>
                            New Concour
                        </Button>
                        <CustomDialog open={open} close={handleDialog} title="New Concours">
                            <ConcourCard close={handleDialog} />
                        </CustomDialog>
                    </div>
                </Stack>
                <Stack flexDirection={'row'} mt={6} justifyContent="center">
                               {Concours ?
                               <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>id</TableCell>
                                        <TableCell align="right">Nom</TableCell>
                                        <TableCell align="right">Min Note</TableCell>
                                        <TableCell align="right">NB Condidate</TableCell>
                                        <TableCell align="center">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                               {Concours.map((item:any) => {
                                    return (

                                        <TableRow
                                            key={item.id}
                                            sx={{
                                                '&:last-child td, &:last-child th': { border: 0 }
                                            }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {item.id}
                                            </TableCell>
                                            <TableCell align="right">{item.nom}</TableCell>
                                            <TableCell align="right">{item.min_note}</TableCell>
                                            <TableCell align="right">
                                                {item.condidates.length}
                                            </TableCell>
                                            <TableCell align="center">
                                                <Stack direction={'row'}>
                                                    <Button
                                                        size="small"
                                                        variant="contained"
                                                        color="warning"
                                                        style={{ marginRight: 10 }}
                                                    >
                                                        <div>
                                                   <Button variant="contained" startIcon={<School />} onClick={handleDialog}>
                                                  <Edit fontSize="small" />
                        </Button>
                        <CustomDialog open={open} close={handleDialog} title="New Concours">
                            <UpdateConcourCard props={item} close={handleDialog} />
                        </CustomDialog>
                                                      </div>
                                                        
                                                    </Button>
                                                    <Button
                                                        size="small"
                                                        variant="contained"
                                                        color="error"
                                                    >
                                                        <Delete fontSize="small"  onClick={()=>refreshPage(item.id)}></Delete>
                                                    </Button>
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}                     
                                </TableBody>
                                </Table>
                                </TableContainer>: <div> aucun concour </div>  }
       
                </Stack>
            </Container>
        </>
    );
};
