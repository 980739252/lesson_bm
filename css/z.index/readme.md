

 一个网页，是沿这一条z轴排开的（）、


##
层叠上下文形成
psdition 不为static
filler transfrom perspective不为空


layers
共同点 共同的都是z-轴  顺序
transform:translate3d
will-change

perspective
video
backface-visibility为hidden 
css3里面的abunation动画开始的时候

##  
js->relayout->repaint->composite -GPU

## 
提升layers的好处
  - 当前这个layer不会影响到别的layers


## flex
主轴
交叉轴
flex 容器：
display:flex    弹性布局                                        
1. flex-direction: 确定主轴方向()                          
                row 主轴为水平方向，起点在左端                             
                row-reverse 主轴为水平方向，起点在右端      
                column  主轴为垂直方向，起点在上沿           ---------->   flex-flow两者加在一起的简写形式 默认值 
                column-reverse 主轴为垂直方向，起点在下沿                   为row wrap
2. flex-wrap  一条轴线放不下，如何换行
                nowrap(默认) 不换行
                wrap   换行 第一行在上方 
                wrap-reverse 换行 第一行在下方
    
3. justify-content: 定义了项目在主轴上的对其方式
                 flex-start 默认值 ：左对齐
                 flex-end  右对齐
                 center  居中 
                 space-between 两端对齐 项目之间的距离都相等
                 space-around   每个项目两侧的间隔相等，所以，项目之间的距离比项目离边框的距离多一半
4. align-items： 定义了项目在交叉轴如何对齐
                 flex-start 交叉轴的起点
                 flex-end   交叉轴的终点
                 center     交叉轴的中点
                 stretch    如果项目未设置高度或设为auto，将占满整个容器的高度。
                 baseline   项目第一行文字的基线对齐
align-content 定义了多根轴线的对齐方式 
             flex-start 
               与交叉轴的起点对齐
             flex-end
               与交叉轴的终点对齐比项目离边框的距离多一半
             center
               与交叉轴的中点对齐
             space-between
             交叉轴两端对齐，轴线之间的间隔平均分布。
             space-around
              项目两侧的间距相等 ，项目间的距离



flex 容器里面的项目：
1.    order 
        定义项目的排列顺序。数值越小，排列越靠前，默认为0。


2.    flex-grow
       定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
3.    flex-basis
      定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。


4.    flex-shrink
       定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。


5.    align-self
       属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。








