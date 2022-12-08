import { Component } from "react";
import { deleteArt } from '../../utilities/art-service';


export default class DeleteButton extends Component {
    handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            console.log(this.props.artID)
            const art = await deleteArt(this.props.artID)
            this.props.setUpdateBoard([this.props.artID])
        } catch {
            this.setState({
                error: "Submitting Art Failed, Try Again"
            })
        }
    }
    render() {
        return (
            <>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <button type="submit">Delete This Art Piece</button>
                </form>
            </>
        )
    }
}