export function Post(props) {
    const { name, cb } = props

    const onClickHandler = () => {
        cb()
    }
    return (
        <h2>{name}<button onClick={onClickHandler}>delete</button></h2>
    )
}