import { Component } from "react";
import { postArt } from '../../utilities/art-service';


export default class CreateArt extends Component {
    state = {
        artistID: "",
        artistName: "",
        title: "",
        art: ["white"],
    }
    handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const formData = {
                artistID: this.props.user._id,
                artistName: this.props.user.name,
                title: this.state.title,
                art: this.props.board,
            }
            const art = await postArt(formData);
            this.props.setUpdateBoard(this.props.board)
            window.location = "/"
        } catch {
            this.setState({
                error: "Submitting Art Failed, Try Again"
            })
        }
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    }
    render() {
        if (this.props.user) {
            return (
                <>

                    <form autoComplete="off" onSubmit={this.handleSubmit} method="POST" action="/api/art">
                        <label>Art Piece Title:</label>
                        <input type="text" name="title" value={this.state.name} onChange={this.handleChange} required />
                        <button type="submit">Post Your Art Piece</button>
                    </form>
                </>
            )
        }
    }
}