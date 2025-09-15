import { useCounter } from '../hooks/useCounter'

export const MyCounterApp = () => {

  const {handleAdd, handleReset, handleSubstract, counter} = useCounter(10);
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
      <h1>Counter {counter}</h1>
      <div style={{display: 'flex', gap: '12px', marginTop: '10px'}}>
        <button onClick={handleAdd} style={{padding: '10px', border: 'none', color: '#222577', fontWeight: 'bold'}}>+1</button>
        <button onClick={handleSubstract} style={{padding: '10px', border: 'none', color: '#222577', fontWeight: 'bold'}}>-1</button>
        <button onClick={handleReset} style={{padding: '10px', border: 'none', color: '#222577', fontWeight: 'bold'}}>reset</button>
      </div>
    </div>
  )

}
