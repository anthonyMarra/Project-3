import { Component } from "react";
import { postArt } from '../../utilities/art-service';


export default class CreateArt extends Component {
    state = {
        artistID: "",
        title: "",
        // art: ["white"],
    }
    handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const formData = {
                artistID: this.props.user._id,
                title: this.state.title,
                art: this.props.board,
            }
            console.log(formData)
            const art = await postArt(formData);
            console.log("hypothetically created in database")
            // window.location = "/"
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
        return (
            <>
                <form autoComplete="off" onSubmit={this.handleSubmit} method="POST" action="/api/art">
                    {/* slash in the above action ?*/}
                    <label>Art Piece Title:</label>
                    <input type="text" name="title" value={this.state.name} onChange={this.handleChange} required />
                    <button type="submit">Post Your Art Piece</button>
                </form>
            </>
        )
    }
}