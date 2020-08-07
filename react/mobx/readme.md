1. class  setState ->父子组件props + props调用->Context
   ->redux useReducer-> mobx  connect 灵感  装饰器模式  

2. 当数据流层次超过两层，简单的usestate传起来太麻烦了，而redux  useReducer太重
如果action可以忽略，useContext
useState React.createContext结合+实际操作
useContext 
3.  reduxer函数是灵魂,
     redux 企业级的数据状态安全流程及架构
      - state  读可以，
      - state  写的话  dispatch action ->reducer->旧新状态的切换
      - reducer 一个旧状态通过同样的type，和payload新状态一定是一样的,
      
              

