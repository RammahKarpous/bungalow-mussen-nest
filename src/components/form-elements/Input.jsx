const Input = ({ labelText, name, type }) => {
    return (
        <div className={`flex flex-col gap-1 mt-3 ${name === 'name' && 'sm:w-5/12'} w-full`}>
            <label htmlFor={name}>{labelText}</label>
            {type === 'textarea' ? (
                <textarea 
                    name={name} 
                    id={name} 
                    className="input min-w-full max-w-full"
                    rows="7">
                </textarea>
            ) : (
                <input 
                    type={type} 
                    name={name} 
                    id={name} 
                    className="input" />
            )}
        </div>
    )
}

Input.defaultProps = {
    type: 'text'
}

export default Input
