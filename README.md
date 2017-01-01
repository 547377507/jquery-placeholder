# jquery-placeholder
一个专门针对不支持HTML5（特别是IE浏览器~）-placeholder属性的jquery小插件
>这是最好的时代，这是最坏的时代，这是智慧的时代，这是愚蠢的时代；这是信仰的时期，这是怀疑的时期；这是光明的季节，这是黑暗的季节；这是希望之春，这是失望之冬；人们面前有着各样事物，人们面前一无所有；人们正在直登天堂；人们正在直下地狱。——《双城记》狄更斯

如有问题不吝请教~  
效果图如下:  
![效果图](https://picabstract-preview-ftn.weiyun.com:8443/ftn_pic_abs_v2/824f6d703fbe420e2537c103a840af188454a0933894fd18c5376ae9b678613667985119e9baddb518d23c23c04b1537?pictype=scale&from=30013&version=2.0.0.2&uin=547377507&fname=rendering.png&size=1024*1024)
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