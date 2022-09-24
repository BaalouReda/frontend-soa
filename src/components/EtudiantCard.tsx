import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Stack, TextField } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { Etudiant } from '../@types/Etudiant';
import { creatEtudiant } from '../services/etudiantService';
export const EtudiantCard : React.FC<any> = props  => {
    const etudiant: Etudiant = {
        nom: '',
        prenom: '',
        cin: '',
        cne: '',
        note_anglais: 0,
        note_arabe: 0,
        note_math: 0
    };

    const etudiantValidator = Yup.object().shape({
        nom: Yup.string().required('NOM Obligatoire'),
        prenom: Yup.string().required('prenom Obligatoire'),
        cin: Yup.string().required('CIN Obligatoire'),
        cne: Yup.string().required('CNE Obligatoire'),
        note_anglais: Yup.number().required('Note Anglais Obligatoire'),
        note_arabe: Yup.number().required('Note arabe Obligatoire'),
        note_math: Yup.number().required('Note Math Obligatoire')
    });

    const formik = useFormik({
        initialValues: etudiant,
        onSubmit: async (values, actions) => {
            console.log({ values, actions });
            const done = await creatEtudiant(values);
            if (done) {
                props.close();
            }
        },
        validationSchema: etudiantValidator
    });

    const {
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        getFieldProps,
        values,
        setFieldValue
    } = formik;

    return (
        <Card sx={{ width: 500 }}>
            <CardContent>
                <Typography style={{ textAlign: 'center' }} component={'h2'} variant="h5">
                    {' '}
                    New Concour
                </Typography>

                <FormikProvider value={formik}>
                    <Form
                        autoComplete="off"
                        noValidate
                        onSubmit={handleSubmit}
                        style={{
                            marginTop: '6px'
                        }}
                    >
                        <Stack spacing={3}>
                            <TextField
                                fullWidth
                                type="text"
                                label="NOM"
                                {...getFieldProps('nom')}
                                error={Boolean(touched.nom && errors.nom)}
                                helperText={touched.nom && errors.nom}
                                size="small"
                            />
                            <TextField
                                fullWidth
                                type="text"
                                label="NOM"
                                {...getFieldProps('prenom')}
                                error={Boolean(touched.prenom && errors.prenom)}
                                helperText={touched.prenom && errors.prenom}
                                size="small"
                            />
                            <TextField
                                fullWidth
                                type="text"
                                label="CIN"
                                {...getFieldProps('cin')}
                                error={Boolean(touched.cin && errors.cin)}
                                helperText={touched.cin && errors.cin}
                                size="small"
                            />
                            <TextField
                                fullWidth
                                type="text"
                                label="CNE"
                                {...getFieldProps('cne')}
                                error={Boolean(touched.cne && errors.cne)}
                                helperText={touched.cne && errors.cne}
                                size="small"
                            />
                            <TextField
                                fullWidth
                                type="number"
                                label="Note Math"
                                {...getFieldProps('nom')}
                                error={Boolean(touched.note_math && errors.note_math)}
                                helperText={Boolean(touched.note_math && errors.note_math)}
                                size="small"
                            />
                            <TextField
                                fullWidth
                                type="number"
                                label="Note Anglais"
                                {...getFieldProps('note_anglais')}
                                error={Boolean(touched.note_anglais && errors.note_anglais)}
                                helperText={Boolean(touched.note_anglais && errors.note_anglais)}
                                size="small"
                            />
                            <TextField
                                fullWidth
                                type="number"
                                label="Note Arabe"
                                {...getFieldProps('note_arabe')}
                                error={Boolean(touched.note_arabe && errors.note_arabe)}
                                helperText={Boolean(touched.note_arabe && errors.note_arabe)}
                                size="small"
                            />
                        </Stack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ my: 2 }}
                        >
                            <Button fullWidth variant="contained" type="submit">
                                Submit
                            </Button>
                        </Stack>
                    </Form>
                </FormikProvider>
            </CardContent>
        </Card>
    );
};
