import React from "react";
import { Contatodiv, Titlediv, Title, Textdiv, Text, Buttondiv, Link, Button, Buttontext } from './styles'
import { CellPhoneImg } from "../../assets";

export const Contato: React.FC = () => {
    return (
        <Contatodiv>
            <Titlediv>
                <Title>Contato</Title>
            </Titlediv>
            <Textdiv>
                <Text>Veja como a</Text>
                <Text>Colisio pode</Text>
                <Text>transformar o</Text>
                <Text>seu jeito de</Text>
                <Text>fazer marketing!</Text>
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