import React from "react";


const Button = ({label, href, ...props}) => {
  const buttonClass = "px-8 py-4 border border-solid border-gray-50 bg-transparent hover:bg-white text-white hover:text-gray-800 transition-all ease-in-out duration-300 text-center disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
  if (href) return <a className={buttonClass} href={href} {...props}>{label}</a>
  return (
    <button className={buttonClass} {...props}>{label}</button>
  )
}

export default Button