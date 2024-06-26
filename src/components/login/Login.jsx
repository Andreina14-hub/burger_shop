import React, { useState } from 'react';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Login() {

    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50 ">

            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                        Login
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                        Register
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                `
                <MDBTabsPane show={justifyActive === "tab1"}>
                    <div className="text-center mb-3">
                        <p>Iniciar sesión con:</p>
                        <div
                            className="d-flex justify-content-between mx-auto"
                            style={{ width: "40%" }}
                        >
                            <MDBBtn tag="a" color="none" className="m-1" >

                                <Link to="/burger_shop">
                                    <MDBIcon fab icon="google" size="sm" />
                                </Link>
                            </MDBBtn>

                            <MDBBtn tag="a" color="none" className="m-1" >
                                <MDBIcon fab icon="facebook-f" size="sm" />
                            </MDBBtn>
                            <MDBBtn tag="a" color="none" className="m-1" >
                                <MDBIcon fab icon="twitter" size="sm" />
                            </MDBBtn>
                        </ div>
                        <p className="text-center mt-3">o con:</p>
                    </div>
                    <MDBInput wrapperClass="mb-4" label="Dirección de correo electrónico" id="form1"
                        type="email" />
                    <MDBInput wrapperClass="mb-4" label="Contraseña" id="form2" type="password" />
                    <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheckDefault"
                            label="Recuérdame"
                        />
                        <a href="!#">¿Olvidaste tu contraseña?</a>
                    </div>
                    <Link to="/burger_shop">
                        <MDBBtn className="mb-4 w-100">Iniciar sesión</MDBBtn>
                    </Link>
                    <p className="text-center">
                        ¿No estás registrado? <a href="#!">Regístrate</a>
                    </p>
                </MDBTabsPane>;
                {/* //Create a Login and Signup Tabs for the Login and Signup Form */}

            </MDBTabsContent>

        </MDBContainer>
    );
}


export default Login;
