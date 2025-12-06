import React from 'react'
import Script from 'next/script'

const contact  = () => {
  return (
    <div>
        this is contact page
        <Script>
            {` alert("Hello from contact page");`}
        </Script>
      
    </div>
  )
}

export default contact
