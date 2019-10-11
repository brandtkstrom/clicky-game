import React, { FC } from 'react';

interface IContainerProps {
    containerClass: string
}

export const Container: FC<IContainerProps> = (props): JSX.Element => {

    const containerClasses: string[] = [
        'p-5',
        'd-flex',
        'flex-wrap',
        'justify-content-between',
    ];

    if (props.containerClass) {
        containerClasses.push(props.containerClass);
    }

    return <section className={containerClasses.join(' ')}>{props.children}</section>;
};


