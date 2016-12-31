# jquery-placeholder
一个专门针对不支持HTML5（特别是IE浏览器~）-placeholder属性的jquery小插件
>这是最好的时代，这是最坏的时代，这是智慧的时代，这是愚蠢的时代；这是信仰的时期，这是怀疑的时期；这是光明的季节，这是黑暗的季节；这是希望之春，这是失望之冬；人们面前有着各样事物，人们面前一无所有；人们正在直登天堂；人们正在直下地狱。——《双城记》狄更斯

## HTML基本结构
``` html
<div class="">
	<label>用户名：</label>
	<input type="text" placeholder="请输入用户名" />
</div>
```
## javascript部分
``` javascript

<script type="text/javascript">
		$(document).ready(function() {
			$('input').placeholder();
		});
</script>
	
```