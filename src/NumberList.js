function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => 
        <li>{number}</li>
    );

}

export default NumberList;