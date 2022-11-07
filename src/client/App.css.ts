import { style, createVar, styleVariants } from "@vanilla-extract/css";
import { vars } from "./vars.css";

export namespace AppCss {

    export const background = style({
        background: '#F7F8FA'
    });
    export const container = style({
        fontSize: 20,
        margin: '10px',
        display: 'grid',
        gridTemplateColumns:'1fr 1fr 1fr',
        justifyContent: 'space-between',
        padding: '20px 5px',
        width: '90vw'
    });
    
    export const card = style({
        margin: '20px',
        background: 'white',
        width: '400',
        height: '200px',
        border: '1px solid #d3d3d3',
        listStyle: 'none',
        borderRadius: '5px',
        padding: '5px',
        paddingBottom: '10px',
    });

    export const ul = style({
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '14px',
        listStyle: 'none',
        padding: '0',
        paddingBottom: '3px'
    });

    export const cardSpan = style({
        display: 'flex',
        justifyContent:'space-between',
        fontSize: '12px',
        listStyle: 'none',
        marginBottom: '3px',
    });
     
    export const cardTitle = style({
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: 'bold',

    });
     // Create local variables
    }
    const testVar = createVar();

export const localVarStyle = style({
    vars: {
        [testVar]: 'black'
    },
    background: testVar
})

export const colorVariant = styleVariants(vars.colors, 
    (color: any) => ({ background: color })
);


