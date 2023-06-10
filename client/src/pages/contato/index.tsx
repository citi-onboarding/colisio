import React from "react";
import { Contatodiv, Titlediv, Title, Textdiv, Text, Buttondiv, Link, Button, Buttontext } from './styles'
import { CellPhoneImg } from "../../assets";

export const Contato: React.FC = () => {
    return (
        <Contatodiv id = "contato">
            <Titlediv>
                <Title>Contato</Title>
            </Titlediv>
            <Textdiv>
                <Text>Veja como a Colisio pode transformar o seu jeito de fazer marketing!</Text>
            </Textdiv>
            <Buttondiv>
                <Link href='#contato'>
                    <Button>
                        <Buttontext>Fale com um analista</Buttontext>
                    </Button>
                </Link>
            </Buttondiv>
        </Contatodiv>
    );
}