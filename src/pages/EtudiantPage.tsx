import React, { useEffect,useState } from 'react';
import { Container } from '@mui/system';
import { NavBar } from '../components/NavBar';
import CustomDialog from '../components/Dialog';
import { EtudiantCard } from '../components/EtudiantCard';
import { UpdateEtudiantCard } from '../components/UpadateEtudiantCard';
import {findAllEtudiants,deleteEtudiant} from "../services/etudiantService"
import { Delete, Edit, School } from '@mui/icons-material';
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
import { Etudiant } from '../@types/Etudiant';

export const EtudiantPage: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [Etudiant, setEtudiant] = useState([]);
    const [Concours, setConcours] = useState([]);
 
    const retreiveData = async () => {
        const data = await findAllEtudiants();
        console.log(data);
        setEtudiant(data);
    };
    useEffect(() => {
        retreiveData();
    }, []);
    function refreshPage(id:any) {
        deleteEtudiant(id).then(()=>window.location.reload()).catch((erreur)=>console.log(erreur))
        

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
                            New Etudiant
                        </Button>
                        <CustomDialog open={open} close={handleDialog} title="New Concours">
                            <EtudiantCard />
                        </CustomDialog>
                    </div>
                </Stack>
                <Stack flexDirection={'row'} mt={6} justifyContent="center">
                {Etudiant?
                               <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>id</TableCell>
                                    <TableCell align="right">Nom</TableCell>
                                    <TableCell align="right">Prenom</TableCell>
                                    <TableCell align="right">CIN</TableCell>
                                    <TableCell align="right">CNE</TableCell>
                                    <TableCell align="right">Note Arabe</TableCell>
                                    <TableCell align="right">Note Math</TableCell>
                                    <TableCell align="right">Note Anglais</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                                <TableBody>
                               {Etudiant.map((item: Etudiant) => {
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
                                            <TableCell align="right">{item.prenom}</TableCell>
                                            <TableCell align="right">{item.cin}</TableCell>
                                            <TableCell align="right">{item.cne}</TableCell>
                                            <TableCell align="right">{item.note_arabe}</TableCell>
                                            <TableCell align="right">{item.note_math}</TableCell>
                                            <TableCell align="right">{item.note_anglais}</TableCell>
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
                            <UpdateEtudiantCard props={item} close={handleDialog} />
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
                                </TableContainer>: <div> aucune information </div>  }
                </Stack>
            </Container>
        </>
    );
};
