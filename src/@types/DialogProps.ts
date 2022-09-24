import React from 'react';

export interface DialogProps {
    open: boolean;
    close: VoidFunction;
    title: string;
    children: any;
}
