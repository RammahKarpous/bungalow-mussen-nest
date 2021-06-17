const MainTemplate = ({children, extraClassNames}) => {

    return (
        <div className={`gallerij-main-template ${extraClassNames}`}>
            {children}
        </div>
    )
}

export default MainTemplate
