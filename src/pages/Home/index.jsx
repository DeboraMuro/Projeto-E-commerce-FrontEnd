import Carousel from "../../components/Carousel";
import ColecoesDestaque from "../../components/ColecoesDestaque";
import ColecoesDestaqueIcones from "../../components/ColecoesDestaqueIcones";
import ProdutosAlta from "../../components/ProdutosAlta";

export default function Home() {
    return (
        <div>
            
            <Carousel/>
            <ColecoesDestaque/>
            <ColecoesDestaqueIcones/>
            <ProdutosAlta/>
        </div>
    )
}
