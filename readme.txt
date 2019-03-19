技术解释


css flex 是排版的重点
parent 的tag 设置flex 之后，child 设置 ml-auto 就可以向右float
比如：
<div style="background-color: yellow;flex-direction:row;display: flex;">
	<span style="display: inline-block;">brand</span>
    <span style="margin-left: auto;" style="display: flex;">toRight</span>
</div>



