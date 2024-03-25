function TableView(props) {
  return (
    <table className={`table table-bordered ${props.darkMode && "table-dark"}`}>
      <thead>
        <tr>
          <th className="text-center" scope="col">
            S.No.
          </th>
          <th className="text-center" scope="col">
            Task
          </th>
          <th className="text-center" scope="col">
            Mark Done/To-Do
          </th>
          <th className="text-center" scope="col">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((todo, index) => (
          <tr key={index}>
            <td className="text-center">{index + 1}</td>
            <td className="text-center">
              {todo.isEditing ? (
                <div className="text-center d-flex justify-content-center">
                  <input
                    className="form-control w-75 mx-2"
                    value={todo.action}
                    onChange={(e) => props.onEditChange(e, todo)}
                  />
                  <button
                    className="btn btn-success mx-2"
                    onClick={() => props.onFinishEditing(todo)}
                  >
                    <i className="bi bi-check"></i>
                  </button>
                </div>
              ) : (
                todo.action
              )}
            </td>
            <td className="text-center">
              <input
                className="form-check-input"
                type="checkbox"
                checked={todo.isDone}
                onChange={() => props.onMarkComplete(todo)}
              />
            </td>
            <td className="text-center">
              <button
                className="btn btn-outline-warning"
                onClick={() => props.onStartEditing(todo)}
              >
                <i className="bi bi-pencil"></i>
              </button>
              <button
                onClick={() => props.onDeleteTask(todo)}
                className="btn btn-outline-danger mx-1"
              >
                <i className="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableView;
