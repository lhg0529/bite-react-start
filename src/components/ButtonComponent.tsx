const ButtonComponent = ({text,color,children}:{text:string,color:string,children:React.ReactNode})=>{
    return(
        <button 
        onClick={(a)=>{
            console.log(text)
            console.log(a)
        }}
        style={{color:color}}>
            <h1>{text}</h1>
            {children}
        </button>
    )
}

ButtonComponent.defaultProps = {
    color: "black",
    children: null
}

export default ButtonComponent;