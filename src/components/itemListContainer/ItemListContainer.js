const ItemListContainer = ({ greeting }) => {
    const greetingStyle = {
        color: "darkblue",
        fontSize: "2rem",
        padding: "20px"
    }
    return (
        <>
            <h1 style={greetingStyle}>{greeting}</h1>
        </>
    )
}
export default ItemListContainer