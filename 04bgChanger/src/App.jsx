import { useState } from 'react'
import Button from './Button'

function App() {
  const [color, setColor] = useState('olive')

  // Multiple color
  // const clr = [
  //   { val: 'red', name: 'Red' },
  //   { val: 'blue', name: 'blue' },
  //   { val: 'green', name: 'green' },
  //   { val: 'yellow', name: 'yellow' },
  //   { val: 'brown', name: 'brown' },
  //   { val: 'purple', name: 'purple' },
  //   {val:'cyan', name:'Cyan'}
  // ]

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3  rounded-3xl px-3 py-2'>

            {/* For multiple color */}
            {/* {clr.map((color, index) => (
              <Button
                key={index}
                color={color.val}
                name={color.name}
                setColor={setColor} />
            ))} */}

            {/* ShortCut for multiple colour */}
            {["red", "green", "blue", "pink", "black", "purple", "magenta", "cyan", "yellow"].map((clr) => (
              <Button key={clr} color={clr} name={clr.charAt(0).toUpperCase() + clr.slice(1)} setColor={setColor} />
            ))}


          </div>
        </div>
      </div>
    </>
  )
}

export default App
