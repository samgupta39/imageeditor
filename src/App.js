
import './App.css';
import  Slider from './Slider';
import SideBarItem from './SideBarItem'; 
import { useState } from 'react/cjs/react.development';

// import Container from 'react-bootstrap/Container';

const DEFAULT_OPTIONS =[
  {
    name:'Brightness',
    property :'brightness',
    value:100,
    range:{
    min:0,max:200
  },
  unit:'%'  
  },

  {
    name:'Contrast',
    property :'contrast',
    value:100,
    range:{
    min:0,max:200
  },
  unit:'%'  
  },

  {
    name:'Grayscale',
    property :'grayscale',
    value:0,
    range:{
    min:0,max:100
  },
  unit:'%'  
  },

  {
    name:'saturation',
    property :'saturate',
    value:100,
    range:{
    min:0,max:200
  },
  unit:'%'  
  },
  
  {
    name:'Hue-rotate',
    property :'hue-rotate',
    value:0,
    range:{
    min:0,max:360
  },
  unit:'deg'  
  },

  {
    name:'Blur',
    property :'blur',
    value:0,
    range:{
    min:0,max:20
  },
  unit:'px'  
  }

]

function App() {
  const[SelectedOptionIndex,SetSelectedoptionIndex]=useState(0)
  const[options,SetOptions]=useState(DEFAULT_OPTIONS)
  const SelectedOption = options[SelectedOptionIndex]

  function handleSliderChange({target}){
    SetOptions(prevOptions =>{
      return prevOptions.map((option,index)=>{
        if(index!==SelectedOptionIndex) return option
        return {...option,value:target.value}
        
      })
    })
  }
function getImageStyle(){
  const filters = options.map(option=>{
    return `${option.property}(${option.value}${option.unit})`
  })
  return{filter: filters.join(' ')}
}
console.log(getImageStyle())
  return (
    // <Container className="p-3">

    <div className="container">
      <div className="main-image" style={getImageStyle()}/> 
      <div className="sidebar">
        {options.map((option,index)=>{
         return( 
          <SideBarItem
          key={index}
          name={option.name}
          active={index=== SelectedOptionIndex}
          handleClick={()=>SetSelectedoptionIndex(index)}
          />
         )
        })}
      </div> 
      <list
      />
      <Slider
       min={SelectedOption.range.min}
       max={SelectedOption.range.max}
       value={SelectedOption.value}
       handleChange={handleSliderChange}
      /> 
    </div>
  );
  
}

export default App;
