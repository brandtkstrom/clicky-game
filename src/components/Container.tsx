import React, { FC } from 'react';

export const Container: FC = (props): JSX.Element => {

    const containerClasses: string[] = [
        'p-5',
        'd-flex',
        'flex-wrap',
        'justify-content-between',
    ];

    return <section className={containerClasses.join(' ')}>{props.children}</section>;
};


