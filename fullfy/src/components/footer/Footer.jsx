import { useSelector } from 'react-redux';
import { MainFooter } from './FooterStyle';

export default function Footer() {
    const store = useSelector((state) => state.page.value);
    return (
        <MainFooter>
            <p>Fullfy - Todos os direitos reservados | {store}</p>
        </MainFooter>
    )
}