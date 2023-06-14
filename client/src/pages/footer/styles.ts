import styled from 'styled-components';

export const Rodape = styled.footer`
    display: flex;
    width: 100%;
    height: 360px;
    left: 0px;
    right: 0px;
    margin-top: 5224px;
    background: linear-gradient(180deg, #303030 0%, #2D2D2D 28.65%, #242424 100%);
    align-items: center;
    gap: 400px;

`;
export const Conteudo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 200px;

`;


export const Logo = styled.image`
    padding-left: 8%;
    width: 400px;
    height: 91px;
`;

export const Texto_Endereco = styled.div`
    display: flex;
    flex-direction: column;

    gap: 20px;
`;
export const Endereco = styled.div`
    width: auto;
    height: 19px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 19px;

    color: #FEFEFE;
`;

export const Dados_Endereco = styled.div`

    width: auto;
    height: 66px;

    font-family: 'Open Sans';
    font-weight: lighter;
    font-style: normal;
    font-size: 10px;
    line-height: 24px;

    color: #D3D3D3;
`;

export const Texto_Contato = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

`;


export const Contato = styled.div`

    width: auto;
    height: 19px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 19px;

    color: #FEFEFE;
`;

export const Dados_Contato = styled.div`

    width: auto;
    height: 66px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: lighter;
    font-size: 10px;
    line-height: 24px;

    color: #D3D3D3;
`;

export const Redes_Titulo = styled.div`

    width: auto;
    height: 19px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 19px;

    color: #FEFEFE;
`;

export const Redes_Container = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
`;

export const Icones = styled.div`
    padding-left: 40%;
`;
