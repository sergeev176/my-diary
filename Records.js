import { useDispatch, useSelector } from "react-redux";
import { changeActiveStateAction, changeTextAction, closeEditAction } from "./store/recordsReducer";
import { changeInputAction } from "./store/inputReducer";
import { difference } from "./helper";

function Records() {

    const dispatch = useDispatch();
    const records = useSelector(state => state.records.records);
    const inputValue = useSelector(state => state.inputValue.inputValue);

    function findText(record) {
        // проверяю возраст записи
        if (difference(record.date) < 5) {
            dispatch(closeEditAction(false)); // меняю isActive если были активные
            dispatch(changeActiveStateAction(record.id)); // меняю свойство isActive для показа текста
            dispatch(changeInputAction(record.text)); // выношу текст записи в state 
        } else {
            saveValue()
        }
    }

    const showDates = () => records.map(record => <div key={record.id} onClick={() => findText(record)}>{record.date}</div>)

    function saveValue() {
        dispatch(changeTextAction(inputValue)); // сохраняю текст при нажатии на кнопку save
        dispatch(closeEditAction(false)); // изменяю isActive
        dispatch(changeInputAction(''));  // очистка textarea
    }

    return (
        <div>

            {records.length > 0 ?
                <div>{showDates()}</div>
                :
                <div>записей нет</div>
            }
            <br />

            {inputValue.length > 0 ?
                <>
                    <textarea
                        onChange={(event) => dispatch(changeInputAction(event.target.value))}
                        value={inputValue} cols="30" rows="10">
                    </textarea>
                    <button onClick={() => saveValue()}>save</button>
                </>
                :
                <></>
            }
            <br />

        </div>
    )
}

export default Records;


