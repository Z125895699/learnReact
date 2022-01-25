import React, { useState, ReactNode } from 'react';
import { useMount } from 'utils';
import { http } from 'utils/http';
import * as auth from '../auth-provider';

import { User } from '../screens/project-list/search-panel';

interface AuthForm {
  username: string;
  password: string;
}

//在localstorage取token
const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http('me', { token });
    user = data.user;
  }
  return user;
};

//为全局的数据创建context对象
const AuthContext = React.createContext<
  | {
      user: User | null;
      register: (form: AuthForm) => Promise<void>;
      login: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);

//context对象接收一个名为displayName的property 类型为字符串
AuthContext.displayName = 'AuthContext';

//使用一个Provider来将当前的数据传递给以下的组件树
//无论多深 任何组件都可以读取这个值
//当每一次Provide重新渲染时 由于value属性总是被赋值为新的对象 导致所有的消费组件重新渲染
//所以将value状态提升到父节点的state里面
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) =>
    auth.login(form).then((user) => setUser(user));
  const register = (form: AuthForm) =>
    auth.register(form).then((user) => setUser(user));
  const logout = () => auth.logout().then(() => setUser(null));

  // 页面重新加载时调用bootstrapUser;
  useMount(() => {
    bootstrapUser().then(setUser);
  });
  //在全局可以读取login, register, logout三个方法以及user信息
  return (
    <AuthContext.Provider
      value={{ user, login, register, logout }}
      children={children}
    ></AuthContext.Provider>
  );
};

//通过自定义hook返回context对象 useContext返回该context的当前值
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth必须在AuthContext中使用');
  }
  return context;
};
