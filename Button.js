import { nanoid } from "nanoid";
import { getDate } from "./helper";
import { useDispatch, useSelector } from "react-redux";
import { addRecordAction } from "./store/recordsReducer";
import { activeButtonAction } from "./store/buttonReducer";
import { changeInputAction } from "./store/inputReducer";

function Button() {

    const dispatch = useDispatch();
    const records = useSelector(state => state.records.records);
    const disabled = useSelector(state => state.disabled.disabled);

    function addRecord() {

        // активность кнопки дабавления новой записи
        // если сегодня уже добавляли - кнопка не активна
        // если не добавляли - активна
        dispatch(activeButtonAction(records[records.length - 1].date === getDate()));

        dispatch(activeButtonAction(true)); // меняю состояние активности кнопки

        const record = {
            id: nanoid(),
            text: `сегодня ${getDate()} `,
            date: getDate(),
            isActive: true, 
        }
        
        dispatch(addRecordAction(record)); // добавляю новую запись
        dispatch(changeInputAction(record.text)); // заполняю textarea сегодняшней датой
    }

    return (
        <div>
            <button disabled={disabled} onClick={() => addRecord()}>add record</button>
        </div>
    )
}

export default Button;