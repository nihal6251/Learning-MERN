import React, {useContext} from 'react'
import { CountContext } from '../context/context.js'

const Component1 = () => {
    const count = useContext(CountContext);
  return (
    <div>
        {count}
    </div>
  )
}

export default Component1