import React from 'react';
import axios from 'axios';
import Img from '../assets/festipacs.jpg'
import Titre from '../core/title'
import Resume from '../core/resume'
import Commentaire from '../core/commentaire'
import Video from '../core/video'
import Message from '../core/message';
import backendHostname from '../helpers/getBackendHostname';

// const MESSAGE_STATUS = {
//     EMPTY: 0,
//     ERROR: -1,
//     SUCCESS: 1,
// }  ;

export default class Home extends React.Component {
    state = {
        backendIsOk: false,
        //     messages: [],
    }

    async componentDidMount() {
        // development environment host managed by package.json proxy variable, let emtpy
        axios.get(`${backendHostname}/status`).then(({ data }) => {
            console.log("backend return: ", data);
            this.setState({ backendIsOk: true });
        }).catch((err) => {
            console.log("backend gives following error : ", err);
            this.setState({ backendIsOk: false });
        })

        // axios.get('http://localhost:8081/').then(({data}) => {
        //     console.log("backendResponse data", data);
        //     this.setState({messages: data});
        // })
    }

    render() {
        return (
            <>
                { this.state.backendIsOk &&
                    <div>
                        <div class="title">
                            <div class="list">
                                <div class="z">
                                    <Titre />
                                    {/* { this.state.messages.map(message => 
                                        <Message content={message.message} />) 
                                    } */}
                                </div>
                                <p class="y">...</p>
                                <div>
                                    <Video />
                                </div>
                            </div>
                            <img class="img img-fluid" src={Img} alt="Illustration pacs réalisé par Marion"></img>
                        </div>
                        <div>
                            <Resume />
                        </div>
                        <div>
                            <Commentaire />
                        </div>
                        <div>
                            <Message />
                        </div>
                    </div>
                }
                {
                    this.state.backendIsOk === false &&
                    <>
                        <p>Backend is not here</p>
                    </>
                }
            </>
        )
    }
}
