import React from "react";

//le decimos a react que nos cree un "objeto magico" como lo es el context y que tenga este valor inicial

//El contexto tiene dos cosas: -Un consumidor y -Un proveedor
const Context = React.createContext({
    name: 'Oliver sin provider',
    sigueme: true
})

export default Context;