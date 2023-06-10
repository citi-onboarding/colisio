import React from "react";
import { Processdiv, Bodydiv, Titlediv, Title, Title1, Text, Block, Blocks } from './styles'

export const Process: React.FC = () => {
    return (
        <Processdiv>
            <Titlediv>
                <Title>Processo</Title>
            </Titlediv>
            <Bodydiv>
                <Blocks>
                    <Block>
                        <Title1>ProcessoA</Title1>
                        <Text>lorem</Text>
                    </Block>
                    <Block>
                        <Title1>ProcessoB</Title1>
                        <Text>lorem</Text>
                    </Block>
                    <Block>
                        <Title1>ProcessoC</Title1>
                        <Text>lorem</Text>
                    </Block>
                    <Block>
                        <Title1>ProcessoD</Title1>
                        <Text>lorem</Text>
                    </Block>
                    <Block>
                        <Title1>ProcessoE</Title1>
                        <Text>lorem</Text>
                    </Block>
                </Blocks>
            </Bodydiv>
        </Processdiv >
    )
}