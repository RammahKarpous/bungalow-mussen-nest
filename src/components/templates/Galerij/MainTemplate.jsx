const MainTemplate = ({children}) => {
    return (
        <div className="mt-10 flex flex-col xl:flex-row gap-10">
            {children}
        </div>
    )
}

export default MainTemplate
