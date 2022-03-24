import React from "react"
import { FaEdit, FaTrash } from "react-icons/fa"

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item
        return (
          <article className="grocery-item" key={id}>
            <p className="grocery-text">{title}</p>
            <div className="btn-container">
              <div className="edit-btn" onClick={() => editItem(id)}>
                <FaEdit />
              </div>
              <div className="delete-btn" onClick={() => removeItem(id)}>
                <FaTrash />
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
