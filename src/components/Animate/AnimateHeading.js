import React from 'react'

const AnimateHeading = ({ text, className}) => {
  return (
	<div className=' flex justify-center items-center w-full mx-auto py-2 text-center overflow-hidden'>
		<h1 className={` inline-block w-full text-dark font-bold capitalize text-8xl ${"!"+className}`}>
			{text.split(" ").map( (word, index) => {
				return (
					<span key={index} className='inline-block'>{word}&nbsp;</span>
				);
			})}
		</h1>

	</div>
  )
}

export default AnimateHeading;