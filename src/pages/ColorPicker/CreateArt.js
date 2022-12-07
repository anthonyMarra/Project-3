import { Component } from "react";


export default class CreateArt extends Component {
    state = {
        artistID: "",
        title: "",
        art: ["white"],
    }
    handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const formData = {
                artistID: this.props.user._id,
                title: this.state.title,
                art: ["white"],
            }
            console.log(formData)
            // const art = await signUp(formData)
            // continue watching youtube video to see how he uploads to database, cause it's hard to copy the SignUpForm
            this.props.setArt(formData)
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
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Art Piece Title:</label>
                    <input type="text" title="title" value={this.state.name} onChange={this.handleChange} required />
                    <button type="submit">Post Your Art Piece</button>
                </form>
            </>
        )
    }
}