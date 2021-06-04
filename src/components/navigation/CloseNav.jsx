const CloseNav = () => {
    return (
        <div className="absolute top-3 left-6 h-10 w-10 sm:invisible">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-300 w-1 h-9"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gray-300 w-1 h-9"></div>
        </div>
    )
}

export default CloseNav
