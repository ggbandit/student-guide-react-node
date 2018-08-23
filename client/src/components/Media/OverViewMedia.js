import React, {Component} from 'react';
import {Media} from 'reactstrap';

class OverViewMedia extends Component {
    constructor() {
        super()
        this.state = {
            mediaLists: []
        }
    }

    componentDidMount() {
        this.getStudentGuide()
    }

    getStudentGuide = () => {
        fetch('/api/student-guide')
            .then(response => response.json())
            .then(response => this.setState({ mediaLists: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        const { mediaLists } = this.state;

        return (
            <Media list className="border pt-3 px-0 rounded">
                {
                    mediaLists.map(({id , name}) => {
                        return(
                            <Media tag="li" key={id} className="px-4 mb-4">
                                <Media left href="#">
                                    <img aria-hidden src="https://pbs.twimg.com/profile_images/378800000017423279/1a6d6f295da9f97bb576ff486ed81389_400x400.png" alt="image" style={{height: '64px', width: '64px'}}/>
                                </Media>

                                <Media body className="mx-5">
                                    <Media heading>
                                        <a href="" className="text-dark">{name}</a>
                                    </Media>
                                    <p className="text-muted m-0">{name}</p>
                                </Media>

                                <Media right>
                                    <Media heading>
                                        <a href="" className="text-dark">View workshop Susan</a>
                                    </Media>
                                    <p className="text-muted m-0">9 May,20:10</p>
                                </Media>
                            </Media>
                        )
                    })
                }

            </Media>
        )
    }
}

export default OverViewMedia;