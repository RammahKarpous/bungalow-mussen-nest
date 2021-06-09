const PageTemplate = ({children, extraClassNames}) => {
    return (
        <div className={`page-template ${extraClassNames}`}>
            {children}
        </div>
    )
}

export default PageTemplate
