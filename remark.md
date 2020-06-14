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
路由顺序策略：先到先得。 一般将具体路由配置在前面，通配符路由配合在后面。
4,404 组件设置：
{ path: '**', component: PageNotFoundComponent },// 用来 指定 当用户随便输入不存在的地址时，显示 该路由地址。
5,页面显示局部组件内容
<router-outlet></router-outlet>
6,嵌套路由：
    1,新建子组件child-a,child-b。ng generate component child-a,ng generate component child-b.
    2,将子组件添加到父组件中，即在父组件中引用子组件内容。
7,惰性加载：使用的时候才会加载
将app-routing.module.ts中的component替换为loadChildren
loadChildren: () => import('./first/first.component').then(m => m.FirstComponent),
8,新建common服务。ng generate service common






