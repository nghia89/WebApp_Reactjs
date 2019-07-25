import * as React from 'react';

interface states {
    status:boolean
}
export class Home extends React.Component<any, states>{
    constructor(props: any) {
        super(props);
        this.state = {
            status:false
        }
    }

    render() {
        return (
            <div>
                <h1>Trang chủ</h1>
                </div>
            );
    }

}