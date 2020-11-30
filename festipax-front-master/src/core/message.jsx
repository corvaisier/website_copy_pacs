import React from 'react';
import axios from 'axios';
import backendHostname from '../helpers/getBackendHostname';

export default class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = { comment: [] }
    }

    componentDidMount() {
        setInterval(() => {
            axios.get(`${backendHostname}/message`).then(({ data }) => {
                console.log("backend return: ", data);
                this.setState({ comment: data });
            }).catch((err) => {
                console.log("backend gives following error : ", err);
                this.setState({ backendIsOk: false });
            })
        }, 5000)
    }

    render() {
        return (
            <>
                {
                    this.state.comment.map((element) => {
                        return (
                            <div>
                                <p><b>{element.name}</b>: {element.comment}</p>
                            </div>);
                    })
                }
            </>
        );
    }
}

