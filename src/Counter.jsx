import React, { useState} from 'react'

const Counter = () => {
  // useStateは配列[初期値と関数]を返す。それを分割代入で countとsetCountに代入している。関数はset定数の名前をつける
  const [count, setCount] = useState(0);

  // state 状態が変化するたびに再描画されている
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const double= () => {
    setCount(count * 2)
  }
  const reset = () => {
    setCount(0)
  }
  const increment2 = () => {
    setCount((previousCount) => previousCount + 1 )
  }
  // callbackだからreturnをつけろ。省略するなら上記。
  const decrement2 = () => {
    setCount((previousCount) => {
      return previousCount - 1
     } )
  }
  const reset2 = () => {
    setCount(() => {
      return 0
    })
  }

  const canEvenFor3 = () => {
    setCount((_) => {
        if (_ % 3 === 0) {
          return _ / 3
        } else {
          return `${_} is a not number and cant even for 3`
        }
    })
  }

  // できるだけ三項演算子を使うようにする
  const canEvenFor4 = () => {
    setCount(previousCount => previousCount % 3 === 0? previousCount / 3 : previousCount)
  }

  

  return (
    <>
      <div>
        count: {count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={double}>*2</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={reset2}>reset2</button>
        <button onClick={canEvenFor3}>３の倍数の時だけ３で割る</button>
        <button onClick={canEvenFor4}>３の倍数の時だけ３で割る</button>
      </div>
    </>
  );
}

export default Counter;
