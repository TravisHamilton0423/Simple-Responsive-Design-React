import { GridRow } from "emotion-flex-grid";

const CardFooter = ({
    title, content
}) =>    {
    return (
        <>
            <GridRow justify='between' className="card-footer" align='center'>
                <div>
                    <div className="card-title"> { title } </div>
                    <div className="card-content"> { content } </div>
                </div>
                <img src="card-flowers.png" alt="flowers"/>
            </GridRow>
        </>
    )
};

export default CardFooter;