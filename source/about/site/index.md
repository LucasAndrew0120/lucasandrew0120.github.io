---
title: 关于本站
date: 2025-11-06 22:21:09
---
>这里记录了站点的变更

Lucas算是个学生党，第一次玩服务器，没有米，买了个2核1G的服务器，稀里糊涂的配置好了域名和DNS，因为没有证书，所以是不安全的http链接，当时Lucas想搞成https，但是不会搞，导致Lucas的DNS解析出了问题，无能的Lucas只能重置服务器.

关于Lucas,他只是一个脚本小子，就是那种只会用工具，不会写代码的那种，所以Lucas用的是Wordpress的可视化编辑，js、css、html等一概不会，还有Markdown语法记不住，所以Lucas的博客很一般，像是十年前的东西（手动滑稽）.

时间一转眼到了2025-09-28，由于Lucas无力支付云服务器的费用，故而转向Hexo+Github Pages的方法搭建播客，这篇博文的更新表示博客迁移工作已经基本完成.

### 目前已更：
- **2025年10月1日** 博客背景图完成更换，顶部图去除，页脚遮罩去除，文章卡片的描述.
- **2025年10月5日** 博客外观完成背景透明化，字体更换为霞鹜文楷.
- **2025年10月15日** 博客添加giscus评论系统，添加Snackbar标签显示，配置站内链接预加载(Instantpage).
- **2025年10月21日** 搭建检索系统. ~~实际上早就做了,不过忘了具体时间了~~
- **2025年10月24日** 
  - 完成对于友链页面的优化，这个友链页面是根据[清羽飞扬](https://blog.liushen.fun/)的[博客文章](https://blog.liushen.fun/posts/59fe844d/)搭建的，非常感谢他对于Hexo-butterfly友链界面的二次开发🌹.
  - 完成对于图库的搭建，简化了网站顶栏，使用了[fontawesome](https://fontawesome.com/)图标库.
  - 增加了[文章排序插件](https://yelog.org/2017/02/24/hexo-top-sort/)
  - 补全了{% post_link webdav_tools_share 依赖于WebDav实现同步的软件分享 %}这篇文章的链接缺失.
  - 增加了RSS功能. ~~虽然没多少人用RSS，我自己也没写多少文章~~
- **2025年10月26日** 经过长期不懈的努力，终于解决了文章主页文章卡片不能实现透明化的问题，其中感谢[guyue](https://www.guyue.uno/)老哥帮我找到`body div#recent-posts .recent-post-item`这行代码中的.号之前没有>号.同时感谢DeepSeek的modify.css的透明化代码生成~~写css对我来说还是太难了~~.最最最严重的问题实际上不是代码问题，而是我modify.css文件被我放在了root/css下，而正确路径应该是root/soucre/css之下，我的modify.css代码如下，以供参考：
```css
/* modify.css - 透明化主题样式 */

:root {
    --trans-light: rgba(255, 255, 255, 0.75);
    --trans-dark: rgba(25, 25, 25, 0.75);
    /* 注释掉 backdrop-filter 变量 */
    /* --backdrop-filter: blur(12px) saturate(160%); */
}

/* ===== 强制主页文章卡片透明 ===== */
/* 使用最高优先级的选择器 */
body div#recent-posts .recent-post-item,
body .recent-post-item,
#recent-posts .recent-post-item,
.recent-post-item {
    background: var(--trans-light) !important;
    /* 注释掉毛玻璃效果 */
    /* backdrop-filter: var(--backdrop-filter) !important; */
    /* -webkit-backdrop-filter: var(--backdrop-filter) !important; */
    border-radius: 25px !important;
    border: none !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
}

/* 移除可能的背景图片 */
#recent-posts .recent-post-item[style*="background"],
.recent-post-item[style*="background"] {
    background: var(--trans-light) !important;
    background-image: none !important;
}

/* 确保内部所有元素透明 */
#recent-posts .recent-post-item *:not(a):not(button):not(.btn) {
    background: transparent !important;
}

/* 特别处理各个部分 */
#recent-posts .recent-post-item .post-cover,
#recent-posts .recent-post-item .post-cover img,
#recent-posts .recent-post-item .post-content,
#recent-posts .recent-post-item .post-info,
#recent-posts .recent-post-item .post-meta-info,
#recent-posts .recent-post-item .article-meta-wrap,
#recent-posts .recent-post-item .post-meta,
#recent-posts .recent-post-item .post-title {
    background: transparent !important;
}

/* 页面头部透明 */
#page-header,
#page-header:before {
  background: transparent !important;
}
#page-header.post-bg,
#page-header.not-home-page {
  height: 280px !important;
}
#page-header #post-info {
  bottom: 40px !important;
}
#page-header #page-site-info {
  top: 140px !important;
}

/* 侧边栏卡片透明 */
#aside-content .card-widget {
    background: var(--trans-light) !important;
    /* 注释掉毛玻璃效果 */
    /* backdrop-filter: var(--backdrop-filter) !important; */
    /* -webkit-backdrop-filter: var(--backdrop-filter) !important; */
    border-radius: 18px !important;
    border: none !important;
}

/* 文章页、归档页、普通页面透明 */
div#post,
div#page,
div#archive {
    background: var(--trans-light) !important;
    /* 注释掉毛玻璃效果 */
    /* backdrop-filter: var(--backdrop-filter) !important; */
    /* -webkit-backdrop-filter: var(--backdrop-filter) !important; */
    border-radius: 20px !important;
    border: none !important;
}

/* 顶部图片样式 */
.top-img {
  height: 250px;
  margin: -50px -40px 50px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  background-position: center center;
  background-size: cover;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}

/* 页脚透明 */
#footer:before {
  background-color: rgba(255,255,255,0.5) !important;
}
#footer-wrap,
#footer-wrap a {
  color: #111;
  -webkit-transition: unset;
  -moz-transition: unset;
  -o-transition: unset;
  -ms-transition: unset;
  transition: unset;
}

/* ===== 夜间模式 ===== */
[data-theme='dark'] #recent-posts .recent-post-item,
[data-theme='dark'] .recent-post-item {
    background: var(--trans-dark) !important;
}

[data-theme='dark'] #aside-content .card-widget,
[data-theme='dark'] div#post,
[data-theme='dark'] div#page,
[data-theme='dark'] div#archive {
    background: var(--trans-dark) !important;
}

[data-theme='dark'] .top-img {
  filter: brightness(0.8);
}

[data-theme='dark'] #footer:before {
  background-color: rgba(0,0,0,0.5) !important;
}

[data-theme='dark'] #footer-wrap,
[data-theme='dark'] #footer-wrap a {
  color: var(--light-grey);
}

/* 移动端响应式 */
@media screen and (max-width: 768px) {
  #page-header.not-home-page {
    height: 200px !important;
  }
  #page-header #post-info {
    bottom: 10px !important;
  }
  #page-header #page-site-info {
    top: 100px !important;
  }
  
  .top-img {
    height: 230px;
    margin: -36px -14px 36px;
  }
  
  /* 移动端减小模糊效果 */
  /* 注释掉移动端的毛玻璃效果 */
  /*
  #recent-posts .recent-post-item,
  #aside-content .card-widget {
      backdrop-filter: blur(8px) saturate(160%) !important;
      -webkit-backdrop-filter: blur(8px) saturate(160%) !important;
  }
  */
}
```

- **2025年11月3日** 
  - 图库使用[聚合图床](https://www.superbed.cn/)+[PicGo](https://picgo.github.io/PicGo-Doc/)实现图库页面图片的上传.
  - 参考[繁体猴の客栈](https://www.fattymonkey.com/post/10067.html#1-3%EF%BC%9A%E7%94%9F%E6%88%90%E9%A1%B5%E9%9D%A2)的文章，搭建了基于豆瓣的[书籍](https://lris625.top/books/),[电影](https://lris625.top/movies/),[游戏](https://lris625.top/games/)三个页面.
  
- **2025年11月4日** 
  - 为博客文章增加了封面图，使用了 [炖炖封面 - 慢慢炖，出好图](https://sb2b.ggff.net/) 生成封面图， [中国色](https://zhongguose.com/) 网站寻找封面图古典配色和 [Yesicon](https://yesicon.app/) 挑选合适的SVG图标嵌入封面中.
  - 使用瀑布流布局.

- **2025年11月6日** 博客文章**Lucas的碎碎念**,**博客更新日志**和**测试**，分别迁移到关于页面下的**关于我**，**关于本站**和**测试**页面，保证了主页的干净整洁~~实际上不想让这三篇充数~
  
- **2025年11月17日** 
  - 昨天，Lucas的好朋友AnTooLot说站点文章的版权信息部分，写上那句诗~~很蠢~~，~~确实有点蠢~~，于是Lucas就修改了一下.~~这点东西都要放进日志页面说，Lucas真是蠢大了，日志变日记~~
  - 上线**一言**

### 未来计划：
- 加入站点运行时间，文章卡片上字数统计和阅读时间
- 配置VS Code自动Push到GitHub库
- [x]加入一言
- [x] 搭建图库并且图片云端化
- [x] 搭建检索系统，无后端的评论系统
- 优化日间夜间模式更换，尝试根据访问者当地日升落时间自动更换
- 加入和风天气API