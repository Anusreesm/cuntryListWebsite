function Card(props){
    return (
        <article classname="country-div">
        <img src={props.countryFlag} alt="countryFlag"/>
        <h2>{props.countryName}</h2>
        </article>
    );
}
export default Card;
