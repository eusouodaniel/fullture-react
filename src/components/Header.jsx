export default function Header(props) {
    return (
        <nav>
            <li>{props.firstItem}</li>
            <li>{props.secondItem}</li>
        </nav>
    )
}