import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Stack, TextField } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { Concour } from '../@types/Concour';
import { updateConcour} from '../services/concourService';

export const UpdateConcourCard: React.FC<any> = props => {
    const concour: Concour =  props ;

    const concourValidator = Yup.object().shape({
        nom: Yup.string().required('NOM Obligatoire'),
        min_note: Yup.number()
            .min(0, 'min note is 0')
            .required('Min note Obligatoire')
    });

    const formik = useFormik({
        initialValues: concour,
        onSubmit: async (values, actions) => {
            console.log({ values, actions });
            const done = await updateConcour(props.id,values);
            if (done) {
                props.close();
            }
        },
        validationSchema: concourValidator
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
                    update Concour numero : {props.id}
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
                                defaultValue={props.nom}
                            />
                            <TextField
                                fullWidth
                                type="number"
                                label="Min Note"
                                {...getFieldProps('min_note')}
                                error={Boolean(touched.min_note && errors.min_note)}
                                helperText={Boolean(touched.min_note && errors.min_note)}
                                size="small"
                                defaultValue={props.min_note}
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
