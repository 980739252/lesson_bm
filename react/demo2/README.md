1. css reset  外部网站
     normalize.css
     index.css   css 移动业务的设置
2. 无状态组件的创建流程刻意练习
    - 组件插入父级组件中，思考好props
    - 组件的类型如果是无状态组件
        prop-types css propTypes
        形参props
        return(<div></div>)
    - props 解构出来要的prop
    - 功能函数建议由父组件1来打理
       存粹的负责 Render
       函数可以复用
   
3. 年轻的react  hooks 全新开发方式
  class Component -> fucntion
  函数式编程  
  class + constructor +生命周期 +render -> function + react hoocks魔法函数
   - useCallback  缓存一个函数
   - useMemo

4. 状态组件的编写顺序
     - 数据   Provider store
5  redux
- 简单的redux  项目结构
     store.js  createStore  reducers
     中间件 axios  redux-thunk  支持异步 
     reducers.js  combinReducers
     actions.js 数据请求  状态改变的触发都由actions来负责
         ActionTypes  可读性


- redux API ->设计状态(reduer+actions)
  初始值 from  to   两个reducers函数
  函数  初始值 action  return 初始值  写好
  状态会怎么变  动作的声明  SET_FROM
  - switch case
  - {type,payload} action
  - actionTypes  进行常量声明 提高可读性
  - actions 写出来
  
  - 数据组件化 
  1. connect 高阶返回原组件
    connect({
        mapState,
        mapDispatch
    })(Component) 
  2. 创建组件
  3. 状态组件 无状态组件
- reducer 
   action的标准做法
   返回{type:,payload:} 更新reducer 状态
   组件里的事件 生命周期 等功能  主要是和数据 状态 打交道 归为action
   所有的Action  export  function 
     在组件里引用需要的actions
   bindActionCreators
   action 变成本地调用的函数
   dispatch
   useMemo 缓存函数
   connect 中去第二个参数返回 action
1. action  
from  北京
to  南昌
两个action  思想的切换

修改的本质  redux 


- from to 的复盘   
   1.redux 编程思想
    - reducers纯函数  返回  状态  及接受状态 的更新  
    那一刻只有一个状态与之相应， switch
    case
    - action actionsTypes
    是更新reducer的使者  dispatch  action
    from to 都有独立的reducer函数和action
    - exchangeFromTo()
      dispatch  getState


