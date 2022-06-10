export const ResultReducer = (resultState, resultAction) => {
  if (resultAction.type === "addQuestAnswer") {
    console.log("I am a reducer click, be happy");
    console.log(resultState.userData);

    return {
      ...resultState,
      userData: [
        ...resultState.userData,
        {
          userQuest: resultAction.payload.quest,
          userAns: resultAction.payload.ans,
          ansFlag: resultAction.payload.flag,
        },
      ],
    };
  } else return resultState;
};
