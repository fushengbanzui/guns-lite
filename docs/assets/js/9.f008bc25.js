(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{105:function(t,e,i){"use strict";i.r(e);var s=i(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("p",[t._v("细心的同学可能已经注意到guns-lite提供一个名为oracle的分支来支持将后台数据库替换为oacel的需求。\n那么为什么不同样建立一个sqlite分支来这么做呢？主要考虑到sqlite和mysql兼容性比较好，使用master分支做很小的调整就可以支持sqlite，那么就不费劲维护两个分支了。")]),t._v(" "),i("p",[t._v("下面介绍如何将master分支经过简单调整将底层数据库从mysql切换为sqlite。")]),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("这节描述如何将mysql替换为sqlite。")]),t._v(" "),i("p",[t._v("在本系统中使用的mysql建表语句中，只需要下面字段类型调整下就可以用在sqlite中。")]),t._v(" "),t._m(2),t._v(" "),i("p",[t._v("这里在项目中也提供了"),i("a",{attrs:{href:"https://github.com/enilu/guns-lite/blob/master/db/sqlite.sql",target:"_blank",rel:"noopener noreferrer"}},[t._v("sqlite.sql"),i("OutboundLink")],1),t._v("，你可以直接使用")]),t._v(" "),t._m(3),t._v(" "),i("p",[t._v("接下来将guns-entity中对应数据库表的实体中属性类型进行替换。")]),t._v(" "),t._m(4),t._v(" "),i("p",[t._v("没错，只需要调整日期类型的属性即可，甚至也不需要调整（如果数据库中对应字段使用INTEGER的话）")]),t._v(" "),t._m(5),t._v(" "),i("p",[t._v("如果在上一小节，你将日期类型调整为String，那么在涉及到所有为entity设置日期属性的时候用cn.enilu.guns.utils.DateUtil.getTime()代替new Date()方法即可，\nDateUtil.getTime() 方法会返回当前日期的yyyy-MM-dd HH:mm:ss格式")]),t._v(" "),i("p",[t._v("大功告成，是不是很简单！")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"将数据库切换为sqlite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将数据库切换为sqlite","aria-hidden":"true"}},[this._v("#")]),this._v(" 将数据库切换为sqlite")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数据库替换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库替换","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据库替换")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("将bigint类型替换为INTEGER")]),this._v(" "),e("li",[this._v("将verchar类型替换为TEXT")]),this._v(" "),e("li",[this._v("将date、datetime类型皆替换为TEXT或INTEGER，我在我司的产品中都是替换为text类型，这样也不用考虑日期格式化的问题。\n将更改过的语句在mysql中执行即可。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"entity模块调整"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entity模块调整","aria-hidden":"true"}},[this._v("#")]),this._v(" entity模块调整")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("将所有日期类型的字段替换为String，当然你也可以直接继续用Date（这样的话，sqlite的对应字段类型必须为INTGER）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"业务代码调整"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#业务代码调整","aria-hidden":"true"}},[this._v("#")]),this._v(" 业务代码调整")])}],!1,null,null,null);r.options.__file="sqlite.md";e.default=r.exports}}]);