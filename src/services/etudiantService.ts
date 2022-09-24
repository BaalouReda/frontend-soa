import axios from 'axios';
import { Etudiant } from '../@types/Etudiant';

export const findAllEtudiants = async () => {
    try {
        const res = await axios.get('/api/etudiants');
        if (res.status == 200) {
            return res.data;
        }
        return [];
    } catch (e) {
        console.log(e);
    }
};
export const creatEtudiant = async (data: Etudiant) => {
    try {
        const res = await axios.post('/api/etudiants', { body: {
  data
}});
        return res.status == 200;
    } catch (e) {
        console.log(e);
    }
};
export const updateEtudiant = async (id:string,data: Etudiant) => {
    try {
        const res = await axios.post('/api/etudiants', { params: {
  id
},body:{
    data
}});
        return res.status == 200;
    } catch (e) {
        console.log(e);
    }
};
export const deleteEtudiant = async (id:string,) => {
    try {
        const res = await axios.delete('/api/etudiants', { params: {
  id
}});
        return res.status == 200;
    } catch (e) {
        console.log(e);
    }
};
export const deleteBycne = async (cne: string) => {
    try {
        const res = await axios.post('/api/etudiants', { params: {
  cne
}});
        return res.status == 200;
    } catch (e) {
        console.log(e);
    }
};
