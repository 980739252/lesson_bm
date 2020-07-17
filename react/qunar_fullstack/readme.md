- 全栈项目
   一分为二的思想
   前后端分离
   UI与redux分离
   程序数据怎么做
   - citydata  null
      action-type 
   - action  setCityData
   - 是否显示  isCitySelectorVisible  false
      ACTION_SET_IS_CITY_SELECTOR_VISIBTLE
      isLoadingCityData
      ACTION_SET_IS_LOADING_CITY_DATA
   - 后端api设计流程
      1. mongodb/mysql
        mockerAPI 解决了跨域
      2. 模块化输出api配置
      3. require json    Mocker.mock  random
         配置

   -  api->action->reducer->connect->组件
      

   - 数据请求都放在actions中           
      异步的actions中，dispatch多个action



