export const ACTION_SET_FROM = 'SET_FROM';
export const ACTION_SET_TO = 'SET_TO';

export function setFrom(from) {
  return {
    type: ACTION_SET_FROM,
    payload: from,
  }
}

export function setTo(to) {
  return {
    type: ACTION_SET_TO,
    payload: to,
  }
}

export  function  exchangeFromTo(){
  return(dispatch,getState)=> {
    // 1.两个action都要调用
    // 2. patload  传值
      const{from,to} = getState()
      dispatch(setTo(from))
      dispatch(setFrom(to))
  }

}