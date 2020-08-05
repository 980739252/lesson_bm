tsx  工作流
.tsx React组件->webpack.config.js->awesome-typescipt-loader
->tsconfig.json->typescript.jsx->babel(polyfill+env+plugin 装饰器模式)->
react DOM->webpack-dev-server html-webpack-plugin footer script
bundle.js

//一般了解
2. 最烦的是什么？ react-scripts
  约定:

3. hooks特色
  - useState
      object...
      
  - useEffect
                              
  - useCallback
  - useMemo  
  - useRef
  - useReduceru

  分析一下react项目如何运行的
  jsx
  root
  JSX 编译的过程
  正则  <.+>...</>
    - 节点的类型
    - 有哪些DOM节点类型  标签节点  div h4
                        组件节点  递归
                        <></>
                        文本  退出

