import * as React from 'react';
import './Menu.css';
import styled from 'styled-components';

const lista_elementos = [
    {id:'Vagones', texto: 'Vagones'},
    {id:'Bogies', texto: 'Bogies'},
    {id:'Ejes', texto: 'Ejes'},
    {id:'Cambiadores', texto: 'Cambiadores'},
    {id:'ADIF', texto: 'ADIF'},
    {id:'Ingenieria', texto: 'Ingeniería'},
    {id:'Fabricacion', texto: 'Fabricación'},
    {id:'Mantenimiento', texto: 'Mantenimiento'},
    ];

function Menu ({opcion, onClick}){ 
    React.useEffect(() => {
        lista_elementos.map ((elemento)=>{
            if (elemento.id === opcion) {
                document.getElementById(elemento.id).className = 'active'; 
            }
            else {
                document.getElementById(elemento.id).className = ''}
            })
      }, [opcion]);

    const handleClick = (event) => {
        onClick ({type:'SELECCIONAR_MENU', payload:event.target.id})
        };
    
    return(
        <>
        <LogoMercave>mercave</LogoMercave>
        <CuerpoMenu>
            {lista_elementos.map((elemento) => (
                <ElementoMenu key = {elemento.id}>
                    <a href="#" onClick={handleClick} id={elemento.id}>{elemento.texto}</a>
                </ElementoMenu> 
                ))}
        </CuerpoMenu>
        <MenuLogin>
            <a href="#" onClick={handleClick} id='Login'>Login</a>
        </MenuLogin>
        </>
    );
}

const LogoMercave = styled.span`
    color: rgb(80, 45, 45);
    font-size:40px;
    font-weight: 350;
    letter-spacing: 1px;
    padding: 0px 16px;
    text-decoration: none;
`
const CuerpoMenu = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:strech;
    flex:2;
`
const ElementoMenu = styled.li`
    list-style-type: none;
    font-size:18px;
    font-weight: 300;
    letter-spacing: 1px;
    padding: 12px 10px
    text-decoration: none;
    :hover:not(.active) {background-color: rgb(196, 230, 186);}
`
const MenuLogin = styled.span`
    color: rgb(80, 45, 45);
    font-size:20px;
    font-weight: 300;
    letter-spacing: 1px;
    padding: 12px 32px;
    margin-left:60px;
`
export default Menu