export function InputName({name,style}){
    return(
        <div className="ipt-name">
            <label htmlFor="">Name:</label>
            <input type="text" style={style}/>
        </div>
    )
}