-- 搭建环境
1,安装node.js。Angular 需要 Node.js 版本 10.9.0 或更高版本。node -v
2，使用npm包管理器。Angular、Angular CLI 和 Angular 应用都依赖于 npm 包中提供的特性和功能。Node.js 已经默认安装了它。   npm -v
3,安装 Angular CLI。 npm install -g @angular/cli
4，创建工作空间和初始应用。 ng new angularDemo
5,运行应用。
cd angularDemo
ng serve --open

-- 新建 组件
1,新建first组件。ng generate component first
2,新建second组件。ng generate component second
3,配置first、second组件路由：
    1，在app.module.ts中配置。
    2，在app-routing.module.ts中配置path及组件绑定。
注：组件 不能单独访问，只能作为页面的一部分显示。


