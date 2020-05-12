const ADD_MESSAGE = "ADD-MESSAGE";
const TYPE_MESSAGE = "TYPE-MESSAGE";

let initialState = {
  guys: [
    {
      name: "Valentin",
      id: "1",
      status: "online",
      messages: [
        { message: "Ты как там поживаешь?", id: "1" },
        { message: "Сегодня был в больнице", id: "2" },
        { message: "Так что у меня плохие новости", id: "3" },
        { message: "Но давай лучше пока не об этом", id: "4" },
        { message: "Меня нагнетает эта тема", id: "5" },
        { message: "Чего молчишь?", id: "6" },
      ],
      messageText: "",
    },
    {
      name: "Alexander",
      id: "2",
      status: "offline",
      messages: [
        { message: "Привет, давно не виделись", id: "1" },
        { message: "Не хочешь прогуляться?", id: "2" },
        { message: "Погода сегодня хорошая", id: "3" },
        { message: "Как у тебя там с армией кстати говоря?", id: "4" },
        { message: "Отвечай быстрее", id: "5" },
        { message: "Нужно отойти", id: "6" },
      ],
      messageText: "",
    },
    {
      name: "Evgraf",
      id: "3",
      status: "online",
      messages: [
        { message: "Ты скоро домой придешь?", id: "1" },
        { message: "Скучно очень", id: "2" },
        { message: "На учебе завал", id: "3" },
        { message: "Лоллл", id: "4" },
        { message: "Ну ответь ты уже", id: "5" },
        { message: "Ясно понятно", id: "6" },
      ],
      messageText: "",
    },
    {
      name: "Arthur",
      id: "4",
      status: "offline",
      messages: [
        { message: "Ну и?", id: "1" },
        { message: "Зачем ты это пишешь?", id: "2" },
        { message: "Тебе и вправду заняться нечем?", id: "3" },
        { message: "Эй, ты меня слушаешь вообще?", id: "4" },
        { message: "Ладно", id: "5" },
        { message: "Хорошо", id: "6" },
      ],
      messageText: "",
    },
    {
      name: "Dima",
      id: "5",
      status: "offline",
      messages: [
        { message: "Еретик", id: "1" },
        { message: "Хватит ночами в своем компьютере сидеть", id: "2" },
        { message: "Глаза посадишь", id: "3" },
        { message: "Да и херней страдаешь", id: "4" },
        { message: "Займись лучше чем-то", id: "5" },
        { message: "более нормальным", id: "6" },
      ],
      messageText: "",
    },
    {
      name: "Vanya",
      id: "6",
      status: "online",
      messages: [
        { message: "Хай", id: "1" },
        { message: "Дааааа", id: "2" },
        { message: "А нет.", id: "3" },
        { message: "Хм..", id: "4" },
        { message: "Странно это", id: "5" },
        { message: "Конец.", id: "6" },
      ],
      messageText: "",
    },
  ],
};

let dialogsAction = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.guys[action.index].messages.push({
        message: action.message,
      });
      state.guys[action.index].messageText = "";
      return { ...state };

    case TYPE_MESSAGE:
      state.guys[action.index].messageText = action.text;
      return { ...state };

    default:
      return { ...state };
  }
};

export const addMessageCreater = (textMessage, index) => ({
  type: ADD_MESSAGE,
  message: textMessage,
  index: index,
});

export const typeMessageCreater = (newtext, index) => ({
  type: TYPE_MESSAGE,
  text: newtext,
  index: index,
});

export default dialogsAction;
