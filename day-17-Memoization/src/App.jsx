import React, { useCallback, useMemo, useState } from "react";
import Home from "../components/Home";
import About from "../components/About";

const App = () => {
  console.log("App rendering...");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Piyush", id: 322 });

  // useCallback function ka refrence store kar leta hai jabtak dependency change na ho
  const greet = useCallback(() => {
    console.log("Good Night");
  }, []);


  // when we are performing any large calculations, if the FNC renders everytime, it will cause our website to slow down or crash. That's why we save the return value once as a cache. Until the dependency array will changed, it will remain the same.
  const calculate = useMemo(() => {
    console.log("calculate running..");
    let sum = 0;

    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }

    return sum;
  }, []);

  return (
    <div className=" h-screen w-full p-10">
      <h1>Count is {count}</h1>
      <h1>Name is {user.name}</h1>
      <h1>Sum is {calculate}</h1>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <br />
      <button onClick={() => setUser({ ...user, name: "Anshu" })}>
        Change Name
      </button>

      <Home user={user} greet={greet} />
      <About user={user} />
    </div>
  );
};

export default App;
