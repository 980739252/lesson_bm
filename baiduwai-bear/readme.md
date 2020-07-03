transform 按照自己
top left 按照position：absolutewid
th height 默认相对于父级

三种方式是view盒子占据整个视窗的办法
1 
html,body{
            width: 100%;
            height: 100%;
}
2
            width:100% ;
            height:100%;
            /* absolute 相对于父级第一个设置了定位元素（加了position），相对于视窗 */
            position: absolute;

3
position：absolute;
top：0；
left: 0;
right: 0;
bottom:0;
