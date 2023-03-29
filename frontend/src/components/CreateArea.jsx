import React, { useEffect, useState } from "react";
import { MdAdd as AddIcon } from "react-icons/md";

function CreateArea(props) {
  const defaultNote = { title: "", content: "" };
  const [Note, setNote] = useState(defaultNote);
  const [isExpanded, setExpanded] = useState(false);
  const [addAllowed, setAddAllowed] = useState(false);

  //on met à jour l'objet
  function objChange(event) {
    const { name, value } = event.target;
    setNote((oldVal) => {
      return { ...oldVal, [name]: value };
    });
  }

  //on surveille le remplissage du formulaire
  useEffect(() => {
    setExpanded(Note.title.replace(/\s/g, ""));
    setAddAllowed(Note.content.replace(/\s/g, ""));
  }, [Note]);

  return (
      <div>
        <form className="create-note">
          <input
              name="title"
              placeholder="Titre"
              value={Note.title}
              onChange={objChange}
          />

          {isExpanded && (
              <textarea
                  name="content"
                  placeholder="Contenu..."
                  onChange={objChange}
                  rows={isExpanded ? 3 : 1}
                  value={Note.content}
              />
          )}

          {addAllowed && (
              <button
                  onClick={(event) => {
                    event.preventDefault(true);
                    props.onAdd(Note);
                    setNote(defaultNote);
                  }}
              >
                <AddIcon />
              </button>
          )}
        </form>
      </div>
  );
}

export default CreateArea;
