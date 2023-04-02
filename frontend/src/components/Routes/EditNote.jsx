function EditNote(props) {
    const id = props.id
    const notes = props.notes
    let note = {title: "", content: ""}
    notes.forEach(noteS => {
        if (noteS.id === id) {
            note = noteS;
        }
    })

    function compute(event) {
        const title = event.target.title.value;
        const content = event.target.content.value;
        if (title && content) {
            props.onModifie(id, title, content);
            props.onDetail(props.id);
        }
        else {
            props.onModifie(id, props.title, props.content);
            props.onDetail(props.id);
        }
    }

    return (
        <div className={"detail-page"}>

            <input type="text"  name="title" className="title-edit" placeholder={note.title || "Titre"}/>

            <textarea type="text" name="content" className="content-edit" placeholder={note.content || "Contenu"} />

            <p className={"detail-author"}>{note.author}Auteur</p>

            <a href="/details">
                <button className="btn-edit" onClick={compute}>Sauvegarder</button>
            </a>
        </div>
    )
}

export default EditNote;