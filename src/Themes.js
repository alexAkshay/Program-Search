import React  from "react";

export const themes = {
    dark :{
        color: "white",
        backgroundColor: "#164569"
    },
    light :{
        color: "black",
        backgroundColor:  "#8DCFEC" }
}

const ThemesContext = React.createContext(themes.dark);
export default ThemesContext;
