import { useState } from "react"


const ReadNoteForm = ({ note, users }) => {

    const [title] = useState(note.title)
    const [text] = useState(note.text)
    const [image] = useState(note.image)
    const [username] = useState(note.username)


    const content = (
        <>
            <section className="read-note">
                <content>
                    <img src={image} alt="feature"></img>
                    <br></br>
                    <br></br>
                    <h1 className="title">Herbs name: <i>{title}</i></h1>
                    <h3 className="author">Author: <i>{username}</i></h3>
                    <p className="paragrap">{text}</p>
                </content>
                <ads>
                    <h1>Ads section</h1>
                </ads>
            </section>
        </>
    )

    return content
}

export default ReadNoteForm