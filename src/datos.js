import React, { useEffect } from 'react';
import {
    Question,
    Keyboard,
    Display,
    Cart4,
    Laptop,
    Cpu,
    Printer
} from "react-bootstrap-icons";

/* crypto-js */
import CryptoJS from "crypto-js";

/* react-router-dom */
import { Redirect } from "react-router-dom";

// *********** //

/* URLs */
// const baseURL = "http://localhost:8080/freekestore/data";

const baseURL = "";
const crearCuentaURL = "/crear-cuenta";
const iniciarSesionURL = "/ingresar";
const verificarUsuarioURL = "/verificar-usuario";
const publicarURL = "/publicar";
const verArticuloURL = "/ver-articulo";
const pagarArticuloURL = "/realizar-compra";
const agregarCarritoURL = "/agregar-carrito";
const borrarDelCarritoURL = "/borrar-item-carrito";
const verComprasURL = "/compras";
const verCarritoURL = "/carrito";
const verVentasURL = "/ventas";
const verPublicacionesURL = "/publicaciones";
const eliminarPublicacionURL = "/eliminar-publicacion";
const inicioURL = "/publicaciones-inicio"; // articulos

/* categorias de productos */
const categorias = [
    { icono: < Question / > , titulo: "General", categoria: "general" }, /* 0 */
    { icono: < Cart4 / > , titulo: "Ropa", categoria: "ropa" }, /* 1 */
    { icono: < Cart4 / > , titulo: "Juguetes", categoria: "Juguetes" }, /* 3 */
    { icono: < Cart4 / > , titulo: "Peliculas", categoria: "peliculas" }, /* 4 */
    { icono: < Cart4 / > , titulo: "Posters", categoria: "posters" }, /* 5 */
    { icono: < Cart4 / > , titulo: "Decoracion", categoria: "decoracion" }, /* 6 */
    { icono: < Cart4 / > , titulo: "accesorios", categoria: "accesorios" }, /* 7 */
];

const Redirigir = (props) => {
        useEffect(_ => window.location.reload(), []);
        return ( < Redirect to = { props.donde }
            />)
        };

        const key = "EA3A37DE49DB2CC42388AEE232C1E";

        function encriptar(texto) {
            return CryptoJS.AES.encrypt(texto, key).toString();
        }

        function desencriptar(texto_encr) {
            let arrbyte = CryptoJS.AES.decrypt(texto_encr, key);
            return arrbyte.toString(CryptoJS.enc.Utf8);
        }

        function hex(str) {
            return new Buffer.from(str, "utf-8").toString("hex");
        }

        function deshex(hexstr) {
            return new Buffer.from(hexstr, "hex").toString("utf-8");
        }

        function arrayBase64(bytes) {
            let bin = "";
            let bytes_salida = new Uint8Array(bytes);
            for (let i = 0; i < bytes_salida.byteLength; i++)
                bin += String.fromCharCode(bytes_salida[i]);
            return window.btoa(bin);
        }

        function base64Archivo(url, nombre) {
            let arr = url.split(",");
            let mime = arr[0].match(/:(.*?);/)[1];
            let bstr = atob(arr[1]);
            let n = bstr.length;
            let u8arr = new Uint8Array(n);

            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], nombre, { type: mime });
        }

        export {
            categorias,
            baseURL,
            crearCuentaURL,
            iniciarSesionURL,
            verificarUsuarioURL,
            publicarURL,
            inicioURL,
            verArticuloURL,
            agregarCarritoURL,
            borrarDelCarritoURL,
            pagarArticuloURL,
            verComprasURL,
            verVentasURL,
            verPublicacionesURL,
            verCarritoURL,
            eliminarPublicacionURL,

            Redirigir,

            encriptar,
            desencriptar,
            hex,
            deshex,
            arrayBase64,
            base64Archivo
        };