const ContentTemplate = ({children, extraClassNames, quaterWidth}) => {
    return (
        <div className={`${quaterWidth && 'gallerij-content-template'} ${extraClassNames}`}>
            {children}
        </div>
    )
}

export default ContentTemplate
