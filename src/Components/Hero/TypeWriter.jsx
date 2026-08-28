import React from 'react'
import { typewriterRoles } from '../../constants/index.js';
import useTypeWriter from '../../hooks/useTypeWriter.js';

const TypeWriter = () => {
    const roles=typewriterRoles;
    const typedText=useTypeWriter(roles)
  return (
    <div className='flex shrink-0'>
   <h2 className='pangolin-font font-semibold text-xl md:text-2xl xl:text-4xl bg-gradient-to-r from-lime-400 via-green-400 to-cyan-400 bg-clip-text text-transparent h-20'>
  {typedText}
</h2>
  <span className="cursor text-xl md:text-2xl xl:text-4xl text-green-400">|</span>
  </div>
  )
}

export default React.memo(TypeWriter);