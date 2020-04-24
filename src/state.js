import { rerenderEntrieTree } from "./render";
import mainAction from './actions/main-reducer';
import dialogsAction from './actions/dialogs-reducer';

let store = {
  _state: {
    myProfile: {
      posts: [
        { message: "Post 1", id: "1", likesCount: 12 },
        { message: "Post 2", id: "2", likesCount: 25 },
      ],
      postText: "",
    },
    dialogs: {
      guys: [
        {
          name: "Valentin",
          id: "1",
          status: "online",
          messages: [
            { message: "Хватит ныть, дай во всю идти", id: "1" },
            { message: "Страх и солипцизм", id: "2" },
            { message: "Троя и рим", id: "3" },
            { message: "На горе руин", id: "4" },
            { message: "Слепой и неумелый кит", id: "5" },
            { message: "Переживу и это", id: "6" },
          ],
          messageText: "",
        },
        {
          name: "Alexander",
          id: "2",
          status: "offline",
          messages: [
            { message: "Сохраняй свой нейтралитет", id: "1" },
            { message: "Странно", id: "2" },
            { message: "Ты идиот", id: "3" },
            { message: "Смешанное расстройство?", id: "4" },
            { message: "Ты уверен, что не один?", id: "5" },
            { message: "Возьми трубку", id: "6" },
          ],
          messageText: "",
        },
        {
          name: "Evgraf",
          id: "3",
          status: "online",
          messages: [
            { message: "Море нитей", id: "1" },
            { message: "Совпадений ноль", id: "2" },
            { message: "Ситцевый платок", id: "3" },
            { message: "Не предопределено", id: "4" },
            { message: "Ты мой любимый архитектор", id: "5" },
            { message: "Ткачиха или швейка?", id: "6" },
          ],
          messageText: "",
        },
        {
          name: "Arthur",
          id: "4",
          status: "offline",
          messages: [
            { message: "В руке сертификат", id: "1" },
            { message: "Бездействие закона", id: "2" },
            { message: "Убейся, если не коп", id: "3" },
            { message: "Свет и натюрморт", id: "4" },
            { message: "Мир по сути прост", id: "5" },
            { message: "Стери кров", id: "6" },
          ],
          messageText: "",
        },
        {
          name: "Dima",
          id: "5",
          status: "offline",
          messages: [
            { message: "Еретик", id: "1" },
            { message: "Бордели и дет.домы", id: "2" },
            { message: "Патент на андедот", id: "3" },
            { message: "Все переплетено", id: "4" },
            { message: "Суждено помереть им", id: "5" },
            { message: "Враг - целый мир", id: "6" },
          ],
          messageText: "",
        },
        {
          name: "Vanya",
          id: "6",
          status: "online",
          messages: [
            { message: "Страх, отойди", id: "1" },
            { message: "Зла не твори", id: "2" },
            { message: "Изменял дешевым сукам", id: "3" },
            { message: "С дешевыми суками", id: "4" },
            { message: "Сегодня один", id: "5" },
            { message: "Рву до конца, сука", id: "6" },
          ],
          messageText: "",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    store._state.myProfile = mainAction(store._state.myProfile, action);
    store._state.dialogs = dialogsAction(store._state.dialogs, action);
    rerenderEntrieTree(store);
  },
};

export default store;
