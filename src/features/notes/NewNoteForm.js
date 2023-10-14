import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAddNewNoteMutation } from "./notesApiSlice"

const NewNoteForm = ({ users }) => {

    const [addNewNote, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewNoteMutation()

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState('')
    const [userId, setUserId] = useState(users[0].id)

    useEffect(() => {
        if (isSuccess) {
            setTitle('')
            setText('')
            setImage('')
            setUserId('')
            navigate('/dash/notes')
        }
    }, [isSuccess, navigate])

    const onTitleChanged = e => setTitle(e.target.value)
    const onImageChanged = e => setImage(e.target.value)
    const onTextChanged = e => setText(e.target.value)
    const onUserIdChanged = e => setUserId(e.target.value)

    const canSave = [title, text, image, userId].every(Boolean) && !isLoading

    const onSaveNoteClicked = async (e) => {
        e.preventDefault()
        if (canSave) {
            await addNewNote({ user: userId, image, title, text })
        }
    }

    const options = users.map(user => {
        return (
            <option
                key={user.id}
                value={user.id}
            > {user.username}</option >
        )
    })

    const errClass = isError ? "errmsg" : "offscreen"
    const validTitleClass = !title ? "form__input--incomplete" : ''
    const validImageClass = !image ? "form__input--incomplete" : ''
    const validTextClass = !text ? "form__input--incomplete" : ''

    const content = (
        <>
            <section className="new-note">
                    <p className={errClass}>{error?.data?.message}</p>

                    <form className="form" onSubmit={onSaveNoteClicked}>
                            <h2>New Note</h2>

                        <label className="form__label" htmlFor="title">
                            Title:</label>
                        <div className="group-input">
                        <input
                            className={`form__input ${validTitleClass}`}
                            id="title"
                            name="title"
                            type="text"
                            autoComplete="off"
                            value={title}
                            onChange={onTitleChanged}
                        />
                        </div>
                        <br></br>
                        <label className="form__label" htmlFor="title">
                            Image url:</label>
                        <div className="group-input">
                        <input
                            className={`form__input ${validImageClass}`}
                            id="image"
                            name="imagw"
                            type="text"
                            autoComplete="off"
                            value={image}
                            onChange={onImageChanged}
                        />
                        </div>
                        <br></br>
                        <label className="form__label" htmlFor="text">
                            Text:</label>
                            <div className="group-input">
                        <textarea
                            className={`form__input form__input--text ${validTextClass}`}
                            id="text"
                            name="text"
                            value={text}
                            onChange={onTextChanged}
                        />
                        </div>
                        <br></br>
                        <label className="form__label form__checkbox-container" htmlFor="username">
                            ASSIGNED TO:</label>
                        <div className="group-input">
                        <select
                            id="username"
                            name="username"
                            className="form__select"
                            value={userId}
                            onChange={onUserIdChanged}
                        >
                            {options}
                        </select>
                        </div>
                        <br></br>
                        <button
                                    className="icon-button"
                                    title="Save"
                                    disabled={!canSave}
                                >
                                    SAVE
                                </button>

                    </form>
            </section>
        </>
    )

    return content
}

export default NewNoteForm