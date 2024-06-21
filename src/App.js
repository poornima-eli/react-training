import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Login from './routing/Login';
import Dashboard from './routing/Dashboard';
import Axios from './routing/Axios';
import Counter from './routing/Counter';
import College from './routing/nested/College';
import Teacher from './routing/nested/Teacher';
import Student from './routing/nested/Student';
import MapExample from './routing/mapExample';
import Hooks from './routing/Hooks';
import Spa from './routing/Spa';
import Home from './routing/Home';
import TodoList from './routing/Todo';
import ComponentType from './routing/CompoType';
import ClassDemo from './components/ClassDemo';
import FuncDemo from './components/FuncDemo';

import UseMemoDemo from './components/UseMemoDemo';
import UseEffectDemo from './components/UseEffectDemo';
import UseContextDemo from './components/UseContextDemo';
import LifeCycleDemo from './components/LifeCycleDemo';
import ConditionalComponent from './components/ConditionalComponent';

import NoPageFound from './routing/NoPageFound';
import CompoType from "./routing/CompoType";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="compo-type" element={<ComponentType />}>
              <Route path="class-demo" element={<ClassDemo />} />
              <Route path="func-demo" element={<FuncDemo />} />
            </Route>
            <Route path="home" element={<Home/>}/>
            <Route path="college" element={<College />}>
              <Route path="teacher" element={<Teacher />} />
              <Route path="student" element={<Student />} />
            </Route>
            <Route path="conditional-component" element={<ConditionalComponent/>}/>
            <Route path="axios" element={<Axios />} />
            <Route path="counter" element={<Counter />} />
            <Route path="spa" element={<Spa />} />
            <Route path="map-demo" element={<MapExample />} />
            <Route path="lifecycle-demo" element={<LifeCycleDemo />} />
            <Route path='hooks' element={<Hooks/>}>
              <Route path="use-effect" element={<UseEffectDemo/>}/>
              <Route path="use-memo" element={<UseMemoDemo/>}/>
              <Route path="use-context" element={<UseContextDemo/>}/>
            </Route>
            <Route path="to-do-list" element={<TodoList />} />
          </Route>
          <Route path="*" element={<NoPageFound/>} />
        </Routes>
    </BrowserRouter>
  );
};
