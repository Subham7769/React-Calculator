import React,{useState} from 'react'
import Result from './Result';

const Calculator = () => {

    const [result, setResult ] = useState('');
    const [status, setStatus ] = useState('');

    const [btnClick, setBtnClick ] = useState(false);

    const [num1,setNum1] = useState('');
    const [num2,setNum2] = useState('');

    function handleInput(e){
        setBtnClick(false);
        if(e.target.name=="num1"){
            setNum1(e.target.value);
        }else if(e.target.name == "num2"){
            setNum2(e.target.value);
        }
    }

    function validInput(){

        if(num1 == ''){
            setResult('Num1 Cannot Be Empty');
            setStatus('Error!');
            return false;
        }
        if(num2 == ''){
            setResult('Num2 Cannot Be Empty');
            setStatus('Error!');
            return false;
        }
        if(isNaN(parseFloat(num1)) || isNaN(parseFloat(num1))){
            setResult('Input Should be Numbers only');
            setStatus('Error!');
            return false;
        }
        setStatus('Success!');
        return true;
    }

    function calculate(e){
        setBtnClick(true);
       if(validInput()){
           switch(e.target.name){
   
               case '+' : {
                   console.log("plus");
                   setResult("Result : " + (Number(num1) + Number(num2)));
                   break;
               }
               case '-' : {
                   console.log("minus")
                   setResult("Result : " + (Number(num1) - Number(num2)));
                   break;
               }
               case '*' : {
                   console.log("mul")
                   setResult("Result : " + (Number(num1) * Number(num2)));
                   break;
               }
               case '/' : {
                   console.log("div")
                   setResult("Result : " + (Number(num1) / Number(num2)));
                   break;
               }
   
           }
       } 

    }



  return (
    <div className='box'>
        <h2>React Calculator</h2>
        <input type='text' placeholder='Num 1' value={num1} name="num1" onChange={handleInput}/>
        <input type='text' placeholder='Num 2' value={num2} name="num2" onChange={handleInput}/>
        <div>
            <button name='+' onClick={calculate}>+</button>
            <button name='-' onClick={calculate}>-</button>
            <button name='*' onClick={calculate}>*</button>
            <button name='/' onClick={calculate}>/</button>
        </div>
        { btnClick && <Result result={result} status={status}/> }        
    </div>
  )
}

export default Calculator