import React from 'react';
import propType from 'prop-types';
import { Close } from '@mui/icons-material';
import { Dialog, DialogContent, DialogTitle, Button, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DialogProps } from '../@types/DialogProps';

const CustomDialog: React.FC<any> = props => {
    const { open, close, title, children, ...other } = props;
    return (
        <BootstrapDialog open={open} {...other}>
            <BootstrapDialogTitle onClose={() => close()}>{title}</BootstrapDialogTitle>
            <DialogContent style={{ marginTop: '15px' }}>{children}</DialogContent>
        </BootstrapDialog>
    );
};
export default CustomDialog;

const BootstrapDialogTitle = (props: any) => {
    const { children, onClose, ...other } = props;

    return (
        <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
                <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
                    {children}
                    {onClose ? (
                        <Button
                            aria-label="close"
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                borderRadius: '250px',
                                width: 40,
                                height: 40
                            }}
                            color="error"
                            variant="contained"
                        >
                            <Close color="inherit" fontSize="small" />
                        </Button>
                    ) : null}
                </DialogTitle>
            </Toolbar>
        </AppBar>
    );
};
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2)
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1)
    }
}));
CustomDialog.propTypes = {
    open: propType.bool,
    close: propType.func,
    title: propType.string
};
