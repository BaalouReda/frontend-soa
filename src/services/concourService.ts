import axios from 'axios';
import { Concour } from '../@types/Concour';
import {Condidate} from "../@types/Condidate"
export const findAllConcours = async () => {
    try {
        const res = await axios.get('/api/concours');
        if (res.status == 200) {
            return res.data;
        }
        return [];
    } catch (e) {
        console.log(e);
    }
};
export const createConcour = async (data: Concour ) => {
    try {
        const res = await axios.post('/api/concours/', { body: {
  data
}});
        return res.status == 200;
    } catch (e) {
        console.log(e);
    }
};
export const updateConcour = async (id:string,data: Concour ) => {
    try {
        const res = await axios.post('/api/concours/', { params: {
  id
},body:{
    data
}});
        return res.status == 200;
    } catch (e) {
        console.log(e);
    }
};
export const deleteConcour = async (id:string,) => {
    try {
        const res = await axios.delete('/api/concours/', { params: {
  id
}});
        return res.status == 200;
    } catch (e) {
        console.log(e);
    }
};
export const condidatesubmit = async (concourId: any,condidate:Condidate) => {
    try {
        const res = await axios.post('/api/concours/condidates/', { params: {
  concourId
},body:{
    condidate
}});
        return res.status == 200;
    } catch (e) {
        console.log(e);
    }
};
