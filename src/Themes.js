import React  from "react";

export const themes = {
    dark :{
        color: "white",
        backgroundImage: "url('https://i.pinimg.com/originals/67/82/8e/67828e156f4f7e9aa72fb3030f0c7493.jpg')"
    },
    light :{
        color: "black",
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0p9fIx1Ve9GNawPxenG_JBQlhRJAUICuUcwxedICmr5AH_jZWI9IUu7w1Yay2kyem9DY&usqp=CAU')"
    }
}

const ThemesContext = React.createContext(themes.dark);
export default ThemesContext;