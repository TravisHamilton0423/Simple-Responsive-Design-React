import { GridRow } from "emotion-flex-grid";

const CardHeader = () =>   {
    return (
        <>
        <GridRow justify='between' className="cardo-header" align='center'>
            <GridRow justify='center' align='center'>
                <div className="card-gradient">
                    <span className="card-star">✦</span>
                    <span className="card-star card-second-star">✦</span>
                </div>
                <img src="cardo.png" width='56.25px' height='18.02px' alt='logo'/>
            </GridRow>
            <GridRow align='center' justify='between'>
                <img src="vector.png" className="mr5" alt="vector"></img>
                <img src="circles.png" alt="circle"></img>
            </GridRow>
        </GridRow>
        </>
    )
}

export default CardHeader;