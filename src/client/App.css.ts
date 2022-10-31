import { style } from "@vanilla-extract/css";

export namespace AppCss {

    export const container = style({
        fontSize: 20,
        display: 'grid',
        gridTemplateColumns:'1fr 1fr 1fr',
        justifyContent: 'space-between',
        padding: '20px 5px',
        width: '80vw'
    });

    export const card = style({
        margin: '20px',
        width: '300',
        height: '400px',
        border: '1px solid #d3d3d3',
        listStyle: 'none',
        borderRadius: '5px' 
    });

    export const ul = style({
        listStyle: 'none',
        paddingTop: '5px',
    });

}
