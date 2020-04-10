# jquery-placeholder
一个专门针对不支持HTML5（特别是IE浏览器~）-placeholder属性的jquery小插件
 
效果图如下:  
![效果图](/sources/img/rendering.png)
## HTML基本结构
``` html
<div class="placeholder-text-box">
	<label>用户名：</label>
	<input type="text" placeholder="请输入用户名" />
</div>

```
##CSS
1.默认会在`input`元素的父容器添加`class`属性值`placeholder-text-box`并且css样式设置为`relative`。  
2.默认模拟placeholder属性值的元素添加添加`class`属性值`placeholder-text`需要修改文字颜色什么的可以这样......
```css
.placeholder-text {
	color: #CCCCCC;
}
```
## javascript部分
``` javascript

<script type="text/javascript">
	$(document).ready(function() {
		$('input').placeholder();
	});
</script>
	
```
## option选项
| 选项      |   说明  | 默认  |
| :--------:|:--------:| :--: |
| placeholderClass  | 模拟元素的class值|  placeholder-text   |
| placeholderText     |   模拟元素的文本 |  input中placeholder属性的值  |
``` javascript
<script type="text/javascript">
	$(document).ready(function() {
		$('input').placeholder({
			placeholderClass:'my-placeholder',
			placeholderText:'XXXXX'
		});
	});
</script>
```
