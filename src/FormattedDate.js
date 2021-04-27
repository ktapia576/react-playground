function FormattedDate(props) {
    return (
        <h2>{props.date.toLocaleTimeString()}</h2>
    )
}

export default FormattedDate;