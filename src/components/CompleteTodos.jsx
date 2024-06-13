export const CompleteTodos = (props) => {
    const {completeTodos, onClickReturn, onClickDeleteComplete} = props;
    return (
        <div className={"complete-area"}>
            <p className={"title"}>完了のTODO</p>
            <ul>
                {completeTodos.map((todo, index) =>
                    (
                        <li key={todo}>
                            <div className={"list-row"}>
                                <p className={"todo-item"}>{todo}</p>
                                <button onClick={() => onClickReturn(index)}>戻る</button>
                                <button onClick={() => onClickDeleteComplete(index)}>削除</button>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    )
}