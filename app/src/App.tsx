import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import dataApi from './api/data';
import proxytest from './api/proxytest';

function App() {
  const [count, setCount] = useState(0);

  const clickHandler = async () => {
    const res = await dataApi.getAll();
    console.log(res);
  };

  const porxyClick = async () => {
    const res = await proxytest.getdata();
    console.log(res);
  };

  return (
    <>
      <div>
        <div>テスト!!!できてるか？</div>
        <div>
          <button onClick={clickHandler}>
            Clickしたらバックエンド（Kotlin）からデータ取ってくる.ローカルホスト叩く
          </button>
          <button onClick={porxyClick}>
            proxy設定された、docker内の別コンテナ叩く
          </button>
        </div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
