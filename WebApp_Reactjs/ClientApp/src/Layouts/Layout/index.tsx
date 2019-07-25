import * as React from 'react';

export interface LayoutProps {
    children?: React.ReactNode;
}
export class Layout extends React.Component<LayoutProps, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className='row'>
                <div className='col-sm-3'>
                 
                </div>
                <div className='col-sm-9'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}