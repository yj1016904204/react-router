//导入一级路由
import Home from '../components/home';
import Detail from '../components/Detail';
import Login from '../components/Login';

//导入二级路由
import Homes from '../components/home/Homes';
import Recommend from '../components/home/Recommend';
import Apps from '../components/home/Apps';
import Mys from '../components/home/Mys';

const RouterList = [
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "/home/homes",
        component: Homes,
        title: "首页"
      },
      {
        path: "/home/recommend",
        component: Recommend,
        title: "推荐"
      },
      {
        path: "/home/apps",
        component: Apps,
        title: "应用"
      },
      {
        path: "/home/mys",
        component: Mys,
        title: "我的",
        auth: true,
      },
      {
        to: "/home/homes",
        from: "/home",
      }
    ]
  },
  {
    path: "/detail",
    component: Detail
  },
  {
    path: "/login",
    component: Login
  },
  {
    to: "/home",
    from: "/",
  }
]
export default RouterList