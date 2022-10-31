import { style } from "@vanilla-extract/css";

export namespace AppCss {
    export const container = style({
        fontSize: 20,
    });

    export const card = style({
        width: '30%',
        height: '300px',
        border: '1px solid d3d3d3',
    });
}
