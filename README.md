
属性调试网页：[flex-demo](https://shengding1214.github.io/flex-demo/index.html)
# 总览

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。
![](https://user-gold-cdn.xitu.io/2018/8/16/1653e64534453f25?w=1100&h=638&f=png&s=108116)
容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。
# 容器属性
## display:flex
一个容器设置了display:flex;属性就定义了一个flex容器，它的直接子元素会接受这个flex环境
```
.container {
  display: flex; /* or inline-flex */
}
```
## flex-direction

![](https://user-gold-cdn.xitu.io/2018/8/16/1653e562baf5bde5?w=638&h=164&f=png&s=3643)
设置或检索伸缩盒对象的子元素在父容器中的位置
```
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
* row 默认值，水平从左到右
* row-reverse 水平从右到左
* column 垂直从上到下
* column-reverse 垂直从下到上

## flex-wrap

![](https://user-gold-cdn.xitu.io/2018/8/16/1653e5855b91f3b2?w=622&h=216&f=png&s=7515)
设置或检索弹性盒模型对象的子元素超出父容器时是否换行
```
.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
* nowrap 默认值，不换行
* wrap 换行
* wrap-reverse 换行，并且颠倒行顺序

## justify-content

![](https://user-gold-cdn.xitu.io/2018/8/16/1653e5989d4ff6de?w=640&h=726&f=png&s=31212)
设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式，当弹性盒里一行上的所有子元素都不能伸缩或已经达到其最大值时，这一属性可协助对多余的空间进行分配。当元素溢出某行时，这一属性同样会在对齐上进行控制
```
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```
* flex-start 默认值、弹性盒子元素将向行起始位置对齐

* flex-end 弹性盒子元素将向行结束位置对齐

* center弹性盒子元素将向行中间位置对齐。该行的子元素将相互对齐并在行中居中对齐

* space-between 弹性盒子元素会平均地分布在行里

* space-around 弹性盒子元素会平均地分布在行里，两端保留子元素与子元素之间间距大小的一半

## align-items

![](https://user-gold-cdn.xitu.io/2018/8/16/1653e5ac4759759d?w=620&h=752&f=png&s=32082)
设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式
```
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```
* flex-start 弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。

* flex-end 弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。

* center 弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。

* baseline 如弹性盒子元素的行内轴与侧轴为同一条，则该值与flex-start等效。其它情况下，该值将参与基线对齐。

* stretch 如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制

## align-content

![](https://user-gold-cdn.xitu.io/2018/8/16/1653e5c05d8e56cf?w=620&h=744&f=png&s=30668)
设置或检索弹性盒堆叠伸缩行的对齐方式
```
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```
* flex-start 各行向弹性盒容器的起始位置堆叠。弹性盒容器中第一行的侧轴起始边界紧靠住该弹性盒容器的侧轴起始边界，之后的每一行都紧靠住前面一行。

* flex-end 各行向弹性盒容器的结束位置堆叠。弹性盒容器中最后一行的侧轴起结束界紧靠住该弹性盒容器的侧轴结束边界，之后的每一行都紧靠住前面一行。

* center 各行向弹性盒容器的中间位置堆叠。各行两两紧靠住同时在弹性盒容器中居中对齐，保持弹性盒容器的侧轴起始内容边界和第一行之间的距离与该容器的侧轴结束内容边界与第最后一行之间的距离相等。

* space-between 各行在弹性盒容器中平均分布。第一行的侧轴起始边界紧靠住弹性盒容器的侧轴起始内容边界，最后一行的侧轴结束边界紧靠住弹性盒容器的侧轴结束内容边界，剩余的行则按一定方式在弹性盒窗口中排列，以保持两两之间的空间相等。

* space-around 各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。各行会按一定方式在弹性盒容器中排列，以保持两两之间的空间相等，同时第一行前面及最后一行后面的空间是其他空间的一半。

* stretch 各行将会伸展以占用剩余的空间。剩余空间被所有行平分，以扩大它们的侧轴尺寸

# 项目属性
## order

![](https://user-gold-cdn.xitu.io/2018/8/16/1653e5d784273d50?w=214&h=144&f=png&s=3153)
在默认情况下flex order会按照书写顺训呈现，可以通过order属性改变，数值小的在前面，还可以是负数
```
.item {
  order: <integer>;
}
```
## flex-grow
用于**瓜分**父容器的**剩余空间**
![](https://user-gold-cdn.xitu.io/2018/8/16/1653e5e33183c282?w=798&h=198&f=png&s=5866)
设置或检索弹性盒的扩展比率,根据弹性盒子元素所设置的扩展因子作为比率来分配剩余空间
```
.item {
  flex-grow: <number>; /* default 0 */
}
```
## flex-shrink
设置或检索弹性盒的收缩比率,根据弹性盒子元素所设置的收缩因子作为比率来收缩空间
```
.item {
  flex-shrink: <number>; /* default 1 */
}
```
## flex-basis
设置或检索弹性盒伸缩基准值，如果所有子元素的基准值之和大于剩余空间，则会根据每项设置的基准值，按比率伸缩剩余空间
```
.item {
  flex-basis: <length> | auto; /* default auto */
}
```
## flex
flex-grow, flex-shrink,flex-basis 的缩写
```
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```
## align-self

![](https://user-gold-cdn.xitu.io/2018/8/16/1653e60e146fe30c?w=618&h=270&f=png&s=11603)
设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式，可以覆盖父容器align-items的设置
```
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

# 深入理解 flex-grow/flex-shrink
## flex-grow

![](https://user-gold-cdn.xitu.io/2018/8/16/1653e62b88ad5b7a?w=1096&h=596&f=png&s=124725)
容器的宽度为400px, 子项1的占用的基础空间(flex-basis)为50px，子项2占用的基础空间是70px，子项3占用基础空间是100px，剩余空间为 400-50-70-100 = 180px。 其中子项1的flex-grow: 0(未设置默认为0)， 子项2flex-grow: 2，子项3flex-grow: 1，剩余空间分成3份，子项2占2份(120px)，子项3占1份(60px)。所以 子项1真实的占用空间为: 50+0 = 50px， 子项2真实的占用空间为: 70+120 = 190px， 子项3真实的占用空间为: 100+60 = 160px。

## flex-shrink
用来“吸收”超出的空间

![](https://user-gold-cdn.xitu.io/2018/8/16/1653e634c4971388?w=1078&h=592&f=png&s=126037)
容器的宽度为400px, 子项1的占用的基准空间(flex-basis)为250px，子项2占用的基准空间是150px，子项3占用基准空间是100px，总基准空间为 250+150+100=500px。容器放不下，多出来的空间需要被每个子项根据自己设置的flex-shrink 进行吸收。 子项1的flex-shrink: 1(未设置默认为1)， 子项2 flex-shrink: 2，子项3 flex-shrink: 2。子项1需要吸收的的空间为 (250*1)/(250*1+150*2+100*2) * 100 = 33.33px，子项1真实的空间为 250-33.33 = 216.67px。同理子项2吸收的空间为(150*2)/(250*1+150*2+100*2) * 100=40px，子项2真实空间为 150-40 = 110px。子项3吸收的空间为(100*2)/(250*1+150*2+100*2) * 100 = 26.67px，真实的空间为100-26.67=73.33px。
